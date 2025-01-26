import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import styles from "./SideNav.module.css";

const { Sider } = Layout;

const SideNav = ({ collapsed }) => {
  const location = useLocation();
  const selectedKey = location.pathname.split("/")[1] || "1"; // Determine selected key based on path

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={styles.sider}
      style={{ minHeight: "95.3vh" }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="store" icon={<VideoCameraOutlined />}>
          <Link to="/store">Store</Link>
        </Menu.Item>
        <Menu.Item key="billing" icon={<UploadOutlined />}>
          <Link to="/billing">Billing</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
