import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogsDetails from "../components/BlogsDetails";
import Header from "../components/Header";

const BlogsPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
  const blogsID = location.pathname.split("/").at(-1);
  const url = `${baseUrl}?&blogId=${blogsID}`;

  async function fetchApiData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog || null);
      setRelatedBlogs(data.relatedBlogs || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchApiData();
  }, [location.pathname]);

  return (
    <div className="">
      <Header/>
      <button
        className="ml-6 mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline mb-4"
        onClick={() => navigation(-1)}
      >
        BACK
      </button>

      <div className="p-6">
        {blog && (
          <BlogsDetails key={blog.id} blogData={blog} />
        )}
      </div>

      {relatedBlogs.length > 0 && (
        <div className="mt-6 p-4">
          <h2 className="text-2xl font-bold mb-4">RELATED BLOGS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedblog) => (
              <BlogsDetails
                key={relatedblog.id}
                blogData={relatedblog}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
