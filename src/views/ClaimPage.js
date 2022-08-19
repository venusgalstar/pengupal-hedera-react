/*eslint-disable*/
import { padding } from "@mui/system";
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// core components

function ClaimPage() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    return (
        <>
            <div
                className="section section-about-us"
                filter-color="blue"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "57px",
                    backgroundColor: "#ffd4ff"
                }}>
                <Container>
                    <TabContext value={value} style={{ backgroundColor: "black", width: "100px" }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'red' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Item One" value="1" />
                                <Tab label="Item Two" value="2" />
                                <Tab label="Item Three" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Container>
            </div>
        </>
    );
}

export default ClaimPage;
