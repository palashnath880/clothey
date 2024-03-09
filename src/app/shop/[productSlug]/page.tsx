"use client";

import ProductBottomContent from "@/components/Shop/ProductBottomContent";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  Divider,
  InputAdornment,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function page() {
  return (
    <main>
      <BreadCrumbs
        links={[
          { name: "Shop", href: "/shop" },
          { name: "Shirt", active: true },
        ]}
      />

      {/* product details */}

      <section>
        <div className="container mx-auto px-5">
          <div className="flex gap-7">
            <div className="w-1/2">
              <div className="flex gap-7">
                <div className="w-1/4">
                  <div className="flex flex-col justify-between !h-full gap-5">
                    <div className="overflow-hidden bg-secondary rounded-xl aspect-[9/10] w-auto"></div>
                    <div className="overflow-hidden bg-secondary rounded-xl aspect-[9/10] w-auto"></div>
                    <div className="overflow-hidden bg-secondary rounded-xl aspect-[9/10] w-auto"></div>
                  </div>
                </div>
                <div className="overflow-hidden bg-secondary rounded-xl aspect-[9/10] flex-1"></div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <Typography variant="h4" fontWeight={600}>
                    Long T-Shirt
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Rating defaultValue={4.5} precision={0.1} readOnly />
                    <Typography variant="body2">4.5/5</Typography>
                  </div>
                  <Typography
                    variant="h5"
                    className="!flex !items-center !gap-3 !font-bold"
                  >
                    <span>$300</span>
                    <del className="!opacity-40">$350</del>
                    <span className="!px-2 !py-0.5 !bg-red-200 !text-red-500 !rounded-full !text-base">
                      -30%
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    The sticke tag was used in HTML 4 to define strikethrough
                    text. The sticke tag was used in HTML 4 to define
                    strikethrough text.
                  </Typography>
                </div>
                <Divider className="!bg-primary !bg-opacity-20" />
                <div className="flex flex-col gap-3">
                  <Typography variant="h6">Select Colors</Typography>
                  <div className="flex flex-wrap gap-3 justify-start"></div>
                </div>
                <Divider className="!bg-primary !bg-opacity-20" />
                <div className="flex flex-col gap-3">
                  <Typography variant="h6">Choose Sizes</Typography>
                  <div className="flex flex-wrap gap-3 justify-start">
                    <Button
                      variant="outlined"
                      className="!capitalize !rounded-full !px-5 !py-2"
                    >
                      Small
                    </Button>
                    <Button
                      variant="contained"
                      className="!capitalize !rounded-full !px-5 !py-2"
                    >
                      Medium
                    </Button>
                    <Button
                      variant="contained"
                      className="!capitalize !rounded-full !px-5 !py-2"
                    >
                      Large
                    </Button>
                    <Button
                      variant="contained"
                      className="!capitalize !rounded-full !px-5 !py-2"
                    >
                      Extra Large
                    </Button>
                  </div>
                </div>
                <Divider className="!bg-primary !bg-opacity-20" />
                <div className="flex items-center gap-3">
                  <TextField
                    value={1}
                    size="small"
                    type="number"
                    variant="outlined"
                    className="!rounded-full !overflow-hidden custom-appearance-none"
                    InputProps={{
                      className: "!bg-secondary !text-sm !appearance-none",
                      sx: {
                        "& input": {
                          paddingY: "0.6rem !important",
                          width: "50px",
                          appearance: "none !important",
                        },
                        "& fieldset": {
                          borderWidth: "0px !important",
                        },
                      },
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          onClick={() => console.log(2)}
                          className="!cursor-pointer"
                        >
                          <Remove fontSize="small" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => console.log(2)}
                          className="!cursor-pointer"
                        >
                          <Add fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    className="!capitalize !rounded-full !px-5 !py-2.5 !flex-1"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product details , faq, review */}
      <section>
        <div className="container mx-auto px-5 mt-14">
          <ProductBottomContent />
        </div>
      </section>
    </main>
  );
}
