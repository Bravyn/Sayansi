import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SubmitFile from '../components/SubmitFile'
import Dashboard from '../components/Dashboard'

import { useState } from 'react';


function GetStarted() {
    const [start, setStart] = useState(false)
    const [points, setPoints] = useState(0)
 
    const handleStart = (() => {
        setStart(true)
        setPoints(points + 1)
    });

    return (
        start ?
            <div>
              {/*<h3>Select file to analyze</h3>*/}
              <Dashboard />

            </div>
            :
            <Button variant="primary" onClick={handleStart}>Get Started</Button>

    );
}

export default GetStarted;