import React from "react";
import { Image } from "@nextui-org/react";

export default function NavbarComponent() {
  return (
    <>
      <nav className="bg-[#253c95] sticky w-full z-20 top-0 start-0 border-b border-gray-200 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://istad.co/"
            className="flex items-center space-x-3 rtl:space-x-reverse max-md:order-2"
          >
            <Image
              // width={300}
              className="h-10"
              alt="NextUI hero Image"
              src="https://istad.co/resources/img/CSTAD_120.png"
            />
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              C S T A D
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-bold rounded-lg md:hidden text-white"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 font-bold text-white bg-[#253c95] md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 font-bold text-white rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="../../page/enroll/page"
                  className="block py-2 px-3 font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  Enroll
                </a>
              </li>
              <li>
                <a
                  href="/page/course"
                  className="block py-2 px-3 font-bold text-white rounded md:hover:bg-transparent"
                >
                  Course
                </a>
              </li>
              <li>
                <a
                  href="/page/it-news"
                  className="block py-2 font-bold px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  IT News
                </a>
              </li>
              <li>
                <a
                  href="/page/job"
                  className="block py-2 px-3 text-white rounded font-bold md:hover:bg-transparent"
                >
                  Job Opportunity
                </a>
              </li>
              <li>
                <a
                  href="/page"
                  className="block font-bold py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
