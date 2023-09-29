import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <h1>React Projects 📽️</h1>

        <div className="app-dir">
          <div>
            <p className="app-name">
              <Link to="/travel-list">Travel List ✈️</Link>
            </p>
          </div>
          <div>
            <p className="app-name">
              <Link to="/flash-card">Flash Card 📖</Link>
            </p>
          </div>
          <div>
            <p className="app-name">
              <Link to="/accordion">Accordion 📄</Link>
            </p>
          </div>
          <div>
            <p className="app-name">
              <Link to="/steps">Steps 🪜</Link>
            </p>
          </div>
          <div>
            <p className="app-name">
              <Link to="/eat-n-split">Eat-N-Split 🍴</Link>
            </p>
          </div>
        </div>
        <footer className="stats">
          <em
            onClick={() =>
              window.open("https://github.com/salsadsid", "_blank")
            }
            className="app-footer"
          >
            ©️ github/salsadsid
          </em>
        </footer>
      </div>
    </>
  );
}
