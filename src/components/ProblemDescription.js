import React, { useState } from 'react';
import './ProblemDescription.css';

const ProblemDescription = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="problem-description">
      <h2>TWO SUM</h2>

      <div className="tabs">
        <button 
          className={activeTab === 'description' ? 'active' : ''} 
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button 
          className={activeTab === 'editorial' ? 'active' : ''} 
          onClick={() => setActiveTab('editorial')}
        >
          Editorial
        </button>
        <button 
          className={activeTab === 'discussion' ? 'active' : ''} 
          onClick={() => setActiveTab('discussion')}
        >
          Discussion
        </button>
        <button 
          className={activeTab === 'submissions' ? 'active' : ''} 
          onClick={() => setActiveTab('submissions')}
        >
          Submissions
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'description' && (
          <div>
            <h3>Description</h3>
            <p>
              Given an array of integers <code>nums</code> and an integer <code>target</code>, 
              return indices of the two numbers such that they add up to <code>target</code>.
            </p>
            <h4>Example 1:</h4>
            <p>
              Input: <code>nums = [2, 7, 11, 15]</code>, <code>target = 9</code> <br />
              Output: <code>[0, 1]</code> <br />
              Explanation: Because <code>nums[0] + nums[1] == 9</code>, we return <code>[0, 1]</code>.
            </p>
            <h4>Example 2:</h4>
            <p>
              Input: <code>nums = [3, 2, 4]</code>, <code>target = 6</code> <br />
              Output: <code>[1, 2]</code>
            </p>
          </div>
        )}
        {activeTab === 'editorial' && (
          <div>
            <h3>Editorial</h3>
            <p>This section contains the editorial for the problem...</p>
          </div>
        )}
        {activeTab === 'discussion' && (
          <div>
            <h3>Discussion</h3>
            <p>Join the discussion on this problem here...</p>
          </div>
        )}
        {activeTab === 'submissions' && (
          <div>
            <h3>Submissions</h3>
            <p>View past submissions and results here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemDescription;
