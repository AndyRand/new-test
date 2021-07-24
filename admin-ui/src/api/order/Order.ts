import { User } from "../user/User";
import { LineItem } from "../lineItem/LineItem";
import { Customer } from "../customer/Customer";
import { Address } from "../address/Address";

export type Order = {
  createdAt: Date;
  user?: User | null;
  lineItems?: Array<LineItem>;
  id: string;
  updatedAt: Date;
  customer?: Customer | null;
  address?: Address | null;
  comments: string | null;
  totalPrice: number | null;
};
