import { Button, Typography } from "@mui/material";
import React from "react";
import ProductItem from "../shared/ProductItem";

export default function NewArrivals() {
  return (
    <section>
      <div className="py-14 container mx-auto px-5">
        <div className="flex justify-center">
          <Typography variant="h3" fontWeight={600} textTransform={"uppercase"}>
            New Arrivals
          </Typography>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-14">
          <ProductItem product={{}} />
          <ProductItem product={{}} />
          <ProductItem product={{}} />
          <ProductItem product={{}} />
        </div>
        <div className="flex justify-center mt-14">
          <Button
            variant="outlined"
            className="!px-9 !py-2 !rounded-full !normal-case"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
