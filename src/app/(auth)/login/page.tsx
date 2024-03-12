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
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function Page() {
  // states
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<Inputs>({ defaultValues: { rememberMe: false } });

  // login handler
  const loginHandler: SubmitHandler<Inputs> = async (data) => {
    try {
      setSubmitting(true);
      setError("");
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: searchParams.get("callbackUrl") || "/",
      });
      if (!res?.ok) {
        setError(res?.error || "");
      } else {
        router.replace(res?.url || "/");
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
          onSubmit={handleSubmit(loginHandler)}
          className="sm:w-[430px] w-full border shadow-md rounded-lg px-5 pt-4 pb-8"
        >
          <Typography variant="h4" className="!text-center !font-semibold">
            Login
          </Typography>
          <div className="flex flex-col gap-y-5 mt-5">
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
            <div className="flex justify-between items-center">
              <Controller
                control={control}
                name="rememberMe"
                rules={{ required: false }}
                render={({ field: { onChange, value } }) => (
                  <FormControlLabel
                    label={<Typography variant="body2">Remember me</Typography>}
                    control={
                      <Checkbox
                        checked={Boolean(value)}
                        onChange={onChange}
                        size="small"
                      />
                    }
                  />
                )}
              />

              <Typography
                variant="body2"
                component={Link}
                href={"/forgot-password"}
                className="!underline"
              >
                Forgot Password?
              </Typography>
            </div>
            {error && (
              <Typography
                variant="body2"
                className="!text-red-500 !text-center"
              >
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              className="!py-2.5 !w-full !rounded-full"
              disabled={submitting}
            >
              Login
            </Button>
            <Typography variant="body2" className="!text-center">
              {"Don't have an account?"}{" "}
              <Typography
                component={Link}
                href={"/register"}
                variant="body2"
                className="!underline"
              >
                Register Here
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
