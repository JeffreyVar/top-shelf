// React
import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import RegisterForm from '../RegisterForm/RegisterForm';

// Image
import Logo from '../LoginPage/Logo.png'

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <div id="logo-div"><img id="logo" src={Logo} alt="Top Shelf" /></div>
      <RegisterForm />

      <center>
        <h2 id="new-user">ALREADY REGISTERED?</h2>
        <button
          type="button"
          id="register-button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          LOGIN
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
