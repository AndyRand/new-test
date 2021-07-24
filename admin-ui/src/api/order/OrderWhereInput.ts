import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  user?: UserWhereUniqueInput;
  id?: StringFilter;
  customer?: CustomerWhereUniqueInput;
  address?: AddressWhereUniqueInput;
  comments?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
};
