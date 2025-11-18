import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!isSupported) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Variables for cleanup
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
        // 1. Manual Context Check
        // We try to get the context ourselves first. If this fails or returns null,
        // we know WebGL is not working, so we abort before Three.js throws a hard error.
        const contextAttributes = { alpha: true, antialias: true };
        const gl = canvas.getContext('webgl', contextAttributes) || 
                   canvas.getContext('experimental-webgl', contextAttributes);

        if (!gl) {
          throw new Error("WebGL context not available");
        }

        // 2. Initialize Renderer with existing context
        renderer = new THREE.WebGLRenderer({ 
          canvas: canvas, 
          context: gl as WebGLRenderingContext,
          alpha: true, 
          antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 3. Setup Scene
        scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Main Sphere
        geometry = new THREE.IcosahedronGeometry(2, 1);
        material = new THREE.MeshBasicMaterial({ 
          color: 0x1A66BF, 
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Inner Core
        coreGeo = new THREE.IcosahedronGeometry(1, 0);
        coreMat = new THREE.MeshBasicMaterial({
          color: 0xFCE300,
          wireframe: true,
          transparent: true,
          opacity: 0.1
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Particles
        particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 700; 
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 15; 
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesMaterial = new THREE.PointsMaterial({
          size: 0.02,
          color: 0x7A869A,
          transparent: true,
          opacity: 0.8,
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Animation
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          
          if (sphere) {
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.002;
          }
          if (core) {
            core.rotation.x -= 0.002;
            core.rotation.y -= 0.001;
          }
          if (particlesMesh) {
            particlesMesh.rotation.y += 0.0005;
          }
          
          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        };
        animate();

        // Resize Handler
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
    return <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tech-blue/20 via-transparent to-transparent" />;
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default ThreeScene;