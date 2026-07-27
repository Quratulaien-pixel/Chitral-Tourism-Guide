import React from 'react';

const FestivalCard = ({ festival, onLearnMore }) => {
    return (
        <div className="festival-card">
            <div className="festival-icon">🌸</div>
            <h3>{festival.name}</h3>
            <p className="festival-date">📅 {festival.date}</p>
            <p>{festival.description}</p>
            <button className="festival-btn" onClick={onLearnMore}>
                Learn More
            </button>
        </div>
    );
};

export default FestivalCard;