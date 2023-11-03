import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import MenuItem from "./MenuItem";

interface Menu {
  id: string;
  title: string;
  items?: Menu[];
}

const drawerWidth = 240;
const NavItems: Menu[] = [
  {
    id: "#platform",
    title: "Platform",
  },
  {
    id: "#solutions",
    title: "Solutions",
    items: [
      {
        id: "#operations",
        title: "Operations workflow",
      },
      {
        id: "#safety",
        title: " Safety management",
      },
      {
        id: "#training",
        title: "Training",
      },
      {
        id: "#analytics",
        title: "Analytics",
      },
    ],
  },
  {
    id: "#contact",
    title: "Contact us",
  },
];

const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tyfhu
      </Typography>
      <Divider />
      <List>
        {NavItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link
              href={item.id}
              sx={{
                textDecorationLine: "none",
                fontWeight: "600",
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FFF",
        }}
      >
        <Toolbar>
          <Box
            display={{ xs: "flex", sm: "none" }}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#000099" }}
            >
              <MenuIcon />
            </IconButton>

            <Link
              href={"#"}
              sx={{
                textDecorationLine: "none",
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: "700",
                  color: "#000099",
                }}
              >
                Tyfhu
              </Typography>
            </Link>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Link
              href={"#"}
              sx={{
                textDecorationLine: "none",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontWeight: "bold",
                  fontSize: "700",
                  color: "#000099",
                }}
              >
                Tyfhu
              </Typography>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {NavItems.map((item) => (
                <MenuItem item={item} key={item.id} />
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
export default DrawerAppBar;
