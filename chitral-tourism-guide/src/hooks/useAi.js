import { useState } from 'react';

const useAi = () => {
    const [userQuestion, setUserQuestion] = useState('');
    const [aiResponse, setAiResponse] = useState('Your AI response will appear here.');

    const handleQuestionChange = (event) => {
        setUserQuestion(event.target.value);
    };

    const askAi = async () => {
        // Simulate an API call to get AI response
        // Replace this with actual API call logic
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(`AI response to: ${userQuestion}`);
            }, 1000);
        });
        setAiResponse(response);
    };

    return {
        userQuestion,
        aiResponse,
        handleQuestionChange,
        askAi,
    };
};

export default useAi;