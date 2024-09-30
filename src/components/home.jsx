import React from "react";
import { Link } from "react-router-dom";
import Bubble from "/src/assets/image/bubble-purple.png.png";
import secondImg from "/src/assets/image/Frame-24.png";
import thirdImg from "/src/assets/image/Frame-27.png";
import forthImg from "/src/assets/image/download.jfif";
import fivthImg from "/src/assets/image/e89f08da58a25e6333aadd9f3b8556f8.jpeg";
import sixthImg from "/src/assets/image/Group-2022.png";
const Home = () => {
    const services = [
        {
            title: "Web Development",
            description:
                "Our specialty at Digitech Partners is creating captivating and dynamic websites. Our web development service focuses on producing user-centric designs that smoothly combine form and function. Our team of knowledgeable developers makes use of the newest technology best practices. Whether you want a straightforward brochure website or something more complex, we possess the knowledge and imagination to realize your idea.",
        },
        {
            title: "Graphic designing",
            description:
                "We at Digitech Partners provide full-service graphic design to enhance your company's image and draw in customers. Our professional design team creates visually striking designs that make an impression by fusing creativity with smart thought.Allow us to be your visual storytelling partner, making you stand out in a crowded market and using powerful graphic design to accomplish your corporate goals.",
        },
        {
            title: "App development",
            description:
                "We at Digitech Partners are experts in developing applications that turn concepts into cutting-edge online solutions. Our skilled group of designers, developers, and project managers works directly with customers to comprehend their distinct goals and visions.We have the know-how to make your ideas a reality, whether you require a cross-platform solution, an Android application or a native iOS app.",
        },
        {
            title: "UI/UX designing",
            description:
                "We at Digitech Partners are experts in UI/UX design services that put the needs of the user attractiveness first. Our talented design team is committed to producing user-friendly beautiful interfaces that increase engagement and boost user happiness. We make sure that every component of your digital product is user-friendly and consistent with your corporate identity bycutting-edge design concepts with in-depth research.",
        },
    ];

    const faqs = [
        {
            id: "coll1",
            question: "What services is Digitech providing?",
            answer: "In addition to developing custom software, we also offer web development, mobile app development, UI/UX design, graphic design, SEO, digital marketing and content writing.Accordion Body",
        },
        {
            id: "coll2",
            question: "What is the process for initiating a project at Digitech Partners??",
            answer:
                "The Box Sizing property in CSS defines how developers should calculate the width and height of a box. Content Box is when the default height and width get applied to the content of an element. The border and padding lie outside the box. Padding Box is when the developer adds the dimensions to include the padding and content of the element. This adds a border outside the given box. Border Box is when the box dimensions apply to the border, padding, and content.",
        },
        {
            id: "coll3",
            question: "What is a project's normal timeline?",
            answer:
                "There are three ways to hide elements with CSS. `display:none` can hide the content so that it doesn’t get stored in the DOM. `visibility:hidden` adds an element to the DOM and occupies space. However, the user cannot see it. `position:absolute` makes the element appear outside the screen, not on the screen.",
        },
        {
            id: "coll4",
            question: "How do you guarantee the caliber of the software products you offer?",
            answer: "A callback is a JavaScript function that developers send as a parameter or argument to other functions. You can call this function whenever the function it is provided to gets called.",
        },
        {
            id: "coll5",
            question: "Can you offer samples of previous work or endorsements from clients?",
            answer:
                "Can you offer samples of previous work or endorsements from clients?Of course! On our website, you may go through our portfolio and read client endorsements. We’re pleased with the job we’ve completed and the favorable comments we’ve heard from our clients.",
        },
    ];

    return (
        <div className="container-fluid Home">
            <div className="row first-container">
                <div className="col-lg-6 position-relative ">
                    <div className="container">
                        <h1>
                            Revolutionize <br />
                            Your <span>Digital</span> Realm
                        </h1>
                        <p>
                            With our cutting-edge solutions, Digitech Partners set out on a mission to change your digital universe. With our cutting-edge mobile apps and custom software development, we enable you to redefine success in the
                            digital era.
                        </p>
                        <div className="d-flex">
                            <input type="email" placeholder="What's your work Email" />
                            <button type="submit">Get Started</button>
                        </div>
                    </div>
                    <img src={Bubble} alt="" className="position-absolute" />
                </div>
            </div>

            <div style={{ background: "#EBF5FB", padding: "3vh 2vw", borderRadius: "30px" }} className="second-container row">
                <div className="col-lg-6 col-md-12 row">
                    <div className="col-lg-3 col-md-3 col-sm-3 colorfull-bg cards">
                        <Link to="">
                            <h2 className="m-0">
                                ABOUT
                                <br /> US
                            </h2>
                        </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-7 p-0 cards">
                        <img src={secondImg} alt="" />
                    </div>
                    <div className="col-lg-12 col-md-12 p-0 cards">
                        <img src={thirdImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 second-col">
                    <h1 className="mt-5">An Innovation that leaves a lasting Impact / let’s Code Something Amazing Together.</h1>
                    <p>
                        At Digitech Partners our goal is to enable people and companies to prosper in the digital age by providing dependable and cutting-edge software solutions. We want to redefine success for our clients and transform the
                        digital space with our dedication to innovation, excellence and teamwork. We want to surpass expectations and promote positive change in the software development industry by fusing state-of-the-art technology with
                        individualized service.
                    </p>
                    <div className="ReadMe-btn">
                        <a href="/">Read More</a>
                        <span>
                            <i className="fa-solid fa-angle-right"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="third-container container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-md-4  cards ">
                        <div className="colorfull-bg  cards-1">
                            <h2 className="m-0 ">
                                OUR
                                <br />
                                SERVICES
                            </h2>
                        </div>
                        <img src={Bubble} alt="" />
                    </div>
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-2 col-md-4  cards ">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <div className="ReadMe-btn my-3">
                                <a href="/">Read More</a>
                                <span>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="forth-container container-fluid ">
                <div className="row">
                    <div className="col-lg-6 second-col">
                        <h1 className="mt-5">OUR VISION</h1>
                        <p>
                            Our goal at Digitech Partners is to revolutionize how people and organizations utilize technology by becoming a global leader in creative software solutions. We work hard to push the envelope by providing
                            innovative services and solutions that boost productivity, spur expansion, and produce long-term value. Our objective is to provide innovative solutions that fit our clients’ changing demands, and we are driven
                            to do this by our dedication to quality, innovation, and continual progress. In our ideal future, technology will be smoothly incorporated into every facet of daily life, enabling individuals and institutions to
                            realize their full potential. We want to leave a legacy of excellence and trust in the software business by working together, being innovative, and putting the needs of our customers first. We hope to create new
                            benchmarks and encourage others to follow in our footsteps.
                        </p>
                        <div className="ReadMe-btn">
                            <a href="/">Read More</a>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 row">
                        <div className="col-lg-3 col-md-3 col-sm-3 colorfull-bg cards">
                            <h2 className="m-0">
                                ABOUT
                                <br /> US
                            </h2>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-7 p-0 cards">
                            <img src={secondImg} alt="" />
                        </div>
                        <div className="col-lg-12 col-md-12 p-0 cards">
                            <img src={thirdImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fivth-container">
                <div className="position-relative marquee-container d-none d-sm-block">
                    <div className="marquee d-flex justify-content-around">
                        <span>Welcome to Our Website! </span>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <span> Website Development</span>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>

                        <span>App Development</span>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>

                        <span>Graphic DEsigning</span>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>

                        <span>UI/UX Designig</span>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="sixth-container .container-fluid m-0 p-0">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="colorfull-bg ">
                            <h2 className="m-0">
                                Our
                                <br /> CLIENTELE
                            </h2>
                        </div>
                        <div className="d-grid" style={{ backgroundColor: "#C8E3F4" }}>
                            <p>“Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise.”</p>

                            <div className="colorfull-bg white-brd d-flex align-items-center  justify-content-between">
                                <img width={"40px"} src={forthImg} alt="" />
                                <p>Retika Snow</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-0 col-md-6 ">
                        <img width={"100%"} src={fivthImg} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div style={{ backgroundColor: "#325FA9" }}>
                            <p className="text-light">
                                We were astounded by the Digitech team! They took our wild ideas and created this incredible, user-friendly application that has revolutionized the way we conduct our business. They’re professional and a
                                pleasure to deal with. I heartily endorse them. John Wilson
                            </p>
                            <div className="colorfull-bg white-brd d-flex align-items-center  justify-content-between">
                                <img width={"40px"} src={forthImg} alt="" />
                                <p>Retika Snow</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#fff" }}>
                            <p>
                                These people are digital geniuses. They completely redesigned our marketing plan, and the outcomes are outstanding. On our end, there are many pleased smiles, higher ranks and more traffic. Highly
                                recommended! Looking forward to working with them shortly. Smith marshal
                            </p>
                            <div className="colorfull-bg white-brd d-flex align-items-center  justify-content-between">
                                <img width={"40px"} src={forthImg} alt="" />
                                <p>Retika Snow</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-grid" style={{ backgroundColor: "#C8E3F4" }}>
                            <p>“Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise.”</p>

                            <div className="colorfull-bg white-brd d-flex align-items-center  justify-content-between">
                                <img width={"40px"} src={forthImg} alt="" />
                                <p>Retika Snow</p>
                            </div>
                        </div>
                        <img src={Bubble} alt="" />
                    </div>
                </div>
            </div>
            <div className="seventh-container">
                <div className="row">
                    <div className="col-lg-6 bg-color">
                        {faqs.map((faq) => (
                            <div className="accordion-item" key={faq.id}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faq.id}`} aria-expanded="false" aria-controls={faq.id}>
                                        <h5>{faq.question}</h5>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </h2>
                                <div id={faq.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">{faq.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6 dflex">
                        <div>
                            <h1>What happens if my project doesn't fall under one of the services that you offer?</h1>
                            <p>We enjoy a good challenge! Please contact us if you have a special project or need. Our crew is adaptable and creative and we’re constantly eager to investigate fresh possibilities and fixes.</p>
                            <div className="colorfull-bg  btn">
                                {" "}
                                <Link to="">
                                    Talk to us <i className="fa-regular fa-comment"></i>
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="eight-container">
                <div>
                    <div className="last">
                        <button>Digitech partners</button>
                        <h1>From Conception to Revolutionary Digital Creation.</h1>
                        <p>To enhance your digital presence and elevate your business strategies.</p>
                        <button>See all integrations</button>
                    </div>
                    <div>
                        <img width={"100%"} src={sixthImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
