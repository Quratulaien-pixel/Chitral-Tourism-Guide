import React from 'react';
import HotelCard from './HotelCard';

const Hotels = () => {
    return (
        <section className="hotels" id="hotels">
            <h2>Stay in Chitral</h2>
            <p className="section-intro">
                Find comfortable places to stay during your visit to Chitral.
            </p>

            <div className="hotel-container">
                <HotelCard
                    name="Hindukush Heights"
                    location="📍 Chitral, Pakistan"
                    description="A well-known hotel in Chitral offering accommodation for visitors exploring the city and surrounding mountain areas."
                    onClick={() => showHotel('hindukush')}
                />
                <HotelCard
                    name="Town Inn Guest House"
                    location="📍 Danin, Chitral"
                    description="A peaceful guest house near Chitral city, suitable for travelers and families looking for a comfortable stay."
                    onClick={() => showHotel('towninn')}
                />
                <HotelCard
                    name="Ayun Fort Inn"
                    location="📍 Ayun, Chitral"
                    description="A beautiful hotel located in Ayun, providing a convenient base for visitors exploring Ayun and the Kalash Valley region."
                    onClick={() => showHotel('ayunfort')}
                />
            </div>
        </section>
    );
};

export default Hotels;