import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import StartUpLogin from "./StartUpLogin";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, overflowY: "auto" }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  width: "100%",
};

const Login = (props) => {
  const { showLogin, handleCloseLogin } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Modal open={showLogin} onClose={handleCloseLogin}>
      <Box sx={style}>
        <div className="bg-[#2e2b22] flex flex-col">
          <button
            className="flex justify-end mt-3 mr-3"
            onClick={handleCloseLogin}
          >
            <RxCrossCircled color="white" size="40px" />
          </button>
          <br />
          <div className="text-center">
            <span className=" text-4xl font-sans text-[#CABA93] font-semibold">
              Log In
            </span>
            <span className="px-3 text-2xl text-[#CABA93] font-semibold">
              as
            </span>
          </div>
          <div className="flex text-[#CABA93] font-semibold pt-6 justify-center item-center space-x-3 ">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { background: "white" } }}
              >
                <Tab
                  label="Start Up"
                  {...a11yProps(0)}
                  style={{ color: "#CABA93" }}
                />
                <Tab
                  label="User"
                  {...a11yProps(1)}
                  style={{ color: "#CABA93" }}
                />
                <Tab
                  label="Admin"
                  {...a11yProps(1)}
                  style={{ color: "#CABA93" }}
                />
              </Tabs>
            </Box>
          </div>
          <TabPanel value={value} index={0}>
            <StartUpLogin />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserLogin />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AdminLogin />
          </TabPanel>
        </div>
      </Box>
    </Modal>
  );
};

export default Login;
