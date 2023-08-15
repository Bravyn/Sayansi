import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GetStarted() {
  return (
    <Card>
      <Card.Header>Welcome</Card.Header>
      <Card.Body>
        <Card.Title>Use the power of AI to educate</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GetStarted;