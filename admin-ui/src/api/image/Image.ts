import { Product } from "../product/Product";

export type Image = {
  createdAt: Date;
  src: string | null;
  height: string | null;
  product?: Product | null;
  id: string;
  updatedAt: Date;
  width: string | null;
};
