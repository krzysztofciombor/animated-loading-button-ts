import Brand1_LoginPageLayout from "./Brand1_LoginPageLayout";
import Brand2_LoginPageLayout from "./Brand2_LoginPageLayout";
import { brandedHOC as branded } from "src/brandedHOC";

export default branded({
  Brand1: Brand1_LoginPageLayout,
  Brand2: Brand2_LoginPageLayout
});
