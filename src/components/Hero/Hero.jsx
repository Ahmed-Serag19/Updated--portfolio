import { motion } from 'framer-motion';
import './hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Ahmed Mohamed</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer React.js
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <motion.button variants={textVariants}>
                See the Latest Projects
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>
                Contact me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt="scroll down image"
            animate="scrollButton"
          />
        </motion.div>
        <div className="image-container">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
