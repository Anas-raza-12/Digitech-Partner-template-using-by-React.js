import React from "react";
import Bubble from "/src/assets/image/bubble-purple.png.png";
import firsthImg from "/src/assets/image/Quality-Assurance-AwsQuality.png";
import secondImg from "/src/assets/image/1_Dk_jsNk6mqhWCo8HBKFWiw.jpg";
import thirdImg from "/src/assets/image/Main-16.jpg";
import forthImg from "/src/assets/image/A2TT9.jpg";
import fivthImg from "/src/assets/image/1_hCdbBEVdgpnlgYc-CyxMbA.jpg";
import sixthImg from "/src/assets/image/app-development-process-7-steps-01.png";
import seventhImg from "/src/assets/image/WordPress-Website-Design-Company-in-UK-copy.png";
import eightImg from "/src/assets/image/1693292261452.png";


const Blog = () => {
  return (
    <div className="container-fluid Blogs p-0 m-0">
      <div className="first-container">
        <div className="container position-relative">
          <h1>Our <br /> <span>Blogs</span></h1>
          <img
            src={Bubble}
            alt=""
            className="position-absolute"
          />
        </div>
      </div>
      <div className="second-container">
        <div className="row">
          <div
            className="col-lg-3 col-md-3  blog-sec"
          >
            <img
              width={"100%"}
              src={firsthImg}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
            <div>
            <h4>Quality assurance and testing (QA)</h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              A crucial phase in the creation of apps is testing, which looks
              for and fixes issues and verifies functionality and performance.
              Functional, usability, performance, and
            </h6>
            <p className="green-color">Read More »</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img
              width={"100%"}
              src={secondImg}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
           <div>
           <h4>After-launch assistance and upkeep</h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              The development of an app doesn’t stop with its release. To keep
              the app functioning properly and live up to user expectations,
              ongoing support and
            </h6>
            <p className="green-color">Read More »</p>
           </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img width={"100%"} src={thirdImg} alt="" />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
            <div>
            <h4>Increasing Conversion and Engagement Rates</h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              Video animation’s captivating quality may greatly increase viewer
              engagement and conversion rates. Your reach and visibility will
              increase if you use animated videos since they
            </h6>
            <p className="green-color">Read More »</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img width={"100%"} src={forthImg} alt="" />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
           <div>
           <h4>CAPTIVATING VIDEO ANIMATIONS TO ENGAGE YOUR AUDIENCE</h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              It might be difficult to grab and hold your audience’s attention
              in the fast-paced digital world. Video animation is one potent
              method that has shown
            </h6>
            <p className="green-color">Read More »</p>
           </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img
              width={"100%"}
              src={fivthImg}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
            <div>
            <h4>
              REASONS WHY YOUR BUSINESS NEEDS SEO SERVICE AND WHAT MAKES
              DIGITECH STAND FROM OTHERS:
            </h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              Having an online presence is crucial for every organization in the
              digital era. However, having a website alone is insufficient.
              Businesses must make sure potential
            </h6>
            <p className="green-color">Read More »</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img
              width={"100%"}
              src={sixthImg}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
           <div>
           <h4>
              CRUCIAL PROCESS OF APPLICATION DEVELOPMENT; STEP-BY-STEP GUIDE HOW
              DIGITECH MEETS YOUR NEEDS WITH EXCELLENCE:
            </h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              The process of creating a mobile application is intricate and
              multidimensional, requiring careful planning, carrying out, and
              iterating. We are aware of the complexities involved
            </h6>
            <p className="green-color">Read More »</p>
           </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img
              width={"100%"}
              src={seventhImg}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
            <div>
            <h4>
              HOW DIGITECH EXPERTS CREATE STUNNING AND USER-FRIENDLY WEBSITE
              DESIGNS
            </h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              Your website’s design has a significant impact on how users engage
              with your content and perceive your brand, thus it can make or
              break their
            </h6>
            <p className="green-color">Read More »</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3  blog-sec">
            <img
              width={"100%"}
              src={eightImg}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-8  blog-sec">
            <div>
            <h4>IMPROVE YOUR BRAND WITH SKILLED WEBSITE DEVELOPMENT</h4>
            <p>August 2, 2024 /// No Comments</p>
            <h6>
              Having a strong online presence is crucial for a company’s success
              in the modern digital era. A website is frequently a potential
              customer’s first point
            </h6>
            <p className="green-color">Read More »</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
