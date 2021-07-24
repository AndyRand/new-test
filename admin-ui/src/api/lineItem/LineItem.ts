import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type LineItem = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  order?: Order | null;
  product?: Product | null;
  price: number | null;
  quantity: number | null;
};
