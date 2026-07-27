import React from 'react';
import TipCard from './TipCard';

const Tips = () => {
    return (
        <section className="tips" id="travel-tips">
            <h2>Travel Tips for Chitral</h2>
            <p className="section-intro">
                Helpful information to make your journey to Chitral easier and more enjoyable.
            </p>
            <div className="tips-container">
                {/* Best Time to Visit */}
                <TipCard 
                    title="Best Time to Visit" 
                    description="Choose the best season according to your travel plans and the places you want to explore." 
                    onClick={() => showTip('season')}
                />

                {/* What to Pack */}
                <TipCard 
                    title="What to Pack" 
                    description="Pack according to the season and activities you plan to enjoy in Chitral." 
                    onClick={() => showTip('packing')}
                />

                {/* Transportation */}
                <TipCard 
                    title="Transportation" 
                    description="Learn about transportation options and plan your journey between different destinations." 
                    onClick={() => showTip('transport')}
                />

                {/* Respect Local Culture */}
                <TipCard 
                    title="Respect Local Culture" 
                    description="Respect local traditions, communities, customs, and cultural sites." 
                    onClick={() => showTip('culture')}
                />

                {/* Mountain Safety */}
                <TipCard 
                    title="Mountain Safety" 
                    description="Stay prepared and careful when traveling through mountainous areas." 
                    onClick={() => showTip('safety')}
                />

                {/* Money & Essentials */}
                <TipCard 
                    title="Money & Essentials" 
                    description="Keep important travel essentials with you while exploring Chitral." 
                    onClick={() => showTip('money')}
                />
            </div>
        </section>
    );
};

export default Tips;