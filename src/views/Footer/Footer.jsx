import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

import "./Footer.scss";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col className="copyright credit">
            <div className="nameAndLink">
              ©&nbsp;
              <a 
                href="https://www.linkedin.com/in/limjunyao/"
                target="_blank"
                rel="noreferrer"
              >
                Jun Yao
              </a>
              , 2022
            </div>
          </Col> {/* copyright */}
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
