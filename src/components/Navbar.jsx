import React, { useState } from "react";
import { Menu, Layout, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  SwitcherOutlined,
  BulbOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

import icon from "../images/logo.svg";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const { Sider } = Layout;

  const titleStyle = { color: "white", fontFamily: "'Patua One', cursive" };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsedWidth={60}
      width={250}
      theme="dark"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 10px",
        }}
      >
        <a href="/">
          {collapsed ? (
            <Avatar src={icon} size="large" />
          ) : (
            <Typography.Title level={1} style={titleStyle}>
              CryptoMoney
            </Typography.Title>
          )}
        </a>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="vertical"
        style={{ fontWeight: "bolder" }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SwitcherOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
