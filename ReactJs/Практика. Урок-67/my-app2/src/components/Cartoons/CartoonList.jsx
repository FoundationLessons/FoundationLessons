import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CartoonList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, CardTitle } from "reactstrap";

const apiUrl = "https://jk-tv.netlify.app/cartoons/get_all";

const CartoonsList = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCartoons(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Cartoon Movies</h1>

      <div className="row">
        {cartoons.map((cartoon) => (
          <div key={cartoon.id} className="cartoons-container">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{cartoon.title}</CardTitle>
              </CardBody>
              <img
                alt="cartoon.title"
                src={cartoon.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{cartoon.title}</CardTitle>
              </CardBody>
              <img
                alt="cartoon.title"
                src={cartoon.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{cartoon.title}</CardTitle>
              </CardBody>
              <img
                alt="cartoon.title"
                src={cartoon.posterPath}
                width="100%"
              />
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{cartoon.title}</CardTitle>
              </CardBody>
              <img
                alt="cartoon.title"
                src={cartoon.posterPath}
                width="100%"
              />
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CartoonsList;
