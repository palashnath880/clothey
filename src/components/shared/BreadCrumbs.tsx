import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface BreadCrumbsProps {
  href?: string | undefined;
  name: string;
  active?: boolean | undefined;
}

export default function BreadCrumbs({ links }: { links: BreadCrumbsProps[] }) {
  return (
    <section>
      <div className="container mx-auto px-5 py-10">
        <Breadcrumbs>
          <Link href={"/"}>
            <Typography className="!underline" variant="body2">
              Home
            </Typography>
          </Link>
          {links?.map(({ href, name, active }, index) =>
            active ? (
              <Typography key={index} variant="body2">
                {name}
              </Typography>
            ) : (
              <Typography
                key={index}
                component={"a"}
                variant="body2"
                className="!underline"
                href={href}
              >
                {name}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </div>
    </section>
  );
}
