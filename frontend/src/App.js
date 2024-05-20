import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [prompt, setPrompt] = useState('');
    const [sonnet, setSonnet] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [source, setSource] = useState(null); // To store the axios cancel token source

    const handleGenerate = async () => {
        setLoading(true);
        setError(null);
        setSonnet('');
        const cancelTokenSource = axios.CancelToken.source();
        setSource(cancelTokenSource);

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL_LIVE}/generate-sonnet`, { prompt }, {
                cancelToken: cancelTokenSource.token,
            });
            setSonnet(response.data.sonnet);
        } catch (err) {
            if (axios.isCancel(err)) {
                setError('Generation process was cancelled.');
            } else {
                setError('An error occurred while generating the sonnet.');
            }
        }
        setLoading(false);
    };

    const handleStop = () => {
        if (source) {
            source.cancel();
        }
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
            <div className="button-group">
                <button onClick={handleGenerate} disabled={loading}>
                    {loading ? 'Processing...' : 'Generate Content'}
                </button>
                {loading && (
                    <button onClick={handleStop}>
                        Stop
                    </button>
                )}
            </div>
            {error && <p className="error">{error}</p>}
            <div className="responseArea">
                <textarea
                    value={sonnet}
                    readOnly
                    rows="10"
                    cols="80"
                    placeholder="Generated content will appear here..."
                    className="responseTextarea"
                ></textarea>
            </div>
        </div>
    );
}

export default App;
