import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";
import { api } from '../../services/Api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email) {
      setErrorMessage('Email is required.');
      return;
    }

    if (!password) {
      setErrorMessage('Password is required.');
      return;
    }

    try {
      const response = await api.post('/login', { emailId: email, password });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login.');
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>Login</button>
          <button type="button" onClick={handleSignupClick} className={styles.signupButton}>New User? Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;