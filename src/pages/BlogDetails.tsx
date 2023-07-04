import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import axios from 'axios';

const BlogDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [comment, setComment] = useState<string>('');

  const handleCommentValue = (e: React.FormEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  // Handler function for post comment addition
  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    // Comment Content
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/v1/posts/${state.id}/comments`, {
        name: 'Kelvin De young',
        email: 'kevindel@mail.com',
        body: comment,
      })
      .then((res) => {
        console.log('Comment added :', res.data);
        setComment('');
      })
      .catch((err) => {
        console.log('Error :', err);
      });
  };
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
              <form className="flex items-center" onSubmit={handleAddComment}>
                <div className="relative w-full">
                  <input
                    type="text"
                    className="bg-gray-20 border border-slate-300 text-gray-900 text-sm focus:ring-blue-300 focus:border-blue-300 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:focus:ring-blue-300 dark:focus:border-blue-300"
                    placeholder="Write your comment..."
                    onChange={handleCommentValue}
                  />
                </div>
                <Button
                  styles="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80"
                  title="Comment"
                  onPress={() => {}}
                />
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
