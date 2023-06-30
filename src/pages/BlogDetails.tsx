import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const { state } = useLocation();

  console.log(state);

  return <div>BlogDetails</div>;
};

export default BlogDetails;
