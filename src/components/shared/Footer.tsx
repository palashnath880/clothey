import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  X,
} from "@mui/icons-material";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMenu = ({
  name,
  menus,
}: {
  name: string;
  menus: { label: string; path: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h5" fontWeight={400} textTransform={"uppercase"}>
        {name}
      </Typography>
      <ul>
        {menus.map(({ label, path }, index) => (
          <li key={index}>
            <Link
              href={path}
              className="py-1.5 inline-block hover:pl-2 duration-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  const menu1 = [
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/features",
      label: "Features",
    },
    {
      path: "/works",
      label: "Works",
    },
    {
      path: "/career",
      label: "Career",
    },
  ];

  return (
    <>
      {/* newsletter */}
      <div className="translate-y-[50%]">
        <div className="container mx-auto px-5">
          <div className="bg-primary px-10 py-8 overflow-hidden rounded-2xl shadow-lg">
            <div className="flex justify-between items-center">
              <div className="w-1/2">
                <Typography
                  variant="h3"
                  className="!text-secondary !font-bold !uppercase"
                >
                  Stay upto date about our latest offers
                </Typography>
              </div>
              <div className="w-1/2">
                <form className="ml-auto w-[300px] flex flex-col gap-3">
                  <TextField
                    fullWidth
                    type="email"
                    variant="outlined"
                    className="!rounded-full !overflow-hidden"
                    InputProps={{
                      className: "!bg-secondary !text-sm",
                      sx: {
                        "& input": {
                          paddingY: "0.8rem !important",
                        },
                        "& fieldset": {
                          borderWidth: "0px !important",
                        },
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutline />
                        </InputAdornment>
                      ),
                      placeholder: "Enter your email address",
                    }}
                  />
                  <Button
                    color="secondary"
                    className="!w-full !py-2 !normal-case !rounded-full"
                    variant="contained"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-secondary pt-32">
        {/* footer top */}
        <div className="container mx-auto px-5 py-10">
          <div className="grid grid-cols-11 gap-5">
            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <Link href={"/"}>
                  <Image
                    alt="logo"
                    src={"/clothey-logo.png"}
                    width={300}
                    height={250}
                    className="!w-40 !h-auto"
                  />
                </Link>
                <Typography variant="body2">
                  We have clothes that suits your style and which {"you're"}{" "}
                  proud to wear. From women to men
                </Typography>
                <div className="flex flex-wrap gap-3 mt-3">
                  <Link
                    href="#"
                    className="w-9 aspect-square grid place-items-center rounded-full border border-black text-primary hover:bg-primary hover:text-secondary duration-300"
                  >
                    <Facebook fontSize="small" color="inherit" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 aspect-square grid place-items-center rounded-full border border-black text-primary hover:bg-primary hover:text-secondary duration-300"
                  >
                    <X fontSize="small" color="inherit" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 aspect-square grid place-items-center rounded-full border border-black text-primary hover:bg-primary hover:text-secondary duration-300"
                  >
                    <Instagram fontSize="small" color="inherit" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 aspect-square grid place-items-center rounded-full border border-black text-primary hover:bg-primary hover:text-secondary duration-300"
                  >
                    <GitHub fontSize="small" color="inherit" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <FooterMenu name="Company" menus={menu1} />
            </div>
            <div className="col-span-2">
              <FooterMenu name="Help" menus={menu1} />
            </div>
            <div className="col-span-2">
              <FooterMenu name="FAQ" menus={menu1} />
            </div>
            <div className="col-span-2">
              <FooterMenu name="Resources" menus={menu1} />
            </div>
          </div>
        </div>

        {/* copyright area */}
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center pt-5 pb-8 border-t border-black border-opacity-30">
            <Typography variant="body2">
              @SHOP.CO 2000 - 20002 | All Rights Reserved
            </Typography>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={"#"}></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
