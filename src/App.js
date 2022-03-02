import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';

function FlipCardDecorator(props) {
    const [flipped, setFlip] = useState(false);

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div className="front" onClick={() => setFlip(!flipped)}>
                <div className="middle">
                    <div className="inner">
                        {props.front}
                    </div>
                </div>
            </div>

            <div className="back" onClick={() => setFlip(!flipped)}>
                <div className="middle">
                    <div className="inner">
                        {props.back}
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    )
}

function App() {
    return (
        <div className="outer">
            <div className="middle">
                <FlipCardDecorator front="Rodzina" back="Family"/>
                <button>Znam</button>
                <button>Nie znam</button>
            </div>
        </div>
    )
}

export default App;