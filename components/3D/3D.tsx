import { useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, CubeCamera } from "@react-three/drei";
import { Suspense } from "react";
import { PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import { styled, keyframes } from "../../theme";

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
    boxRef.current.position.set(0, -0.2, 0.2);
  });

  console.log(obj);

  return <primitive ref={boxRef} object={obj} scale={1} rotation={[0, 0, 0]} />;
};

const pulse = keyframes({
  "0%": {
    boxShadow: "0 0 0 0 rgba(#d8202b, 0.4)",
  },
  "70%": {
    boxShadow: "0 0 0 20px rgba(#d8202b, 0)",
  },
  "100%": {
    boxShadow: "0 0 0 0 rgba(#d8202b, 0)",
  },
});

const SectionWrapper = styled("section", {
  position: "relative",
  zIndex: "-20",
  // "& .circle-test": {
  //   width: "10px",
  //   height: "10px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: "100px",
  //   border: "2px solid #d8202b",
  //   transition: "all /.3s ease-in-out",
  //   animation: `${pulse} 1.4s infinite`,
  // },
  "& .c-hotspot-image__hotspots": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 3,
  },

  "& .c-hotspot": {
    pointerEvents: "initial",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "16px",
    // height: "16px",
    top: "50%",
    left: "50%",
  },

  "& .c-hotspot__circle": {
    display: "inline-block",
    margin: "0 auto",
    width: "10px",
    height: "10px",
    position: "relative",

    "& .c-hotspot__circle-inner": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "2px solid #d8202b",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: " 100px",
      // border: " 2px solid $red",
      transition: "all 0.3s ease-in-out",
      animation: `${pulse} 1.4s infinite`,
    },
  },

  "& .c-hotspot__text": {
    pointerEvents: "none",
    display: "block",
    position: "absolute",
    left: 0,
    top: "100%",
    width: "290px",

    "& article": {
      transform: "translateY(-50%) translateX(25%)",
      padding: "20px 0",
    },
  },
});

const HotSpot = styled("div", {
  "&.c-hotspot-image__hotspots": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 3,
  },

  "& .c-hotspot": {
    pointerEvents: "initial",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "16px",
    // height: "16px",
    top: "50%",
    left: "50%",
  },

  "& .c-hotspot__circle": {
    display: "inline-block",
    margin: "0 auto",
    width: "10px",
    height: "10px",
    position: "relative",

    "& .c-hotspot__circle-inner": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "2px solid #d8202b",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: " 100px",
      // border: " 2px solid $red",
      transition: "all 0.3s ease-in-out",
      animation: `${pulse} 1.4s infinite`,
    },
  },

  "& .c-hotspot__text": {
    pointerEvents: "none",
    display: "block",
    position: "absolute",
    left: 0,
    top: "100%",
    width: "290px",

    "& article": {
      transform: "translateY(-50%) translateX(25%)",
      padding: "20px 0",
    },
  },
});

const ThreeDee = () => {
  const [htmlHidden, setHtmlHidden] = useState<boolean>(false);
  const [htmlHidden1, setHtmlHidden1] = useState<boolean>(false);
  const [htmlHidden2, setHtmlHidden2] = useState<boolean>(false);
  const [htmlHidden3, setHtmlHidden3] = useState<boolean>(false);

  return (
    <SectionWrapper>
      <Canvas style={{ height: "100vh" }}>
        <PerformanceMonitor>
          <Suspense fallback={null}>
            <Scene />
            <Html
              position={[0.05, 0.38, -0.04]}
              as="div"
              wrapperClass="c-hotspot-image__hotspots js-hotspot-container"
              // animations={pulse}
              sprite
              distanceFactor={5}
              zIndexRange={[100, 0]}

              // occlude
              // onOcclude={setHtmlHidden}
              // style={{
              //   transition: "all 0.5s",
              //   opacity: htmlHidden ? 0 : 1,
              //   transform: `scale(${htmlHidden ? 0.5 : 1})`,
              // }}
            >
              {/* <HotSpot className="c-hotspot-image__hotspots js-hotspot-container"> */}
              <div
                className="c-hotspot c-hotspot--1 c-hotspot--top js-hotspot"
                style={{ left: "22%", top: "32%" }}
              >
                <span className="c-hotspot__circle js-link js-hotspot-circle">
                  <i className="c-hotspot__circle-inner"></i>
                </span>

                <div className="c-hotspot__text js-hotspot-text">
                  <article>
                    <h4 className="u-a1 js-header-title">
                      It can be customized any way you like.
                    </h4>
                    <p className="u-b2">
                      Choose a case and pair any band in the Apple Watch Studio.
                    </p>
                  </article>
                </div>
              </div>
              {/* </HotSpot> */}
            </Html>
            {/* <Html
              position={[-0.04, 0.45, 0.1]}
              as="div"
              center
              transform
              sprite
              distanceFactor={5}
              zIndexRange={[100, 0]}
              occlude
              onOcclude={setHtmlHidden1}
              style={{
                transition: "all 0.5s",
                opacity: htmlHidden1 ? 0 : 1,
                transform: `scale(${htmlHidden1 ? 0.5 : 1})`,
              }}
            >
              <button type="button" className="circle" />
            </Html>
            <Html
              position={[0, 0.3, 0.11]}
              as="div"
              center
              transform
              sprite
              distanceFactor={6}
              zIndexRange={[100, 0]}
              occlude
              onOcclude={setHtmlHidden2}
              style={{
                transition: "all 0.5s",
                opacity: htmlHidden2 ? 0 : 1,
                transform: `scale(${htmlHidden2 ? 0.5 : 1})`,
              }}
            >
              <button type="button" className="circle" />
            </Html>
            <OrbitControls
              maxDistance={1}
              maxPolarAngle={1.5}
              minDistance={1}
              // maxPolarAngle={1.5}
              minAzimuthAngle={0.7}
            />
            <Html
              position={[0, 0.38, 0.13]}
              as="div"
              center
              transform
              sprite
              distanceFactor={6}
              zIndexRange={[100, 0]}
              occlude
              onOcclude={setHtmlHidden3}
              style={{
                transition: "all 0.5s",
                opacity: htmlHidden3 ? 0 : 1,
                transform: `scale(${htmlHidden3 ? 0.5 : 1})`,
              }}
            >
              <button type="button" className="circle" />
            </Html> */}
            <OrbitControls
              // maxDistance={0.6}
              maxPolarAngle={2}
              minDistance={0.6}
              // maxPolarAngle={1.5}
              // minAzimuthAngle={1}
              // position={[250, 100, 0]}
            />
            <ambientLight intensity={1} />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </SectionWrapper>
  );
};

export default ThreeDee;
