import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageCreateInput = {
  src?: string | null;
  height?: string | null;
  product?: ProductWhereUniqueInput | null;
  width?: string | null;
};
