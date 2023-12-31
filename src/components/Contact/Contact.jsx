import { motion, useInView } from 'framer-motion';
import './contact.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { VITE_PUBLIC_KEY, VITE_SERIVCE_ID, VITE_TEMPLATE_ID } =
    import.meta.env;

  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_SERIVCE_ID,
        VITE_TEMPLATE_ID,
        formRef.current,
        VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <a href="mailto:ahmedmohamed.amin@hotmail.com">
            <span>Ahmedmohamed.amin@hotmail.com</span>
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Lebeny Haram, Giza, Egypt</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone (Click to whatsapp)</h2>
          <a href="https://wa.me/+201001386765">
            <span>+201001386765</span>
          </a>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.div
          className="coffee-svg"
          initial={{ opacity: 1 }}
          whileInView={{
            opacity: 0,
            position: 'absolute',
            top: 500,
            left: 0,
          }}
          transition={{ delay: 4, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M155.252,264.685c-16.829-16.829-41.154-18.869-55.382-4.641c-14.227,14.226-12.188,38.553,4.641,55.382    c9.318,9.318,20.932,14.101,31.86,14.101c8.81,0,17.173-3.11,23.522-9.46C174.12,305.84,172.081,281.514,155.252,264.685z"
                />
              </g>
            </g>
            <g>
              <g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M414.117,264.685c-16.828-16.829-41.156-18.869-55.382-4.641c-14.227,14.226-12.188,38.553,4.64,55.382    c9.318,9.318,20.932,14.101,31.86,14.101c8.809,0,17.173-3.11,23.522-9.46C432.984,305.84,430.946,281.514,414.117,264.685z"
                />
              </g>
            </g>
            <g>
              <g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M496.284,344.965H483.39l11.117-160.553c7.394-1.279,13.024-7.709,13.024-15.469v-44.487    c0-8.68-7.037-15.716-15.716-15.716h-7.215l-6.318-31.738c-1.464-7.353-7.917-12.647-15.413-12.647H316.379    c-7.497,0-13.95,5.295-15.413,12.648l-6.318,31.738h-7.215c-8.68,0-15.716,7.037-15.716,15.716v44.487    c0,7.124,4.743,13.132,11.241,15.06l11.145,160.961h-69.577l11.117-160.553c7.394-1.279,13.023-7.709,13.023-15.469v-44.487    c0-8.68-7.037-15.716-15.716-15.716h-7.215l-6.318-31.738c-1.464-7.353-7.917-12.648-15.413-12.648H57.514    c-7.497,0-13.95,5.295-15.413,12.647l-6.318,31.738h-7.215c-8.68,0-15.716,7.037-15.716,15.716v44.487    c0,7.124,4.743,13.132,11.241,15.06l11.145,160.961H15.716C7.037,344.965,0,352.002,0,360.682c0,7.953,5.915,14.51,13.581,15.555    v24.07c0,26.103,21.237,47.339,47.339,47.339h137.922c26.103,0,47.339-21.237,47.339-47.339v-23.908h26.265v23.908    c0,26.103,21.237,47.339,47.339,47.339h137.922c26.103,0,47.339-21.237,47.339-47.339v-26.577    c4.192-2.824,6.952-7.613,6.952-13.048C512,352.002,504.963,344.965,496.284,344.965z M70.41,95.785h120.696l2.579,12.954H67.831    L70.41,95.785z M214.749,400.305c0,8.771-7.136,15.907-15.907,15.907H60.92c-8.771,0-15.907-7.136-15.907-15.907v-22.86h169.735    V400.305z M56.589,198.277l-0.943-13.618h148.471l-0.943,13.618H56.589z M200.998,229.71l-7.981,115.255H66.745l-7.98-115.255    H200.998z M217.233,153.226H44.284v-13.055h172.949V153.226z M329.276,95.785h120.696l2.578,12.954H326.696L329.276,95.785z     M473.614,400.305c0,8.771-7.136,15.907-15.907,15.907H319.785c-8.771,0-15.907-7.136-15.907-15.907v-22.86h169.735V400.305z     M315.454,198.277l-0.943-13.618h148.471l-0.943,13.618H315.454z M459.863,229.71l-7.981,115.255H325.61l-7.98-115.255H459.863z     M476.098,153.226h-172.95v-13.055h172.95V153.226z"
                />
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input
            required
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea rows="8" placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && 'Error'}
          {success && 'Message is Sent'}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
