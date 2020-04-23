import React from 'react';
import './App.scss';
// Import Child Component
import Menu from './views/Header/Menu';
import Header from './views/Header/Header';
import AboutUs from './views/AboutUs/AboutUs';
import Feature from './views/Feature/Feature';
import Testimonial from './views/Testimonial/Testimonial'
import Footer from './views/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <AboutUs/>
      <Feature/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;