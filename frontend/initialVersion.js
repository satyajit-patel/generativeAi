// // import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//     const [prompt, setPrompt] = useState('');
//     const [sonnet, setSonnet] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     // for response typing
//     const [typedSonnet, setTypedSonnet] = useState(''); 

//     // const handleGenerate = async () => {
//     //     setLoading(true);
//     //     setError(null);
//     //     try {
//     //         const response = await axios.post('http://localhost:5000/generate-sonnet', { prompt });
//     //         setSonnet(response.data.sonnet);
//     //     } catch (err) {
//     //         setError('An error occurred while generating the sonnet.');
//     //     }
//     //     setLoading(false);
//     // };

//     console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
//     const handleGenerate = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate-sonnet`, { prompt });
//             setSonnet(response.data.sonnet);
//         } catch (err) {
//             setError('An error occurred while generating the sonnet.');
//         }
//         setLoading(false);
//     };

//     // for response typing
//     useEffect(() => {
//         if (sonnet) {
//             let index = 0;
//             const interval = setInterval(() => {
//                 setTypedSonnet((prev) => prev + sonnet.charAt(index));
//                 index++;
//                 if (index === sonnet.length) {
//                     clearInterval(interval);
//                 }
//             }, 50); // Adjust typing speed here (50ms per character)
//             return () => clearInterval(interval);
//         }
//     }, [sonnet]);

//     return (
//         <div className="App">
//             <h1>Content Creation Assistant</h1>
//             <textarea
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 placeholder="Enter your prompt here..."
//                 rows="5"
//                 cols="50"
//             ></textarea>
//             <button onClick={handleGenerate} disabled={loading}>
//                 {loading ? 'Generating...' : 'generated-content'}
//             </button>
//             {error && <p className="error">{error}</p>}
//             {sonnet && <div className="sonnet"><pre>{sonnet}</pre></div>}
//         </div>
//     );
// }

// export default App;

