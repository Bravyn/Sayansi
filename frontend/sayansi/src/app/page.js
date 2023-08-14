'use client'
import Image from 'next/image';
//import './btn.css';
import '../app/components/SubmitBox.css'
import NameForm from './components/NameForm';
import FileUpload from './components/TextInput';
import SubmitFile from '../app/components/SubmitFile'
import Intro from '../app/components/Intro'

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
    <main className="">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Cypro+Minoan&family=Noto+Sans+Mono:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
      
      <div className="center">
        <img
          src="/logo.svg"
          alt="logo"
          width={400}
          height={250}
          priority
        />
      </div>

      <div className="center">
        {
          start ?
            <div>
               <h2>Select file to analyze</h2>
              <SubmitFile/>
            </div>
            :
            <button onClick={handleStart}>Get Started</button>


        }
        
        
      </div>


    </main>
  )
}
