import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TrendMovies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, CardTitle } from "reactstrap";

const apiUrl = "https://jk-tv.netlify.app/trending_movies/get_all";

const TrendingMovies = () => {
  const [trend, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTrendMovies(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Tranding Movies</h1>

      <div className="row">
        {trend.map((trend) => (
          <div key={trend.id} className="tranding-container">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{trend.title}</CardTitle>
              </CardBody>
              <img
                alt={trend.title}
                src={trend.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{trend.title}</CardTitle>
              </CardBody>
              <img
                alt={trend.title}
                src={trend.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{trend.title}</CardTitle>
              </CardBody>
              <img
                alt={trend.title}
                src={trend.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{trend.title}</CardTitle>
              </CardBody>
              <img
                alt={trend.title}
                src={trend.posterPath}
                width="100%"
              />
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TrendingMovies;
