"use client";

import {
  KeyboardArrowDown,
  Person,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import Image from "next/image";

const SearchField = styled("div")(({ theme }) => ({
  borderRadius: "9999px",
  position: "relative",
  paddingLeft: "0.7rem",
  backgroundColor: theme.palette.secondary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "14px !important",
  paddingTop: "0.3rem",
  paddingBottom: "0.3rem",
  paddingRight: "0.5rem",
  paddingLeft: "0.4rem",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    "&:focus": {
      width: "280px",
    },
  },
}));

export default function Header() {
  const menusArr = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/",
      text: "On Sale",
    },
    {
      path: "/",
      text: "New Arrivals",
    },
    {
      text: "Brands",
      children: [
        {
          path: "/shop/brands/Zara",
          text: "Zara",
        },
        {
          path: "/shop/brands/Prada",
          text: "Prada",
        },
        {
          path: "/shop/brands/Lacoste",
          text: "Lacoste",
        },
        {
          path: "/shop/brands/Gucci",
          text: "Gucci",
        },
        {
          path: "/shop/brands/Calvin-Klein",
          text: "Calvin Klein",
        },
        {
          path: "/shop/brands/Versace",
          text: "Versace",
        },
        {
          path: "/shop/brands/Dior",
          text: "Dior",
        },
      ],
    },
    {
      text: "Shop",
      path: "/shop",
    },
  ];

  return (
    <AppBar
      position="static"
      className="!shadow-none !border-b !border-primary"
    >
      <Toolbar className="!bg-white justify-between !px-0">
        <div className="justify-between container mx-auto flex items-center">
          <div className="flex items-center gap-5">
            <Link href={"/"}>
              <Tooltip title="Clothey">
                <Image
                  src={"/clothey-logo.png"}
                  alt="Logo"
                  width={120}
                  height={80}
                  className="!w-20 !h-auto"
                />
              </Tooltip>
            </Link>
            <ul className="flex items-center gap-4">
              {menusArr.map(({ path, text, children }, index) => (
                <li key={index} className="!text-primary !text-sm font-normal">
                  {children ? (
                    <PopupState variant="popover">
                      {(popupState) => (
                        <>
                          <button
                            {...bindTrigger(popupState)}
                            className="flex !text-primary !text-sm font-normal gap-1"
                          >
                            {text}
                            <KeyboardArrowDown fontSize="small" />
                          </button>
                          <Menu
                            {...bindMenu(popupState)}
                            anchorOrigin={{
                              horizontal: "left",
                              vertical: "bottom",
                            }}
                            className="!mt-4"
                          >
                            {children.map(({ path, text }, index) => (
                              <MenuItem
                                key={index}
                                className="!py-0 !px-0 !text-sm !text-primary hover:!bg-primary hover:!text-secondary !duration-300 !min-w-[170px]"
                                onClick={popupState.close}
                              >
                                <Link
                                  href={path}
                                  className="!py-2 !px-4 !block !w-full"
                                >
                                  {text}
                                </Link>
                              </MenuItem>
                            ))}
                          </Menu>
                        </>
                      )}
                    </PopupState>
                  ) : (
                    <Link href={path} className="">
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <SearchField>
              <Search fontSize="small" color="primary" />
              <StyledInputBase placeholder="Search your fashion" />
            </SearchField>
            <IconButton
              LinkComponent={Link}
              href="/cart"
              size="small"
              className="!text-primary"
            >
              <Badge badgeContent={20} color="success">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              LinkComponent={Link}
              size="small"
              className="!text-primary"
              href="/my-account"
            >
              <Person />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
