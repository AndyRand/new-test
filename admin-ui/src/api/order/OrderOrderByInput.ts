import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  userId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  addressId?: SortOrder;
  comments?: SortOrder;
  totalPrice?: SortOrder;
};
