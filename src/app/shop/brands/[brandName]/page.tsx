import BreadCrumbs from "@/components/shared/BreadCrumbs";
import { useParams } from "next/navigation";
import React from "react";

export default function Page({ params }: { params: { brandName: string } }) {
  return (
    <main>
      <BreadCrumbs
        links={[
          { name: "Shop", href: "/shop" },
          { name: "Brands", href: "/shop/brands" },
          { name: params.brandName, active: true },
        ]}
      />
    </main>
  );
}
