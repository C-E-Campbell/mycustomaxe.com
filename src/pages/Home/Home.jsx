import React, { Fragment } from 'react';
import '../../assets/topImg.jpg';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero.jsx';
import '../Home/Home.scss';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
}
