"use client";

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
import React, { useRef } from "react";
import { Oswald } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
            <IconButton className="custom_swiper_prev_btn">
              <East className="rotate-180" />
            </IconButton>
            <IconButton className="custom_swiper_next_btn">
              <East />
            </IconButton>
          </div>
        </div>
        <div className="mt-14">
          <div className="">
            <style>
              {`.swiper-wrapper{
                padding-bottom: 1.5rem;
              }`}
            </style>
            <Swiper
              autoplay
              slidesPerView={1}
              breakpoints={{
                580: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              speed={500}
              navigation={{
                nextEl: ".custom_swiper_next_btn",
                prevEl: ".custom_swiper_prev_btn",
              }}
              modules={[Navigation]}
            >
              {[...Array(10)].map((i, index) => (
                <SwiperSlide key={index}>
                  <Card className="!shadow-md !overflow-hidden !rounded-xl !border-2">
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
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content.
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
