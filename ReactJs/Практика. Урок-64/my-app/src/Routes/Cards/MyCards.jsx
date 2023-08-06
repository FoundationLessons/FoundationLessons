import React from "react";
import "./MyCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
  Button,
} from "reactstrap";

const MyCard = () => {
  return (
    <div className="myCard-container">
      <div className="secHandler">
        <div className="leftSection">
          <Card
            style={{
              width: "18rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
