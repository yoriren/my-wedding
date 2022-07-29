import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Notifications, { notify } from "react-notify-toast";


import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Ceremony.scss";

const Ceremony = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const copiedToClipboard= () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor
    );
  }

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">
            The ceremony is now live!
          </div>
          <div className="joinButtonWrapper">
            <div>
              <a
                href="https://youtu.be/EXOL-3JyXMI"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                  <p className="buttonTitle">Join Now!</p>
                </Button> <br/>
              </a>
            </div>
          </div> {/* joinButtonWrapper */}
          <div className="vendors">
            <p>
              Hosted at
              <a
                href="https://www.strathmore.org/mansion"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                the Mansion at Strathmore
              </a>
            </p>
            <p>
              Officiated by 
              <a 
                href="https://elleweds.wixsite.com/elleweds"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer">
                  Erren Lee
              </a>
            </p>
            <p>
              Music provided by
              <a
                href="http://cellobosco.com/"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Carol Anne Bosco
              </a>
            </p>
            <p>
              Photos by
              <a
                href="https://anaisabelphotography.com/"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Ana Isabel Photography
              </a>
              !
            </p>
          </div> {/* vendors */}
      </span> // finishedCountdown
    )
  }

      
  const renderer = () => {
      return <Completionist />;
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("ceremony-section", className)} id={anchor}>
        <Notifications options={{zIndex: 200, top: '50px'}} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader}/>
            <div className="joinButtonWrapper">
              <div>
                <a
                  href="https://goo.gl/maps/pX8osTks4MN9Fr5P9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                    <p className="buttonTitle">Google Maps Location</p>
                  </Button> <br/>
                </a>
              </div>
            </div> {/* joinButtonWrapper */}
        </Row>
        <div className="countdownAndVideoDiv">
          <Row className="vendorDiv">
            <span className="finishedCountdown">
              
              <div className="vendors">
                <p className="singleVendor">
                  Cordially invite you to our wedding dinner at
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  Hee Lai Ton Restaurant @Shaw Parade
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  3rd floor, Shaw Parade,
				  Jalan Changkat Thambi Dollah,
				  55100 Kuala Lumpur.
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  On Sunday, 18th September 2022
				  at 7.00pm sharp
                </p> {/* singleVendor */}
              </div> {/* vendors */}
            </span> {/* finished countdown */}
          </Row> {/* vendorDiv */}
          <Row className="videoDiv">
           <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.8301685989904!2d101.7129511!3d3.1395095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfbc38e88b38749a!2sHee%20Lai%20Ton%20Restaurant%20%40Shaw%20Parade!5e0!3m2!1sms!2smy!4v1659102261919!5m2!1sms!2smy" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </Row> {/* videoDiv */}
        </div> {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Ceremony.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Ceremony.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Ceremony;
