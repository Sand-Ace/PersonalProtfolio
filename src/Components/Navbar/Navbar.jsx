import {
  Bars3BottomRightIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleClickSubMenu() {
    console.log("button cliked");
    setIsActive((prevstate) => !prevstate);
  }
  return (
    <>
      <header className="header">
        <h2 className="logo">
          Sand<span className="logo-span">.dev</span>
        </h2>
        <nav className="main-nav">
          <ul className="nav-item">
            <li>
              <a href="#home" className="main-nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about me" className="main-nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="#projects" className="main-nav-link">
                My projects
              </a>
            </li>
            <li>
              <a href="#contact me" className="main-nav-link">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
        <div className="cta-resumebtn">
          <button className="btn btn--outline">
            <EnvelopeIcon width={20} className="envelop-icon" />
            <span>Resume</span>
          </button>
        </div>
        <div className="hamburger-cta">
          {isActive ? (
            <XMarkIcon
              width={20}
              onClick={handleClickSubMenu}
              className="hamMenu"
            />
          ) : (
            <Bars3BottomRightIcon
              width={20}
              onClick={handleClickSubMenu}
              className="hamMenu"
            />
          )}
        </div>
      </header>
      {isActive && (
        <nav className="sub-nav">
          <ul className="sub-nav-item">
            <li>
              <a href="#home" className="sub-nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about me" className="sub-nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="#projects" className="sub-nav-link">
                My projects
              </a>
            </li>
            <li>
              <a href="#contact me" className="sub-nav-link">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
