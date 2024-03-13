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
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export default function Page() {
  // states
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // user create handler
  const registerHandler: SubmitHandler<Inputs> = async (data) => {
    try {
      setSubmitting(true);
      setError("");

      const res = await axios.post("/api/auth/register", data); // post request
      if (res.data?.success) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
        }); // login this account
        router.push("/my-account");
      } else {
        setError(res.data?.message); // set the error message
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <div className="flex justify-center pt-20 px-5">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="sm:w-[430px] w-full border shadow-md rounded-lg px-5 pt-4 pb-8"
        >
          <Typography variant="h4" className="!text-center !font-semibold">
            Register
          </Typography>
          <div className="flex flex-col gap-y-5 mt-5">
            <TextField
              fullWidth
              label="Name"
              type="text"
              error={Boolean(errors["name"])}
              InputLabelProps={{ className: "!text-sm" }}
              InputProps={{ className: "!text-sm" }}
              {...register("name", { required: true })}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              error={Boolean(errors["email"])}
              InputLabelProps={{ className: "!text-sm" }}
              InputProps={{ className: "!text-sm" }}
              {...register("email", { required: true })}
            />
            <TextField
              fullWidth
              label="Password"
              error={Boolean(errors["password"])}
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
              {...register("password", { required: true })}
            />
            {error && (
              <Typography
                variant="body2"
                className="!text-red-500 !text-center"
              >
                {error}
              </Typography>
            )}
            <Button
              disabled={submitting}
              type="submit"
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
