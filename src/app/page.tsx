import Feedback from "@/components/Home/Feedback";
import HeroCountDown from "@/components/Home/HeroCountDown";
import NewArrivals from "@/components/Home/NewArrivals";
import StylesArea from "@/components/Home/StylesArea";
import TopSelling from "@/components/Home/TopSelling";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* hero area */}
      <section className=" bg-secondary">
        <div className="container mx-auto px-5">
          <div className="flex items-center gap-10">
            <div className="w-1/2 flex flex-col gap-4 py-10">
              <Typography
                variant="h2"
                fontWeight={900}
                textTransform={"uppercase"}
              >
                Find cloths that matches your style
              </Typography>
              <Typography variant="body2">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </Typography>
              <Button
                className="!w-max !py-2.5 !px-12 !rounded-full !normal-case"
                variant="contained"
                startIcon={<ShoppingCart fontSize="small" />}
                LinkComponent={Link}
                href="/shop"
              >
                Shop Now
              </Button>
              <HeroCountDown />
            </div>
            <div className="w-1/2">
              <div className="overflow-hidden px-5 pt-10">
                <Image
                  draggable={false}
                  src={"/home-hero.png"}
                  alt="Hero"
                  width={400}
                  height={400}
                  className="!w-full !h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary py-5">
          <div className="container mx-auto px-5"></div>
        </div>
      </section>

      {/* new arrivals area  */}
      <NewArrivals />
      {/* top selling area  */}
      <TopSelling />

      <StylesArea />

      <Feedback />
    </main>
  );
}
