import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState('');

  const postData = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
      setResponse(response.data.title);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={postData}>Send POST Request</button>
      <div>Response: {response}</div>
    </div>
  );
}

export default App;
