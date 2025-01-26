import React from "react";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "./TopNav.module.css";
import { logout } from "../../services/service";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const { Header, Content } = Layout;

const TopNav = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate(); // Initialize navigate
  const user = localStorage.getItem("jwtToken"); // Check if user is authenticated

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Layout>
      <Header className={styles.topNavBar}>
        <div className={styles.leftAligned}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={styles.button}
          />
        </div>
        <div className={styles.leftAlignedMenu}>
          <Button className={styles.adminButton}>Home</Button>
          <Button className={styles.adminButton}>Admin</Button>
        </div>
        <div className={styles.rightAligned}>
          {user ? (
            <div className={styles.userProfile}>
              <span>{user.name}</span>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Button onClick={() => navigate("/login")}>Login</Button>
          )}
        </div>
      </Header>
    </Layout>
  );
};

export default TopNav;
