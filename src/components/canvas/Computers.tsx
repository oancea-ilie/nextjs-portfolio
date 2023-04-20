import useResize from "@/utils/useResize"
import { useGLTF } from "@react-three/drei"

const Computers = () => {
  const computer = useGLTF("/assets/apple_desktop/scene.gltf")

  const { width } = useResize()
  const under1280 = width < 1280
  const under450 = width < 600

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
        scale={under450 ? 1.7 : 2}
        position={under1280 ? [0, -2.5, 0] : [0, -3, 0]}
        // rotation={[-0.01, -0.2, -0.1]}
        rotation={[0, 1.35, 0]}
      />
    </mesh>
  )
}

export default Computers
