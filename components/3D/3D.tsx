import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";

const Scene = () => {
  const boxRef = useRef<any>();
  const materials = useLoader(MTLLoader, "/3D/textured.mtl");
  const obj = useLoader(OBJLoader, "/3D/textured.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame(() => {
    boxRef.current.rotation.y = 3.2;
    boxRef.current.rotation.x = 0.3;
  });

  console.log(obj);

  return (
    <primitive ref={boxRef} object={obj} scale={1} rotation={[0, 50, 0]} />
  );
};

const ThreeDee = () => {
  return (
    <section>
      <Canvas style={{ height: "100vh" }}>
        <PerformanceMonitor>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls maxDistance={1} minDistance={1} maxPolarAngle={2} />
            <ambientLight intensity={1} />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </section>
  );
};

export default ThreeDee;
