import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Facilita ajustar o "personagem" 3D do Hero num único lugar.
const ASSEMBLY_MS = 1400; // duração da montagem inicial (partículas convergindo)
const PARTICLES_COUNT = 450;
const IDLE_OPACITY = 0.5; // opacidade do canvas em repouso (topo da página)
const DISSOLVE_OPACITY = 0.05; // opacidade quando o Hero já saiu de cena
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSupported, setIsSupported] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isSupported) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer | undefined;
    let animationId: number | undefined;
    let scene: THREE.Scene | undefined;
    let geometry: THREE.IcosahedronGeometry | undefined;
    let material: THREE.MeshBasicMaterial | undefined;
    let coreGeo: THREE.IcosahedronGeometry | undefined;
    let coreMat: THREE.MeshBasicMaterial | undefined;
    let particlesGeometry: THREE.BufferGeometry | undefined;
    let particlesMaterial: THREE.PointsMaterial | undefined;
    let cleanupExtras: (() => void) | undefined;

    const init = () => {
      try {
        renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Esfera Externa Monocromática
        geometry = new THREE.IcosahedronGeometry(2.2, 1);
        material = new THREE.MeshBasicMaterial({
          color: 0xFFFFFF,
          wireframe: true,
          transparent: true,
          opacity: prefersReducedMotion ? 0.08 : 0
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.scale.setScalar(prefersReducedMotion ? 1 : 0.85);
        scene.add(sphere);

        // Núcleo Interno
        coreGeo = new THREE.IcosahedronGeometry(1.1, 0);
        coreMat = new THREE.MeshBasicMaterial({
          color: 0xFFFFFF,
          wireframe: true,
          transparent: true,
          opacity: prefersReducedMotion ? 0.04 : 0
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.scale.setScalar(prefersReducedMotion ? 1 : 0.85);
        scene.add(core);

        // Campo de Partículas: cada uma nasce espalhada e "converge" até a posição final.
        const finalPositions = new Float32Array(PARTICLES_COUNT * 3);
        const startPositions = new Float32Array(PARTICLES_COUNT * 3);
        for (let i = 0; i < PARTICLES_COUNT * 3; i++) {
          const final = (Math.random() - 0.5) * 15;
          finalPositions[i] = final;
          startPositions[i] = prefersReducedMotion ? final : final * (1.6 + Math.random() * 0.8);
        }
        particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(startPositions.slice(), 3));
        particlesMaterial = new THREE.PointsMaterial({
          size: 0.018,
          color: 0xFFFFFF,
          transparent: true,
          opacity: prefersReducedMotion ? 0.4 : 0
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- Ponteiro: a cena olha discretamente para onde o mouse está ---
        const pointerTarget = { x: 0, y: 0 };
        const pointerCurrent = { x: 0, y: 0 };
        const handlePointerMove = (e: PointerEvent) => {
          pointerTarget.x = (e.clientX / window.innerWidth) * 2 - 1;
          pointerTarget.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        if (!prefersReducedMotion) {
          window.addEventListener('pointermove', handlePointerMove, { passive: true });
        }

        // --- Scroll: ao sair do Hero, a cena recua e se dissolve (a "transição 3D") ---
        let scrollTarget = 0;
        let scrollCurrent = 0;
        const handleScroll = () => {
          scrollTarget = Math.min(window.scrollY / window.innerHeight, 1);
        };
        if (!prefersReducedMotion) {
          window.addEventListener('scroll', handleScroll, { passive: true });
        }

        const startTime = performance.now();

        // Loop de Animação Suave
        const animate = () => {
          if (!prefersReducedMotion) {
            animationId = requestAnimationFrame(animate);
          }

          const elapsed = performance.now() - startTime;
          const assemblyT = prefersReducedMotion ? 1 : Math.min(elapsed / ASSEMBLY_MS, 1);
          const eased = easeOutCubic(assemblyT);

          if (!prefersReducedMotion && assemblyT < 1) {
            sphere.scale.setScalar(0.85 + 0.15 * eased);
            core.scale.setScalar(0.85 + 0.15 * eased);
            material!.opacity = 0.08 * eased;
            coreMat!.opacity = 0.04 * eased;
            particlesMaterial!.opacity = 0.4 * eased;

            const posAttr = particlesGeometry!.attributes.position as THREE.BufferAttribute;
            const arr = posAttr.array as Float32Array;
            for (let i = 0; i < arr.length; i++) {
              arr[i] = startPositions[i] + (finalPositions[i] - startPositions[i]) * eased;
            }
            posAttr.needsUpdate = true;
          }

          if (!prefersReducedMotion) {
            sphere.rotation.x += 0.0006;
            sphere.rotation.y += 0.001;
            core.rotation.x -= 0.001;
            core.rotation.y -= 0.0008;
            particlesMesh.rotation.y += 0.0003;

            // Parallax: a cena segue o ponteiro com um leve atraso (sensação "viva", não robótica).
            pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.05;
            pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.05;
            sphere.rotation.y += pointerCurrent.x * 0.0004;
            sphere.rotation.x += pointerCurrent.y * 0.0004;
            camera.position.x = pointerCurrent.x * 0.35;
            camera.position.y = -pointerCurrent.y * 0.22;
            camera.lookAt(0, 0, 0);

            // Dissolve: ao rolar para fora do Hero, a cena recua e desaparece suavemente.
            scrollCurrent += (scrollTarget - scrollCurrent) * 0.08;
            canvas.style.opacity = String(IDLE_OPACITY - (IDLE_OPACITY - DISSOLVE_OPACITY) * scrollCurrent);
            canvas.style.transform = `scale(${1 - 0.08 * scrollCurrent}) translateY(${-28 * scrollCurrent}px)`;
          }

          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        };
        animate();

        const handleResize = () => {
          if (!camera || !renderer) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        cleanupExtras = () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('pointermove', handlePointerMove);
          window.removeEventListener('scroll', handleScroll);
        };

        return cleanupExtras;

      } catch (error) {
        console.warn("ThreeJS initialization error:", error);
        setIsSupported(false);
        return undefined;
      }
    };

    init();

    return () => {
      if (cleanupExtras) cleanupExtras();
      if (animationId) cancelAnimationFrame(animationId);
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (coreGeo) coreGeo.dispose();
      if (coreMat) coreMat.dispose();
      if (particlesGeometry) particlesGeometry.dispose();
      if (particlesMaterial) particlesMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, [isSupported, prefersReducedMotion]);

  if (!isSupported) {
    return <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none will-change-[opacity,transform]"
      style={{ opacity: prefersReducedMotion ? 0.5 : 0 }}
    />
  );
};

export default ThreeScene;
