import React from "react";
import img from "../../image/1.svg";

const Details_contant = ({ data }) => {
  console.log(data);
  return (
    <div className="container my-6">
      {/* content section */}
      <div className="flex flex-col md:flex-row justify-between gap-5">
        {/* left content */}
        <div className="w-full p-4">
          <div className="flex justify-between items-center gap-x-3 p-4">
            <div className="flex gap-2 w-full">
              <img className="md:w-[10%] w-[20%]" src={img} alt="" />
              <div className="">
                <h1 className="text-2xl md:text-4xl">{data?.category}</h1>

                <div className="flex gap-2">
                  <span className="flex items-center gap-1">
                    <span>
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
                    </span>
                    <p>{data?.location}</p>
                  </span>

                  <span className="flex items-center gap-1">
                    <span>
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
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </span>
                    <p>{data?.company}</p>
                  </span>
                </div>
              </div>
            </div>

            {/* heart love */}
            <div className="hidden md:block">
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>

          <div className="shadow-lg p-4">
            <hr />
            <h1 className="text-2xl py-4">Job description</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing.
              Variations of passages of lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing.
            </p>

            {/* Responsibility section */}
            <div className="">
              <h1 className="my-6">Responsibility</h1>
              <ul>
                <li>
                  1. The applicants should have experience in the following
                  areas.
                </li>
                <li>2. Have sound knowledge of commercial activities.</li>
                <li>
                  3. Leadership, analytical, and problem-solving abilities.
                </li>
                <li>
                  4. Should have vast knowledge in IAS/ IFRS, Company Act,
                  Income Tax, VAT.
                </li>
              </ul>
            </div>

            {/* Responsibility section */}
            <div className="">
              <h1 className="my-6">Qualifications</h1>
              <ul>
                <li>
                  1. The applicants should have experience in the following
                  areas.
                </li>
                <li>2. Have sound knowledge of commercial activities.</li>
                <li>
                  3. Leadership, analytical, and problem-solving abilities.
                </li>
                <li>
                  4. Should have vast knowledge in IAS/ IFRS, Company Act,
                  Income Tax, VAT.
                </li>
              </ul>
            </div>

            {/* Responsibility section */}
            <div className="">
              <h1 className="my-6">Responsibility</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing.
              </p>
            </div>
          </div>
          {/* apply for the job */}
          <div className="shadow-lg p-4">
            <h1 className="pt-5 text-2xl text-[#273c75]">Apply for the job</h1>
            <div className="md:mx-[5rem]">
              <form action="" className="mt-3 space-y-3">
                {/* full name */}
                <div>
                  <label className="block pb-1" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="outline-none border-[#e84393] rounded-sm px-3 py-2 border-[1px] w-full"
                    type="text"
                    placeholder="Enter full name"
                  />
                </div>

                {/*email */}
                <div>
                  <label className="block pb-1" htmlFor="email">
                    Enter Emeil
                  </label>
                  <input
                    id="emeil"
                    className="outline-none border-[#e84393] rounded-sm px-3 py-2 border-[1px] w-full"
                    type="email"
                    placeholder="email"
                  />
                </div>

                {/* full name */}
                <div>
                  <label className="block pb-1" htmlFor="link">
                    Website/portfolio link
                  </label>
                  <input
                    id="link"
                    className="outline-none border-[#e84393] rounded-sm px-3 py-2 border-[1px] w-full"
                    type="text"
                    placeholder="website link"
                  />
                </div>

                {/* cd */}
                <div>
                  <label className="block pb-1" htmlFor="firstName">
                    Upload cv
                  </label>
                  <input
                    className="outline-none border-[#e84393] rounded-sm px-3 py-2 border-[1px] w-full"
                    type="text"
                    placeholder="cv link"
                  />
                </div>

                {/* cover latter link */}
                <div>
                  <label className="block pb-1" htmlFor="coverLatter">
                    Cover latter
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="18"
                    rows="5"
                    placeholder="cover latter"
                    className="outline-none border-[#e84393] rounded-sm px-3 py-2 border-[1px] w-full"
                  ></textarea>
                </div>

                {/*Apply button */}
                <div>
                  <button className="w-full bg-[#39D363] py-2 text-white">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* right content */}
        <div className="min-w-[30%] shadow-md p-3">
          <h1 className="text-2xl pb-2">Job Summery</h1>
          <hr />

          <ul>
            <li>
              Published on: <span>{data?.published}</span>
            </li>
            <li>
              Vacancy: <span>{data?.vacancy}</span>{" "}
            </li>
            <li>
              Salary: <span>{data?.salary}</span>{" "}
            </li>
            <li>
              Location: <span>{data?.location}</span>{" "}
            </li>
            <li>
              Job Nature: <span>{data?.job_nature}</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details_contant;
