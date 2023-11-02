import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import '../App/App.css';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
      <Nav /> 
      <div className="container">
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
          <h3>Future Goals</h3>
            <ul>
              <li>Create a feature for a user to manage ingredients in their own bar (Shelf) </li>
              <li>Create a feature for users to purchase missing ingredients through an external merchant, such as Drizly</li>
              <li>Design and create a new API/database from scratch with better search functionality</li>
            </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
