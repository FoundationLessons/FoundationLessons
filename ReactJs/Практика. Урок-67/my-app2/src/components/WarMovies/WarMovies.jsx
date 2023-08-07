import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WarMovies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, CardTitle } from "reactstrap";

const apiUrl = "https://jk-tv.netlify.app/war_movies/get_all";

const WarMovies = () => {
  const [war, setWarMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setWarMovies(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>War Movies</h1>

      <div className="row">
        {war.map((war) => (
          <div key={war.id} className="war-container">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{war.title}</CardTitle>
              </CardBody>
              <img
                alt={war.title}
                src={war.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{war.title}</CardTitle>
              </CardBody>
              <img
                alt={war.title}
                src={war.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{war.title}</CardTitle>
              </CardBody>
              <img
                alt={war.title}
                src={war.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{war.title}</CardTitle>
              </CardBody>
              <img
                alt={war.title}
                src={war.posterPath}
                width="100%"
              />
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default WarMovies;
