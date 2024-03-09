"use client";

import BreadCrumbs from "@/components/shared/BreadCrumbs";
import {
  Add,
  ArrowRight,
  ArrowRightAlt,
  Delete,
  MailOutline,
  Remove,
} from "@mui/icons-material";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function page() {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9];

  return (
    <main>
      <BreadCrumbs links={[{ name: "Cart", active: true }]} />

      <div className="container mx-auto px-5 pb-10">
        <div className="flex justify-start">
          <Typography variant="h3" fontWeight={600} textTransform={"uppercase"}>
            Your Cart
          </Typography>
        </div>
        <div className="grid grid-cols-6 gap-5 mt-10">
          <div className="col-span-4">
            {/* products */}

            <div className="px-4 py-4 rounded-xl border border-primary border-opacity-30">
              <div className="flex flex-col">
                {arr.map((item) => (
                  <div key={item} className="group">
                    <div className="flex gap-4">
                      {/* product image  */}
                      <div className="aspect-[9/10] w-32 overflow-hidden !bg-secondary rounded-lg"></div>
                      {/* product text content  */}
                      <div className="flex flex-col gap-2 justify-between flex-1">
                        <div className="flex flex-col gap-1">
                          <Typography variant="h6">Plain T-Shirt</Typography>
                          <Typography variant="body2">
                            Size: <span>Xl, L, M</span>
                          </Typography>
                          <Typography variant="body2">
                            Color: <span>Blue, Green, Red</span>
                          </Typography>
                        </div>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          className="!mt-3"
                        >
                          $230
                        </Typography>
                      </div>

                      {/* product actions */}
                      <div className="flex flex-col gap-2 justify-between items-end">
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                        <div>
                          <TextField
                            value={1}
                            size="small"
                            type="number"
                            variant="outlined"
                            className="!rounded-full !overflow-hidden custom-appearance-none"
                            InputProps={{
                              className:
                                "!bg-secondary !text-sm !appearance-none",
                              sx: {
                                "& input": {
                                  paddingY: "0.6rem !important",
                                  width: "30px",
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
                        </div>
                      </div>
                    </div>
                    <Divider className="!bg-primary !bg-opacity-20 !my-5 group-last:!hidden" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* order summary  */}
          <div className="col-span-2">
            <div className="px-4 py-4 rounded-xl border border-primary border-opacity-30">
              <Typography
                variant="h5"
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Order Summary
              </Typography>
              <Divider className="!bg-primary !my-2 !bg-opacity-30" />
              <div className="flex flex-col gap-1">
                {/* subtotal */}
                <div className="flex items-center justify-between py-1">
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body1" fontWeight={600}>
                    $230
                  </Typography>
                </div>
                {/* discount  */}
                <div className="flex items-center justify-between py-1">
                  <Typography variant="body2">Discount (- 30%)</Typography>
                  <Typography variant="body1" fontWeight={600} color={"red"}>
                    -$30
                  </Typography>
                </div>
                {/* delivery fee  */}
                <div className="flex items-center justify-between py-1">
                  <Typography variant="body2">Delivery Fee</Typography>
                  <Typography variant="body1" fontWeight={600}>
                    $30
                  </Typography>
                </div>
                <Divider className="!bg-primary !my-2 !bg-opacity-30" />
                {/* delivery fee  */}
                <div className="flex items-center justify-between py-1">
                  <Typography variant="body2" fontWeight={600}>
                    Total
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    $30
                  </Typography>
                </div>

                {/* coupon input */}
                <div className="flex gap-2 mt-3">
                  <div className="!w-full">
                    <TextField
                      fullWidth
                      type="email"
                      variant="outlined"
                      className="!rounded-full !overflow-hidden"
                      InputProps={{
                        className: "!bg-secondary !text-sm",
                        sx: {
                          "& input": {
                            paddingY: "0.6rem !important",
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
                        placeholder: "Apply Coupon Code Here",
                      }}
                    />
                  </div>
                  <Button
                    variant="contained"
                    className="!rounded-full !px-8 !capitalize"
                  >
                    Apply
                  </Button>
                </div>

                {/* checkout button */}
                <Button
                  variant="contained"
                  className="!rounded-full !px-8 !py-2.5 !capitalize !mt-4"
                  endIcon={<ArrowRightAlt />}
                >
                  Go to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
