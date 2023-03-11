import type { Vector3 } from '@react-three/fiber';

export interface HotSpotProps {
  title: string;
  text: string;
  position: Vector3 | undefined;
}
