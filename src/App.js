// src/App.js
import React, { useState } from 'react';
import ProblemDescription from './components/ProblemDescription';
import CodeEditor from './components/CodeEditor';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  const handleRun = () => {
    setOutput('Run executed. This is a mock output.');
  };

  const handleSubmit = () => {
    setOutput('Submission executed. This is a mock output.');
  };

  return (
    <div className="app-container">
      <ProblemDescription />
      <div className="code-section">
        <CodeEditor />
      </div>
    </div>
  );
}

export default App;
