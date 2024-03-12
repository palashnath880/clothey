"use client";

import SocialLogin from "@/components/Auth/SocialLogin";
import {
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  // states
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <main>
      <div className="flex justify-center pt-20 px-5">
        <form className="sm:w-[430px] w-full border shadow-md rounded-lg px-5 pt-4 pb-8">
          <Typography variant="h4" className="!text-center !font-semibold">
            Register
          </Typography>
          <div className="flex flex-col gap-y-5 mt-5">
            <TextField
              fullWidth
              label="Name"
              type="text"
              InputLabelProps={{ className: "!text-sm" }}
              InputProps={{ className: "!text-sm" }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              InputLabelProps={{ className: "!text-sm" }}
              InputProps={{ className: "!text-sm" }}
            />
            <TextField
              fullWidth
              label="Password"
              type={isVisible ? "text" : "password"}
              InputLabelProps={{ className: "!text-sm" }}
              InputProps={{
                className: "!text-sm",
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setIsVisible(!isVisible)}
                    className="!cursor-pointer"
                  >
                    {isVisible ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              className="!py-2.5 !w-full !rounded-full"
            >
              Register
            </Button>
            <Typography variant="body2" className="!text-center">
              {"You have an account?"}{" "}
              <Typography
                component={Link}
                href={"/login"}
                variant="body2"
                className="!underline"
              >
                Login Here
              </Typography>
            </Typography>
            <Divider>
              <Typography variant="body2">OR</Typography>
            </Divider>

            {/* social login component */}
            <SocialLogin />
          </div>
        </form>
      </div>
    </main>
  );
}
