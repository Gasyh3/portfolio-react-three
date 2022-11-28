import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  Text3D,
  OrbitControls,
} from "@react-three/drei";

export default function LogoKevin() {
  return (
    <div style={{ width: "70vw", height: "50vh" }}>
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Scene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
    </div>
  );
}

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {`Kevin\nWebsite`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}
