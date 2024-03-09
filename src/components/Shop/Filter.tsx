"use client";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
  Slider,
  Typography,
  Checkbox,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Oswald } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const oswald = Oswald({ subsets: ["latin"] });

const PriceRange = () => {
  // states
  const [value, setValue] = useState<number | number[]>([0, 1000]);
  return (
    <div className="px-3">
      <div className="!px-2">
        <Slider
          valueLabelDisplay="auto"
          value={value}
          min={0}
          max={5000}
          onChange={(e, newValue) => setValue(newValue)}
        />
      </div>
      <Typography className="!flex !justify-between !font-medium" variant="h6">
        <span>${Array.isArray(value) && value[0]}</span>
        <span>${Array.isArray(value) && value[1]}</span>
      </Typography>
    </div>
  );
};

const FilterItem = ({
  name,
  list,
  isOpen,
  queryName,
}: {
  name: string;
  list: string[];
  isOpen?: boolean;
  queryName: string;
}) => {
  // states
  const [open, setOpen] = useState<boolean>(isOpen || false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryValues: string[] = searchParams.getAll(queryName) || [];

  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const checked = e.target.checked;
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let paramsValues: string[] = params.getAll(queryName);
    params.delete(queryName);
    if (checked) {
      paramsValues.push(value);
    } else {
      paramsValues = paramsValues.filter((i) => i !== value);
    }

    paramsValues = [...new Set(paramsValues)];

    for (let item of paramsValues) {
      params.append(queryName, item);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (queryValues?.length > 0) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        className="!px-3 hover:!bg-transparent !uppercase"
        sx={{
          "& .MuiListItemText-root span": { fontWeight: 500 },
          borderTop: "1px solid #00000025 !important",
          borderBottom: "1px solid #00000025 !important",
        }}
      >
        <ListItemText
          sx={{
            "& span": { fontSize: "14px", fontFamily: oswald.style.fontFamily },
          }}
        >
          {name}
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout={"auto"} unmountOnExit>
        <List component={"div"} disablePadding className="!pl-3 !py-2">
          {list.map((item, index) => (
            <ListItemButton className="!px-1 !py-0" key={index}>
              <FormControlLabel
                onChange={handleChange}
                value={item}
                control={
                  <Checkbox
                    defaultChecked={Boolean(queryValues.includes(item))}
                    size="small"
                  />
                }
                label={item}
                className="!mx-0 !w-full"
                sx={{
                  "& span": { fontSize: "14px" },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default function Filter() {
  // search params
  const searchParams = useSearchParams();
  const params = {
    sizes: searchParams.get("sizes") || "",
    colors: searchParams.get("colors") || "",
    brands: searchParams.get("brands") || "",
    types: searchParams.get("types") || "",
    page: searchParams.get("page") || 1,
    limit: searchParams.get("limit") || 50,
  };

  // filter options
  const sizes = ["S", "M", "L", "XL", "XXl", "3XL"];
  const colors = ["Blue", "Green", "White", "Black", "Red"];
  const brands = ["Zara", "Gucci", "Prada", "Calvin Klein", "Versace"];
  const types = [
    "Slave T-Shirt",
    "Print T-Shirt",
    "Plain T-Shirt",
    "Vests",
    "Stripe T-Shirt",
    "Pant",
  ];

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h6" fontWeight={400} textAlign={"center"}>
        Filter Results By
      </Typography>
      <List component={"div"} disablePadding className="">
        <FilterItem
          name="Product Type"
          list={types}
          isOpen
          queryName="product_type"
        />
        <FilterItem name="Sizes" list={sizes} queryName="sizes" />
        <FilterItem name="Colors" list={colors} queryName="colors" />
        <FilterItem name="Brands" list={brands} queryName="brands" />
      </List>
      <PriceRange />
    </div>
  );
}
