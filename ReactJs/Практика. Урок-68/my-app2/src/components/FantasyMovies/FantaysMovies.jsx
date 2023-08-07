import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FantasyMovies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, CardTitle } from "reactstrap";

const apiUrl = "https://jk-tv.netlify.app/science_fiction_movies/get_all";

const FantasyMovies = () => {
  const [fantasy, setFantasy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setFantasy(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Fantasy Movies</h1>

      <div className="row">
        {fantasy.map((fantasy) => (
          <div key={fantasy.id} className="fantasy-container">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{fantasy.title}</CardTitle>
              </CardBody>
              <img
                alt={fantasy.title}
                src={fantasy.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{fantasy.title}</CardTitle>
              </CardBody>
              <img
                alt={fantasy.title}
                src={fantasy.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{fantasy.title}</CardTitle>
              </CardBody>
              <img
                alt={fantasy.title}
                src={fantasy.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{fantasy.title}</CardTitle>
              </CardBody>
              <img
                alt={fantasy.title}
                src={fantasy.posterPath}
                width="100%"
              />
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FantasyMovies;
