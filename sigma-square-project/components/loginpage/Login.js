import Modal from "react-bootstrap/Modal";
import { RxCrossCircled } from "react-icons/rx";
const Login = (props) => {
  const { showLogin, handleCloseLogin} = props;
  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <div className="bg-[#2e2b22] flex flex-col">
        <button
          className="flex justify-end mt-3 mr-3"
          onClick={handleCloseLogin}
        >
          <RxCrossCircled color="white" size="40px" />
        </button>
        <br />
        <div className="text-center">
          <h1 className=" text-4xl font-sans text-[#CABA93] font-semibold">
            Log In
          </h1>
        </div>
        <section>
          <div className="flex flex-col items-center justify-center px-2 py-8 w-full gap-4">
            <form className="space-y-4 w-full px-4" action="#">
              <div>
                <label
                  for="email"
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
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
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
                  required=""
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
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-white">
                      Remember me
                    </label>
                  </div>
                </div>
                <span className="text-sm font-medium text-white hover:underline ">
                  Forgot password?
                </span>
              </div>
              <button className="bg-[#6F6657] w-44 h-12 rounded-lg">
                <span className="font-sans font-medium text-xl text-[#FEFCF9]">
                  Log In
                </span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Login;
