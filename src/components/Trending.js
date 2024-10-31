// import Button from 'react-bootstrap/Button';
import aladdinImage from '../assets/photo/film/fiction/aladdin.jpg';
import terminator3 from '../assets/photo/film/fiction/terminator3.jpg';
import interstellar from '../assets/photo/film/fiction/interstellar.jpg';
import { Card, Container, Row, Col, Image  } from 'react-bootstrap';

function Trending() {
  return (
    <div>
      <Container>
        <br/>
        <h1 className='text-white text-uppercase text-center fw-bold'>Trending Movie</h1>
        <br/>
        <Row>

          <Col md={4} className='movieWrapper' id='trending'>
            <Card className='movie-image'>
              <Image src={aladdinImage} alt='Movies' className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>Aladdin</Card.Title>
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

          <Col md={4} className='movieWrapper'>
            <Card className='movie-image'>
              <Image src={terminator3} alt='Movies' className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>Terminator 3</Card.Title>
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

          <Col md={4} className='movieWrapper'>
            <Card className='movie-image'>
              <Image src={interstellar} alt='Movies' className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center fw-bold text-uppercase'>interstellar</Card.Title>
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

export default Trending;