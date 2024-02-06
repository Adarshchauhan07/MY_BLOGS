import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BlogsDetails from '../components/BlogsDetails';

const Blogs = () => {
    const { post } = useContext(AppContext);

    return (
        <div className="flex flex-wrap justify-center gap-8 p-8">
            {post.map((blogData) => (
                <BlogsDetails key={blogData.id} blogData={blogData} />
            ))}
        </div>
    );
}

export default Blogs;
