import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./SideNav.module.css";

const { Sider } = Layout;

const SideNav = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={styles.sider}
      style={{ minHeight: '95.3vh' }} // Add this line
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/user">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/store">Store</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/billing">Billing</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
