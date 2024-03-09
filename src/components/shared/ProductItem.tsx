import { Favorite, FavoriteBorder, LocalMall } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface ProductItemProps {
  title: string;
  image: string;
  avgRating: number;
  price: {
    regular: number;
    sell: number;
    currency: string;
  };
  _id: string;
}

export default function ProductItem({
  product: { title, image, _id, avgRating, price },
}: {
  product: ProductItemProps;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl shadow-lg overflow-hidden bg-secondary aspect-[9/10]">
        <Image
          src={image}
          width={400}
          height={500}
          alt={title}
          className="!w-full !h-full !object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 gap-1.5">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" className="!flex !items-center !gap-1">
          <Rating
            defaultValue={avgRating}
            precision={0.1}
            size="small"
            readOnly
          />
          {avgRating}/5
        </Typography>
        <div className="flex justify-between items-center">
          <Typography variant="h5" fontWeight={600}>
            {price?.currency}
            {price?.sell}
          </Typography>
          <div className="flex items-center gap-1">
            <Tooltip title="Favorite">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </Tooltip>
            <Tooltip title="Buy Now">
              <IconButton>
                <LocalMall />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
