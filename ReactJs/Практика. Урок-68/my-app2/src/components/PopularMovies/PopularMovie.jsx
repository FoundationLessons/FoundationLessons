import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PopularMovie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, CardTitle } from "reactstrap";

const apiUrl = "https://jk-tv.netlify.app/popular_movies/get_all";

const PopularMovie = () => {
  const [popmovie, setPopularMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPopularMovie(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Popular Movies</h1>

      <div className="row">
        {popmovie.map((popmovie) => (
          <div key={popmovie.id} className="popularMovies-container">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{popmovie.title}</CardTitle>
              </CardBody>
              <img
                alt={popmovie.title}
                src={popmovie.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{popmovie.title}</CardTitle>
              </CardBody>
              <img
                alt={popmovie.title}
                src={popmovie.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{popmovie.title}</CardTitle>
              </CardBody>
              <img
                alt={popmovie.title}
                src={popmovie.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{popmovie.title}</CardTitle>
              </CardBody>
              <img
                alt={popmovie.title}
                src={popmovie.posterPath}
                width="100%"
              />
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default PopularMovie;
