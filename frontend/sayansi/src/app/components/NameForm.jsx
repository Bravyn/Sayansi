import React, { useCallback, useState } from "react";
import './nameform.css'
import '../btn.css'

const NameForm = (() => {
    const [name, setName] = useState('');
    const [nameEntered, setNameEntered] = useState(true)
    const [introPoints, setIntroPoints] = useState(0)

    const handleNameInput = ((e) => {
        setName(e.target.value)
    });
    const handleSubmit = ((e) => {
        e.preventDefault();
        setNameEntered(false)
    });

    const contButton = (() => {
        setIntroPoints(introPoints + 1)

    });

    function content(conte) {
        {
        }
    }


    return (
        nameEntered ?
            <div className="center">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,300;0,400;0,500;0,600;0,800;1,100;1,700&display=swap" rel="stylesheet" />
                <form onSubmit={handleSubmit}>
                    <h2>WELCOME</h2>
                    <h3>Please, let us know your name.</h3>
                    <input type="text" value={name} onChange={handleNameInput} />
                    <button id="submit" type="submit">GO</button>

                </form>
            </div>
            :
            <div className="main">

                <h2 className="points"> {name.charAt(0).toUpperCase() + name.slice(1)}'s skills = {introPoints} </h2>
                <div className="pcontainer">
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <p>
                        <div class="particle3"></div>

                        <h2>Welcome, <span> {name.charAt(0).toUpperCase() + name.slice(1)} </span>, to the enchanting realm of data magic!</h2>

                        I am your mystical guide, here to take you on an interactive journey of discovery and learning. Are you ready to unlock the secrets of Data Science? Of course, you are!
                    </p>
                    <div class="particle"></div>
                    <div class="particle"></div>

                    {introPoints === 0 ?
                        <div className="cont">

                            <button onClick={contButton} className="continue">Continue </button>
                            <div class="particle2"></div>


                        </div>
                        :
                        ""
                    }

                    {introPoints === 1 ?
                        <div className="pcontainer">
                            <div class="particle"></div>
                            <div class="particle"></div>
                            <div class="particle"></div>
                            <p>
                                <div class="particle3"></div>

                                <h2>As you step into this magical world, the surroundings transform into a virtual learning platform.</h2>

                                Behold! The Gateway to Knowledge - your portal to the vast world of Data Science. Here, you will learn the mystical arts of mathematics, statistics, and computer science. Our journey begins with the mystical language of numbers!
                            </p>
                            <div class="particle"></div>
                            <div class="particle"></div>
                            <div className="cont">
                                <button onClick={contButton} className="continue">Continue </button>
                                <div class="particle2"></div>

                            </div>
                        </div>
                        :
                        <h2> Explore </h2>

                    }
                    {introPoints === 2 ?
                        <div className="pcontainer">
                            <div class="particle"></div>
                            <div class="particle"></div>
                            <div class="particle"></div>
                            <p>
                                <div class="particle3"></div>

                                <h2>An ancient scroll appears, floating in the air. You reach out to unroll it.</h2>

                                As you unroll the scroll, the numbers come alive, swirling around you like stars in the night sky. Fear not! With my guidance, you shall learn to tame this celestial dance and find patterns hidden within.

                                <div class="particle"></div>
                                <div class="particle"></div>
                            </p>
                        </div>
                        :
                        introPoints < 4 && introPoints > 1 ?
                            <div className="pcontainer">
                                <div class="particle"></div>
                                <div class="particle"></div>
                                <div class="particle"></div>
                                <p>
                                    <div class="particle3"></div>

                                    <h2>You follow the guide's instructions, and the numbers start to form patterns and shapes.</h2>

                                    Well done, young apprentice! The first step on your journey is complete. Now, let us delve deeper into the world of statistics - the art of probability and uncertainty.

                                    <div class="particle"></div>
                                    <div class="particle"></div>
                                </p>
                            </div>

                            :
                            ""
                    }



                </div>
            </div>


    )
});

export default NameForm;
