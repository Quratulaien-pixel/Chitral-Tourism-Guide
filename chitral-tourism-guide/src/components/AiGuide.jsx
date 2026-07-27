import React, { useState } from 'react';
import useAi from '../hooks/useAi';

const AiGuide = () => {
    const [userQuestion, setUserQuestion] = useState('');
    const { aiResponse, askAi } = useAi();

    const handleAskAi = () => {
        askAi(userQuestion);
        setUserQuestion('');
    };

    return (
        <section className="ai-guide" id="ai-guide">
            <h2>🤖 AI Chitral Travel Guide</h2>
            <p className="section-intro">
                Ask our AI guide anything about traveling in Chitral.
            </p>
            <div className="ai-box">
                <h3>Plan Your Chitral Trip</h3>
                <p>
                    Ask about places to visit, hotels, festivals, travel tips,
                    local culture, or create a personalized itinerary.
                </p>
                <textarea 
                    id="user-question"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="Example: Plan a 3-day trip to Chitral for me..."
                ></textarea>
                <button id="ask-ai" onClick={handleAskAi}>Ask AI</button>
                <div id="ai-response">
                    <p>{aiResponse || 'Your AI response will appear here.'}</p>
                </div>
            </div>
        </section>
    );
};

export default AiGuide;