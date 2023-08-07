import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ScienceFiction.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, CardTitle } from "reactstrap";

const apiUrl = "https://jk-tv.netlify.app/science_fiction_movies/get_all";

const ScienceFiction = () => {
  const [science, setScience] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setScience(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Science Fiction Movies</h1>

      <div className="row">
        {science.map((science) => (
          <div key={science.id} className="science-container">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{science.title}</CardTitle>
              </CardBody>
              <img
                alt={science.title}
                src={science.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{science.title}</CardTitle>
              </CardBody>
              <img
                alt={science.title}
                src={science.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{science.title}</CardTitle>
              </CardBody>
              <img
                alt={science.title}
                src={science.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{science.title}</CardTitle>
              </CardBody>
              <img
                alt={science.title}
                src={science.posterPath}
                width="100%"
              />
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ScienceFiction;
