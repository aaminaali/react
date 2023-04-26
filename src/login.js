// import React from "react";
// import './login.css';
// import './styleguide.css'; 

// function App() {
//     return <Login {...loginData} />;
// }

// export default App;

// function Login (props) {
//     const {
//         hello, 
//         place, 
//         loginRegister, 
//         dataSelection, 
//         title, 
//         username, 
//         password, 
//         forgotPassword, 
//         login, 
//         registerNewAccount, 
//         copyrightGiesColl,
// } = props;


//     return (
//         <div className="container-center-horizontal">
//             <div className="login screen"> 
//                 <div className="overlap-group">
//                     <div className="overlap-group2 aneklatin-normal-white-30px"> 
//                         <img className= "hello-1" src="hello-1.png" alt="hello 1" />
                        // {/* <img className="icon-information" src="icondocument.png" alt="icon-information" /> */}
//                         <div className="place">
//                             {place}
//                         </div>
//                         {/* <img className="icon-document" src="icondocument.png" alt="icon-document" /> */}
//                         <div className="overlap-group6">
//                             <img className="icon-lock" src= "iconunlock.png" alt="icon-lock" />
//                             <img className="rectangle-50" src="rectangle50.png" alt="Rectangle 50" />
//                             <p className="login-register"> 
//                                 {loginRegister} 
//                             </p> 
//                             <div className= "data-selection"> 
//                                 {dataSelection}
//                             </div> 
//                         </div>
//                     </div>
//                     <h1 className="title mada-bold-white-60px"> 
//                         {title} 
//                     </h1> 
//                     <div className="overlap-group4"> 
//                         <div className="username inter-normal-black-36px">
//                             {username } 
//                         </div>
//                     </div> 
//                     <div className="overlap-group3">
//                         <div className="password inter-normal-black-36px">
//                             {password} 
//                         </div>
//                     </div> 
//                     <div className="forgot-password"> 
//                         {forgotPassword}
//                     </div> 
//                     <div className="overlap-group5"> 
//                         <div className="login-1">
//                             {login}
//                         </div>
//                     </div>
//                     <div className="overlap-group1">
//                         <div className="register-new-account inter-normal-black-36px">
//                             {registerNewAccount} 
//                         </div>
//                     </div> 
//                 </div>
//                 <p className="copyright-gies-coll mada-normal-white-15px"> 
//                     {copyrightGiesColl} 
//                 </p>
//             </div> 
//         </div>
// );
// }

// const loginData = {
//     hello: "hello-1.png", 
//     place: "Home" ,
//     loginRegister: "Login/Register",
//     dataSelection: "Data Selection",
//     title: "Sign In", 
//     username: "Username" ,
//     password: "Password" ,
//     forgotPassword: "Forgot Password?" ,
//     login: "Login",
//     registerNewAccount: "Register New Account" ,
//     copyrightGiesColl: "Copyright, Gies College of Business, University of Illinois. All rights reserved.",
// };
// 

import React, { useState } from 'react';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email} and password: ${password}`);
  }

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log('Forgot password');
  }

  return (
    <div className="login-page">
      <div className="login-container">
      <div className="rectangle-11"></div>
      <img className= "hello-1" src="hello-1.png" alt="hello 1" />
      
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Log in</button>
          <a href="/" onClick={handleForgotPassword}>Forgot Password?</a>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;


