import { Box } from "@mui/material";
import Intro from "../../components/Intro";
import Platform from "../../components/Platform";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Solutions from "../../components/Solutions";

const HomeLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // height:{ xs: `calc(100vh-55px)`,md: `calc(100vh-65px)`},
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          height: { xs: "55px", md: "65px" },
        }}
      >
        <Header />
      </Box>
      <Intro />
      <Platform />
      <Solutions />
      <Contact />
    </Box>
  );
};
export default HomeLayout;
