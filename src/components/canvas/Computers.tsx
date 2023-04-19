import { useGLTF } from "@react-three/drei"

interface Props {
  isMobile: boolean
}
const Computers = ({ isMobile }: Props) => {
  const computer = useGLTF("/assets/apple_desktop/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={500}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        // scale={isMobile ? 0.7 : 1}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        scale={2.5}
        position={[0, -3.5, 0]}
        // rotation={[-0.01, -0.2, -0.1]}
        rotation={[0, 2, 0]}
      />
    </mesh>
  )
}

export default Computers
