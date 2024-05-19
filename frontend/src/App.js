import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [prompt, setPrompt] = useState('');
    const [sonnet, setSonnet] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        setLoading(true);
        setError(null);
        setSonnet('');
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate-sonnet`, { prompt });
            setSonnet(response.data.sonnet);
        } catch (err) {
            setError('An error occurred while generating the sonnet.');
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Content Creation Assistant</h1>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                rows="5"
                cols="50"
            ></textarea>
            <button onClick={handleGenerate} disabled={loading}>
                {loading ? 'Processing...' : 'Generate Content'}
            </button>
            {error && <p className="error">{error}</p>}
            <div className="responseArea">
                <textarea
                    value={sonnet}
                    readOnly
                    rows="10"
                    cols="80" // Increased width
                    placeholder="Generated content will appear here..."
                    className="responseTextarea"
                ></textarea>
            </div>
        </div>
    );
}

export default App;
