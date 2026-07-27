import React from 'react';

const PlaceCard = ({ image, title, description, onLearnMore }) => {
    return (
        <div className="place-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="place-btn" onClick={onLearnMore}>
                Learn More
            </button>
            <div className="place-details"></div>
        </div>
    );
};

export default PlaceCard;