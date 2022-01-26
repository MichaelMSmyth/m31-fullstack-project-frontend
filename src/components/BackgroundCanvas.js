import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styled from "@emotion/styled";
import "../App.css";

const BackgroundStarsStyle = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  overflow: hidden;
  z-index: -3;
`;

function Stars() {
  let group = useRef();
  let theta = 0;
  useFrame(() => {
    if (group.current) {
      const r = 0.4 * Math.sin(THREE.Math.degToRad((theta += 0.01)));
      // const s = Math.cos(THREE.Math.degToRad(theta * 2));
      group.current.rotation.set(r, r, r);
      group.current.scale.set(1, 1, 1);
    }
  });

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(0.2, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white"),
    });
    const coords = new Array(8000).fill().map((i) => [Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 500 - 200]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

const BackgroundStars = () => {
  return (
    <BackgroundStarsStyle>
      <Canvas
        vr
        style={{ background: "#0000" }}
        camera={{
          position: [0, 0, -10],
        }}
        onCreated={({ gl }) => {
          // document.body.appendChild(WEBVR.createButton(gl));
        }}>
        <ambientLight intensity={1} />
        <Stars />
      </Canvas>
    </BackgroundStarsStyle>
  );
};

export default BackgroundStars;
