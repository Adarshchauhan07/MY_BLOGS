import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogsDetails from "../components/BlogsDetails";
import { useNavigate } from "react-router-dom";

const Likes = () => {
  const navigate = useNavigate();
  const { likes, setLikes } = useContext(AppContext);

  return (
    <div className="mx-auto p-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline mb-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div>
        {likes.length === 0 ? (
          <div className="text-center text-gray-600">
            No Liked Blogs Found 😢
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {likes.map((blogs) => {
              return (
                <BlogsDetails
                  name="LikesBlog"
                  key={blogs.id}
                  blogData={blogs}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Likes;
