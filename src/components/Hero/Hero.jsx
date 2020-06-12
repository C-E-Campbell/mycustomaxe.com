import React from 'react';
import './Hero.scss';
import video from '../../assets/heroVideo.mp4';
import { hero_img } from '../../assets/topImg.jpg';
export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-Text">
        <h2>
          You built it<span>.</span>
        </h2>
        <h2>
          Now show it<span>.</span>
        </h2>

        <a href="#">View Custom Builds Now</a>
      </div>
    </div>
  );
}
