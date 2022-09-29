import React from 'react';
import './Card.css'

const Card = ({ card, handleAddTolist }) => {
    // console.log(card);
    const { img, name, age, description, timeRequired } = card
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>For Age: {age}</p>
                <p>Time required: {timeRequired}s</p>
            </div>
            <button className='card-btn' onClick={() => handleAddTolist(timeRequired)}><p>Add to list</p></button>
        </div>
    );
};

export default Card;