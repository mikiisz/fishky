import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';

function App() {
    const [flipped, setFlip] = useState(false);

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div className="front" onClick={() => setFlip(!flipped)}>
                <div className="middle">
                    <div className="inner">
                        Rodzina
                    </div>
                </div>
            </div>

            <div className="back" onClick={() => setFlip(!flipped)}>
                <div className="middle">
                    <div className="inner">
                        Family
                    </div>
                </div>
            </div>
        </ReactCardFlip>

    )
}

export default App;