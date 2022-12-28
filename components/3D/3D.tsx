import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import * as THREE from "three";
import { useLoader, Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import { gsap } from "gsap";

import MobileScene from "./mobileScene";

import { SectionWrapper, HotSpot } from "./style";
import { Camera, Object3D } from "three";
import DesktopScene from "./desktopScene";

const Scene = () => {
  const boxRef = useRef<any>();
  const { viewport } = useThree();
  const materials = useLoader(MTLLoader, "/3D/SamHeadScan.mtl");
  const obj = useLoader(OBJLoader, "/3D/SamHeadScan.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  // console.log("viewport.width", viewport.width);

  // desktop
  // let scale = 1.5
  // boxRef.current.rotation.y = 3.6;
  // boxRef.current.rotation.x = 0.3;
  // boxRef.current.position.y = -0.5;
  // boxRef.current.position.x = 0.1;

  // mobile
  let scale = 1.5;

  // if (viewport.width <= 5.754952409842203) {
  //   scale = 1;
  // }

  useFrame(() => {
    boxRef.current.rotation.y = 3.6;
    boxRef.current.rotation.x = 0.3;
    boxRef.current.position.y = -0.5;
    boxRef.current.position.x = 0.05;
  });

  return <primitive ref={boxRef} object={obj} scale={scale} />;
};

const ThreeDee = () => {
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

    // console.log("xPosOfMouseInsideButton", xPosOfMouseInsideButton);

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

  return width <= 768 ? <MobileScene /> : <DesktopScene />;
};

export default ThreeDee;
