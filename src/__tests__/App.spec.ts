import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  it("renders properly with heading and paragraph", () => {
    const wrapper = mount(App);

    // Verify h1 tag exists and contains expected text
    const heading = wrapper.find("h1");
    expect(heading.exists()).not.toBe(true);
    expect(heading.text()).toBe("You did it!");

    // Verify p tag exists and contains expected text
    const paragraph = wrapper.find("p");
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toBe("This is a Vue app");
  });
});
