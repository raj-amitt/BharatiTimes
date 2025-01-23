import React, { useState } from "react";
import { Drawer, Button, Menu, Dropdown } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

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
    <div
      style={{
        backgroundColor: "#f5222d",
        padding: "10px 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

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
          <Dropdown overlay={moreMenu}>
            <a href="#" style={{ color: "white", margin: "0 15px" }}>
              More <DownOutlined />
            </a>
          </Dropdown>
          <a href="#" style={{ color: "white", margin: "0 15px" }}>
            Contact Us
          </a>
        </div>

        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={toggleDrawer}
          className="menu-mobile-icon"
          style={{
            color: "white",
            fontSize: "24px",
            display: "none",
          }}
        />
      </div>

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
          <Menu.SubMenu key="sub1" title="More">
            <Menu.Item key="7">Sub Option 1</Menu.Item>
            <Menu.Item key="8">Sub Option 2</Menu.Item>
            <Menu.Item key="9">Sub Option 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="10">
            <a href="#">Contact Us</a>
          </Menu.Item>
        </Menu>
      </Drawer>

      <style jsx>{`
        .menu-desktop {
          display: flex;
        }

        .menu-mobile-icon {
          display: none;
        }

        @media (max-width: 1024px) {
          .menu-desktop {
            display: none; /* Hide desktop menu for smaller screens */
          }

          .menu-mobile-icon {
            display: block; /* Show hamburger menu for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
