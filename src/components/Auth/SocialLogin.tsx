import { Facebook, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function SocialLogin() {
  return (
    <>
      <Button
        variant="contained"
        className="!py-2.5 !w-full !rounded-full !capitalize !bg-[#316FF6]"
        startIcon={<Facebook />}
      >
        Login With Facebook
      </Button>
      <Button
        variant="outlined"
        className="!py-2.5 !w-full !rounded-full !capitalize"
        startIcon={<Google />}
      >
        Login With Google
      </Button>
    </>
  );
}
