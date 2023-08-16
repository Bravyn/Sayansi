import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubmitFile from '../components/SubmitFile'
import GetStarted from './GetStarted';
import DashboardItems from './DashboardItems';
import HomeText from './HomeText';

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col><DashboardItems/></Col>
        <Col xs lg = {8}> <HomeText/> </Col>
      </Row>
     
    </Container>
  );
}

export default Dashboard;