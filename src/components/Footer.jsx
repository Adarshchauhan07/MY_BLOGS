import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const { totalPages, page, tooglePostsHandler } = useContext(AppContext);
	const navigation = useNavigate();

	return (
		<div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-100 flex justify-between items-center">
			<div className="flex items-center">
				<button
					onClick={() => {
						navigation("/");
					}}
					className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
				>
					HOME
				</button>
			</div>

			<div className="flex space-x-4">
				{page > 1 && (
					<button
						onClick={() => {
							tooglePostsHandler(page - 1);
						}}
						className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
					>
						PREVIOUS
					</button>
				)}

				{page < totalPages && (
					<button
						onClick={() => {
							tooglePostsHandler(page + 1);
						}}
						className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
					>
						NEXT
					</button>
				)}
			</div>

			<div className="flex items-center">
				<span className="font-bold mx-2">
					{page}/{totalPages}
				</span>
			</div>
		</div>
	);
};

export default Footer;
