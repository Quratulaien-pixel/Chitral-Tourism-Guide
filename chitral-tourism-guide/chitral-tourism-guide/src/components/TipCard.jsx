import React from 'react';

const TipCard = ({ title, description, onReadMore }) => {
    return (
        <div className="tip-card">
            <div className="tip-icon">🌤️</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="tip-btn" onClick={onReadMore}>
                Read More
            </button>
            <div className="tip-details"></div>
        </div>
    );
};

export default TipCard;