import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageUpdateInput = {
  src?: string | null;
  height?: string | null;
  product?: ProductWhereUniqueInput | null;
  width?: string | null;
};
