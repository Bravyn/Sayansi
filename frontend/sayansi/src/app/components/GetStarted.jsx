import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SubmitFile from '../components/SubmitFile'

import { useState } from 'react';


function GetStarted() {
    const [start, setStart] = useState(false)

    const handleStart = (() => {
        setStart(true)
    });

    return (
        start ?
            <div>
              <h3>Select file to analyze</h3>
              <SubmitFile />

            </div>
            :
        <Card>
            <Card.Header>Welcome</Card.Header>
            <Card.Body>
                <Card.Title>Use the power of AI to educate</Card.Title>
                <Card.Text>
                    Introducing AI-Boosted Turnaut - an innovative educational hub meticulously crafted to equip educators with the forefront
                    AI-driven resources for enriching data science and robotics instruction.
                    Our platform transcends conventional online learning by seamlessly integrating artificial intelligence to
                    assess student progress and offer tailored recommendations for amplifying their involvement.
                    Furthermore, our AI-infused linguistic models empower instructors to curate lessons and quizzes,
                    thus finely adapting the educational journey to match each student's distinct requirements.
                    Join us on the cutting-edge of education with AI-Enhanced Turnaut!
                </Card.Text>
                <Button variant="primary" onClick={handleStart}>Get Started</Button>

            </Card.Body>
        </Card>
    );
}

export default GetStarted;