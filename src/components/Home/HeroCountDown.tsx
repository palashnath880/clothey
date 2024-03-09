import React from "react";
import CountDown from "../shared/CountDown";
import { Typography } from "@mui/material";

export default function HeroCountDown() {
  return (
    <div className="flex mt-3">
      <div className="flex flex-col gap-1 border-r-2 border-black border-opacity-30 last:border-r-0 px-4">
        <Typography variant="h3" fontWeight={600}>
          <CountDown value={200} duration={3000} />+
        </Typography>
        <Typography variant="body2">International Brands</Typography>
      </div>
      <div className="flex flex-col gap-1 border-r-2 border-black border-opacity-30 last:border-r-0 px-4">
        <Typography variant="h3" fontWeight={600}>
          <CountDown value={2000} duration={3000} />+
        </Typography>
        <Typography variant="body2">High Quality Products</Typography>
      </div>
      <div className="flex flex-col gap-1 border-r-2 border-black border-opacity-30 last:border-r-0 px-4">
        <Typography variant="h3" fontWeight={600}>
          <CountDown value={30000} duration={1000} />+
        </Typography>
        <Typography variant="body2">Happy Customers</Typography>
      </div>
    </div>
  );
}
