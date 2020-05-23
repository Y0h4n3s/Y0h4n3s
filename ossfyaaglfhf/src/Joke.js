import React from 'react';

const Joke = (props) => {
    return (
        <>
            <p>{props.question}</p>
            <p>{props.punchLine}</p>
        </>
    )
}

export default Joke;