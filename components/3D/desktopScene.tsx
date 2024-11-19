/* eslint-disable no-unused-vars */

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  MouseEvent,
  Suspense,
} from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useLoader, Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, PerformanceMonitor } from '@react-three/drei';
import { gsap } from 'gsap';

import HotSpot from 'components/HotSpot';
import THREE from 'three';
import { SectionWrapper } from './style';

const Mobile3D = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef<any>();
  const materials = useLoader(MTLLoader, '/3D/SamHeadScan.mtl');
  const obj = useLoader(OBJLoader, '/3D/SamHeadScan.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useLayoutEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);

  useFrame(() => {
    // boxRef.current.position.setPoints([0, 0, 0]);
    boxRef.current.rotation.y = 3.6;
    boxRef.current.rotation.x = 0.3;
    boxRef.current.position.y = -0.3;
    boxRef.current.position.x = 0.05;
    // boxRef.current.
    // const center = new THREE.Vector3();
    // boxRef.current.getCenter(center);
    // obj.position.sub(center);
  });

  return <primitive ref={boxRef} object={obj} />;
};

const DesktopScene = () => {
  const [width, setWidth] = useState(0);
  // const boxRef = useRef<any>();
  // const materials = useLoader(MTLLoader, "public/3D/SamHeadScan.mtl");
  // const obj = useLoader(OBJLoader, "public/3D/SamHeadScan.obj", (loader) => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });

  // useFrame(() => {
  //   boxRef.current.rotation.y = 3.6;
  //   boxRef.current.rotation.x = 0.3;
  //   boxRef.current.position.y = -0.45;
  //   boxRef.current.position.x = 0.05;
  // });

  useLayoutEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <SectionWrapper>
      <Canvas style={{ height: '100vh' }} camera={{ zoom: 10 }}>
        <PerformanceMonitor>
          <Suspense fallback={null}>
            <Mobile3D />
            {/* <Html
              position={[-0.1, 0.1, 0.1]}
              // as="div"
              wrapperClass="c-hotspot-image__hotspots js-hotspot-container"
              // sprite
              // distanceFactor={5}
              z-indexRange={[100, 0]}
              // occlude
              // onOcclude={setHtmlHidden}
              style={
                {
                  // transition: "all 0.5s",
                  // opacity: htmlHidden ? 0 : 1,
                  // transform: `scale(${htmlHidden ? 0.5 : 1})`,
                }
              }
            > */}
            <HotSpot
              position={[-0.1, 0.1, 0.1]}
              title="Thinking about users"
              text="Building intuitive design systems that integrate with
                the user experience to produce innovative products, apps
                and websites."
            />
            <HotSpot
              position={[0.05, -0.05, 0.3]}
              title="Thinking about users"
              text="Building intuitive design systems that integrate with
                the user experience to produce innovative products, apps
                and websites."
            />
            {/* </Html> */}
            {/* <OrbitControls maxDistance={0.6} minDistance={0.6} /> */}
            <ambientLight intensity={1} />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </SectionWrapper>
  );
};

export default DesktopScene;
