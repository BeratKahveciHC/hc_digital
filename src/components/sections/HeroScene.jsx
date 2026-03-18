import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Floating küpler
function FloatingCubes() {
  const cubes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 2,
      ],
      scale: Math.random() * 0.3 + 0.08,
      speed: Math.random() * 0.4 + 0.2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      color: Math.random() > 0.6 ? '#28bd86' : '#1b5fc1',
      opacity: Math.random() * 0.4 + 0.15,
    }))
  }, [])

  return (
    <>
      {cubes.map((cube) => (
        <Float
          key={cube.id}
          speed={cube.speed}
          rotationIntensity={0.4}
          floatIntensity={0.8}
        >
          <mesh position={cube.position} scale={cube.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={cube.color}
              transparent
              opacity={cube.opacity}
              wireframe={Math.random() > 0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// Parçacık noktalar
function Particles() {
  const ref = useRef()
  const count = 220

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const primaryColor = new THREE.Color('#1b5fc1')
    const accentColor = new THREE.Color('#28bd86')
    const whiteColor = new THREE.Color('#ffffff')

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2

      const r = Math.random()
      const c = r > 0.7 ? accentColor : r > 0.4 ? primaryColor : whiteColor
      colors[i * 3 + 0] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.018
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.06
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

// Bağlantı çizgileri (network)
function NetworkLines() {
  const ref = useRef()

  const geometry = useMemo(() => {
    const points = []
    const nodeCount = 14
    const nodes = Array.from({ length: nodeCount }, () => new THREE.Vector3(
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 9,
      (Math.random() - 0.5) * 5 - 1
    ))

    // Yakın nodeları birbirine bağla
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 5.5) {
          points.push(nodes[i], nodes[j])
        }
      }
    }

    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.012
    }
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#1b5fc1" transparent opacity={0.18} />
    </lineSegments>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#1b5fc1" />
      <pointLight position={[-5, -3, 2]} intensity={0.5} color="#28bd86" />

      <Particles />
      <NetworkLines />
      <FloatingCubes />
    </Canvas>
  )
}
