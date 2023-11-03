// React
import React from 'react';
import { useHistory } from 'react-router-dom';

// Component
import LoginForm from '../LoginForm/LoginForm';

import './LoginPage.css'

import Logo from './Logo.png'

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <div id="logo-div"><img id="logo" src={Logo} alt="Top Shelf" /></div>
      <LoginForm />

      <center>
        <h2 id="new-user">NEW USER?</h2>
        <button
          type="button"
          id="register-button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          SIGN UP
        </button>
      </center>
    </div>
  );
}

export default LoginPage;

// May not need to edit page
