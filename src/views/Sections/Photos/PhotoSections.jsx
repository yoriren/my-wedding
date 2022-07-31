/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoItem from "components/PhotoItem";
import "./Photos.scss";

class PhotoSections extends Component {
  constructor() {
    super();

    this.state = {
      showSet1: false,
      showSet2: false,
      showSet3: false,
    };
    this.toggleSet1 = this.toggleSet1.bind(this);
    this.toggleSet2 = this.toggleSet2.bind(this);
    this.toggleSet3 = this.toggleSet3.bind(this);
  }

  toggleSet1() {
    this.setState({
      showSet1: !this.state.showSet1,
      showSet2: false,
      showSet3: false,
    })
  }

  toggleSet2() {
    this.setState({
      showSet1: false,
      showSet2: !this.state.showSet2,
      showSet3: false,
    })
  }

  toggleSet3() {
    this.setState({
      showSet1: false,
      showSet2: false,
      showSet3: !this.state.showSet3,
    })
  }
  

  render() {
    // FOR TEMPLATE: add "subheader: rootSubHeader" inside const below:
    const { Set1, Set2, Set3} = this.props;
    if (this.state.showSet1){
        return (
            <div className="photo-section-wrapper">
                <Row className="justify-content-center button-wrapper">
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleSet1}>
                        <p className="buttonTitle">Set 1</p><FontAwesomeIcon icon="caret-up" className="caret-up" />
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet2}>
                        <p className="buttonTitle">Set 2</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet3}>
                        <p className="buttonTitle">Set 3</p>
                    </Button>  
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {Set1.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        Set1={Set1}
                    />
                    ),
                )}
                </Row>
                <Row className="justify-content-center button-wrapper">
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleSet1}>
                        <p className="buttonTitle">Set 1</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet2}>
                        <p className="buttonTitle">Set 2</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet3}>
                        <p className="buttonTitle">Set 3</p>
                    </Button>  
                    <br/>
                </Row>
            </div> 
        )
    } // Set1
    if (this.state.showSet2){
        return (
            <div className="photo-section-wrapper">
                <Row className="justify-content-center button-wrapper">
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet1}>
                        <p className="buttonTitle">Set 1</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleSet2}>
                        <p className="buttonTitle">Set 2</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet3}>
                        <p className="buttonTitle">Set 3</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {Set2.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        Set2={Set2}
                    />
                    ),
                )}
                </Row>
                <Row className="justify-content-center button-wrapper">
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet1}>
                        <p className="buttonTitle">Set 1</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleSet2}>
                        <p className="buttonTitle">Set 2</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet3}>
                        <p className="buttonTitle">Set 3</p>
                    </Button> 
                    <br/>
                </Row>
            </div> 
        )
    } // Set2
    if (this.state.showSet3){
        return (
            <div className="photo-section-wrapper">
                <Row className="justify-content-center button-wrapper">
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet1}>
                        <p className="buttonTitle">Set 1</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet2}>
                        <p className="buttonTitle">Set 2</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleSet3}>
                        <p className="buttonTitle">Set 3</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {Set3.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        Set3={Set3}
                    />
                    ),
                )}
                </Row>
                <Row className="justify-content-center button-wrapper">
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet1}>
                        <p className="buttonTitle">Set 1</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet2}>
                        <p className="buttonTitle">Set 2</p>
                    </Button> 
                    <Button size="sm" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleSet3}>
                        <p className="buttonTitle">Set 3</p>
                    </Button> 
                    <br/>
                </Row>
            </div> 
        )
    } // Set3
    return (
        <Row className="justify-content-center button-wrapper">
            <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet1}>
                <p className="buttonTitle">Set 1</p>
            </Button> 
            <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet2}>
                <p className="buttonTitle">Set 2</p>
            </Button> 
            <Button size="sm" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleSet3}>
                <p className="buttonTitle">Set 3</p>
            </Button> 
            <br/>
        </Row>
    ) // hide all
}}


PhotoSections.propTypes = {
  Set1: PropTypes.object,
  Set2: PropTypes.object,
  Set3: PropTypes.object,
};

PhotoSections.defaultProps = {
    Set1: null,
    Set2: null,
    Set3: null,
};

export default PhotoSections;