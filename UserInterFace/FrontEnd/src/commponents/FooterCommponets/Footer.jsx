import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";
import "../../style/footer.css";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footerbg text-white ">
        <Container>
          <Row className="align-items-start py-2">
            {/* Left side - Game Unite logo */}
            <Col md={6} className="fw-bold mt-2 fs-3 py-2">
              Game Unite
            </Col>
            {/* Right side - Social media icons */}
            <Col md={6} className="text-end">
              <div className="social-icons-footer mt-3">
                <FaInstagram className="icon text-instagram text-primary mx-2 display-6" />
                <FaTwitter className="icon text-twitter text-primary mx-2 display-6" />
                <FaFacebook className="icon text-facebook text-primary mx-2 display-6" />
                <FaLinkedin className="icon text-facebook text-primary mx-2 display-6" />
              </div>
            </Col>
            {/* Bottom Border */}
            <Col xs={12}>
              <hr className="border-white border border-2" />
            </Col>
            {/* Company Info */}
            <Col md={9}>
              <h5 className="text-light fs-4 fw-bold">Company info</h5>
              <nav class="footer ">
                <div class="container-fluid">
                  <a class="footer-brand  fw-bold" href="#">
                    Home
                  </a>
                </div>
                <div class="container-fluid">
                  <a class="footer-brand  fw-bold" href="#">
                    About Us
                  </a>
                </div>
                <div class="container-fluid">
                  <a class="footer-brand  fw-bold" href="#">
                    Contact Us
                  </a>
                </div>
                <div class="container-fluid">
                  <a class="footer-brand  fw-bold" href="#">
                    Blogs
                  </a>
                </div>
              </nav>
            </Col>
            {/* Get in Touch */}
            <Col md={3} className="text-end">
              <h5>Get in Touch</h5>
              <Form>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Email" />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary bg-primary text-light"
                      type="button"
                    >
                      Subcribe
                    </button>
                  </div>
                </div>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone.
                </Form.Text>
              </Form>
              <Form.Text className="text-bold text-light">
                Gameunite@gmail.com
              </Form.Text>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
