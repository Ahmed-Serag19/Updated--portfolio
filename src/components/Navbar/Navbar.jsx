import { motion } from 'framer-motion';
import './navbar.scss';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.7 }}
        >
          Ahmed Mohamed
        </motion.span>
        <div className="social-links">
          <a
            href="https://wa.me/+201001386765"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/whatsapp.png" alt="whatsapp icon " />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-mohamed-amin-41b081186/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="linkedin icon" />
          </a>
          <a
            href="https://github.com/Ahmed-Serag19"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
