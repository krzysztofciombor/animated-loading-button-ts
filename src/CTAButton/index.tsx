import { brandedHOC as branded } from "src/brandedHOC";

import { Brand1_Button } from "./Brand1_Button";
import { Brand2_Button } from "./Brand2_Button";

export default branded({
  Brand1: Brand1_Button,
  Brand2: Brand2_Button
});
