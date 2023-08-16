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
      <Col xs lg = {8}> <HomeText/> </Col>

        <Col><DashboardItems/></Col>
      </Row>
     
    </Container>
  );
}

export default Dashboard;