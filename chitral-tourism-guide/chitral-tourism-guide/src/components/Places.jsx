import React from 'react';
import PlaceCard from './PlaceCard';

const Places = () => {
    const places = [
        {
            id: 'tirichmir',
            image: '/images/tirichmir.JPGE.jfif',
            title: 'Tirich Mir',
            description: 'Explore the majestic Tirich Mir, the highest peak of the Hindu Kush.'
        },
        {
            id: 'shandur',
            image: '/images/SHANDUR.JPEG',
            title: 'Shandur Pass',
            description: 'Experience the famous Shandur Polo Festival at one of the world\'s highest polo grounds.'
        },
        {
            id: 'kalash',
            image: '/images/KALASH.JPEG',
            title: 'Kalash Valley',
            description: 'Discover the unique culture, tradition, and colorful festivals of the Kalash people.'
        },
        {
            id: 'fort',
            image: '/images/chitral-fort.JPEG',
            title: 'Chitral Fort',
            description: 'Visit this historical landmark and learn about the rich history of Chitral.'
        }
    ];

    return (
        <section className="places" id="explore">
            <h2>Explore Chitral</h2>
            <p className="section-intro">
                Discover some of the most beautiful and culturally rich places in Chitral.
            </p>
            <div className="place-container">
                {places.map(place => (
                    <PlaceCard 
                        key={place.id} 
                        image={place.image} 
                        title={place.title} 
                        description={place.description} 
                        onLearnMore={() => showPlace(place.id)} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Places;