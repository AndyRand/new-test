import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  updatedAt?: SortOrder;
  vendor?: SortOrder;
  price?: SortOrder;
  createdAt?: SortOrder;
  title?: SortOrder;
};
