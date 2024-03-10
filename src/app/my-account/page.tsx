"use client";

import {
  Button,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

export default function Page() {
  // react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  return (
    <section>
      <div className="container mx-auto px-5">
        <Typography variant="body1" className="!font-semibold">
          Edit Your Profile
        </Typography>

        <div className="mt-10">
          <form>
            <div className="grid grid-cols-2 gap-5 mb-6">
              <TextField
                label="First Name"
                fullWidth
                type="text"
                error={Boolean(errors["firstName"])}
                InputLabelProps={{ className: "!text-sm !font-medium" }}
                inputProps={{ className: "!text-sm !font-medium" }}
                {...register("firstName", { required: true })}
              />
              <TextField
                label="Last Name"
                fullWidth
                type="text"
                error={Boolean(errors["lastName"])}
                InputLabelProps={{ className: "!text-sm !font-medium" }}
                inputProps={{ className: "!text-sm !font-medium" }}
                {...register("lastName", { required: true })}
              />
              <TextField
                label="Email"
                fullWidth
                type="email"
                error={Boolean(errors["email"])}
                InputLabelProps={{ className: "!text-sm !font-medium" }}
                inputProps={{ className: "!text-sm !font-medium" }}
                {...register("email", { required: true })}
              />
              <TextField
                label="Address"
                fullWidth
                type="text"
                error={Boolean(errors["address"])}
                InputLabelProps={{ className: "!text-sm !font-medium" }}
                inputProps={{ className: "!text-sm !font-medium" }}
                {...register("address", { required: true })}
              />
            </div>
            <Button
              variant="contained"
              className="!px-9 !py-2.5 !rounded-full !capitalize"
            >
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
