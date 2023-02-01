import React from "react";
import Image from "next/image";
import Layout from "../UserLayout/Layout";
import Sigma_Logo_2 from "../../../img/Sigma_Logo_2.png";
const Jobs = () => {
  const infoData = [
    {
      company_name: "AXON Infotech",
      address: "Gandhinagar,Gujarat 382015",
      Developer_salary: {
        react_Developer: 1900,
        android_Developer: 2200,
        hr_Executive: 1100,
      },
      post: "React Developer",
      desc: "Some basic details about the role short intro about company and working environment and alos about the experience of the customers",
      salary: "12K",
      duration: "3mon",
      time_duration: "Full",
      Requirements: {
        one: "2yrs experience in web development",
        two: "Api configuration and database management",
        three: "Responsiblities",
        four: "at least have worked on one industrial product",
      },
    },
    {
      company_name: "AXON Infotech",
      address: "Gandhinagar,Gujarat 382015",
      Developer_salary: {
        react_Developer: 1900,
        android_Developer: 2200,
        hr_Executive: 1100,
      },
      post: "React Developer",
      desc: "Some basic details about the role short intro about company and working environment and alos about the experience of the customers",
      salary: "12K",
      duration: "3mon",
      time_duration: "Full",
      Requirements: {
        one: "2yrs experience in web development",
        two: "Api configuration and database management",
        three: "Responsiblities",
        four: "at least have worked on one industrial product",
      },
    },
    {
      company_name: "AXON Infotech",
      address: "Gandhinagar,Gujarat 382015",
      Developer_salary: {
        react_Developer: 1900,
        android_Developer: 2200,
        hr_Executive: 1100,
      },
      post: "React Developer",
      desc: "Some basic details about the role short intro about company and working environment and alos about the experience of the customers",
      salary: "12K",
      duration: "3mon",
      time_duration: "Full",
      Requirements: {
        one: "2yrs experience in web development",
        two: "Api configuration and database management",
        three: "Responsiblities",
        four: "at least have worked on one industrial product",
      },
    },
  ];

  return (
    <Layout>
      <div className="w-full flex pt-44 pb-8 bg-[#fefcf9] h-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-5">
          {infoData.map((data) => (
            <div className="w-full flex gap-4">
              <div className="flex flex-col py-2 gap-2 px-2 w-1/3 rounded-3xl bg-[#d7cfc1]">
                <div className="w-full flex justify-center ">
                  <Image
                    src={Sigma_Logo_2}
                    style={{ height: "auto", width: "180px" }}
                  />
                </div>
                <div className="py-1">
                  <div className="text-3xl font-semibold text-center">
                    {data.company_name}
                  </div>
                  <div className="text-center">{data.address}</div>
                </div>
                <div className="flex justify-evenly py-3 w-full">
                  <div>
                    <div className="pb-2 font-bold">Openings</div>
                    <div className="font-semibold text-gray-500">
                      React Developer
                    </div>
                    <div className="font-semibold text-gray-500">
                      Android Developer
                    </div>
                    <div className="font-semibold text-gray-500">
                      HR Executive
                    </div>
                  </div>
                  <div className="border-2 border-black"></div>
                  <div>
                    <div className="pb-2 font-bold">Salary / mo.</div>
                    <div className="font-semibold text-gray-500">
                      {data.Developer_salary.react_Developer} $
                    </div>
                    <div className="font-semibold text-gray-500">
                      {data.Developer_salary.android_Developer} $
                    </div>
                    <div className="font-semibold text-gray-500">
                      {data.Developer_salary.hr_Executive} $
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 border-2 rounded-3xl bg-[#d7cfc1]">
                <div className="w-full p-4 flex flex-col gap-4">
                  <div className="text-4xl font-bold">{data.post}</div>
                  <div className="flex justify-evenly">
                    <div>
                      <div className="text-xl">{data.desc}</div>
                      <div className="py-4">
                        <ul className="list-disc">
                          <li>What you would be doing here </li>
                          <li>Roles</li>
                          <li>Responsiblities</li>
                          <li>Skills required</li>
                        </ul>
                      </div>
                      <div className="flex gap-5">
                        <div>
                          <div className="text-4xl font-bold text-[#3D3A31]">
                            {data.salary}
                          </div>
                          <div>Salary</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#3D3A31]">
                            {data.duration}
                          </div>
                          <div>Duration</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#3D3A31]">
                            {data.time_duration}
                          </div>
                          <div>Time duration</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-2 border-black"></div>
                    <div className="px-6">
                      <div className="text-3xl font-semibold text-center text-[#3D3A31]">
                        Requirements
                      </div>
                      <div className="py-4">
                        <ul className="list-disc">
                          <li>{data.Requirements.one}</li>
                          <li>{data.Requirements.two}</li>
                          <li>{data.Requirements.three}</li>
                          <li>{data.Requirements.four}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
