import React from 'react';
import logo from './logo.svg';
import { Canvas } from '@react-three/fiber';
import { Box, Plane } from "@react-three/drei";

import { Physics, Triplet, useBox, usePlane } from "@react-three/cannon";

import "./styles.css"

type Props = {
  position?: Triplet
}

const PhyBox = (props: Props) => {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, position: props.position }));

  return (
    <Box
      args={[1, 1, 1]}
      ref={ref}
      onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])} key={undefined} position={undefined} material={undefined} userData={undefined} attach={undefined} onUpdate={undefined} up={undefined} scale={undefined} rotation={undefined} matrix={undefined} quaternion={undefined} layers={undefined} dispose={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerMissed={undefined} onPointerCancel={undefined} onWheel={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} geometry={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined}    >
      <meshNormalMaterial />
    </Box>
  );
}

export default PhyBox;
