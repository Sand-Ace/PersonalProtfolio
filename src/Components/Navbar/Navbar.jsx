import {
  EnvelopeIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  QuestionMarkCircleIcon,
  Square3Stack3DIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleClickSubMenu() {
    console.log("button cliked");
    setIsActive((prevstate) => !prevstate);
  }

  useEffect(() => {
    const handleResize = () => {
      if (isActive && window.innerWidth > 768) {
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="header"
      >
        <h2 className="logo">
          Sand<span className="logo-span">.dev</span>
        </h2>
        <nav className="main-nav">
          <ul className="nav-item">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", duration: 0.4, stiffness: 300 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "main-nav-link active" : "main-nav-link"
                }
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", duration: 0.4, stiffness: 300 }}
            >
              <NavLink
                to="/aboutme"
                className={({ isActive }) =>
                  isActive ? "main-nav-link active" : "main-nav-link"
                }
              >
                About me
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", duration: 0.4, stiffness: 300 }}
            >
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "main-nav-link active" : "main-nav-link"
                }
              >
                My projects
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", duration: 0.4, stiffness: 300 }}
            >
              <NavLink
                to="/contactme"
                className={({ isActive }) =>
                  isActive ? "main-nav-link active" : "main-nav-link"
                }
              >
                Contact me
              </NavLink>
            </motion.li>
          </ul>
        </nav>
        <div className="cta-resumebtn">
          <button className="btn btn--outline">
            <EnvelopeIcon width={20} className="envelop-icon" />
            <span>Resume</span>
          </button>
        </div>
        <motion.div
          animate={isActive ? { rotateZ: 180 } : {}}
          transition={{ duration: 0.4 }}
          className="hamburger-cta"
        >
          {isActive ? (
            <XMarkIcon
              width={30}
              onClick={handleClickSubMenu}
              className="hamMenu"
            />
          ) : (
            <Bars3Icon
              width={30}
              onClick={handleClickSubMenu}
              className="hamMenu"
            />
          )}
        </motion.div>
      </motion.header>
      {isActive && (
        <motion.nav
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="sub-nav"
        >
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="sub-nav-item"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setIsActive(false)}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "sub-bar-icon-link side-nav-active"
                    : "sub-bar-icon-link "
                }
              >
                <HomeIcon width={20} />
                <span>Home</span>
              </NavLink>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setIsActive(false)}
            >
              <NavLink
                to="/aboutme"
                className={({ isActive }) =>
                  isActive
                    ? "sub-bar-icon-link side-nav-active"
                    : "sub-bar-icon-link "
                }
              >
                <QuestionMarkCircleIcon width={20} />
                <span>About Me</span>
              </NavLink>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setIsActive(false)}
            >
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "sub-bar-icon-link side-nav-active"
                    : "sub-bar-icon-link "
                }
              >
                <Square3Stack3DIcon width={20} />
                <span>My Projects</span>
              </NavLink>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setIsActive(false)}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "sub-bar-icon-link side-nav-active"
                    : "sub-bar-icon-link "
                }
              >
                <DevicePhoneMobileIcon width={20} />
                <span>Contact</span>
              </NavLink>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </>
  );
}
