import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


const Login = (props) => {
  const handleLogin = () => {

  }
  return (
  <>
    <Header></Header>
      <button onClick={handleLogin}>Google</button>
      <button onClick={handleLogin}>Github</button>
    <Footer></Footer>
  </>
  )
};

export default Login;