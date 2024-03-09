import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const FAQItem = ({ qus, ans }: { qus: string; ans: string }) => {
  return (
    <Accordion
      className="!border !border-primary !rounded-none !border-opacity-20 !shadow-md"
      sx={{ "&:before": { height: "0px" } }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6">{qus}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{ans}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default function FAQ() {
  const faqData = [
    {
      qus: "What payment methods do you accept?",
      ans: "We accept a variety of secure payment methods, including credit cards, debit cards, and mobile wallets. You can see the full list of accepted payment methods at checkout.",
    },
    {
      qus: "What is your return policy?",
      ans: "We offer a [number]-day return policy for unworn, unwashed, or defective items. You can find more details about our return policy on our Returns page: https://www.tidio.com/blog/ecommerce-return-policy/",
    },
    {
      qus: "How long will it take to receive my order?",
      ans: "Shipping times vary depending on your location and the shipping method you choose. You can see the estimated shipping times at checkout.",
    },
    {
      qus: "Do you offer international shipping?",
      ans: "Yes, we offer international shipping to a variety of countries. You can see a list of countries we ship to and the associated shipping costs at checkout.",
    },
    {
      qus: "How do I track my order?",
      ans: "Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can track your order by clicking on the tracking number in the email.",
    },
    {
      qus: "What if I receive a damaged or incorrect item?",
      ans: "We are sorry if you received a damaged or incorrect item. Please contact our customer service team as soon as possible and we will be happy to help you resolve the issue.",
    },
    {
      qus: "How can I contact customer service?",
      ans: "You can contact our customer service team by email at [your email address] or by phone at [your phone number]. You can also chat with us online during our business hours.",
    },
    {
      qus: "What is your sizing chart?",
      ans: "You can find our sizing chart on our Size Guide page: https://www.commercegurus.com/size-guides-ecommerce/. The sizing chart is a general guideline, and we recommend that you refer to the specific measurements listed on each product page to find the best fit for you.",
    },
    {
      qus: "How do I care for my clothes?",
      ans: "We recommend that you follow the care instructions on the label of each garment. You can also find general care tips on our Clothing Care page: https://www.zielcommerce.com/blog/build-on-demand-laundry-service-marketplace/, if available.",
    },
    {
      qus: "Do you offer gift certificates?",
      ans: "Yes, we offer gift certificates in a variety of denominations. You can purchase gift certificates on our website.",
    },
  ];

  return (
    <div className="mx-auto md:w-[700px] w-full">
      <div className="flex flex-col mb-10">
        <Typography variant="h5">Frequently Asked Questions (FAQ)</Typography>
      </div>
      <div className="flex flex-col gap-4">
        {faqData.map(({ ans, qus }, index) => (
          <FAQItem key={index} ans={ans} qus={qus} />
        ))}
      </div>
    </div>
  );
}
