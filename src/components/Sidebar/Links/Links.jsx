import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          href={`#${item}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          transition="0.4"
          whileTap={{ scale: 0.8 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
