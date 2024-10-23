import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog_detail = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
       
        axios
            .get(`https://rootletsolutions.com/rootlet-admin/fetch_data.php?id=${id}`)
            .then((response) => {
                const foundBlog = response.data.data.find(blog => blog.id === id);
                setBlog(foundBlog);
            })
            .catch((error) => {
                console.error("Error fetching the blog details:", error);
            });
    }, [id]);

    if (!blog) {
        return <p>Loading blog...</p>;
    }

    return (
        <div style={{ marginTop: "20vh", padding: "20px" }} className="container BlogDetail">
            <h1>{blog.title}</h1>
            <p><span>Date :</span> {new Date(blog.created_at).toLocaleDateString()} </p>
            <img src={`https://rootletsolutions.com/rootlet-admin/${blog.img}`} alt={blog.title} />
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
};

export default Blog_detail; 