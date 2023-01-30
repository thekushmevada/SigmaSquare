import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { RxCrossCircled } from "react-icons/rx";
import StartUpJoin from "./StartUpJoin";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import UserJoin from "./UserJoin";
const Join = (props) => {
  const { showJoin, handleCloseJoin } = props;
  const [startupjoin, setStartupjoin] = useState(false);
  const [userjoin, setUserjoin] = useState(true);

  const handleStartup = () => {
    setUserjoin(false);
    setStartupjoin(true);
  };
  const handleUser = () => {
    setUserjoin(true);
    setStartupjoin(false);
  };

  return (
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
        <div className="flex text-[#CABA93] font-semibold py-6 justify-center item-center space-x-3 ">
          <div
            className={`${startupjoin ? "border-b-2" : ""} p-2`}
            onClick={handleStartup}
          >
            StartUp
          </div>
          <div className="flex items-center">Or</div>
          <div
            className={`${userjoin ? "border-b-2" : ""} p-2`}
            onClick={handleUser}
          >
            User
          </div>
        </div>
        {startupjoin ? <StartUpJoin startupjoin={startupjoin} /> : <UserJoin />}
      </div>
    </Modal>
  );
};

export default Join;
