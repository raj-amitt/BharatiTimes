import React, { useState, useEffect } from "react";
import { Input, Button, Form, Row, Col, Typography, Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import "./ContactUS.css";

const { TextArea } = Input;
const { Title } = Typography;

const ContactUS = () => {
  const [theme, setTheme] = useState("light");
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCorrectAnswer(num1 + num2);
    setCaptchaQuestion(`${num1} + ${num2} = `);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSubmit = (values) => {
    const userAnswer = parseInt(captchaInput, 10);
    if (userAnswer === correctAnswer) {
      alert("Form submitted successfully!");
      generateCaptcha();
    } else {
      alert("Captcha incorrect. Please try again.");
    }
  };

  return (
    <div
      className={`contact-form-container ${theme} contact_form`}
      style={theme === "light" ? lightThemeStyle : darkThemeStyle}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Contact Us
      </Title>
      <button onClick={handleThemeToggle} className="theme-toggle-btn">
        {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
      </button>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Form onFinish={handleSubmit} layout="vertical" style={{width:"55%"}}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="contact"
              label="Contact Number"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
              ]}
            >
              <Input type="tel" placeholder="Contact Number" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="location"
              label="Location"
              rules={[
                { required: true, message: "Please input your location!" },
              ]}
            >
              <Input placeholder="Location" />
            </Form.Item>
          </Col>
        </Row>
        <Col span={12}>
        <Form.Item
          name="subject"
          label="Subject"
          rules={[{ required: true, message: "Please input the subject!" }]}
        >
          <Input placeholder="Subject" />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <TextArea rows={4} placeholder="Message" />
        </Form.Item>
        </Col>
        <div className="captcha">
          <Col span={4}>
          <Form.Item label={captchaQuestion} required>
            <Input
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Answer"
            />
          </Form.Item>
          </Col>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

// Light and Dark Theme Styles
const lightThemeStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
};

const darkThemeStyle = {
  backgroundColor: "#2c2c2c",
  color: "#ffffff",
};

export default ContactUS;
