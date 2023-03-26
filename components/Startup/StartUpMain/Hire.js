import React from "react";
import Layout from "../StartUpLayout/Layout";
import Sigma_Logo_2 from "../../../img/Sigma_Logo_2.png";
import Image from "next/image";
const Hire = () => {
  const infoData = [
    {
      user_name: "AXON Infotech",
      address: "Gandhinagar,Gujarat 382015",
      Developer_desc:
        "Hello HR I am andrean max from ahmedabad i am a pasionate software engineer lookig for internship i have decent level of skills in python and data science. i also like to wirk in more open and colaborative environment.",
      applied_post: "React Developer",
      applied_desc:
        "Hello HR this is my cover letter , i am trying to apply into your valuable organization to achieve my goals while learning something new from your organization. i am really looking forward to get work with you people",
      desc: "Some basic details about the role short intro about company and working environment and alos about the experience of the customers",
      experience: {
        item: [
          {
            time: "3 month",
            type: "intern",
            company: "Argonomica",
          },
          {
            time: "3 month",
            type: "job",
            company: "arvinaan",
          },
          {
            time: "3 month",
            type: "intern",
            company: "oxelex",
          },
        ],
      },
      skills: {
        one: "react js",
        two: "next js",
        three: "java",
        four: "python",
        five: "django",
        six: "flask",
        seven: "php",
      },
      projects: {
        one: "https://resume/andrean.com",
        two: "github.com/andrean/0newrepo",
        three: "github.com/andrean/webp",
        four: "https://andreanmax.com",
      },
    },
    {
      user_name: "AXON Infotech",
      address: "Gandhinagar,Gujarat 382015",
      Developer_desc:
        "Hello HR I am andrean max from ahmedabad i am a pasionate software engineer lookig for internship i have decent level of skills in python and data science. i also like to wirk in more open and colaborative environment.",
      applied_post: "React Developer",
      applied_desc:
        "Hello HR this is my cover letter , i am trying to apply into your valuable organization to achieve my goals while learning something new from your organization. i am really looking forward to get work with you people",
      desc: "Some basic details about the role short intro about company and working environment and alos about the experience of the customers",
      experience: {
        item: [
          {
            time: "3 month",
            type: "intern",
            company: "Argonomica",
          },
          {
            time: "3 month",
            type: "job",
            company: "arvinaan",
          },
          {
            time: "3 month",
            type: "intern",
            company: "oxelex",
          },
        ],
      },
      skills: {
        one: "react js",
        two: "next js",
        three: "java",
        four: "python",
        five: "django",
        six: "flask",
        seven: "php",
      },
      projects: {
        one: "https://resume/andrean.com",
        two: "github.com/andrean/0newrepo",
        three: "github.com/andrean/webp",
        four: "https://andreanmax.com",
      },
    },
    {
      user_name: "AXON Infotech",
      address: "Gandhinagar,Gujarat 382015",
      Developer_desc:
        "Hello HR I am andrean max from ahmedabad i am a pasionate software engineer lookig for internship i have decent level of skills in python and data science. i also like to wirk in more open and colaborative environment.",
      applied_post: "React Developer",
      applied_desc:
        "Hello HR this is my cover letter , i am trying to apply into your valuable organization to achieve my goals while learning something new from your organization. i am really looking forward to get work with you people",
      desc: "Some basic details about the role short intro about company and working environment and alos about the experience of the customers",
      experience: {
        item: [
          {
            time: "3 month",
            type: "intern",
            company: "Argonomica",
          },
          {
            time: "3 month",
            type: "job",
            company: "arvinaan",
          },
          {
            time: "3 month",
            type: "intern",
            company: "oxelex",
          },
        ],
      },
      skills: {
        one: "react js",
        two: "next js",
        three: "java",
        four: "python",
        five: "django",
        six: "flask",
        seven: "php",
      },
      projects: {
        one: "https://resume/andrean.com",
        two: "github.com/andrean/0newrepo",
        three: "github.com/andrean/webp",
        four: "https://andreanmax.com",
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
                <div className="flex justify-evenly py-3 w-full px-4">
                  {data.desc}
                </div>
              </div>
              <div className="w-2/3 border-2 rounded-3xl bg-[#d7cfc1]">
                <div className="w-full p-4 flex flex-col gap-4">
                  <div className="text-4xl font-bold">{data.applied_post}</div>
                  <div className="flex justify-evenly">
                    <div>
                      <div className="text-md">{data.applied_desc}</div>
                      <div className="text-3xl font-semibold pt-4 pb-2">
                        Experience
                      </div>

                      <div className="space-x-3">
                        <span>{data.experience.item[0].time}</span>
                        <span>{data.experience.item[0].type}</span>
                        <span>@{data.experience.item[0].company}</span>
                      </div>
                      <div className="space-x-3">
                        <span>{data.experience.item[1].time}</span>
                        <span>{data.experience.item[1].type}</span>
                        <span>@{data.experience.item[1].company}</span>
                      </div>
                      <div className="space-x-3">
                        <span>{data.experience.item[2].time}</span>
                        <span>{data.experience.item[2].type}</span>
                        <span>@{data.experience.item[2].company}</span>
                      </div>
                    </div>
                    <div className="border-2 border-black"></div>
                    <div className="px-6 flex gap-5">
                      <div>
                        <div className="text-2xl font-semibold text-center text-[#3D3A31]">
                          Skills
                        </div>
                        <div className="py-4">
                          <ul className="list-disc">
                            <li>{data.skills.one}</li>
                            <li>{data.skills.two}</li>
                            <li>{data.skills.three}</li>
                            <li>{data.skills.four}</li>
                            <li>{data.skills.five}</li>
                            <li>{data.skills.six}</li>
                            <li>{data.skills.seven}</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-center text-[#3D3A31]">
                          Skills
                        </div>
                        <div className="py-4">
                          <ul className="list-disc">
                            <li>{data.projects.one}</li>
                            <li>{data.projects.two}</li>
                            <li>{data.projects.three}</li>
                            <li>{data.projects.four}</li>
                          </ul>
                        </div>
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

export default Hire;
