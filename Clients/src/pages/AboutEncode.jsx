import React from "react";
import { motion } from "framer-motion";
import "../assets/CSS/AboutEncode.css";

const AboutEncode = () => {
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div className="about-encode">
      <motion.div
        className="about-encode-section"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="left-section">
          <h1>Explore Encode Community</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            <br /> magni nostrum. Lorem ipsum dolor sit amet. <br /> quisquam!
            Eveniet voluptatibus.
          </p>
        </div>
        <div className="right-section">
          <motion.section className="list-items">
            <motion.h1
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              Lorem ipsum dolor sit.
            </motion.h1>
            <motion.ul
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={sectionVariants} initial="hidden" animate="visible">
                Lorem ipsum dolor sit amet.
              </motion.li>
              <motion.li variants={sectionVariants} initial="hidden" animate="visible">
                Lorem ipsum dolor sit.
              </motion.li>
              <motion.li variants={sectionVariants} initial="hidden" animate="visible">
                Lorem ipsum dolor sit amet.
              </motion.li>
            </motion.ul>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutEncode;
