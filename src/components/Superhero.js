// import Button from 'react-bootstrap/Button';
import antmant from '../assets/photo/film/superhero/antmant.jpg';
import endgame from '../assets/photo/film/superhero/endgame.jpg';
import spiderman2 from '../assets/photo/film/superhero/spiderman2.jpg';
import transformers from '../assets/photo/film/robot/transformers.jpg';
import { Card, Container, Row, Col, Image  } from 'react-bootstrap';

function Superhero() {
  return (
    <div>
      <Container>
        <br/>
        <h1 className='text-white text-uppercase text-center fw-bold'>Superhero Movie</h1>
        <br/>
        <Row>

          <Col md={3} className='movieWrapper' id='superhero'>
            <Card className='movie-image'>
              <Image src={antmant} alt='Movies' className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>Ant mant</Card.Title>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className='movieWrapper'>
            <Card className='movie-image'>
              <Image src={spiderman2} alt='Movies' className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>Spiderman 2</Card.Title>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className='movieWrapper'>
            <Card className='movie-image'>
              <Image src={endgame} alt='Movies' className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>Avengers End Game</Card.Title>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className='movieWrapper'>
            <Card className='movie-image'>
              <Image src={transformers} alt='Movies' className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>transformers</Card.Title>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className='text-left'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Superhero;