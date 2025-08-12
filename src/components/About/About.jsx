import { motion } from 'framer-motion';
import Skill from './Skill/Skill';
import './about.scss';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiOwasp } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiPowershell } from 'react-icons/si';
import Button from './Button/Button';

const variants = {
  titleInitial: {
    y: -100,
    opacity: 0,
  },
  anotherInitial: {
    x: 100,
    y: 50,
    opacity: 0,
  },
  anotherInitial2: {
    x: 200,
    y: 50,
    opacity: 0,
  },
  initial: {
    x: -100,
    y: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      whileInView="animate"
      // ref={ref}
      // animate={isInView && 'animate'}
    >
      <motion.div className="skills-set">
        <motion.h2
          variants={variants}
          initial="titleInitial"
          whileInView="animate"
        >
          Skill Set
        </motion.h2>
        <motion.div className="package">
          <motion.div
            className="front-end"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2>Frontend</motion.h2>
            <Skill name="Html" icon={<SiHtml5 />} color="#ED7D31" />
            <Skill name="Css" icon={<SiCss3 />} color="blue" />
            <Skill name="React" icon={<SiReact />} color="#08D9FF" />
            <Skill
              name="Tailwind"
              icon={<SiTailwindcss />}
              color="#3EBFF8"
            />
            <Skill
              name="Bootstrap"
              icon={<SiBootstrap />}
              color="#8A18FE"
            />
            <Skill name="Redux" icon={<SiRedux />} color="#7D50BC" />
            <Skill
              name="Next.js"
              icon={<SiNextdotjs />}
              color="#fff"
            />
          </motion.div>
          <motion.div
            className="cyber-sec"
            variants={variants}
            initial="anotherInitial"
            whileInView="animate"
          >
            <motion.h2>Cyber Security (Basics)</motion.h2>
            <Skill
              name="Python"
              icon={<SiPython />}
              color="#F7D24E"
            />{' '}
            <Skill name="Linux" icon={<SiLinux />} color="#DF9128" />{' '}
            <Skill
              name="Shell"
              icon={<SiPowershell />}
              color="#508CF6"
            />{' '}
            <Skill name="OWASP" icon={<SiOwasp />} color="#fff" />
          </motion.div>
          <motion.div
            className="back-end"
            variants={variants}
            initial="anotherInitial2"
            whileInView="animate"
          >
            <motion.h2>Backend (Familiar With)</motion.h2>
            <Skill
              name="Node.js"
              icon={<SiNodedotjs />}
              color="#509941"
            />
            <Skill
              name="Express.js"
              icon={<SiExpress />}
              color="#EFD81C"
            />
            <Skill
              name="MongoDb"
              icon={<SiMongodb />}
              color="#419432"
            />
          </motion.div>
        </motion.div>
        <motion.span
          style={{ marginTop: '20px' }}
          variants={variants}
          initial="Initial"
          whileInView="animate"
        >
          <Button
            link="https://drive.google.com/file/d/1zfZqOFCrB2y-BYsXZN04pXlF4o9S9k9C/view?usp=sharing"
            inline="Download C.v"
          />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default About;
