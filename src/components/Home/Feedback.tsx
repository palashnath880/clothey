import { East } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export default function Feedback() {
  return (
    <section>
      <div className="container mx-auto px-5 py-20">
        <div className="flex justify-between">
          <Typography variant="h3" fontWeight={600} textTransform={"uppercase"}>
            Our Happy Customers
          </Typography>
          <div className="flex gap-3 items-center">
            <IconButton>
              <East className="rotate-180" />
            </IconButton>
            <IconButton>
              <East />
            </IconButton>
          </div>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-3 gap-5">
            <Card className="!shadow-lg !overflow-hidden !rounded-xl !border-2">
              <CardContent className="!pb-0">
                <Rating
                  defaultValue={3.5}
                  readOnly
                  size="medium"
                  precision={0.1}
                />
              </CardContent>
              <CardHeader
                title="Alex Tiplo"
                subheader="CEO of Google"
                avatar={<Avatar>CO</Avatar>}
                className="!pt-2"
                titleTypographyProps={{
                  fontFamily: oswald.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              />
              <CardContent className="!pt-0">
                <Typography variant="body2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Typography>
              </CardContent>
            </Card>
            <Card className="!shadow-lg !overflow-hidden !rounded-xl !border-2">
              <CardContent className="!pb-0">
                <Rating
                  defaultValue={3.5}
                  readOnly
                  size="medium"
                  precision={0.1}
                />
              </CardContent>
              <CardHeader
                title="Alex Tiplo"
                subheader="CEO of Google"
                avatar={<Avatar>CO</Avatar>}
                className="!pt-2"
                titleTypographyProps={{
                  fontFamily: oswald.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              />
              <CardContent className="!pt-0">
                <Typography variant="body2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
