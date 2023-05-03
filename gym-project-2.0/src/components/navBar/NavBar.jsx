import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { CgGym } from "react-icons/cg";

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.icon}>
          <CgGym />
        </div>
        <div className={style.btn}>
          {isVisible ? (
            <ImCross onClick={() => setIsVisible(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setIsVisible(true)} />
          )}
        </div>
        <div
          className={isVisible ? style.mobileLinks : style.Links}
          onClick={() => setIsVisible(false)}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/program"}>Program</Link>
          <Link to={"/training"}>Training</Link>
          <Link to={"/pricing"}>Pricing</Link>
        </div>
        <div className={style.buttonDiv}>
          <button className={style.button}>
            <Link to={"/register"}>Join Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
