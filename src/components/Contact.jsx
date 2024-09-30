import React from "react";
import { Link } from "react-router-dom";
import Bubble from "/src/assets/image/bubble-purple.png.png";
import firstImg from "/src/assets/image/Group-2009 (1).png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const faqs = [
    {
      id: "coll1",
      question: "What services is Digitech providing?",
      answer:
        "In addition to developing custom software, we also offer web development, mobile app development, UI/UX design, graphic design, SEO, digital marketing, and content writing.",
    },
    {
      id: "coll2",
      question:
        "What is the process for initiating a project at Digitech Partners?",
      answer:
        "The process involves discussing your project requirements, creating a proposal, and then starting the development. We ensure clear communication and regular updates throughout the project.",
    },
    {
      id: "coll3",
      question: "What is a project's normal timeline?",
      answer:
        "The timeline depends on the project's complexity and scope. We provide estimated timelines during the project proposal phase and keep you informed of any changes.",
    },
    {
      id: "coll4",
      question:
        "How do you guarantee the caliber of the software products you offer?",
      answer:
        "We follow best practices in software development, conduct thorough testing, and ensure quality assurance through various stages of development.",
    },
    {
      id: "coll5",
      question:
        "Can you offer samples of previous work or endorsements from clients?",
      answer:
        "Yes! You can view our portfolio and read client testimonials on our website. We take pride in the positive feedback from our clients.",
    },
  ];

  return (
    <div className="container-fluid p-0 m-0 Contact">
      <div className="first-container">
        <div className="position-relative container">
          <h1>
            Contact <br /> <span>Us</span>
          </h1>
          <img
            src={Bubble}
            alt="Bubble Decoration"
            className="position-absolute"
          />
        </div>
      </div>
      <div className="second-container">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6">
              <img width="100%" src={firstImg} alt="Contact Illustration" />
            </div>
            <div className="col-lg-6 bg-light container-fluid">
              <h1>
                Let’s <br />
                Connect
              </h1>
              <form className="row" onSubmit={handleSubmit}>
                <input
                  className="col-lg-5 col-md-5 col-sm-10"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="col-lg-5 col-md-5 col-sm-10"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="col-lg-11 col-md-11 col-sm-10"
                  type="email"
                  placeholder="Email"
                />
                <textarea
                  className="col-lg-11 col-md-11 col-sm-10"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <button type="submit">Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="third-container container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div>
              <h3>We are Near Around You..</h3>
              <h1>Come Visit us!</h1>
              <h4>Address</h4>
              <h5>5577 West 79th Ave, Apt 07, Arvada, CO 80003.</h5>
              <h4>Contact us</h4>
              <h5>
                <span>Phone:</span> +1 424 382 0299
              </h5>
              <h5>
                <span>Email:</span> info@digitechpartners.co
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="third-container">
        <div className="row">
          <div className="col-lg-6 bg-color">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${faq.id}`}
                    aria-expanded="false"
                    aria-controls={faq.id}
                  >
                    <h5>{faq.question}</h5>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </h2>
                <div
                  id={faq.id}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 dflex">
            <div>
              <h1>
                What happens if my project doesn't fall under one of the
                services that you offer?
              </h1>
              <p>
                We enjoy a good challenge! Please contact us if you have a
                special project or need. Our crew is adaptable and creative, and
                we’re constantly eager to investigate fresh possibilities and
                fixes.
              </p>
              <div className="colorfull-bg btn">
                <Link to="/contact">
                  Talk to us <i className="fa-regular fa-comment"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
