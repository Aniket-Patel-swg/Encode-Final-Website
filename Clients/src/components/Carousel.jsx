// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   {
//     id: 1,
//     src: "./image1.jpg",
//     title: "Image 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     id: 2,
//     src: "./Image2.jpg",
//     title: "Image 2",
//     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
//   {
//     id: 3,
//     src: "./image3.jpg",
//     title: "Image 3",
//     description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//   }
// ];

// const VerticalCarousel = () => {
//   const [activeImage, setActiveImage] = useState(0);

//   const handleNextImage = () => {
//     setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
//   };

//   const handlePrevImage = () => {
//     setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
//   };

//   return (
//     <div className="vertical-carousel">
//       <button onClick={handlePrevImage}>Prev</button>
//       <AnimatePresence initial={false} >
//         <motion.img
//           key={activeImage}
//           src={images[activeImage].src}
//           alt={images[activeImage].title}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           transition={{ duration: 0.5 }}
//         />
//       </AnimatePresence>
//       <button onClick={handleNextImage}>Next</button>
//       <h2>{images[activeImage].title}</h2>
//       <p>{images[activeImage].description}</p>
//     </div>
//   );
// };

// export default VerticalCarousel;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../assets/CSS/VerticalCarousel.css';

const images = [
  {
    id: 1,
    src: "./image1.jpg",
    title: "Image 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    src: "./Image2.jpg",
    title: "Image 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    src: "./image3.jpg",
    title: "Image 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const VerticalCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleNextImage = () => {
    setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
  };

  const handlePrevImage = () => {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
  };

  return (
    <div className="vertical-carousel">
      <div className="carousel-image-container">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeImage}
            src={images[activeImage].src}
            alt={images[activeImage].title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="carousel-image"
          />
        </AnimatePresence>
        <div className="carousel-text">
          <h2>{images[activeImage].title}</h2>
          <p>{images[activeImage].description}</p>
        </div>
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevImage}>Prev</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};
export default VerticalCarousel;