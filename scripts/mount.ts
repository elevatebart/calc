import $ from "cash-dom";
import { DefineComponent } from "vue";
import { MountingOptions } from "@vue/test-utils";
// @ts-ignore
import { mount as VTUmount } from "@vue/test-utils/dist/vue-test-utils.esm-bundler";

export default function mount(
  comp: DefineComponent<{}, {}, any>,
  options: Omit<MountingOptions<any>, "attachTo">
) {
  $("body").html("");
  const $root = $(`<div/>`);
  $root.html("");
  $("body").append($root);
  return VTUmount(comp, { attachTo: $root[0], ...options });
}
