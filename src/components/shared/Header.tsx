"use client";

import {
  KeyboardArrowDown,
  Person,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

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
      path: "/",
      text: "Brands",
    },
    {
      text: "Shop",
      children: [
        {
          path: "/shop-one",
          text: "Shop One",
        },
        {
          path: "/shop-two",
          text: "Shop Two",
        },
        {
          path: "/shop-three",
          text: "Shop Three",
        },
      ],
    },
  ];

  return (
    <AppBar
      position="static"
      className="!shadow-none !border-b !border-primary"
    >
      <Toolbar className="!bg-white justify-between">
        <div>
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
                              className="!py-0 !text-sm !text-primary hover:!bg-primary hover:!text-secondary !duration-300"
                              onClick={popupState.close}
                            >
                              <Link href={path} className="!py-2">
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
          <IconButton size="small" className="!text-primary">
            <ShoppingCart />
          </IconButton>
          <IconButton size="small" className="!text-primary">
            <Person />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
