"use client";

import BreadCrumbs from "@/components/shared/BreadCrumbs";
import { Call, MailOutline, Telegram } from "@mui/icons-material";
import {
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Page() {
  // react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  // form handle
  const messageHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <BreadCrumbs links={[{ name: "Contact", active: true }]} />

      {/* message form */}
      <section>
        <div className="container mx-auto px-5">
          <div className="flex gap-8">
            <div className="w-1/3">
              <div className="bg-secondary px-5 py-10 rounded-lg">
                <div className="flex flex-col gap-2">
                  <Typography variant="h6" className="flex gap-2 items-center">
                    <Call />
                    Call To Us
                  </Typography>
                  <Typography variant="subtitle2">
                    We are available 24/7, 7days a week
                  </Typography>
                  <Typography variant="subtitle2">
                    Phone: +8801304780828
                  </Typography>
                </div>
                <Divider className="!my-5" />
                <div className="flex flex-col gap-2">
                  <Typography variant="h6" className="flex gap-2 items-center">
                    <MailOutline />
                    Write To Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill out our form and we will contact you within 24 hours
                  </Typography>
                  <Typography variant="subtitle2">
                    Email: email@example.com
                  </Typography>
                  <Typography variant="subtitle2">
                    Email: email@example.com
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form onSubmit={handleSubmit(messageHandler)}>
                <div className="grid grid-cols-3 gap-x-5 gap-y-8">
                  <TextField
                    fullWidth
                    label="Your Name"
                    className="bg-secondary"
                    error={Boolean(errors["phone"])}
                    InputLabelProps={{ className: "!text-sm !font-semibold" }}
                    InputProps={{ className: "!text-sm !font-semibold" }}
                    {...register("name", { required: true })}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    className="bg-secondary"
                    error={Boolean(errors["email"])}
                    InputLabelProps={{ className: "!text-sm !font-semibold" }}
                    InputProps={{ className: "!text-sm !font-semibold" }}
                    {...register("email", { required: true })}
                  />
                  <TextField
                    fullWidth
                    label="Your Phone"
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
                  <div className="col-span-3">
                    <TextField
                      fullWidth
                      label="Your Message"
                      minRows={7}
                      multiline
                      className="bg-secondary"
                      error={Boolean(errors["message"])}
                      InputLabelProps={{ className: "!text-sm !font-semibold" }}
                      InputProps={{ className: "!text-sm !font-semibold" }}
                      {...register("message", { required: true })}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    type="submit"
                    variant="contained"
                    className="!px-8 !py-2.5 !rounded-full"
                    endIcon={<Telegram />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
