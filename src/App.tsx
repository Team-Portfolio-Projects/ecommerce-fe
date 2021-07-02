import React from 'react';

import Nav from './components/Nav';
import './index.css'
import GoogleLogin from 'react-google-login';
const App: React.FC = () => {
 
 
 
  const handleLogin = async googleData => {
  const res = await fetch("http://localhost:3000/auth/google", {
      method: "POST",
      body: JSON.stringify({
      token: googleData.tokenId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await res.json()

  localStorage.setItem(data._id,'userId')
}

  return (
    <div>
      <GoogleLogin
    clientId="724343472595-5p9le63sa99h2hckb905dagmr4379p6t.apps.googleusercontent.com"
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
/>
      <Nav></Nav>
    </div>
  );
};

export default App;