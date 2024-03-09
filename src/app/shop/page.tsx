import Filter from "@/components/Shop/Filter";
import Products from "@/components/Shop/Products";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import React from "react";

export default function page() {
  return (
    <main>
      <BreadCrumbs links={[{ name: "Shop", active: true }]} />

      <div className="container mx-auto px-5">
        <div className="flex">
          <div className="w-[270px]">
            <div className=" bg-secondary rounded-lg py-4 sticky top-0">
              <Filter />
            </div>
          </div>
          <div className="flex-1 pr-3 pl-5">
            <Products />
          </div>
        </div>
      </div>
    </main>
  );
}
