import React from 'react';
import FestivalCard from './FestivalCard';

const festivalsData = [
    {
        id: 'chilam',
        name: 'Chilam Joshi Festival',
        date: '📅 May 13–16',
        description: 'A vibrant annual spring celebration of the Kalash people, featuring colorful traditional attire, music, dancing, cultural rituals, and sacred milk offerings.',
    },
    {
        id: 'shandur',
        name: 'Shandur Polo Festival',
        date: '📅 July',
        description: 'An iconic annual sports and cultural event featuring thrilling freestyle polo between Chitral and Gilgit-Baltistan.',
    },
    {
        id: 'uchal',
        name: 'Uchal Festival',
        date: '📅 August',
        description: 'An ancient Kalash harvest celebration featuring traditional dancing, folk music, prayers, food, and community gatherings.',
    },
    {
        id: 'chaumos',
        name: 'Chaumos Festival',
        date: '📅 December',
        description: 'The major winter and New Year celebration of the Kalash people, featuring purification rituals, bonfires, traditional singing, and dancing.',
    },
];

const Festivals = () => {
    return (
        <section className="festivals" id="festivals">
            <h2>Festivals & Events</h2>
            <p className="section-intro">
                Experience the colorful traditions, sports, music, and cultural celebrations of Chitral.
            </p>
            <div className="festival-container">
                {festivalsData.map(festival => (
                    <FestivalCard key={festival.id} festival={festival} />
                ))}
            </div>
        </section>
    );
};

export default Festivals;