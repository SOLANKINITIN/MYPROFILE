import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Educaation from './components/Educaation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skill />
        <Educaation />
        <Contact />
        <Footer />
      </div>
    );
  }
}
