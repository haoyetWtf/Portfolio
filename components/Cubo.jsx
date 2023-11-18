import React from 'react';
import { Dodecahedron, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Box() {
	return (
		<mesh>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color='0x101010' />
		</mesh>
	);
}

export const Cubo = ({ isOnBanner }) => {
	const myMesh = React.useRef();

	return (
		<div className={`absolute ${isOnBanner ? 'onBanner' : 'offBanner'}`}>
			<Canvas>
				<ambientLight intensity={0.2} />
				<spotLight position={[10, 15, 10]} angle={0.3} />
				<OrbitControls autoRotate enableZoom={false} autoRotateSpeed={0.5} />

				{/* <Dodecahedron args={[1, 1, 1]} radius={0.05} smoothness={4}>
					<meshPhongMaterial color='#f3f3f3' wireframe />
				</Dodecahedron> */}
				<Dodecahedron ref={myMesh} args={[1, 1, 1]} radius={0.5} smoothness={100} scale={3}>
					<meshPhongMaterial color='#49b9f7' wireframe />
				</Dodecahedron>
			</Canvas>
		</div>
	);
};
