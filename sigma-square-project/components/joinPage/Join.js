import Modal from "react-bootstrap/Modal";
import { RxCrossCircled } from "react-icons/rx";

const Join = (props) => {
  const { showJoin, handleCloseJoin } = props;
  return (
    <>
      <Modal show={showJoin} onHide={handleCloseJoin}>
        <div className="bg-[#2e2b22] flex flex-col">
          <button
            className="flex justify-end mt-3 mr-3"
            onClick={handleCloseJoin}
          >
            <RxCrossCircled color="white" size="40px" />
          </button>
          <br />
          <div className="text-center">
            <h1 className=" text-4xl font-sans text-[#CABA93] font-semibold">
              Join Now
            </h1>
          </div>

          <section>
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
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com"
                    // required=""
                  />
                </div>
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
                    // required=""
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Re enter the password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    // required=""
                  />
                </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        // required=""
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

              {/* New form created by Kush */}
              {/* <form action="/api/register" method="post">
                <label className="block mb-2 text-sm font-medium text-white">
                  EMail Address
                </label>

                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                ></input>

                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                ></input>

                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                ></input>
                <input
                  className="bg-[#D7CFC1] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  type="submit"
                  value="Register"
                ></input>
              </form> */}
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default Join;
