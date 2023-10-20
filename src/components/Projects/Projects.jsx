import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import './projects.scss';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'Youtube Clone',
    img: 'https://i.imgur.com/kGYGH9D.png',
    desc: 'Youtube clone using React hooks, react-router-dom, Material UI, axios, react player',
    link: 'https://ahmed-serag19.github.io/youtube-clone/',
  },
  {
    id: 2,
    title: 'Promptopia',
    img: 'https://i.imgur.com/44Xjmpi.png',
    desc: 'A fullstack Social Media Serverless Web Application, using Next 13, Express,MongoDb',
    link: 'https://prompts-rlww7luiw-ahmed-serag19.vercel.app/',
  },
  {
    id: 3,
    title: 'Devfolio',
    img: 'https://i.imgur.com/dCpztsG.png',
    desc: 'DevFolio is a Responsive single Page Portfolio Website that is built using HTML, CSS & Bootstrap.',
    link: 'https://64d98df67408bc71ae89c893--golden-creponne-4db887.netlify.app/',
  },
  {
    id: 4,
    title: 'Movie DB',
    img: 'https://i.imgur.com/gzVSQqW.png',
    desc: 'A movie DB website showing current movies on Theatre,using HTML,CSS,Javascript,JQuery',
    link: 'https://ahmed-serag19.github.io/Movies-Database/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX, width: '90%', margin: 'auto' }}
          className="progress-bar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
