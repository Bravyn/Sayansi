import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';
import Logo from '../components/Logo'

function DashboardItems() {
  return (
    <Stack gap={3}>
        <Logo/>
     <Button variant='secondary'>Upload Course Outline</Button>
     <Button variant='secondary'>Generate Course Content</Button>
     <Button variant='secondary'>Evaluate Course Content</Button>
    </Stack>
  );
}

export default DashboardItems;