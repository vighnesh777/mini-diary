import React from 'react';
import './Login.css';
const handleSignInClick = () => {
    const signup = document.querySelector(".signup-container");
    const signin = document.querySelector(".signin-container");
    const si = document.querySelector(".si");
    const su = document.querySelector(".su");
    su.classList.remove("active");
    si.classList.add("active");

    signin.classList.remove("nodisplay");

    signup.classList.add("nodisplay");
}

const handleSignUpClick = () => {
    const signup = document.querySelector(".signup-container");
    const signin = document.querySelector(".signin-container");
    const si = document.querySelector(".si");
    const su = document.querySelector(".su");
    si.classList.remove("active");
    su.classList.add("active");

    signin.classList.add("nodisplay");
    signup.classList.remove("nodisplay");
}

const Login = () => {
    return (
        <div className="container">
            <div class="login-container">
                <div className="button-container">
                    <div className="si active" onClick={handleSignInClick}> <p className="sign-in-button" >Sign In</p></div>
                    <div className="su" onClick={handleSignUpClick}><p className="sign-up-button" >Sign Up</p></div>
                </div>

                <div className="form-container">

                    <form action="https://diaryservers.herokuapp.com/login" method="post">
                        <div className="signin-container">
                        
                            <input type="text" name="name" placeholder=" " id="signinName" autoComplete="off" />
                            <label for="signinName">Email</label>
                            
                            <input type="password" name="password" placeholder=" " id="signinPassword" autoComplete="off" />
                            <label for="signinPassword">Password</label>
                            <button className="login-button">Login</button>
                            <a href="google.com" style={{ color: "yellow", textDecoration: "none" ,fontWeight:"900"}}>Forgot your password?</a>
                        </div>
                    </form>
                    <form action="http://localhost:3001/signin" method="post" >
                        <div className="signup-container  nodisplay">
                            
                            <input type="email" name="Email" id="signupEmail"   placeholder=" " autoComplete="off"/>
                            <label for="signupEmail">Email</label>
                            
                            <input type="text" name="Username" id="signupUsername" placeholder=" " autoComplete="off"/>
                            <label for="signupUsername">Username</label>
                            
                            <input type="password" name="password1" id="signupPassword"  placeholder=" " autoComplete="off"/>
                            <label for="signupPassword">Password</label>
                            <button className="signup-button" type="submit" >Join</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;
