import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  const wrapper = mount(App);
  it("mounts renders properly", () => {
    expect(wrapper.text()).toContain("You did it!");
  });

  it("containe p tag", () => {
    expect(wrapper.text()).toContain("p");
  });
});
