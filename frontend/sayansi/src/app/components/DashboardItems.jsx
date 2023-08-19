import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';
import Logo from '../components/Logo'
import { useState } from 'react';

function DashboardItems() {
  const [activeWin, setActiveWin] = useState(0)

  const handleButton = (btn_number) => {
    setActiveWin(btn_number)
  }

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