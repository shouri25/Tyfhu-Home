import { Box, Typography } from "@mui/material";
import OperationsImage from "../assets/operations.png";

const Operations = () => {
  return (
    <div
      id="operations"
      style={{
        width: "100%",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: { xs: "32px", md: "64px 32px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#FFF",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            borderRadius: { xs: "8px", md: "16px" },
            padding: { xs: "16px", md: "32px" },
          }}
          marginRight={{ md: "8px" }}
        >
          <Typography
            fontSize={28}
            color={"#000066"}
            fontWeight={"bold"}
            align="left"
          >
            Operations workflow
          </Typography>
          <Typography
            fontSize={16}
            color={"#000066"}
            align="left"
            marginTop={"16px"}
          >
            Running the behind-the-scenes operations presents a formidable task
            for any food service establishment, be it a standalone eatery or a
            sprawling national franchise. To ensure uniformity in operations
            across all branches, a set of standardized standard operating
            procedures (SOPs) are imperative
          </Typography>
          <Typography
            fontSize={16}
            color={"#000066"}
            align="left"
            marginTop={"16px"}
          >
            <Typography
              fontSize={16}
              color={"#ffc000"}
              display={"inline"}
              align="left"
              fontWeight={"bold"}
              marginRight={"4px"}
            >
              Tyfhu
            </Typography>
            helps you to build your own SOPs suits to your business needs,
            maintains team focus and responsibility for their individual core
            duties to support operational adherence and enhance productivity.
            Boosts team productivity and improves quality of execution in every
            store through digitization
          </Typography>
        </Box>

        <Box
          width={{ xs: `100%`, md: "30%" }}
          marginLeft={{ md: "8px" }}
          marginTop={{ xs: "16px", md: "0px" }}
        >
          <img
            src={OperationsImage}
            style={{
              width: "100%",
              objectFit: "contain",
              background: "inherit",
            }}
            // objectFit={"contain"}
          />
        </Box>
      </Box>
    </div>
  );
};
export default Operations;
