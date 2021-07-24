import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  src?: SortOrder;
  height?: SortOrder;
  productId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  width?: SortOrder;
};
