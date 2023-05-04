import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.container1}>
          <p>COMPANY</p>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">AboutUs</Link>
            <Link to="/training">Traning</Link>
            <a href="#">Term and conditions</a>
            <a href="#">continued-operations-accessibility-maintenance</a>
          </ul>
        </div>
        <div className={style.container1}>
          <p>GYMS</p>
          <ul>
            <Link to="/pricing">Apply Online</Link>
            <Link>Available Positions</Link>
          </ul>
        </div>
        <div className={style.container1}>
          <p>MEMBERS</p>
          <ul>
            <Link to="/trainer">Meet Our Team</Link>
            <Link>Our Responsibilities</Link>
            <Link>Our Codes</Link>
            <Link>Our Values</Link>
          </ul>
        </div>
        <div className={style.social_icons}>
          <Link className={style.icons} to={"https://www.facebook.com/"}>
            <ImFacebook2 />
          </Link>
          <Link className={style.icons} to={"https://www.linkedin.com/"}>
            <BsLinkedin />
          </Link>
          <Link className={style.icons} to={"https://twitter.com/"}>
            <ImWhatsapp />
          </Link>
          <Link className={style.icons} to={"https://www.youtube.com/"}>
            <ImYoutube />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
