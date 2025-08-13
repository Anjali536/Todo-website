import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import userInfoAtom from '../../recoil/UserInfoAtom';

const LoginCard = () => {
  const [, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);

        // Safely check for login success message
        const message = data?.message?.toLowerCase?.();
        if (message && message.includes("success")) {
          console.log("✅ Login successful");
          localStorage.setItem("userStatus", "true");
          setUserInfo(true);
          navigate('/home');
        } else {
          console.log("❌ Login failed");
          localStorage.setItem("userStatus", "false");
          setUserInfo(false);
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="login-card-container">
      <h1 className="login-heading">TodoX</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="login-inputs"
          ref={usernameRef}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-inputs"
          ref={passwordRef}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginCard;
