import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFF",
          padding: "32px",
        }}
      >
        <Typography
          fontSize={28}
          color={"#000066"}
          fontWeight={"bold"}
          align="left"
        >
          Contact Us
        </Typography>
        <Typography color={"#000066"} fontWeight={"bold"} align="center" marginTop={'16px'}>
          Email us:
        </Typography>
        <Typography color={"#000066"} align="center">
          -- Demo, Sales and General enquiries –
          <a href="mailto:contact@tyfhu.com" style={{color:'#000066'}}>
          <Typography display={"inline"} marginLeft={"4px"} fontWeight={"bold"}>
            contact@tyfhu.com
          </Typography>
          </a>
        </Typography>
      </Box>
    </div>
  );
};
export default Contact;
