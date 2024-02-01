import { pointsOuter } from '../three-utility';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';

const Background = () => {
  return (
        <Canvas
          camera={{
            position: [10, -7.5, -5],
          }}
          style={{background: '#000', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%', zIndex: '0'}}        >
          <OrbitControls maxDistance={20} minDistance={10}/>
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0}/>
          <PointCircle />
        </Canvas>
  )
}
const PointCircle = () => {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <group ref={ref}>
        {pointsOuter.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))}
    </ group>
  )
}

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.03, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.9}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Background