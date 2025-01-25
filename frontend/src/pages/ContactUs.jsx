import { useState, useEffect } from "react";
import { Input, Button, Form, Row, Col, Typography } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
// import "./ContactUS.css";
// import Map from "../map/Map";

const { TextArea } = Input;
const { Title } = Typography;

const ContactUs = () => {
  const [theme, setTheme] = useState("light");
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCorrectAnswer(num1 + num2);
    setCaptchaQuestion(`${num1} + ${num2} =`);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSubmit = () => {
    const userAnswer = parseInt(captchaInput, 10);
    if (userAnswer === correctAnswer) {
      alert("Form submitted successfully!");
      generateCaptcha();
      setCaptchaInput("");
    } else {
      alert("Captcha incorrect. Please try again.");
    }
  };

  return (
    <div className={`contact-form-container ${theme}`}>
      <div className="form-wrapper">
        <div className="theme-toggle">
          <Button
            icon={theme === "light" ? <SunOutlined /> : <MoonOutlined />}
            onClick={handleThemeToggle}
            type="text"
          />
        </div>
        <Title level={2} className={`form-title ${theme}`}>
          Contact Us
        </Title>
        <Form onFinish={handleSubmit} layout="vertical" className="contact-form">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="contact"
                rules={[{ required: true, message: "Please input your contact number!" }]}
              >
                <Input placeholder="Contact Number" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="location"
                rules={[{ required: true, message: "Please input your location!" }]}
              >
                <Input placeholder="Location" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Please input the subject!" }]}
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <TextArea rows={4} placeholder="Message" />
          </Form.Item>
          <div className="captcha-container">
            <span className={`captcha-question ${theme}`}>{captchaQuestion}</span>
            <Input
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Answer"
              className="captcha-input"
              maxLength={3}
            />
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={`submit-button ${theme}`}
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ marginTop: '20px' }}> 
        {/* <Map />  */}
      </div>
    </div>
  );
};

export default ContactUs;