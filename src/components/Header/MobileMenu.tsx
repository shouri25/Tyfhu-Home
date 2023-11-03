import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Menu {
  id: string;
  title: string;
  items?: Menu[];
}

interface MobileMenuProps {
  handleDrawerToggle: () => void;
  NavItems: Menu[];
}

interface MenuItemProps {
  item: Menu;
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <>
      {item?.items ? (
        <Accordion
          style={{
            borderBottom: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={(e) => e.stopPropagation()}
            
            sx={{
                margin:'0px'
            }}
          >
            <Typography
              style={{
                textDecorationLine: "none",
                fontWeight: "600",
                margin:0,

                color: "#000099",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.items?.map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
          </AccordionDetails>
        </Accordion>
      ) : (
        <ListItem key={item.id} disablePadding>
          <Link
            href={item.id}
            sx={{
              textDecorationLine: "none",
              fontWeight: "600",
              color: "#000099",
              width: "100%",
            }}
          >
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText
                primary={item.title}
                sx={{
                  fontWeight: "600",
                  color: "#000099",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      )}
    </>
  );
};

const MobileMenu = ({ NavItems, handleDrawerToggle }: MobileMenuProps) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tyfhu
      </Typography>
      <Divider />
      <List>
        {NavItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};
export default MobileMenu;
