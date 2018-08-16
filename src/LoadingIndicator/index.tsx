import { brandedHOC as branded } from "src/brandedHOC";

import { Brand1_LoadingIndicator } from "./Brand1_LoadingIndicator";
import { Brand2_LoadingIndicator } from "./Brand2_LoadingIndicator";

export default branded({
  Brand1: Brand1_LoadingIndicator,
  Brand2: Brand2_LoadingIndicator
});
