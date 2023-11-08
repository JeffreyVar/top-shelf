// React
import React from 'react';

// Components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// Images
import LinkedIn_qr from './LinkedIn_qr.png'

// Styles
import '../App/App.css';
import './AboutPage.css'

function AboutPage() {
  return (
    <>
      <Nav />
      <div class="container">
        <h2 id="page-title">ABOUT</h2>
        <div id="text-container">
          <h3>Technologies Used</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Saga</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Material UI</li>
            <li>Passport</li>
            <li>TheCocktailDB API</li>
          </ul>
          <br />
          <h3>Future Goals</h3>
          <ul>
            <li>Create a feature for a user to manage ingredients in their own bar (Shelf) </li>
            <li>Create a feature for users to purchase missing ingredients through an external merchant, such as Drizly</li>
            <li>Design and create a new API/database from scratch with better search functionality</li>
          </ul>
          <br />
          <h3>ACKNOWLEDGEMENTS</h3>
          <p>
            Thank you to my family, friends, the Tourmaline cohort, and Prime Digital Academy
            for helping make this project a reality.
          </p>
          <br />
          <h3>CONNECT</h3>
          <div id="connect">
            <img id="linkedIn" src={LinkedIn_qr} alt="LinkedIn qr_code" />
            <p id="contact">LinkedIn.com/in/Jeff-Var/</p>
            <p id="contact">jeffvarughese@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
