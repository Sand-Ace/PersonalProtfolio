import cssIcon from "../../assets/css.png";
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
// import svg from "../../assets/code.svg";

import "./Hero.css";

import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const toolKit = [
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  reduxIcon,
  nextIcon,
  nodeIcon,
  expressIcon,
  tailwindIcon,
  viteIcon,
];

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="primary-heading">
            <span className="accent">Learning by Doing</span>, Creating by
            Coding
          </h1>
          <p className="hero-description">
            Hi, I&apos;m Sandesh, a self-taught programmer and aspiring
            fullstack developer. Driven by curiosity and dedication, I&apos;m
            continually honing my skills through hands-on experience. From
            <strong> frontend</strong> design to <strong>backend</strong>{" "}
            architecture.
          </p>
          <div className="coding-toolkit">
            <p className="coding-toolkit-title">My Coding Toolkit</p>
            <div className="toolkits">
              {toolKit.length > 0 ? (
                toolKit.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="toolkit-item"
                  />
                ))
              ) : (
                <p className="fallback">loading...</p>
              )}
            </div>
            <div className="social-icons-wrapper">
              <FaGithub className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaLinkedinIn className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>
        </div>
        <div className="luffy-container">
          {/* {!imageLoaded && (
            <div className="luffy-placeholder">Gomu gomu gomu...</div>
          )} */}
          {/* <img
            src={luffy}
            alt="happy soul luffy"
            className={`luffy-image ${imageLoaded ? "loaded" : "loading"}`}
            onLoad={() => setImageLoaded(true)}
          /> */}
          <img src={luffy} alt="" className="luffy-image" />
          {/* <img src={svg} alt="" className="luffy-image" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
