import style from "./AboutUs.module.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className={style.Maindiv}>
      <div className={style.container1}>
        <span>
          <iframe
            src="https://youtube.com/embed/Z3TdDTG97j8"
            frameBorder="0"
            allowFullScreen={true}
            title="Gym video1"
          ></iframe>
        </span>
        <span>
          <p>this is the video</p>
          <button>
            <Link to={"/program"}>Learn More</Link>
          </button>
        </span>
      </div>
      <div className={style.container2}>
        <p>this is the video</p>
        <span>
          <iframe
            src="https://youtube.com/embed/C6mnw1lMGOY"
            frameBorder="0"
            allowFullScreen={true}
            title="Gym video2"
          ></iframe>
        </span>
      </div>
    </div>
  );
}

export default AboutUs;
