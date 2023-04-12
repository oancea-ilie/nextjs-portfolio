import { useGLTF } from "@react-three/drei"

const Earth = () => {
  const earth = useGLTF("/assets/planet/scene.gltf")

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  )
}

export default Earth
