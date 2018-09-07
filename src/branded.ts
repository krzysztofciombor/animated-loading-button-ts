import { Brand } from "src/Brands";
import { CURRENT_BRAND } from "src/config";

export const branded = <T>(brandsMap: { [key in Brand]: T }): T => {
  return brandsMap[CURRENT_BRAND];
};
