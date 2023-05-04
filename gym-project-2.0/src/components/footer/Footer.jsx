import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer_title}>
          <p>The Warehouse Gym</p>
          <p>Your Body Temple</p>

          <div className={style.social_icons}>
            <Link to={"https://www.facebook.com/"}>
              <ImFacebook2 className={style.icons} />
            </Link>
            <Link to={"https://www.linkedin.com/"}>
              <BsLinkedin className={style.icons} />
            </Link>
            <Link to={"https://twitter.com/"}>
              <ImWhatsapp className={style.icons} />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <ImYoutube className={style.icons} />
            </Link>
          </div>
        </div>

        <div className={style.footer_content}>
          <hr />
          <ul>
            <h3>The Warehouse Gym</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">AboutUs</Link>
            <Link to="/training">Traning</Link>
          </ul>

          <ul>
            <h3>Services</h3>
            <Link to="/pricing">Apply Online</Link>
            <Link>Available Positions</Link>
          </ul>

          <ul>
            <p>About Us</p>
            <Link to="/trainer">Meet Our Team</Link>
            <Link>Our Responsibilities</Link>
            <Link>Our Codes</Link>
            <Link>Our Values</Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
