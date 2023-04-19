import React, { Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import Loader from "../Loader"
import Computers from "./Computers"

const ComputersCanvas = () => {
  return (
    <div className="h-[500px] xs:h-[500px] w-[300px] xs:w-[450px] sm:w-[550px] cursor-grab">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default ComputersCanvas
