import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';

function DashboardItems() {
  return (
    <Stack gap={3}>
     <Button variant='secondary'>Upload Course Outline</Button>
     <Button variant='secondary'>Generate Course Content</Button>
     <Button variant='secondary'>Evaluate Course Content</Button>
    </Stack>
  );
}

export default DashboardItems;