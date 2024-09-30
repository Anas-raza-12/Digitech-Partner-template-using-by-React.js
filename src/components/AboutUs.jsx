import React from "react";
import Bubble from "/src/assets/image/bubble-purple.png.png";
import secondImg from "/src/assets/image/Group-2009.png";
import thirdImg from "/src/assets/image/Screenshot_2024-08-23_124834-removebg-preview.png";
import forthImg from "/src/assets/image/Screenshot_2024-08-23_124849-removebg-preview.png";
import fivthImg from "/src/assets/image/Screenshot_2024-08-23_124903-removebg-preview.png";
const AboutUs = () => {
  return (
    <div className="container-fluid  px-0 AboutUS">
      <div className="first-container d-flex align-items-center ">
        <div className="container position-relative ">
          <h1>ABOUT <br /> <span>US </span></h1>
          <img
            className="position-absolute"
            src={Bubble}
            alt=""
          />
        </div>
      </div>
      <div className="second-container p-3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-12 col-sm-12">
              <img
                width={"100%"}
                src={secondImg}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1>About Digitech!</h1>
              <p>
                Our path at Digitech Partners has been characterized by passion,
                creativity, and an unwavering pursuit of greatness. From a small
                group of driven developers at the beginning of our
                establishment, we have expanded into a full-fledged software
                firm known for producing excellent digital solutions. Our
                journey started in a modest office with a few gifted people who
                had the same goal in mind: using cutting-edge technological
                solutions, to completely transform the digital environment. We
                set out on our objective to assist organizations in achieving
                success via technology, backed by a solid foundation in software
                development and a dedication to quality. Early on, we
                concentrated on assembling a varied portfolio of projects that
                demonstrated our talents. From designing unique websites and
                mobile applications to building intricate software systems, we
                acquired invaluable knowledge and built a solid reputation for
                producing dependable, superior solutions. Our commitment to
                comprehending our customers’ demands and going above and beyond
                their expectations helped us stand out from the competition
                right on.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="third-container">
        <div className="row">
          <div className="col-lg-3 colorFull-bg">
            {" "}
            <div className="mt-5 pt-5">
              <h2>Why Digitech</h2>
            </div>
          </div>
          <div style={{ backgroundColor: "#325FA9" }} className="col-lg-3">
            {" "}
            <div>
              {" "}
              <img
                src={thirdImg}
                alt=""
              />
              <h3>
                Proven Track <br /> Record
              </h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              {" "}
              <img
                src={ forthImg }
                alt=""
              />{" "}
              <h3 style={{ color: "#3D9DD6 " }}>Domain Expertise</h3>
            </div>
          </div>
          <div style={{ backgroundColor: "#D8EBF7" }} className="col-lg-3">
            <div>
              {" "}
              <img
                src={fivthImg}
                alt=""
              />{" "}
              <h3
                style={{
                  color: "#2C3590",
                }}
              >
                Creative Solutions
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-container">
        <div className="row">
          <div style={{ background: "#C8E3F4" }} className="col-lg-4">
            <h2>
              20+
              <br />
              Team Members
            </h2>
            <img src={Bubble} alt="" />
          </div>
          <div style={{ background: "#325FA9" }} className="col-lg-4">
            <h2>
              147 + <br />
              Clients
            </h2>
            <img src={Bubble}  alt="" />
          </div>
          <div style={{ background: "#FFFFFF" }} className="col-lg-4">
            <h2 className="text-dark">
              20 +<br />
              Team Members
            </h2>
            <img src={Bubble}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
