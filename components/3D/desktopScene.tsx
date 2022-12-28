import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import { gsap } from "gsap";

import { SectionWrapper, HotSpot } from "./style";

const Mobile3D = () => {
  const boxRef = useRef<any>();
  const materials = useLoader(MTLLoader, "/3D/SamHeadScan.mtl");
  const obj = useLoader(OBJLoader, "/3D/SamHeadScan.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame(() => {
    boxRef.current.rotation.y = 3.6;
    boxRef.current.rotation.x = 0.3;
    boxRef.current.position.y = -0.45;
    boxRef.current.position.x = 0.05;
  });

  return <primitive ref={boxRef} object={obj} scale={1.5} />;
};

const DesktopScene = () => {
  const [htmlHidden, setHtmlHidden] = useState();
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);

  const onMouseEnter = (element: any) => {
    ref.current?.classList.add("is-active");
    // Get X-coordinate for the left button edge
    const buttonPosX = element.currentTarget.getBoundingClientRect().left;
    const buttonPosY = element.currentTarget.getBoundingClientRect().top;

    // Get position of the mouse inside element from left edge
    // (current mouse X position - button x coordinate)
    const pageX = element.clientX;
    const pageY = element.clientY;

    const xPosOfMouse = pageX - buttonPosX;
    const yPosOfMouse = pageY - buttonPosY;

    // Get position of mouse relative to button center
    // Mouse position inside element - button width / 2
    // To get positive or negative movement
    const xPosOfMouseInsideButton =
      xPosOfMouse - element.currentTarget.offsetWidth / 2;
    const yPosOfMouseInsideButton =
      yPosOfMouse - element.currentTarget.offsetHeight / 2;

    // Button text divider to increase or decrease text path
    const animationDivider = 9;
    const animationDividerText = 1.5;

    const timeline = gsap.timeline();

    // Animate button text positive or negative from center
    timeline.to([ref.current?.querySelector("span")], {
      duration: 1,
      x: xPosOfMouseInsideButton / animationDivider,
      y: yPosOfMouseInsideButton / animationDivider,
      ease: "power3.out",
    });

    // gsap.to([lineRef.current], {
    //   alpha: 1,
    //   duration: 0.4,
    //   onComplete: () => {},
    // });

    // if (this.innerText.length > 0) {
    timeline.to([ref.current?.querySelector(".js-hotspot-text")], {
      duartion: 1,
      x: xPosOfMouseInsideButton / animationDividerText / 10,
      y: yPosOfMouseInsideButton / animationDividerText / 10,
      ease: "power3.out",
    });
    // }
  };

  const onMouseLeave = () => {
    ref.current?.classList.remove("is-active");
    const timeline = gsap.timeline();

    // Animate button text reset to initial position (center)
    timeline.to([ref.current?.querySelector("span")], {
      duration: 0.3,
      x: -0.18,
      y: 0,
      ease: "power3.out",
    });

    timeline.to([ref.current?.querySelector(".js-hotspot-text")], {
      duration: 1,
      x: 0,
      y: 0,
      ease: "power3.out",
    });
  };

  return (
    <SectionWrapper>
      <Canvas style={{ height: "100vh" }} camera={{ zoom: 10 }}>
        <PerformanceMonitor>
          <Suspense fallback={null}>
            <Html
              position={[-0.1, 0.1, 0.1]}
              // as="div"
              wrapperClass="c-hotspot-image__hotspots js-hotspot-container"
              // sprite
              // distanceFactor={5}
              zIndexRange={[100, 0]}
              // occlude
              // onOcclude={setHtmlHidden}
              style={
                {
                  // transition: "all 0.5s",
                  // opacity: htmlHidden ? 0 : 1,
                  // transform: `scale(${htmlHidden ? 0.5 : 1})`,
                }
              }
            >
              <HotSpot
                className="c-hotspot-image__hotspots js-hotspot-container"
                ref={ref}
              >
                <div className="c-hotspot c-hotspot--1 c-hotspot--top js-hotspot">
                  <span className="c-hotspot__circle c-hotspot__circle js-link js-hotspot-circle">
                    <i
                      className="c-hotspot__circle-inner"
                      onMouseMove={(e) => onMouseEnter(e)}
                      onMouseLeave={() => onMouseLeave()}
                    ></i>
                    <span ref={lineRef} className="line"></span>
                  </span>

                  <div className="c-hotspot__text js-hotspot-text">
                    <article>
                      <h4 className="u-a1 js-header-title">
                        Thinking about users
                      </h4>
                      <p className="u-b2">
                        Building intuitive design systems that integrate with
                        the user experience to produce innovative products, apps
                        and websites.
                      </p>
                    </article>
                  </div>
                </div>
              </HotSpot>
            </Html>
            <Mobile3D />
            {/* <OrbitControls maxDistance={0.6} minDistance={0.6} /> */}
            <ambientLight intensity={1} />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </SectionWrapper>
  );
};

export default DesktopScene;
