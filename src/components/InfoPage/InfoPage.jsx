// React
import React from 'react';

// Components
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function InfoPage() {
  return (
    <>
      <Nav />

      <div class="container">
        <h2 id="page-title">ACKNOWLEDGEMENTS</h2>
        <div id="text-container">
          <p>
            Thank you to my family, friends, the Tourmaline cohort, and Prime Digital Academy
            for helping make this project a reality.
          </p>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default InfoPage;
