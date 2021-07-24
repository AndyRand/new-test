import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrderCreateInput = {
  user?: UserWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  address?: AddressWhereUniqueInput | null;
  comments?: string | null;
  totalPrice?: number | null;
};
