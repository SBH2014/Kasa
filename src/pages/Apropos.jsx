import React from 'react';
import { useParams } from 'react-router-dom';
function Apropos() {
    const { questionNumber } = useParams()
    return <div>
        
        <h1>A propos</h1>
        <h2>Question {questionNumber}</h2>
    </div>;
}
export default Apropos