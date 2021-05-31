import React from "react";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import CharactorsPage from "../index";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const pageData = {
  numberOfPages: 1,
  hasNextPage: true,
  hasPreviousPage: false,
  people: [
    {
      name: "Luke Skywalker",
    },
    {
      name: "C-3PO",
    },
    {
      name: "R2-D2",
    },
  ],
};

afterEach(cleanup);

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <CharactorsPage pageData={pageData} />
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("render charactor list", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <CharactorsPage pageData={pageData} />
        </RecoilRoot>
      </ThemeProvider>
    );
  });
  expect(
    wrapper.containsAllMatchingElements([
      <h2>Luke Skywalker</h2>,
      <h2>C-3PO</h2>,
      <h2>R2-D2</h2>,
    ])
  ).toBe(true);
});
