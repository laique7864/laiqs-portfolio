import React from "react";
import banner from "./assets/banner-1.jpg";
import Image from "next/image";
import Projects from "./component/Projects";
import Greeting from "./component/Greeting";
import Skills from "./component/Skills";

function page() {
  return (
    <div>
      <div className="h-[80vh]">
        <figure className="relative w-full h-full">
          <a href="#">
            <Image
              src={banner}
              alt="image description"
              layout="fill"
              objectFit="cover"
              style={{ position: "absolute" }}
            />
          </a>
          <figcaption
            className="absolute px-4 md:text-6xl text-lg  text-text bottom-6  dark:text-primary w-2/3"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              top: "50%",
            }}
          >
            <p>
              Fullstack Developer
              <br />
              Mohd Laiqur Rahman
            </p>
          </figcaption>
          <figcaption className="absolute px-4 text-sm md:text-lg text-text bottom-6 dark:text-primary w-2/3">
            <p>
              Hello <Greeting /> and welcome! So glad you're here.
            </p>
          </figcaption>
        </figure>
      </div>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          <div
            className=" p-4  bg-white rounded-lg dark:bg-gray-800"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl className="grid grid-cols-1 sm:grid-cols-4 gap-5 max-w-screen-xl justify-evenly   p-4 ml-auto text-gray-900  xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">2+ Year</dt>
                <dd className="text-gray-500 dark:text-gray-400">Experince</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">4</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Personal Projects
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Open source projects
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">10+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Total Project
                </dd>
              </div>
            </dl>
          </div>
    
        </div>
        <div className="p-10">
  <h1 className="mb-6 text-center p-4 ml-1 md:ml-14 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
    Projects
  </h1>
  <div className="flex items-center flex-col">
  <Projects />

  </div>
</div>

<div className="p-10 ">
  <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
  Areas of Knowledge
  </h1>
  <div className="flex items-center flex-col">

  <Skills />
  </div>
</div>

      </div>
    </div>
  );
}

export default page;
