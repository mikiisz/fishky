import React, {Fragment, useState} from "react";
import ReactCardFlip from 'react-card-flip';

function App() {
    const [flipped, flip] = useState(false);

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <Fragment>
                This is the front of the card.
                <button onClick={flip(!flipped)}>Click to flip</button>
            </Fragment>

            <Fragment>
                This is the back of the card.
                <button onClick={flip(!flipped)}>Click to flip</button>
            </Fragment>
        </ReactCardFlip>
    )
}

export default App;