import { LineItem } from "../lineItem/LineItem";
import { Image } from "../image/Image";

export type Product = {
  id: string;
  updatedAt: Date;
  vendor: string | null;
  price: number | null;
  lineItems?: Array<LineItem>;
  createdAt: Date;
  title: string | null;
  images?: Array<Image>;
};
