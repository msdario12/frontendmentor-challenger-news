import { useState } from "react";

function App() {
  return (
    <main className="font-secondary">
      <h1>Stay updated!</h1>
      <h4>Join 60,000+ product managers receiving monthly updates on:</h4>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more! </li>
      </ul>
      <h3>Email adress</h3>
      <input
        type="text"
        name="subscribe"
        placeholder="email@company.com "
        value=""
      />
      <button type="button">Subscribe to a monthly newsletter</button>
      <div className="bg-gray-600 text-primary">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="font-bold" href="#">
          Dario Mansilla
        </a>
        .
      </div>
    </main>
  );
}

export default App;
