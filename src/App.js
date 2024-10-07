import React, { useState } from "react";
import "./App.css";

function App() {
  const [discord, setDiscord] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!discord || !file) {
      alert("Please enter your Discord username and upload a screenshot.");
      return;
    }
    setSubmitted(true);
    alert("Form submitted successfully!");
    setDiscord("");
    setFile(null);
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="hero-section">
        <h1>Welcome to WealthyGambler</h1>
        <p>Your source for exciting offers and giveaways!</p>
      </header>

      {/* Cards Section */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card" onClick={() => handleClick("https://hypedrop.com/r/THEWEALTHYGAMBLER")}>
          <img src={`${process.env.PUBLIC_URL}/hypedrop.png`} alt="Hypedrop" />
          <h3>Hypedrop</h3>
          <p>Code: THEWEALTHYGAMBLER</p>
          <a href="https://hypedrop.com/r/THEWEALTHYGAMBLER" target="_blank" rel="noopener noreferrer">Visit Hypedrop</a>
        </div>

        {/* Card 2 */}
        <div className="card" onClick={() => handleClick("https://gamdom.com/r/wealthygambler")}>
          <img src={`${process.env.PUBLIC_URL}/og_gamdom.jpg`} alt="Gamdom" />
          <h3>Gamdom</h3>
          <p>Code: wealthygambler</p>
          <a href="https://gamdom.com/r/wealthygambler" target="_blank" rel="noopener noreferrer">Visit Gamdom</a>
        </div>

        {/* Card 3 */}
        <div className="card" onClick={() => handleClick("https://rollbit.com/referral/TheWealthyGambler")}>
          <img src={`${process.env.PUBLIC_URL}/rollbit-1-scaled.jpg`} alt="Rollbit" />
          <h3>Rollbit</h3>
          <p>Code: TheWealthyGambler</p>
          <a href="https://rollbit.com/referral/TheWealthyGambler" target="_blank" rel="noopener noreferrer">Visit Rollbit</a>
        </div>

        {/* Card 4 for Clash.gg */}
        <div className="card" onClick={() => handleClick("https://clash.gg/r/RAZMAN")}>
          <img src={`${process.env.PUBLIC_URL}/clash.png`} alt="Clash.gg" />
          <h3>Clash.gg</h3>
          <p>Code: RAZMAN</p>
          <a href="https://clash.gg/r/RAZMAN" target="_blank" rel="noopener noreferrer">Visit Clash.gg</a>
        </div>

        {/* Card 5 for Packdraw */}
        <div className="card" onClick={() => handleClick("https://packdraw.com?ref=RCB")}>
          <img src={`${process.env.PUBLIC_URL}/packdraw.png`} alt="Packdraw" />
          <h3>Packdraw</h3>
          <p>Code: RCB</p>
          <a href="https://packdraw.com?ref=RCB" target="_blank" rel="noopener noreferrer">Visit Packdraw</a>
        </div>
      </div>

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
