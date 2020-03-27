import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { App } from "./index";
import renderer from "react-test-renderer";
const flushPromises = require("flush-promises");
import { act } from "react-test-renderer";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Image Grid System", () => {
  it("should show ", () => {
    act(() => {
      render(<App />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");
  });
});
