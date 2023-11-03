import { Box, Typography } from "@mui/material";
import ProductImage from "../assets/platform.png";

const Platform = () => {
  return (
    <div
      id="platform"
      style={{
        width: "100%",
        minHeight: "100%",
        alignItems:'center',
        display:'flex'
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
          padding: { xs: "32px", md: "32px" },
          display: "flex",
          alignItems: "center",
          justifyContent:'center',
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box width={{ xs: `100%`, md: "50%" }}
            marginRight={{md:'8px'}}

        >
          <img
            src={ProductImage}
            style={{
              width: "100%",
              objectFit: "contain",
            }}
            // objectFit={"contain"}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#f2f2f2ff",
            borderRadius: { xs: "8px", md: "16px" },
            marginTop: { xs: "16px", md: "0px" },
            padding: { xs: "16px", md: "32px" },
          }}
          marginLeft={{md:'8px'}}
        >
          <Typography fontSize={28} color={"#000066"} fontWeight={"bold"} align="left">
            Platform
          </Typography>
          <Typography fontSize={16} color={"#000066"} align="left" marginTop={'16px'}>
            Tyfhu is the dynamic digitised cloud operations platform for multi
            unit operations to maximise operational performance.
          </Typography>
          <Typography fontSize={16} color={"#000066"} align="left" marginTop={'16px'}>
            Captures frontline activity, optimise and standardise operations
            processes across all stores with customised workflow activities,
            safety management and training guides with constant update of
            library. Boosts quality of execution through digitization. Drives
            greater Productivity, Safety, Compliance, Training and Brand
            Standards. Provides birds eye view of insights to operations leaders
            through dash board and business intelligence reports to make better
            decisions
          </Typography>
          <Typography fontSize={16} color={"#000066"} align="left" marginTop={'16px'}>
            Say Goodbye to paper checklists and stay focused on operational
            execution.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Platform;
