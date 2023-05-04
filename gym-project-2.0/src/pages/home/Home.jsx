import { useEffect, useState } from "react";
import style from "./Home.module.css";

function Home() {
  const Array = [
    {
      id: 1,
      image:
        "https://www.julywellness.com/wp-content/uploads/2019/07/Supplement-Fitness.jpg",
    },
    {
      id: 2,
      image: "https://www.sebrands.com/wp-content/uploads/2020/07/fitness.jpg",
    },
    {
      id: 3,
      image: "https://picfiles.alphacoders.com/289/289817.jpg",
    },
    {
      id: 4,
      image:
        "https://westwon.co.uk/wp-content/uploads/2018/02/iStock-597959750.jpg",
    },
    {
      id: 5,
      image:
        "https://www.lakeshoresf.com/wp-content/uploads/2021/04/Kids-Fitness-Training-Lincoln-Park-Chicago-scaled.jpeg",
    },
  ];
  const [data, setData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((data) => (data + 1) % Array.length);
    }, 2500);
    return () => clearInterval(interval);
  });
  return (
    <div className={style.div}>
      <h1>Home Page</h1>
      <img className={style.image} src={Array[data].image} alt="gym" />
    </div>
  );
}

export default Home;
