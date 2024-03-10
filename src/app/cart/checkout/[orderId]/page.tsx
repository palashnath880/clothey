"use client";

import BreadCrumbs from "@/components/shared/BreadCrumbs";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  city: string;
  street: string;
  homeAddr: string | undefined;
  phone: string;
  paymentMethod: string;
  saveData: boolean;
};

export default function Page() {
  // payment
  const paymentProviders = [
    "/applepay.svg",
    "/amex.svg",
    "/visa.svg",
    "/mastercard.svg",
    "/paypal.svg",
  ];

  // react-hook-form
  const {
    register,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  return (
    <main>
      <BreadCrumbs
        links={[
          { name: "Cart", href: "/cart" },
          { name: "Checkout", active: true },
        ]}
      />

      <section>
        <div className="container mx-auto px-5">
          <Typography variant="h4" fontWeight={500}>
            Billing Details
          </Typography>
          <div className="mt-10 flex gap-8">
            <div className="grid grid-cols-1 gap-5 w-3/5">
              <TextField
                fullWidth
                required
                label="Full Name"
                className="bg-secondary"
                error={Boolean(errors["name"])}
                InputLabelProps={{ className: "!text-sm !font-semibold" }}
                InputProps={{ className: "!text-sm !font-semibold" }}
                {...register("name", { required: true })}
              />
              <TextField
                fullWidth
                label="Email"
                required
                className="bg-secondary"
                error={Boolean(errors["email"])}
                InputLabelProps={{ className: "!text-sm !font-semibold" }}
                InputProps={{ className: "!text-sm !font-semibold" }}
                {...register("email", { required: true })}
              />
              <TextField
                fullWidth
                label="Phone"
                required
                className="bg-secondary"
                error={Boolean(errors["phone"])}
                InputLabelProps={{ className: "!text-sm !font-semibold" }}
                InputProps={{
                  className: "!text-sm !font-semibold",
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className="!text-sm">+880</span>
                    </InputAdornment>
                  ),
                }}
                {...register("phone", { required: true })}
              />
              <TextField
                fullWidth
                label="Apartment, floor etc (Optional)"
                className="bg-secondary"
                error={Boolean(errors["homeAddr"])}
                InputLabelProps={{ className: "!text-sm !font-semibold" }}
                InputProps={{ className: "!text-sm !font-semibold" }}
                {...register("homeAddr", { required: false })}
              />
              <TextField
                fullWidth
                label="Street"
                className="bg-secondary"
                error={Boolean(errors["street"])}
                InputLabelProps={{ className: "!text-sm !font-semibold" }}
                InputProps={{ className: "!text-sm !font-semibold" }}
                {...register("street", { required: false })}
              />
              <Controller
                control={control}
                rules={{ required: true }}
                name="city"
                render={({ field: { value, onChange } }) => (
                  <Autocomplete
                    options={[]}
                    noOptionsText="No City Found"
                    onChange={(e, newValue) => onChange(newValue)}
                    value={value}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="City"
                        className="bg-secondary"
                        InputLabelProps={{
                          className: "!text-sm !font-semibold",
                        }}
                        InputProps={{
                          ...params.InputProps,
                          className: "!text-sm !font-semibold",
                        }}
                      />
                    )}
                  />
                )}
              />
              <div className="col-span-full">
                <Controller
                  name="saveData"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          defaultChecked={value}
                          onChange={onChange}
                        />
                      }
                      label="Save this information for faster check-out next time"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "14px",
                        },
                      }}
                    />
                  )}
                />
              </div>
              <div className="col-span-full">
                <Controller
                  name="paymentMethod"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <RadioGroup name="paymentMethod">
                      <FormControlLabel
                        control={
                          <Radio
                            checked={value === "bank"}
                            onChange={onChange}
                            value={"bank"}
                          />
                        }
                        sx={{
                          "& .MuiFormControlLabel-label": { flex: 1 },
                        }}
                        label={
                          <div className="flex items-center gap-5 justify-between">
                            <Typography variant="body2">Bank</Typography>
                            <div className="flex items-center gap-2">
                              {paymentProviders.map((img, index) => (
                                <span
                                  key={index}
                                  className="!w-14 !aspect-[16/10] !overflow-hidden"
                                >
                                  <Image
                                    src={img}
                                    alt={img}
                                    width={30}
                                    height={24}
                                    className="!w-full !h-full !object-cover"
                                  />
                                </span>
                              ))}
                            </div>
                          </div>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={value === "cashOnDelivery"}
                            onChange={onChange}
                            value={"cashOnDelivery"}
                          />
                        }
                        label={
                          <Typography variant="body2">
                            Cash on Delivery
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  )}
                />
              </div>
              <div className="col-span-full">
                <Button
                  variant="contained"
                  className="!uppercase !px-9 !py-2.5 !rounded-full"
                >
                  Place Order
                </Button>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
