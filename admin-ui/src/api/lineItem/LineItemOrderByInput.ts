import { SortOrder } from "../../util/SortOrder";

export type LineItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
};
