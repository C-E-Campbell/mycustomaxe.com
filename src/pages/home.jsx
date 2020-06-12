import React, { Fragment } from 'react';
import '../pages/Home.scss';
import Header from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
}
