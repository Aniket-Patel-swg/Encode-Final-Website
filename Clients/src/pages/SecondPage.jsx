// This is working code
// import React, { useState, useEffect, useCallback, useFrame } from "react";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";
// import '../assets/CSS/SecondPage.css';

// function GLBModel({ url, onModelLoad, color }) {
//   const gltf = useLoader(GLTFLoader, url);
//   const model = gltf.scene;

//   // Set the color of the material
//   useEffect(() => {
//     model.traverse((child) => {
//       if (child.isMesh) {
//         child.material.color.set(color);
//       }
//     });
//   }, [color, model]);

//   // Call the onModelLoad callback with the model object once it has loaded
//   useEffect(() => {
//     if (onModelLoad) {
//       onModelLoad(model);
//     }
//   }, [model, onModelLoad]);

//   return <primitive object={model} />;
// }

// const Secondpage = () => {
//   const [model, setModel] = useState(null);
//   const [position, setPosition] = useState([0, 0, 0]);
//   const [rotationAngle, setRotationAngle] = useState(0);

//   const handleModelLoad = useCallback((model) => {
//     setModel(model);
//   }, []);

//   const handleWheel = useCallback((e) => {
//     setPosition(([x, y, z]) => [x, y, z + e.deltaZ * 0.1]);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel);
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [handleWheel]);

//   return (
//     <>
//       <div className="hero-container">
//         <div
//           style={{ width: "50%", height: "100vh", float: "left" }}
//           className="logo-container"
//         >
//           <Canvas
// style={{ width: "100%", height: "100%" }}
// camera={{ position: [-30, 90, 55.0] }}
//           >
// <ambientLight intensity={0.4} />
// <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} />
// <pointLight position={[10, 10, 10]} />
//             {model && (
//               <mesh
//                 geometry={model.children[0].geometry}
//                 material={model.children[0].material}
//                 position={position}
//                 rotation={[rotationAngle, rotationAngle, 0]}
//                 // useFrame hook to update rotation
//                 // onBeforeRender={(state, delta) => {
//                 //   setRotationAngle((angle) => angle + delta * 0.001);
//                 // }}
//               />
//             )}

//             <GLBModel
//               url="/Encode.glb"
//               onModelLoad={handleModelLoad}
//               color="#32a852"
//             />
//           </Canvas>
//         </div>
//         <div className="intro-text-container">check text</div>
//       </div>
//     </>
//   );
// };

// export default Secondpage;

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "../assets/CSS/SecondPage.css";

function Model(props) {
  const { scene } = useGLTF("./Encode.glb");

  // Traverse through the scene and set the color of each mesh to green
  scene.traverse((child) => {
    if (child.isMesh) {
      // child.material.color.set("#32a8");
    }
  });

  return <primitive object={scene} scale={0.01} {...props} />;
}

const SecondPage = () => {
  return (
    <>
      <div className="hero-container">
        <div
          className="logo-container"
          style={{ width: "65%", height: "100vh", float: "left" }}
        >
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fov: 55, position: [-30, 90, 55.0] }}
            style={{ postition: "absolute", width: "65%", height: "85vh" }}
            background="#000000" // set background color to black
          >
            <color attach="background" args={["#3333"]} />
            <PresentationControls
              speed={0.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage remove={"environment"} environment={null}>
                isMesh
                <Model scale={0.01} color="#f1f1f1" />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
        <div className="hero-text-container">
          <div className="text">
            <p>
              Explore <br /> Encode
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
