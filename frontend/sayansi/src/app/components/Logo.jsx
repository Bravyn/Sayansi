import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://picsum.photos/id/80/250/250" rounded />
        </Col>
       
      </Row>
    </Container>
  );
}

export default ShapeExample;