import React from "react";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { logout } from "../../actions/authActions"; // Assuming you have an authActions file
import styles from "./TopNav.module.css";

const { Header, Content } = Layout;

const TopNav = ({ collapsed, setCollapsed }) => {
  const user = true; // Assuming you have an auth state

  // const handleLogout = () => {
  //     dispatch(logout());
  // };

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
              <Button onClick={"handleLogout"}>Logout</Button>
            </div>
          ) : (
            <Button>Login</Button>
          )}
        </div>
      </Header>
    </Layout>
  );
};

export default TopNav;
