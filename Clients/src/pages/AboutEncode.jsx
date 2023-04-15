import React from "react";
import "../assets/CSS/AboutEncode.css";
import { useSpring, useScroll, animated } from 'react-spring';

const AboutEncode = () => {

  const { scrollY } = useScroll();
  const styles1 = useSpring({
    opacity: scrollY.to(y => (y > 500 ? 1 : 0)),
    transform: scrollY.to(y => (y > 500 ? 'translateY(0)' : 'translateY(20px)')),
  });
  const styles2 = useSpring({
    background: scrollY.to(y => (y > 500 ? 'purple' : 'yellow')),
    color: scrollY.to(y => (y > 500 ? '#fff' : '#000')),
  });
  const backgroundColor = useSpring({
    background: scrollY.to(y => (y > 500 ? '#f1f1f1' : '#0c001a')),
  });

  return (
    <animated.div className="about-encode" style={backgroundColor}>
      <div
        className="about-encode-section"
        initial="hidden"
        animate="visible"
      >
        <animated.div className="left-section" style={styles1}>
          <h1>Explore Encode Community</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            <br /> magni nostrum. Lorem ipsum dolor sit amet. <br /> quisquam!
            Eveniet voluptatibus.
          </p>
        </animated.div>
        <animated.div className="right-section" style={styles2}>
          <section className="list-items">
            <h1

              initial="hidden"
              animate="visible"
            >
              Lorem ipsum dolor sit.
            </h1>
            <ul
    
              initial="hidden"
              animate="visible"
            >
              <li  initial="hidden" animate="visible">
                Lorem ipsum dolor sit amet.
              </li>
              <li  initial="hidden" animate="visible">
                Lorem ipsum dolor sit.
              </li>
              <li initial="hidden" animate="visible">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </section>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default AboutEncode;
