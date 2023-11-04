import { Box, Typography } from "@mui/material";
import Home from "../assets/home.png";

const Intro = () => {
  return (
    <div
      id="#"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Home})`,
          width: "100%",
          height: "100%",
          backgroundSize: { xs: "cover" },
          backgroundRepeat: "no-repeat",
          padding: { xs: "16px", md: "32px" },

          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography fontSize={48} color={"#FFF"} fontWeight={'bold'}>
            Maximize Operational Performance Across All Stores
          </Typography>
          <Typography fontSize={18} color={"#FFF"} fontWeight={'600'}>
            <Typography color={"#ffc000"} display={'inline'} fontWeight={'700'} sx={{
                textDecorationLine:'underline'
            }}>Tyfhu</Typography>
            <Typography color={"#FFF"} display={'inline'} fontWeight={'600'} marginLeft={'3px'}>
               transforms Organizations like yours with Dynamic Workflow
              Software, Digitised Food Safety Protocols, Training guides and AI
              Driven Analytics
            </Typography>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Intro;
