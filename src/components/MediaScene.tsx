
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

interface MediaCategory {
  name: string;
  color: string;
  route: string;
  position: [number, number, number];
  imageUrl: string;
}

// Updated with CORS-friendly image URLs
const categories: MediaCategory[] = [
  {
    name: "Comics",
    color: "#FF4C4C",
    route: "/comics",
    position: [0, 1.5, 0],
    imageUrl: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?q=80&w=1000" // Comic placeholder
  },
  {
    name: "Anime",
    color: "#4C7AFF",
    route: "/anime",
    position: [1.5, 0, 0],
    imageUrl: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000" // Anime placeholder
  },
  {
    name: "Novels",
    color: "#FFB74C",
    route: "/novels",
    position: [0, -1.5, 0],
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000" // Book placeholder
  },
  {
    name: "Magazines",
    color: "#4CFFB7",
    route: "/magazines",
    position: [-1.5, 0, 0],
    imageUrl: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=1000" // Magazine placeholder
  },
  {
    name: "Cartoons",
    color: "#B74CFF",
    route: "/cartoons",
    position: [0, 0, 1.5],
    imageUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1000" // Cartoon placeholder
  }
];

function MediaItem({ category, index }: { category: MediaCategory; index: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const [textureError, setTextureError] = useState(false);
  
  // Fix for useTexture - it only accepts one or two arguments in the current version
  const texture = useTexture(category.imageUrl, (loadedTexture) => {
    // Success handler as a callback
    loadedTexture.minFilter = THREE.LinearFilter;
    loadedTexture.magFilter = THREE.LinearFilter;
    loadedTexture.generateMipmaps = false;
  });
  
  // Handle texture loading errors properly - using an effect instead of direct property assignment
  useEffect(() => {
    const handleError = () => {
      console.error(`Failed to load texture: ${category.imageUrl}`);
      setTextureError(true);
    };
    
    // Add event listener for error handling
    const textureSource = texture.source;
    if (textureSource.data instanceof HTMLImageElement) {
      textureSource.data.addEventListener('error', handleError);
      
      return () => {
        textureSource.data.removeEventListener('error', handleError);
      };
    }
  }, [texture, category.imageUrl]);
  
  // Animate the mesh
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    mesh.current.position.x = category.position[0];
    mesh.current.position.y = category.position[1] + Math.sin(time * 0.5 + index) * 0.1;
    mesh.current.position.z = category.position[2];
    
    mesh.current.rotation.x = Math.sin(time * 0.3 + index) * 0.1;
    mesh.current.rotation.y = time * 0.2 + index;
    
    // Scale up when hovered
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered ? 1.1 : 1,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered ? 1.1 : 1,
      0.1
    );
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      hovered ? 1.1 : 1,
      0.1
    );
  });

  return (
    <group>
      <mesh
        ref={mesh}
        onClick={() => navigate(category.route)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        {textureError ? (
          <meshStandardMaterial 
            color={category.color} 
            emissive={new THREE.Color(hovered ? category.color : 'black')}
            emissiveIntensity={hovered ? 0.5 : 0}
          />
        ) : (
          <meshStandardMaterial 
            map={texture} 
            emissive={new THREE.Color(hovered ? category.color : 'black')}
            emissiveIntensity={hovered ? 0.5 : 0}
          />
        )}
      </mesh>
      <Text
        position={[
          category.position[0],
          category.position[1] - 0.8,
          category.position[2]
        ]}
        scale={[0.5, 0.5, 0.5]}
        color={category.color}
        anchorX="center"
        anchorY="middle"
        fontSize={0.5}
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
      >
        {category.name}
      </Text>
    </group>
  );
}

// Missing import for useEffect
import { useEffect } from 'react';

export function MediaScene() {
  return (
    <>
      {categories.map((category, i) => (
        <MediaItem key={category.name} category={category} index={i} />
      ))}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
    </>
  );
}
