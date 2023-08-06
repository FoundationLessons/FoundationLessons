import React from "react";
import "./MyHobbies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
  UncontrolledCarousel
} from "reactstrap";

const MyHobbies = () => {
  return (
    <div className="myHobbies-container">
      <div className="mainContent">
        <h1>
          Everyone Should have hobbies!
          <br />
          Well mines are:
        </h1>
      </div>
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
          <h1 style={{textAlign:'center'}}>The pictures that always motivates me!</h1>
        <div className="rightSection">
          <UncontrolledCarousel
            items={[
              {
                altText: "Slide 1",
                caption: "Slide 1",
                key: 1,
                src: "https://picsum.photos/id/123/1200/600",
              },
              {
                altText: "Slide 2",
                caption: "Slide 2",
                key: 2,
                src: "https://picsum.photos/id/456/1200/600",
              },
              {
                altText: "Slide 3",
                caption: "Slide 3",
                key: 3,
                src: "https://picsum.photos/id/678/1200/600",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MyHobbies;
