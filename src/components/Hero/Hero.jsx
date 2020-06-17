import React from 'react';
import './Hero.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-Text">
        <h2>
          You Built It<span>.</span>
        </h2>
        <h2>
          Now Show It<span>.</span>
        </h2>

        <Link to="/Dashboard">View Custom Builds Now</Link>
      </div>
    </div>
  );
}
