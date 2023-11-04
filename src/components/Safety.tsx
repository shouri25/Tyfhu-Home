import { Box, Grid, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/CameraAltOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import MonitorIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
interface SafetyItem {
  Icon: JSX.Element;
  text: string;
}

const SafetyList: SafetyItem[] = [
  {
    Icon: (
      <EditNoteOutlinedIcon
        sx={{
          color: "white",
        }}
        fontSize="large"
      />
    ),
    text: "Multi-unit operators employ Tyfhu to digitalize tasks related to food safety, health & safety and sanitation with HACCP logs, enhancing the protection of their customers and employees while preventing expensive errors. Provides root cause analysis results in enhanced food safety profile, improved audit scores and claims reduction. ",
  },
  {
    Icon: (
      <CameraIcon
        sx={{
          color: "white",
        }}
        fontSize="large"
      />
    ),
    text: "Instantly deploy food safety guidelines, sanitation methods, employee health procedures, audit forms, line checks like product and equipment Temp checks, product date checks and other essential resources to all sites in real-time. Reduces waste, Empowers team to capture images and submit crucial data to ensure continuous safety monitoring.",
  },
  {
    Icon: (
      <MonitorIcon
        sx={{
          color: "white",
        }}
        fontSize="large"
      />
    ),
    text: "Monitor all safety protocols and assess the quality of work being performed to identify significant issues. Concentrate your efforts where they are most necessary to detect potential problems at an early stage.  Reports accidents and incidents to required hierarchy to ensure employee and customer safety. "
  },
];

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
          backgroundColor: "#000066",
        }}
      >
        <Typography
          fontSize={28}
          color={"#FFF"}
          fontWeight={"bold"}
          align="left"
        >
          Safety
        </Typography>
        <Typography fontSize={16} color={"#FFF"} align="left">
          Bridging the Safety Execution Gap - Ensures safety procedures strictly
          followed
        </Typography>
        <Grid container sx={{ marginTop: "16px" }} spacing={2}>
          {SafetyList.map((item, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index.toString()}>
                {/* {item.icon} */}
                <Box
                  sx={{
                    borderRadius: "4px",
                    border: "1px solid gray",
                    width: "60px",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    margin: "auto",
                  }}
                >
                  {item.Icon}
                </Box>
                <Typography
                  fontSize={16}
                  color={"#FFF"}
                  align="left"
                  marginTop={"16px"}
                >
                  {item.text}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
export default Safety;
