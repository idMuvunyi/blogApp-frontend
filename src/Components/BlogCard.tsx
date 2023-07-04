import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

export type PostTypes = {
  content: any[];
  last: boolean;
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

const BlogCard = () => {
  const [posts, setPosts] = useState<PostTypes | null>(null);
  const [pageNo, setPageNo] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(2);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/posts?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=id&sortDir=asc`
      )
      .then((res) => {
        // Todo: dispatch to redux before viewing to the UI
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNo]);

  return (
    <>
      {posts !== null ? (
        posts.content.map((post, index) => (
          <div
            key={post.id}
            className="bg-slate-100 rounded-sm m-12 sm:m-10  mb-5 p-3 pr-10 pl-5 drop-shadow-md"
          >
            <h3 className="text-slate-900 font-medium text-xl">{post.title}</h3>
            <p className="text-slate-500 text-sm mt-1">{post.description}</p>
            <button
              type="button"
              className="rounded-md bg-blue-300 p-3 pt-1 pb-1 text-sky-700 text-xs hover:text-white mt-3 flex items-center"
            >
              <Link
                to={`posts/${post.id}`}
                state={post}
                className="text-white mx-4"
              >
                Read more
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        ))
      ) : (
        <div>
          <p>No post yet !</p>
        </div>
      )}
      {posts !== null && (
        <Pagination pageNo={pageNo} post={posts} setPageNumber={setPageNo} />
      )}
    </>
  );
};

export default BlogCard;
