import React from 'react';

export default (props) => (
    <div>
        <figure>
            <img src={props.coverImage}/>
        </figure>
        <section>
            <h1>{props.bookTitle}</h1>
        </section>
    </div>
);