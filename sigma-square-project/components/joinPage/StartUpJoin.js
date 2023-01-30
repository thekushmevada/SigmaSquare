import React from "react";

const StartUpJoin = (props) => {
  const { showJoin, handleCloseJoin } = props;
  return (
    <section className="overflow-y-auto">
      <div className="flex flex-col items-center justify-center px-2 py-4 w-full gap-4">
        <form
          className="space-y-4 w-full px-4"
          action="/api/register"
          method="post"
        >
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-white"
            >
              Company Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
              placeholder="company"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Company Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="name@company.com"
              // required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            />
          </div>
          <div>
            <label
              htmlFor="Mobile"
              className="block mb-2 text-sm font-medium text-white"
            >
              Mobile No.
            </label>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              placeholder="99******00"
              className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-white"
            >
              Address:
            </label>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  State:
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="state"
                  className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Zipcode:
                </label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="In digit"
                  className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                Descripition Idea
              </label>
              <input
                type="text"
                name="Descripition"
                id="Descripition"
                className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="Descripition"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                Industry
              </label>
              <input
                type="text"
                name="Industry"
                id="Industry"
                className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="Industry"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                UID
              </label>
              <input
                type="text"
                name="uid"
                id="uid"
                className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="uid"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                About Company
              </label>
              <input
                type="text"
                name="about"
                id="about"
                className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="About"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                Social Media
              </label>
              <input
                type="text"
                name="link"
                id="link"
                className="bg-[#D7CFC1] my-2 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="link"
              />
              <input
                type="text"
                name="link"
                id="link"
                className="bg-[#D7CFC1] my-2 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="link"
              />
              <input
                type="text"
                name="link"
                id="link"
                className="bg-[#D7CFC1] my-2 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="link"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                Website Link
              </label>
              <input
                type="text"
                name="web"
                id="web"
                className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="web"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block my-2 text-sm font-medium text-white"
              >
                Founder
              </label>
              <input
                type="text"
                name="Founder"
                id="Founder"
                className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                placeholder="Founder"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-white">
                  Remember me
                </label>
              </div>
            </div>
            <input
              className="bg-[#6F6657] w-28 md:w-44 h-12 rounded-lg text-[#D7CFC1] font-semibold"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default StartUpJoin;
