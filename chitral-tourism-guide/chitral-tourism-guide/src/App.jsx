import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Places from './components/Places';
import Hotels from './components/Hotels';
import Festivals from './components/Festivals';
import AiGuide from './components/AiGuide';
import Tips from './components/Tips';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Places />
            <Hotels />
            <Festivals />
            <AiGuide />
            <Tips />
            <Contact />
        </div>
    );
};

export default App;