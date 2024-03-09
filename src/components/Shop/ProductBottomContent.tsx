"use client";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Details from "./Product/Details";
import RatingAndReview from "./Product/RatingAndReview";
import FAQ from "./Product/FAQ";

export default function ProductBottomContent() {
  // states
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="border-b-2">
        <Tabs
          onChange={(e, value) => setTab(value)}
          value={tab}
          centered={true}
          variant="fullWidth"
        >
          <Tab label="Product Details" id="details" className="!capitalize" />
          <Tab label="Ratings & Reviews" id="ratings" className="!capitalize" />
          <Tab label="FAQs" id="faqs" className="!capitalize" />
        </Tabs>
      </div>
      <div className="mt-10">
        {tab === 0 && <Details />}
        {tab === 1 && <RatingAndReview />}
        {tab === 2 && <FAQ />}
      </div>
    </>
  );
}
