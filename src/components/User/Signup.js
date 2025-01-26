import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/service"; // Import the signup function

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupClick = async () => {
    const userData = { name, email, mobileNo, password }; // Ensure payload matches schema
    try {
      const response = await signup(userData);
      console.log('Signup successful:', response);
      localStorage.setItem("jwtToken", response.token); // Store JWT token in local storage
      navigate("/store"); // Navigate to store page on successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure (e.g., show error message)
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupContainer}>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Mobile No</label>
          <Input
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.signupButtonRow}>
          <Button type="primary" onClick={handleSignupClick}>
            Signup
          </Button>
          <Button type="primary" onClick={handleLoginClick}>
            login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
