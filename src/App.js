import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <p>
          <Link to="/travel-list"> Travel List</Link>
        </p>
        <p>
          <Link to="/flash-card"> Flash Card</Link>
        </p>
        <p>
          <Link to="/accordion"> Accordion</Link>
        </p>
        <p>
          <Link to="/steps"> Steps</Link>
        </p>
        <p>
          <Link to="/eat-n-split"> EatNSplit</Link>
        </p>
      </div>
    </>
  );
}
