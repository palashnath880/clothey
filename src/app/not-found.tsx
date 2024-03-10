import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="h-[70vh] grid place-items-center px-5">
      <div className="flex flex-col items-center gap-2">
        <Typography variant="h1" fontWeight={700}>
          404 Not Found
        </Typography>
        <Typography variant="body2" className="!text-center">
          Your visited page not found. You may go home page
        </Typography>
        <Button
          variant="contained"
          className="!mt-7 !px-8 !py-2.5 !rounded-full"
          LinkComponent={Link}
          href="/"
        >
          Back to Home Page
        </Button>
      </div>
    </main>
  );
}
