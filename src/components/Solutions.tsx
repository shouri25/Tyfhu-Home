import { Box, Typography } from "@mui/material";
import Operations from "./Operations";
import Training from "./Training";
import Analytics from "./Analytics";

const Solutions = () => {
  return (
    <div
      id="solutions"
      style={{
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          padding: { xs: "16px", md: "32px" },
          backgroundColor: "#000066",
        }}
      >
        <Typography
          fontSize={28}
          color={"#FFF"}
          fontWeight={"bold"}
          align="left"
        >
          Solutions
        </Typography>
      </Box>
      <Operations />
      <Training />
      <Analytics />
    </div>
  );
};
export default Solutions;
