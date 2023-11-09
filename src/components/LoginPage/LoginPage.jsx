// React
import React from 'react';
import { useHistory } from 'react-router-dom';

// Component
import LoginForm from '../LoginForm/LoginForm';

// Styles
import './LoginPage.css'

// Images
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
        <br/>
        <br/>
      </center>
      <br/>
    </div>
  );
}

export default LoginPage;