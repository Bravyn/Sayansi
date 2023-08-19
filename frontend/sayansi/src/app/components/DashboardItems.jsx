import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';
import Logo from '../components/Logo'
import { useEffect, useState } from 'react';

const DashboardItems = () => {
  const [activeWin, setActiveWin] = useState(0)

  const handleButton = (btn_number) => {
    setActiveWin(btn_number)
  }

  return (
    <Stack gap={3}>
        {/*<Logo/>*/}
     <Button variant= {activeWin === 1 ? 'primary' : 'secondary'}
 onClick={() => handleButton(1)}>Upload Course Outline</Button>
     <Button variant= {activeWin === 2 ? 'primary' : 'secondary'} onClick={() => handleButton(2)}>Generate Course Content</Button>
     <Button variant={activeWin === 3 ? 'primary' : 'secondary'} onClick={() => handleButton(3)}>Evaluate Course Content</Button>
    </Stack>
  );
}

export default DashboardItems;