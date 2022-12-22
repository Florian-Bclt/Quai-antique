import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <Chef />
    <Intro />
    <Laurels />
    <SpecialMenu />
    <FindUs />
    <Footer />
  </div>
);

export default App;
