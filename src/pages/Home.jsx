import React from "react";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
	return (
		<div className="">
			<Header />
			<div className="flex flex-wrap ">
				<Blogs />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
