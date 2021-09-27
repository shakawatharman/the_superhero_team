import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {name,post,age,salary,gender,img} = props.data;
    const iconArrow = <FontAwesomeIcon icon={faArrowCircleRight} />
  
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="hero" />
            </div>
            <div className="card-data">
                <h2>{ name }</h2>
                <b>{post}</b>
                <p>Gender : {gender}</p>
                <p>Age :  {age}</p>
                <p>Salary : $ {salary}</p>
                <button 
                onClick={()=>props.HandleClick(props.data)}>
                    Click To Add {iconArrow}
                </button>
            </div>
        </div>
    );
};

export default Card;