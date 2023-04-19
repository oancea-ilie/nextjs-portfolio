import useResize from "@/utils/useResize"
import { useGLTF } from "@react-three/drei"

const Earth = () => {
  const earth = useGLTF("/assets/planet/scene.gltf")
  const { width } = useResize()

  const under500 = width < 500

  return (
    <primitive
      object={earth.scene}
      scale={under500 ? 3.5 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

export default Earth
