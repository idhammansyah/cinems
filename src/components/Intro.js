import { Col, Container, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Intro = () =>
{
  return(
    <div className='intro'>
    <Container className='text-white text-center d-flex justify-content-center align-items-center'>
      <Row>
        <Col>
          <div className='title'>TONTON GRATIS</div>
          <div className='title'>TANPA LAGGING</div>
          <div className='introButton mt-3 text-center'>
            <Button variant='dark'>VIEW LIST MOVIE</Button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Intro;