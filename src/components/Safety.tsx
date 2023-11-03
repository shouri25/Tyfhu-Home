import { Box } from "@mui/material";

const Safety = () => {
  return (
    <div
      id="safety"
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
      ></Box>
    </div>
  );
};
export default Safety;
