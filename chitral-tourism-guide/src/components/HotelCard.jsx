import React from 'react';

const HotelCard = ({ hotel }) => {
    return (
        <div className="hotel-card">
            <div className="hotel-icon">🏨</div>
            <h3>{hotel.name}</h3>
            <p className="location">📍 {hotel.location}</p>
            <p>{hotel.description}</p>
            <button className="hotel-btn" onClick={hotel.onViewDetails}>
                View Details
            </button>
            <div className="hotel-details"></div>
        </div>
    );
};

export default HotelCard;