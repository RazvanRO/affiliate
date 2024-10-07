import React, { useState } from 'react';
import './App.css';

function App() {
  const [discord, setDiscord] = useState('');
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!discord || !file) {
      alert('Please enter your Discord username and upload a screenshot.');
      return;
    }

    // In real-world apps, you'd typically send this data to a backend service or cloud storage
    setSubmitted(true);
    alert('Form submitted successfully!');

    // Reset form
    setDiscord('');
    setFile(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WealthyGambler</h1>
      </header>

      <main className="banner-section">
        {/* Card 1: Hypedrop */}
        <section className="card" onClick={() => handleClick('https://hypedrop.com/r/THEWEALTHYGAMBLER')}>
          <div className="photo">
            <img src="/hypedrop.png" alt="Hypedrop" />
          </div>
          <div className="description">
            <p>Description: Hypedrop</p>
            <p>Code: THEWEALTHYGAMBLER</p>
            <p>Link: <a href="https://hypedrop.com/r/THEWEALTHYGAMBLER" target="_blank" rel="noopener noreferrer">hypedrop.com</a></p>
          </div>
        </section>

        {/* Card 2: Gamdom */}
        <section className="card" onClick={() => handleClick('https://gamdom.com/r/wealthygambler')}>
          <div className="photo">
            <img src="/og_gamdom.jpg" alt="Gamdom" />
          </div>
          <div className="description">
            <p>Description: Gamdom</p>
            <p>Code: wealthygambler</p>
            <p>Link: <a href="https://gamdom.com/r/wealthygambler" target="_blank" rel="noopener noreferrer">gamdom.com</a></p>
          </div>
        </section>

        {/* Card 3: Rollbit */}
        <section className="card" onClick={() => handleClick('https://rollbit.com/referral/TheWealthyGambler')}>
          <div className="photo">
            <img src="/Rollbit-1-scaled.jpg" alt="Rollbit" />
          </div>
          <div className="description">
            <p>Description: Rollbit</p>
            <p>Code: TheWealthyGambler</p>
            <p>Link: <a href="https://rollbit.com/referral/TheWealthyGambler" target="_blank" rel="noopener noreferrer">rollbit.com</a></p>
          </div>
        </section>
      </main>
      
      {/* Form Section */}
      <section className="form-section">
        <h2>Enter to Win $100 Monthly</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="discord">Discord Username:</label>
            <input
              type="text"
              id="discord"
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
              placeholder="e.g., WealthyGambler#1234"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="screenshot">Upload Screenshot:</label>
            <input
              type="file"
              id="screenshot"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div className="success-message">
            <p>Thank you for submitting! You are now entered to win $100.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
