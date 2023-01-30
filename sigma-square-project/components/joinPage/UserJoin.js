import React from "react";

const UserJoin = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-2 py-4 w-full gap-4">
        <form
          className="space-y-4 w-full px-4"
          action="/api/register"
          method="post"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
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
              className="bg-[#6F6657] w-28 md:w-44 h-12 rounded-lg"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserJoin;
