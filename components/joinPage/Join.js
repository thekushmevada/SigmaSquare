import { useState } from "react";
import Modal from "@mui/material/Modal";
import { RxCrossCircled } from "react-icons/rx";
import StartUpJoin from "./StartUpJoin";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UserJoin from "./UserJoin";
import Box from "@mui/material/Box";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  height: "100vh",
  bgcolor: "background.paper",
  width: "100%",
  overflow: "auto",
  backgroundColor:"#2e2b22"
};

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
        <Box sx={{ p: 3, overflowY: "auto" }}>{children}</Box>
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

const Join = (props) => {
  const { showJoin, handleCloseJoin } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Modal open={showJoin} onClose={handleCloseJoin}>
      <Box sx={style}>
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
              </Tabs>
            </Box>
          </div>
          <TabPanel value={value} index={0}>
            <StartUpJoin />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserJoin />
          </TabPanel>
        </div>
      </Box>
    </Modal>
  );
};

export default Join;
