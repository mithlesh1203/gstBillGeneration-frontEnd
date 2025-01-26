import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "../../components/TopNavBar/TopNav";
import SideNav from "../../components/SideNavBar/SideNav";
import AppRoutes from "../../routes/AppRoutes";
import { Layout } from "antd";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <TopNav collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <AppRoutes />
        </Layout>
      </Layout>
    </Router>
  );
};

export default Home;
