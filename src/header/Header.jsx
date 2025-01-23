import React, { useState } from "react";
import { Drawer, Button, Menu, Dropdown } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./Header.css";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Dropdown menu for "More"
  const moreMenu = (
    <Menu>
      <Menu.Item key="1">Sub Option 1</Menu.Item>
      <Menu.Item key="2">Sub Option 2</Menu.Item>
      <Menu.Item key="3">Sub Option 3</Menu.Item>
    </Menu>
  );

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <div className="header-container">
      <div className="header-inner-container">
        {/* Logo for Mobile */}
        <div className="header-title-mobile">BharatiTimes</div>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            About Us
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            National
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            International
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Science & Tech
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Business & Economics
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Education
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Health
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Entertainment
          </a>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Sports
          </a>
          <Dropdown overlay={moreMenu}>
            <a href="#" style={{ color: "white", margin: "0 15px" }}>
              More <DownOutlined />
            </a>
          </Dropdown>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={toggleDrawer}
          className="menu-mobile-icon"
          style={{
            color: "white",
            fontSize: "24px",
          }}
        />
      </div>

      {/* Drawer Menu for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <a href="#">Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#">About Us</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#">National</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="#">International</a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="#">Science & Tech</a>
          </Menu.Item>
          <Menu.Item key="6">
            <a href="#">Business & Economics</a>
          </Menu.Item>
          <Menu.Item key="7">
            <a href="#">Education</a>
          </Menu.Item>
          <Menu.Item key="8">
            <a href="#">Health</a>
          </Menu.Item>
          <Menu.Item key="9">
            <a href="#">Entertainment</a>
          </Menu.Item>

          <Menu.SubMenu key="sub1" title="More">
            <Menu.Item key="10">Sub Option 1</Menu.Item>
            <Menu.Item key="11">Sub Option 2</Menu.Item>
            <Menu.Item key="12">Sub Option 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="13">
            <a href="#">Contact Us</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
