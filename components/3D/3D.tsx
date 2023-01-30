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

const ThreeDee = () => {
  const [htmlHidden, setHtmlHidden] = useState();
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef(null);

  return <DesktopScene />;
};

export default ThreeDee;
