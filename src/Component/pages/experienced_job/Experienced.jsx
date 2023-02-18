import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../image/1.svg";
import img2 from "../../image/2.svg";
import img3 from "../../image/3.svg";
import img4 from "../../image/4.svg";
import img5 from "../../image/5.svg";

const Experienced = () => {
  return (
    <div className="py-6">
      <div className="container space-y-2">
        {/* title & see all button */}
        <div className="flex justify-between">
          <h1 className="text-center text-2xl md:text-4xl py-5 text-[#273c75]">
            Experienced{" "}
          </h1>

          <button className="text-white rounded-sm md:py-1 my-2 bg-[#00D363] px-8 py-[5px] hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
            See all job
          </button>
        </div>
        <div className="shadow-md m-4 p-3 hover:border-[1px] hover:border-[#87e8b5] transition-all ">
          <div className="flex flex-col md:flex-row  justify-between">
            {/* left section */}
            <div className="flex items-center gap-3">
              {/* image */}
              <div className="bg-[#dfe6e9] p-8">
                <img src={img1} alt="" />
              </div>
              {/* text content */}
              <div className="">
                <h1 className="text-2xl md:text-4xl py-3 text-[#273c75]">
                  Software Engineer
                </h1>
                <div className="flex gap-3">
                  <div className="flex text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>California, USA</span>
                  </div>
                  <div className="flex  text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Part-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <div className="mt-3 md:mt-0">
                <Link to="/software">
                  <button className="text-white rounded-sm md:py-2 my-2 bg-[#00D363] px-3 py-1 hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
                    Apply now
                  </button>
                </Link>

                <h1 className=" text-[#7f8fa6]">Date line: 31 Jan 2020</h1>
              </div>
            </div>
          </div>
        </div>

        {/*2. Digital Marketer */}
        <div className="shadow-md m-4 p-3 hover:border-[1px] hover:border-[#00D363] transition-all ">
          <div className="flex flex-col md:flex-row  justify-between">
            {/* left section */}
            <div className="flex items-center gap-3">
              {/* image */}
              <div className="bg-[#dfe6e9] p-8">
                <img src={img2} alt="" />
              </div>
              {/* text content */}
              <div className="">
                <h1 className="text-2xl md:text-4xl py-3 text-[#273c75]">
                  Digital Marketer
                </h1>
                <div className="flex gap-3">
                  <div className="flex text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>California, USA</span>
                  </div>
                  <div className="flex  text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Part-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <div className="mt-3 md:mt-0">
                <Link to="/marketar">
                  <button className="text-white rounded-sm md:py-2 my-2 bg-[#00D363] px-3 py-1 hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
                    Apply now
                  </button>
                </Link>
                <h1 className=" text-[#7f8fa6]">Date line: 31 May 2020</h1>
              </div>
            </div>
          </div>
        </div>

        {/*3. wordpress Marketer */}
        <div className="shadow-md m-4 p-3 hover:border-[1px] hover:border-[#00D363] transition-all ">
          <div className="flex flex-col md:flex-row  justify-between">
            {/* left section */}
            <div className="flex items-center gap-3">
              {/* image */}
              <div className="bg-[#dfe6e9] p-8">
                <img src={img3} alt="" />
              </div>
              {/* text content */}
              <div className="">
                <h1 className="text-2xl md:text-4xl py-3 text-[#273c75]">
                  Wordpress Developer
                </h1>
                <div className="flex gap-3">
                  <div className="flex text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>California, USA</span>
                  </div>
                  <div className="flex  text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Part-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <div className="mt-3 md:mt-0">
                <Link to="/wordpress">
                  <button className="text-white rounded-sm md:py-2 my-2 bg-[#00D363] px-3 py-1 hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
                    Apply now
                  </button>
                </Link>
                <h1 className=" text-[#7f8fa6]">Date line: 31 May 2020</h1>
              </div>
            </div>
          </div>
        </div>

        {/*4. visual Marketer */}
        <div className="shadow-md m-4 p-3 hover:border-[1px] hover:border-[#00D363] transition-all ">
          <div className="flex flex-col md:flex-row  justify-between">
            {/* left section */}
            <div className="flex items-center gap-3">
              {/* image */}
              <div className="bg-[#dfe6e9] p-8">
                <img src={img4} alt="" />
              </div>
              {/* text content */}
              <div className="">
                <h1 className="text-2xl md:text-4xl py-3 text-[#273c75]">
                  Visual Designer
                </h1>
                <div className="flex gap-3">
                  <div className="flex text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>California, USA</span>
                  </div>
                  <div className="flex  text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Part-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <div className="mt-3 md:mt-0">
                <Link to="/visual">
                  <button className="text-white rounded-sm md:py-2 my-2 bg-[#00D363] px-3 py-1 hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
                    Apply now
                  </button>
                </Link>
                <h1 className=" text-[#7f8fa6]">Date line: 24 Feb 2020</h1>
              </div>
            </div>
          </div>
        </div>

        {/*5. softwar Marketer */}
        <div className="shadow-md m-4 p-3 hover:border-[1px] hover:border-[#00D363] transition-all ">
          <div className="flex flex-col md:flex-row  justify-between">
            {/* left section */}
            <div className="flex items-center gap-3">
              {/* image */}
              <div className="bg-[#dfe6e9] p-8">
                <img src={img5} alt="" />
              </div>
              {/* text content */}
              <div className="">
                <h1 className="text-2xl md:text-4xl py-3 text-[#273c75]">
                  Software Engineer
                </h1>
                <div className="flex gap-3">
                  <div className="flex text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>California, USA</span>
                  </div>
                  <div className="flex  text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Part-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <div className="mt-3 md:mt-0">
                <Link to="/software2">
                  <button className="text-white rounded-sm md:py-2 my-2 bg-[#00D363] px-3 py-1 hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
                    Apply now
                  </button>
                </Link>
                <h1 className=" text-[#7f8fa6]">Date line: 28 Aug 2020</h1>
              </div>
            </div>
          </div>
        </div>

        {/*6. Digital 2 Marketer */}
        <div className="shadow-md m-4 p-3 hover:border-[1px] hover:border-[#00D363] transition-all ">
          <div className="flex flex-col md:flex-row  justify-between">
            {/* left section */}
            <div className="flex items-center gap-3">
              {/* image */}
              <div className="bg-[#dfe6e9] p-8">
                <img src={img2} alt="" />
              </div>
              {/* text content */}
              <div className="">
                <h1 className="text-2xl md:text-4xl py-3 text-[#273c75]">
                  Digital Marketer
                </h1>
                <div className="flex gap-3">
                  <div className="flex text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>California, USA</span>
                  </div>
                  <div className="flex  text-[#7f8fa6] gap-2">
                    {/* time */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Part-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <div className="mt-3 md:mt-0">
                <Link to="/marketar2">
                  <button className="text-white rounded-sm md:py-2 my-2 bg-[#00D363] px-3 py-1 hover:bg-white hover:border-[1px] hover:border-[#00D363] hover:text-[#273c75] transition-all">
                    Apply now
                  </button>
                </Link>
                <h1 className=" text-[#7f8fa6]">Date line: 31 May 2020</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experienced;
