import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Icosahedron } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';

// Animated rotating cube component
const RotatingCube = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const animate = () => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <mesh ref={meshRef} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial
        color="#6366f1"
        emissive="#4f46e5"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
};

// Floating icosahedron
const FloatingIcosahedron = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    let time = 0;
    const animate = () => {
      time += 0.002;
      mesh.position.y = Math.sin(time) * 0.5;
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.008;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <Icosahedron args={[1, 4]} />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#9333ea"
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
};

// Background particles
const Particles = () => {
  const meshRef = useRef(null);
  const particleCount = 100;

  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: '#a78bfa',
      size: 0.1,
      sizeAttenuation: true,
      opacity: 0.6,
      transparent: true,
    });

    const points = new THREE.Points(geometry, material);
    if (meshRef.current) {
      meshRef.current.add(points);
    }

    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <group ref={meshRef} />;
};

const ThreeDHero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0">
        <PerspectiveCamera position={[0, 0, 5]} fov={75} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#a855f7" />

        {/* 3D Elements */}
        <RotatingCube />
        <FloatingIcosahedron />
        <Particles />

        {/* Controls for interactivity (disabled by default for better mobile experience) */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6">
        <motion.div 
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle intro text */}
          <motion.p 
            className="text-sm md:text-base text-cyan-300 font-semibold mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
              Mrinal Sharma
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-200 font-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
Software Engineer | Full Stack & AI (Next.js 16, TypeScript, AWS, Kubernetes) | Building Scalable SaaS & GenAI Solutions | MS CS @ Notre Dame          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a 
              href="#about" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a 
              href="https://github.com/slayer1371"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 rounded-full backdrop-blur-sm border border-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/mrinal-sharma-nd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 rounded-full backdrop-blur-sm border border-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="flex flex-col items-center cursor-pointer">
          <span className="text-sm mb-3 font-medium">Scroll Down</span>
          <FaChevronDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </div>
  );
};

export default ThreeDHero;
