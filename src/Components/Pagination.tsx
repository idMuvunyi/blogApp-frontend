import React from 'react';
import { PostTypes } from './BlogCard';

const Pagination = ({ pageNo, post, setPageNumber }: any) => {
  return (
    <div className="max-w-2xl mx-auto">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          {pageNo !== 0 && (
            <li>
              <a
                href="#"
                onClick={() =>
                  setPageNumber((prevPage: number) => prevPage - 1)
                }
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
          )}
          {Array.from(Array(post.totalPages)).map((_, index) => (
            <li key={index}>
              <a
                href=""
                aria-current="page"
                className={
                  pageNo === index
                    ? `bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white`
                    : `bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`
                }
              >
                {index + 1}
              </a>
            </li>
          ))}

          {!post.last && (
            <li>
              <a
                href="#"
                onClick={() =>
                  setPageNumber((prevValue: number) => prevValue + 1)
                }
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
