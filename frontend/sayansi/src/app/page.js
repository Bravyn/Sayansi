'use client'
import Image from 'next/image';
import NameForm from './components/NameForm';
import FileUpload from './components/TextInput';
import SubmitFile from '../app/components/SubmitFile'
import Intro from '../app/components/Intro'
import Button from 'react-bootstrap/Button';
import '../app/components/SubmitBox.css'
import './style.css'
import GetStarted from './components/GetStarted';

import { useState } from 'react';

export default function Home() {

  const images = [
    {
      src: "https://picsum.photos/id/100/200",
      alt: "Image 1",
      className: "my-class",
    },
    {
      src: "https://picsum.photos/id/101/200",
      alt: "Image 2",
      className: "my-class",
    },
    {
      src: "https://picsum.photos/id/102/200",
      alt: "Image 3",
      className: "my-class",
    },
  ];


  const [start, setStart] = useState(false)

  const handleStart = (() => {
    setStart(true)
  });

  return (
    <div className="container">
      
      <div className="logo">
        
       <h1>Turnaut</h1>
      </div>

      <div>
        {
          start ?
            <div>
              <h3>Select file to analyze</h3>
              <SubmitFile />
            </div>
            :
            <GetStarted/>


        }

      </div>

    </div>
  )
}
