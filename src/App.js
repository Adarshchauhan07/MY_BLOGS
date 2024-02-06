import React, { useContext, useEffect } from "react";
import { Routes, Route,useLocation, useSearchParams } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Tags from './pages/Tags';
import BlogsPage from "./pages/BlogsPage";
import Categories from "./pages/Categories";
import Likes from "./pages/Likes";

const App = () => {

	const { fetchApidata } = useContext(AppContext);
  const location=useLocation();
  const [searchParams,setSearchParams] =useSearchParams();
  

	useEffect(() => {
    const tagsID=location.pathname.split('/').at(-1).replace("-"," ");
    const categoriesID=location.pathname.split('/').at(-1).replace("-"," ");
    const page=searchParams.get("page")??1;


    if(location.pathname.includes("tags")){
      fetchApidata(Number(page), tagsID);
    }
    else if(location.pathname.includes("category")){
      fetchApidata(Number(page), null, categoriesID);
    }
    else{
      fetchApidata(Number(page),null,null);
    }
	}, [location.pathname, location.search]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tags/:tagsID" element={<Tags />} />
      <Route path='/category/:categoriesID' element={<Categories/>}/>
      <Route path='/blogId/:blogID' element={<BlogsPage/>}/>
      <Route path='/Likes' element={<Likes/>}/>
      <Route path='*' element={<div>404 NOT FOUND</div>}/>
		</Routes>
	);
};

export default App;
