import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Bubble from "/src/assets/image/bubble-purple.png.png";


const stripHTML = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
};

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get("https://rootletsolutions.com/rootlet-admin/fetch_data.php")
            .then((response) => {
                console.log(response.data.data);
                setBlogs(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching the blog data:", error);
            });
    }, []);

    return (
        <div className="container-fluid Blogs p-0 m-0">
            <div className="first-container">
                <div className="container position-relative">
                    <h1>
                        Our <br /> <span>Blogs</span>
                    </h1>
                    <img src={Bubble} alt="" className="position-absolute" />
                </div>
            </div>

            <div className="second-container container">
                <div className="">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="row blog-sec">
                            <div className="col-lg-3">
                                <img width={"100%"} src={`https://rootletsolutions.com/rootlet-admin/${blog.img}`} alt={blog.title} />
                            </div>
                            <div className="col-lg-8 col-md-8 blog-sec">
                                <div>
                                    <h4>{blog.title}</h4>
                                    <p>
                                        {new Date(blog.created_at).toLocaleDateString()} / {blog.upload_by}
                                    </p>
                                    <h6>{stripHTML(blog.content).substring(0, 100)}...</h6>
                                    <Link to={`/blogdetails/${blog.id}`} className="green-color">Read More »</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
