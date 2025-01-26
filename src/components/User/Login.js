import React, { useState } from "react";
import styles from "./Login.module.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/service"; // Import the login function

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    const credentials = { email, password };
    try {
      const response = await login(credentials);
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log("Login successful:", response);
        localStorage.setItem("jwtToken", response.data.token); // Store JWT token in local storage
        navigate("/store"); // Navigate to store page on successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure (e.g., show error message)
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>User Name</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.loginButtonRow}>
          <Button type="primary" onClick={handleLoginClick}>
            Login
          </Button>
          <Button type="default" onClick={handleSignupClick}>
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
