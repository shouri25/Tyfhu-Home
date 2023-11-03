import { Button, Link, Menu, MenuItem as MuiMenuItem } from "@mui/material";
import React, { useCallback } from "react";

interface Menu {
  id: string;
  title: string;
  items?: Menu[];
}

interface MenuItemProps {
  item: Menu;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = React.useMemo(() => {
    return Boolean(anchorEl);
  }, [anchorEl]);

  const onClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      {item.items ? (
        <Button
          onClick={onClick}
          sx={{
            color: "#000099",

            fontWeight: "600",
          }}
        >
          {item.title}
        </Button>
      ) : (
        <Link
          key={item.id}
          href={item.id}
          sx={{
            textDecorationLine: "none",
            fontWeight: "600",
            color: "#000099",
          }}
        >
          <Button
            sx={{
              color: "#000099",
              fontWeight: "600",

              padding: "8px",
            }}
          >
            {item.title}
          </Button>
        </Link>
      )}
      <Menu
        anchorEl={anchorEl}
        id={item.id}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {item.items?.map((ele) => {
          return (
            <MuiMenuItem key={ele.id} onClick={handleMenuClose}>
              <Link
                key={ele.id}
                href={ele.id}
                sx={{
                  textDecorationLine: "none",
                  fontWeight: "600",
                  color: "#000",
                }}
              >
                  {ele.title}
              </Link>
            </MuiMenuItem>
          );
        })}
      </Menu>
    </>
  );
};
export default MenuItem;
