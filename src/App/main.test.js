import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { App } from "./index";

const flushPromises = require("flush-promises");

jest.mock("react-jss", function() {
  return {
    createUseStyles: function(p) {
      return function() {
        const keys = Object.keys(p);
        const obj = {};
        keys.forEach(key => {
          obj[key] = key;
        });
        return obj;
      };
    }
  };
});

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
  it("renders and works according scenario", () => {
    act(() => {
      render(<App />, container);
    });

    expect(container.textContent).toBe(
      "Forest catA cat and a childAngry catCat on bedProtection for catTwo cats togetherSleeping catAbyssinian catKitten near windowSavannah CatSeveral cat speciesCat of Thailand"
    );

    expect(container.querySelectorAll("img").length).toBe(12);
    const image = document.querySelector("img");

    act(() => {
      image.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(
      container.innerHTML.includes(
        '<div class="detailItem"><label>Name:</label><div class="nameValue">Forest cat<button class="editButton">✎</button></div><'
      )
    ).toBe(true);

    expect(container.querySelectorAll("img").length).toBe(13); // form image + 12 grid images;

    expect(
      container.querySelectorAll('img[class="fullSizeImage"]').length
    ).toBe(0);
    expect(
      container.querySelectorAll('div[class="imageContainer"] img').length
    ).toBe(1);

    const detailImage = container.querySelector(
      'div[class="imageContainer"] img'
    );
    act(() => {
      detailImage.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container.querySelectorAll("img").length).toBe(13);
    expect(
      container.querySelectorAll('img[class="fullSizeImage"]').length
    ).toBe(1);

    const globalWrapper = container.querySelector('*[class="globalWrapper"]');

    act(() => {
      globalWrapper.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(
      container.querySelectorAll('img[class="fullSizeImage"]').length
    ).toBe(0); // full size image removed

    const editButton = container.querySelector('button[class="editButton');

    act(() => {
      editButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(
      container.innerHTML.includes(
        '<input type="text" class="input" value="Forest cat">'
      )
    ).toBe(true);

    const inputConfirmtButton = container.querySelector(
      'button[class="inputConfirmButton'
    );
    const input = container.querySelector("input");

    // Replacing value for input to get this value in handler
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(input, "White and gray colored cats"); // replace colors

    act(() => {
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });

    expect(
      container.querySelectorAll('button[class="hiddenConfirmButton"]').length
    ).toBe(1);
    expect(
      container.querySelectorAll('button[class="confirmButton"]').length
    ).toBe(0);
    expect(
      container.querySelectorAll('button[class="removeButton"]').length
    ).toBe(1);

    act(() => {
      inputConfirmtButton.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });

    expect(
      container.querySelectorAll('button[class="hiddenConfirmButton"]').length
    ).toBe(0);
    expect(
      container.querySelectorAll('button[class="confirmButton"]').length
    ).toBe(1);
    expect(
      container.querySelectorAll('button[class="removeButton"]').length
    ).toBe(1);

    const removeButton = container.querySelector(
      'button[class="removeButton"]'
    );
    act(() => {
      removeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.innerHTML.includes('button[class="removeButton"]')).toBe(
      false
    );

    expect(container.textContent).toBe(
      "ConfirmationShould this image be deleted?YesNo✖ Loaging full image...ID:1Name:White and gray colored cats✎✔ Confirm✖ RemoveForest catA cat and a childAngry catCat on bedProtection for catTwo cats togetherSleeping catAbyssinian catKitten near windowSavannah CatSeveral cat speciesCat of Thailand"
    );
    const confirmButtons = container.querySelectorAll(
      'div[class="removeConfirmWindowButtons"] button'
    );
    expect(confirmButtons.length).toBe(2);
    expect(confirmButtons[0].innerHTML).toBe("Yes");

    act(() => {
      confirmButtons[0].dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });

    expect(container.textContent).toBe(
      "Cat on bedProtection for catTwo cats togetherSleeping catAbyssinian catKitten near windowSavannah CatSeveral cat speciesCat of ThailandA cat and a childAngry cat"
    );
  });
});
