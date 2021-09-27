import React from 'react';
import "./Name.css"

const Name = (props) => {
    const { name, img } = props;
    return (
        <div className="name-container">
            <img src={img} alt="hero"/>
            <p>{name}</p>
        </div>
    );
};

export default Name;