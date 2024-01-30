import React, { useState, useEffect } from 'react';
import './Jokes.css';

function Jokes() {
    const [showJoke, setShowJoke] = useState(false);
    const [setup, setSetup] = useState("");
    const [punchline, setPunch] = useState("");

    const fetchData = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const jokeData = await response.json();
        console.log(jokeData);
        setSetup(jokeData.setup);
        setPunch(jokeData.punchline);

    };

    const generateJoke = () => {
        fetchData();
        setShowJoke(true);
    };

    return (
        <div>
            <div className='btn'>
                <button onClick={generateJoke}>Generate Joke</button>
            </div>
            {showJoke && (
            <div>
                <p>Setup: {setup}</p>
                <p>Punchline: {punchline}</p>
            </div>
            )}
        </div>
    );
}

export default Jokes;
