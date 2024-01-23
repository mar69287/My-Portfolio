import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { pointsOuter } from '../three-utility';
import { useRef } from 'react';
import '../three-utility'

const Background = () => {
  return (
    <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        // style={{background: '#1E2029', height: '100vh'}}
        style={{background: 'rgb(15, 15, 15)', height: '100vh'}}
      >
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
          {/* {pointsInner.map((point) => (
            <Point key={point.idx} position={point.position} color={point.color} />
          ))} */}
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
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };

export default Background