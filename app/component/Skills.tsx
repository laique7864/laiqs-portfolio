import React from "react";

function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
              Front End
            </h5>
          </a>

          <div className="flex flex-wrap gap-3">
            <span className="bg-[#f16529] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Html
            </span>
            <span className="bg-[#264ee4] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Css
            </span>
            <span className="bg-[#f0db4e] text-text text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              JavaScript
            </span>
            <span className="bg-[#61dafb] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              React
            </span>
            <span className="bg-slate-900 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Next Js
            </span>
            <span className="bg-[#19bbb9] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Tailwind Css
            </span>
            <span className="bg-[#fb676c] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Ant design
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
              Backend
            </h5>
          </a>

          <div className="flex flex-wrap gap-2">
            <span className="bg-[#80bd00]  text-[#ececec] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Node js
            </span>
            <span className="bg-[#e0224e] text-[#ececec] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Nest Js
            </span>
            {/* <span className="bg-slate-900 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Bun Js
            </span> */}
            <span className="bg-gray-800    text-gray-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Express js
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              JWT
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Socket
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
              Database
            </h5>
          </a>

          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-100  text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Mongo DB
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              MySql
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
              Devops
            </h5>
          </a>

          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-100  text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Git
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Aws
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
