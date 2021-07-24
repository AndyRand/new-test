import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  src?: StringNullableFilter;
  height?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  id?: StringFilter;
  width?: StringNullableFilter;
};
