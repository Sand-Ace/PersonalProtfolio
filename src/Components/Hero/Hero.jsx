import { useInView } from "react-intersection-observer";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

// Import icons/images
import cssIcon from "../../assets/cssCheck.webp";
import expressIcon from "../../assets/express.webp";
import htmlIcon from "../../assets/html.webp";
import jsIcon from "../../assets/js.webp";
import nextIcon from "../../assets/next.webp";
import nodeIcon from "../../assets/node.webp";
import reactIcon from "../../assets/react.webp";
import reduxIcon from "../../assets/redux.webp";
import tailwindIcon from "../../assets/tailwind.webp";
import viteIcon from "../../assets/vite.webp";
import luffy from "../../assets/luffy.webp";

// Toolkit array
const toolKit = [
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: jsIcon, alt: "JavaScript" },
  { src: reactIcon, alt: "React" },
  { src: reduxIcon, alt: "Redux" },
  { src: nextIcon, alt: "Next.js" },
  { src: nodeIcon, alt: "Node.js" },
  { src: expressIcon, alt: "Express" },
  { src: tailwindIcon, alt: "Tailwind" },
  { src: viteIcon, alt: "Vite" },
];

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
      ref={ref}
      src={inView ? src : ""}
      alt={alt}
      className={className}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      decoding="async"
    />
  );
};

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        {/* Text Section */}
        <div className="hero-text-box">
          <h1 className="primary-heading">
            <span className="gradient-acent">Learning by Doing</span>,<br />{" "}
            Creating by Coding
          </h1>
          <p className="hero-description">
            Hi, I&apos;m Sandesh, a self-taught programmer and aspiring
            fullstack developer. Driven by curiosity and dedication, I&apos;m
            continually honing my skills through hands-on experience. From{" "}
            <strong>frontend</strong> design to <strong>backend</strong>{" "}
            architecture.
          </p>

          {/* Toolkit Section */}
          <div className="coding-toolkit">
            <p className="coding-toolkit-title">
              <strong>My Coding Toolkit</strong>
            </p>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }} // Change the duration if needed
              className="toolkits-container"
            >
              <motion.div
                className="toolkits"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {toolKit.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      className="toolkit-item"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <div className="social-icons-wrapper">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              href="https://github.com/Sand-Ace"
              target="blank"
            >
              <FaGithub className="social-icon" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              target="blank"
            >
              <FaTwitter className="social-icon" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/sandesh-khadka-079363231/"
              target="blank"
            >
              <FaLinkedinIn className="social-icon" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              href="#"
              target="blank"
            >
              <FaInstagram className="social-icon" />
            </motion.a>
          </div>
        </div>

        {/* Luffy Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        >
          <motion.img src={luffy} alt="Luffy image" className="luffy-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
