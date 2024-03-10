"use client";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // check active pathname
  const isActive = (path: string): boolean => path === pathname;

  // menus
  const menus = [
    {
      name: "Manage My Account",
      children: [
        {
          name: "My Profile",
          href: "",
        },
        {
          name: "Booking Address",
          href: "/booking-address",
        },
        {
          name: "My Payment Options",
          href: "/payment-options",
        },
      ],
    },
    {
      name: "My Orders",
      children: [
        {
          name: "My Returns",
          href: "/returns-order",
        },
        {
          name: "My Cancellations",
          href: "/cancel-order",
        },
      ],
    },
    {
      name: "My Wishlist",
      children: [
        {
          name: "My Wishlist",
          href: "/wishlist",
        },
      ],
    },
  ];

  return (
    <main>
      <BreadCrumbs links={[{ name: "My Account", active: true }]} />

      <section>
        <div className="container mx-auto px-5">
          <Typography variant="body2" className="!flex !items-center gap-1">
            Welcome!
            <Typography
              component={"span"}
              variant="body1"
              className="!font-semibold"
            >
              Palash
            </Typography>
          </Typography>

          <div className="flex gap-10 mt-10">
            <div className="min-w-[200px] border-r">
              <div className="flex flex-col gap-3">
                {menus.map(({ name: menuName, children }, index) => (
                  <div className="flex flex-col" key={index}>
                    <Typography variant="body2" className="!font-semibold">
                      {menuName}
                    </Typography>
                    <List
                      sx={{
                        paddingLeft: "1rem",
                      }}
                    >
                      {children.map(({ href, name }, i) => (
                        <ListItem className="!px-0 !py-0" key={i}>
                          <Link
                            className={`!text-sm !py-2 !text-primary hover:!text-opacity-100 !duration-200 ${
                              !isActive(`/my-account${href}`) &&
                              "!text-opacity-50"
                            }`}
                            href={`/my-account${href}`}
                          >
                            {name}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 px-5">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
