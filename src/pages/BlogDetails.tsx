import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

const BlogDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="m-10">
        <Button title="Back to Posts" onPress={() => navigate(-1)} />
        <div className="bg-slate-100 text-justify mb-5 p-5 rounded-md">
          <h2 className=" text-2xl font-bold font-mono text-center capitalize">
            {state.title}
          </h2>
          <p className="text-md text-slate-400 font-light text-center">
            {state.description}
          </p>
        </div>

        <p className="text-md text-slate-600 font-light text-justify">
          {state.content}
        </p>
        <div className="m-10">
          <p className="text-blue-300 my-5 text-xl">
            Top Comments ({state.comments.length})
          </p>
          <div>
            {/* input start here */}
            <div>
              <form className="flex items-center">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="bg-gray-20 border border-slate-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your comment..."
                  />
                </div>
                {/* <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send
                </button> */}
                <Button title="Post" onPress={() => {}} />
              </form>
            </div>
            {state.comments.map((comment: any, index: number) => (
              <div
                key={comment.id}
                className="my-2 bg-slate-50 px-5 py-2 rounded-xl w-8/12"
              >
                <p className="text-sm text-slate-600 font-light">
                  {comment.name}
                </p>
                <p className="text-xs  text-slate-400">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
