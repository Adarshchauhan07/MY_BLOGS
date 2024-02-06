import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";


const BlogsDetails = ({ name, blogData }) => {
  const { likes, setLikes } = useContext(AppContext);

  const handleLike = () => {
    if (likes.some((blog) => blog.id === blogData.id)) {
      setLikes((prev) => prev.filter((blog) => blog.id !== blogData.id));
      toast.warning('UNLIKE THE BLOG 👎');

    } else {
      setLikes((prev) => [...prev, blogData]);
      toast.success('LIKE THE BLOG 📖');
    }
  };

  return (
    <div className="relative w-screen-2xl bg-white p-6 rounded-lg border border-gray-300 shadow-md mb-4 flex flex-col">
      <div className="rounded-full p-1 absolute top-3 right-3">
        <button onClick={handleLike}>
          {name !== "LikesBlog" ? (
            likes.some((blog) => blog.id === blogData.id) ? (
              <span className="flex flex-row text-xl items-center bg-slate-100 text-white rounded-full p-2">
                <FcLike fontSize="1.7rem" className="" />
                {/* LIKED */}
              </span>
            ) : (
              <span className="flex flex-row text-xl items-center bg-slate-100 text-white rounded-full p-2">
                <FcLikePlaceholder fontSize="1.7rem" className="" />
                {/* LIKE */}
              </span>
            )
          ) : (
            <div></div>
          )}
        </button>
      </div>

      <div className="">
        <NavLink to={`/blogId/${blogData.id}`}>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800 hover:text-indigo-600">
            {blogData.title}
          </h3>
        </NavLink>

        <div className="flex items-center mb-2 text-gray-600">
          <span className="mr-2">By:</span>
          <span className="font-semibold">{blogData.author}</span>
          <span className="mx-2">|</span>
          <span className="mr-2">On:</span>
          <NavLink
            to={`/category/${blogData.category.replaceAll(" ", "-")}`}
            className="text-blue-500 hover:underline"
          >
            <span>{blogData.category}</span>
          </NavLink>
        </div>

        <div className="flex items-center mb-4 text-gray-600">
          <span className="mr-2">Posted on:</span>
          <span>{blogData.date}</span>
        </div>

        <p className="text-gray-700 leading-7">{blogData.content}</p>

        <div className="mt-4 flex flex-wrap">
          {blogData.tags.map((ApiTags, index) => (
            <NavLink
              to={`/tags/${ApiTags.replaceAll(" ", "-")}`}
              key={index}
              className="text-blue-500 mr-2 mb-2 hover:underline"
            >
              <span>#{ApiTags}</span>
            </NavLink>
          ))}
        </div>

        <div>
          {name === "LikesBlog" ? (
            <button
              className="flex flex-row bg-red-300 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline mt-4"
              onClick={handleLike}
            >
              <MdOutlineDeleteOutline
                fontSize="1.6rem"
                className="mr-2"
              />
              <span>Delete Blog</span>
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
