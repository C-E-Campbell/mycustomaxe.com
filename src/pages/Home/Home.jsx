import React, { Fragment } from 'react';
import '../../assets/topImg.jpg';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import '../Home/Home.scss';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <div className="about_section">
        <h2>Test Headline Here</h2>
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/r__hnUTYxB4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="card_container">
        <div className="card_inner_container">
          <i class="fas fa-drafting-compass fa-5x"></i>
          <i class="fas fa-comments fa-5x"></i>
          <i class="far fa-images fa-5x"></i>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
