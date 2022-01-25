import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../App.css";

function Stars() {
  let group = useRef();
  let theta = 0;
  useFrame(() => {
    if (group.current) {
      // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
      const r = 0.3 * Math.sin(THREE.Math.degToRad((theta += 0.01)));
      // const s = Math.cos(THREE.Math.degToRad(theta * 2));
      group.current.rotation.set(r, r, r);
      // group.current.scale.set(s, s, s);
    }
  });

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(0.3, 8, 8);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white"),
    });
    const coords = new Array(20000).fill().map((i) => [Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000]);
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
    <div className="BackgroundStars">
      <Canvas
        vr
        style={{ background: "#0000" }}
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          // document.body.appendChild(WEBVR.createButton(gl));
        }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default BackgroundStars;
