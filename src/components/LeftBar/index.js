import { useState, useEffect } from "react";

import { FaAnglesLeft } from "react-icons/fa6";

import { TbPlus } from "react-icons/tb";

import { PiCompassFill } from "react-icons/pi";

import { HiMenuAlt2 } from "react-icons/hi";

import "./index.css";



const LeftBar = () => {
  
  const [showLeftBar, onToggleLeftBar] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 992) {
      onToggleLeftBar(false);
    }
  }, []);

  const onClickLeftBarBtn = () => onToggleLeftBar((prevState) => !prevState);

  

  if (showLeftBar) {
    return (
      <div className="left-bar-bg">
        <div className="">
        <div className="d-flex justify-content-between align-items-center p-1 btn-container">
          <p className="logo-name">character.ai</p>
          <button
            type="button"
            className="left-arrow-btn"
            onClick={onClickLeftBarBtn}
          >
            <FaAnglesLeft size={12} color={"inherit"} />
          </button>
        </div>
        <button type="button" className="create-character-btn">
          <TbPlus className="plus-icon" />
          Create
        </button>
        <button type="button" className="discover-btn">
          <PiCompassFill className="compass-icon" />
          Discover
        </button>
        <p className="">Chats</p>
       </div>
       <div className="">
       <button className="signinBtn">Sign in</button>
        <button className="signBtn">Sign up</button>

       </div>
       </div>
    );
  }

  return (
    <div className="floating-div fixed-top">
      <button
        type="button"
        className="menu-float-btn"
        onClick={onClickLeftBarBtn}
      >
        <HiMenuAlt2 />
      </button>
    </div>
  );
};

export default LeftBar;