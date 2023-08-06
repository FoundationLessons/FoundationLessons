import {Card, CardBody, CardTitle, CardText, CardLink, CardSubtitle} from 'reactstrap'
import "./index.css"
const Cards = ({data}) => {
  
  return (
    <Card
      style={{
        width: "18rem",
      }}
    className="card-container">
      <CardBody>
        <CardTitle tag="h5" style={{fontFamily:"System-Ui", color:"chocolate"}}>{data.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        <h7>Vote Average:</h7> {data.voteAverage}
        </CardSubtitle>
      <img alt="Card cap" src={data.backdropPath} width="100%"  />
      </CardBody>
      <CardBody>
        <CardText tag={"h6"} style={{textDecoration:"underline", color:"goldenrod"}}>
      {data.releaseDate}
        </CardText>
        <CardText className='overview'>{data.overview}</CardText>
        <CardLink href="#">Link to Watch Online</CardLink>
      </CardBody>
    </Card>
  );
};

export default Cards;