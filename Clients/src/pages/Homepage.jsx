import React, { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useLoader, useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../assets/CSS/HomePage.css";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";


const HomePage = () => {
  const springAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: 2000 },
  });
  

  const GLTFModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => (ref.current.rotation.y += 0.003));
    return (
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? scale * 0.03 : scale * 0.025}
        position={position}
        onMouseOver={(e) => setHovered(true)}
        onMouseOut={(e) => setHovered(false)}
    
      />
    );
  };
  const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    return (
      <Suspense>
        <GLTFModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    );
  };
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 725,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="Homepage-container">
        <section className="hero-text-section">
          <div className="encode-text">
            <motion.h1 initial={{opacity:0, x: -100}}  animate={{  opacity :1 ,x: 0 }} transition={{ delay: 0.5 }}>
              Encode
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              More than just <br />
              <strong> Technical </strong>
              club
            </motion.h2>
          </div>
          <div className="encode-intro-text">
            <motion.p initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1 , y: 0}} transition={{ delay: 1 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fuga dolore eum. Lorem ipsum dolor sit amet.
            </motion.p>
          </div>
          <div className="t-shirt-button">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              onClick={handleClick}
            >
              <a href="">Explore Something New</a>
            </motion.button>
          </div>
        </section>
        <section className="3d-model-section" style={springAnimation}>
          <animated.div className="canvas-wrapper" style={springAnimation}>
            <Canvas camera={{ position: [10, 25, 10] }}>
              <OrbitControls />
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 10]} />  
              <ModelViewer modelPath="./earthquakes.glb" />
            </Canvas>
          </animated.div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
