import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Categories = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");

  const navigate = useNavigate();
  
  return (
    <div className="mx-auto">
      <Header />

      <div className="m-8 mb-0 px-10 flex flex-row gap-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h2 className="font-bold text-xl">
          Blogs Categorised <span className="underline text-blue-700">#{category}</span>
        </h2>
      </div>
      <Blogs />
      <Footer />
    </div>
  );
};

export default Categories;
