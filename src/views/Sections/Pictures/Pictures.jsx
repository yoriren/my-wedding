import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Pictures = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, pictures } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {pictures.map((service) => (
          <Col md={4} key={service.header}>
            <ServiceItem {...service} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Pictures.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Pictures.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Pictures;
