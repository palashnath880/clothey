import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <main>
      <div className="pt-20 pb-10 flex justify-center">
        <form className="sm:w-[430px] w-full border shadow-md rounded-lg px-5 pt-4 pb-8">
          <Typography variant="h4" className="!text-center !font-semibold">
            Forgot Password
          </Typography>
          <div className="flex flex-col gap-y-5 mt-5">
            <TextField
              fullWidth
              label="Email"
              type="email"
              InputLabelProps={{ className: "!text-sm" }}
              InputProps={{ className: "!text-sm" }}
            />

            <Button
              variant="contained"
              className="!py-2.5 !w-full !rounded-full"
            >
              Send Reset Link
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
