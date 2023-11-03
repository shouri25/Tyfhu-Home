import { Box, Typography } from "@mui/material";
import AnalyticsImage from "../assets/analytics.jpg";

const Analytics = () => {
  return (
    <div
      id="analytics"
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
            Analytics
          </Typography>
          <Typography
            fontSize={16}
            color={"#000066"}
            align="left"
            marginTop={"16px"}
          >
            Using Tyfhu, your data gets securely stored in a cloud-based
            environment, allowing authorized personnel to access it from any
            location. This platform facilitates in-depth "big data" analysis
            enabling you to monitor enhancements or deficiencies effectively.
          </Typography>

          <Typography
            fontSize={16}
            color={"#000066"}
            align="left"
            marginTop={"16px"}
          >
            Tyfhu provides operations leaders with data and insights via
            easy-to-use dashboards. These dashboards offer a comprehensive view
            across the system, allowing informed decision-making regarding brand
            standards, completion of food safety protocols, training needs and
            other operational aspects.
          </Typography>
        </Box>

        <Box
          width={{ xs: `100%`, md: "30%" }}
          marginLeft={{ md: "8px" }}
          marginTop={{ xs: "16px", md: "0px" }}
        >
          <img
            src={AnalyticsImage}
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
export default Analytics;
