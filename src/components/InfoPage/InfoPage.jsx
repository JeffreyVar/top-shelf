import React from 'react';

import Nav from '../Nav/Nav';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
      <Nav /> 

      <div className="container">
      <h2 id="page-title">ACKNOWLEDGEMENTS</h2>
        <p>Thank you to my family, friends, the Tourmaline cohort and Prime Digital Academy 
            for helping make this project a reality.  
        </p>
      </div>
    </>
  );
}

export default InfoPage;
