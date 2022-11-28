import { useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

// THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "/3D/text.mtl");
  const obj = useLoader(OBJLoader, "/3D/textured.obj", (loader) => {
    materials.preload();

    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={1} />;
};

const ThreeDee = () => {
  return (
    <section>
      <Canvas style={{ height: "100vh" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Scene />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default ThreeDee;
