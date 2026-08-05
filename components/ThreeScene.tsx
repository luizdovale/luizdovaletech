import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!isSupported) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer | undefined;
    let animationId: number;
    let scene: THREE.Scene | undefined;
    let geometry: THREE.IcosahedronGeometry | undefined;
    let material: THREE.MeshBasicMaterial | undefined;
    let coreGeo: THREE.IcosahedronGeometry | undefined;
    let coreMat: THREE.MeshBasicMaterial | undefined;
    let particlesGeometry: THREE.BufferGeometry | undefined;
    let particlesMaterial: THREE.PointsMaterial | undefined;

    const init = () => {
      try {
        renderer = new THREE.WebGLRenderer({ 
          canvas: canvas, 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
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
          opacity: 0.08
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Núcleo Interno
        coreGeo = new THREE.IcosahedronGeometry(1.1, 0);
        coreMat = new THREE.MeshBasicMaterial({
          color: 0xFFFFFF,
          wireframe: true,
          transparent: true,
          opacity: 0.04
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Campo de Partículas Brancas
        particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 450; 
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 15; 
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesMaterial = new THREE.PointsMaterial({
          size: 0.018,
          color: 0xFFFFFF,
          transparent: true,
          opacity: 0.4,
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Loop de Animação Suave
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          
          if (sphere) {
            sphere.rotation.x += 0.0006;
            sphere.rotation.y += 0.001;
          }
          if (core) {
            core.rotation.x -= 0.001;
            core.rotation.y -= 0.0008;
          }
          if (particlesMesh) {
            particlesMesh.rotation.y += 0.0003;
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

        return () => {
          window.removeEventListener('resize', handleResize);
        };

      } catch (error) {
        console.warn("ThreeJS initialization error:", error);
        setIsSupported(false);
        return undefined;
      }
    };

    const cleanupResize = init();

    return () => {
      if (cleanupResize) cleanupResize();
      if (animationId) cancelAnimationFrame(animationId);
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (coreGeo) coreGeo.dispose();
      if (coreMat) coreMat.dispose();
      if (particlesGeometry) particlesGeometry.dispose();
      if (particlesMaterial) particlesMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, [isSupported]);

  if (!isSupported) {
    return <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />;
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-50"
    />
  );
};

export default ThreeScene;