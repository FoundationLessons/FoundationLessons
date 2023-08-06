import Cards from "../Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
const Fantasy = () => {
  const data = [1, 2, 3, 4, 5];
  const [kino, setKino] = useState([]);
  useEffect(() => {
    axios.get("https://jk-tv.netlify.app/fantasy_movies/get_all").then((res) => setKino(res.data));
  }, []);
  return (
    <div className="homepage-container">
      {kino.map((movie, index) => (
        <Cards key={index} data={movie}/>
      ))}
    </div>
  );
};

export default Fantasy;
