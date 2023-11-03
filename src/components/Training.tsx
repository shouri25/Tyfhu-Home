import { Box, Typography } from "@mui/material";
import TrainingImage from "../assets/training1.jpg";

const Training = () => {
  return (
    <div
      id="training"
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
            backgroundColor: "#000066",
          }}
        >

          <Box
            width={{ xs: `100%`, md: "30%" }}
            marginRight={{ md: "8px" }}
            marginTop={{ xs: "16px", md: "0px" }}
          >
            <img
              src={TrainingImage}
              style={{
                width: "100%",
                objectFit: "contain",
                background: "inherit",
              }}
              // objectFit={"contain"}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              borderRadius: { xs: "8px", md: "16px" },
              padding: { xs: "16px", md: "32px" },
            }}
            marginLeft={{ md: "8px" }}
          >
            <Typography
              fontSize={28}
              color={"#FFF"}
              fontWeight={"bold"}
              align="left"
            >
              Training
            </Typography>
            <Typography
              fontSize={16}
              color={"#FFF"}
              align="left"
              marginTop={"16px"}
            >
              Slashes expensive training software costs with simple step-by-step
              digital guides with library. Links with API to in-store training
              modules
            </Typography>

            <Typography
              fontSize={16}
              color={"#FFF"}
              align="left"
              marginTop={"16px"}
            >
              Training is the key to great customer service and operational
              excellence. Tyfhu provides store level insights of training
              requirement and fulfilment
            </Typography>
          </Box>

        </Box>
    </div>
  );
};
export default Training;
