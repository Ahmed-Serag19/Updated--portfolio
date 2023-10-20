import { motion, useScroll, useTransform } from 'framer-motion';
import './parallax.scss';
import { useRef } from 'react';

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === 'about'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'about' ? 'Who Am I?' : 'What I Did?'}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === 'about' ? '/planets.png' : '/sun.png'
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yText }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
