import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function StylesArea() {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="bg-secondary px-5 py-12 rounded-2xl shadow-lg">
          <div className="flex justify-center">
            <Typography
              variant="h3"
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Browse by dress style
            </Typography>
          </div>
          <div className="mt-14 grid grid-cols-8 gap-5 px-14">
            <div className="bg-white rounded-xl col-span-3 relative ">
              <Typography
                variant="h5"
                className="!absolute !top-4 !left-5 !font-semibold"
              >
                Casual
              </Typography>
              <div className="absolute top-0 right-0 w-auto !h-full pr-2">
                <Image
                  src={"/casual-dress.png"}
                  alt="Formal dress"
                  width={500}
                  height={300}
                  className="!w-auto !h-full !ml-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl col-span-5 relative aspect-[16/6]">
              <Typography
                variant="h5"
                className="!absolute !top-4 !left-5 !font-semibold"
              >
                Formal
              </Typography>
              <Image
                src={"/formal-dress.png"}
                alt="Formal dress"
                width={500}
                height={300}
                className="!w-auto !h-full !ml-auto mr-2"
              />
            </div>
            <div className="bg-white rounded-xl col-span-5 relative aspect-[16/6]">
              <Typography
                variant="h5"
                className="!absolute !top-4 !left-5 !font-semibold"
              >
                Party
              </Typography>
              <Image
                src={"/party-dress.png"}
                alt="Party dress"
                width={500}
                height={300}
                className="!w-auto !h-full !ml-auto mr-2"
              />
            </div>
            <div className="bg-white rounded-xl col-span-3 relative ">
              <Typography
                variant="h5"
                className="!absolute !top-4 !left-5 !font-semibold"
              >
                GYM
              </Typography>
              <div className="absolute top-0 right-0 w-auto !h-full pr-2">
                <Image
                  src={"/gym-dress.png"}
                  alt="Formal dress"
                  width={500}
                  height={300}
                  className="!w-auto !h-full !ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
