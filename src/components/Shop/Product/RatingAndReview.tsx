import { Verified } from "@mui/icons-material";
import { Button, Card, CardContent, Rating, Typography } from "@mui/material";
import React from "react";

export default function RatingAndReview() {
  return (
    <div>
      <div className="flex justify-between">
        <Typography variant="h5">
          All Reviews
          <span className="!scale-75">(451)</span>
        </Typography>
        <div className="flex items-center gap-3">
          <Button
            variant="contained"
            className="!rounded-full !px-7 !py-2.5 !capitalize"
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* reviews */}
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-8 gap-y-5">
          {[...Array(30)].map((i, index) => (
            <Card
              key={index}
              className="!border !border-primary !border-opacity-20 !rounded-xl"
              elevation={0}
            >
              <CardContent>
                <Rating precision={0.1} defaultValue={4.5} readOnly />
                <Typography variant="h6" className="flex items-center gap-1">
                  Jhon Deo
                  <Verified fontSize="small" color="success" />
                </Typography>
                <Typography variant="body2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before the final copy
                  is available.
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="!mt-3"
                  fontWeight={500}
                >
                  Posted on 3 March 2024
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
