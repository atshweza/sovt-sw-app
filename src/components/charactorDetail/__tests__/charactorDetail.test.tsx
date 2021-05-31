import React from "react";
import { ThemeProvider } from "styled-components";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import CharactorDetail from "../index";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const charactorMock = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  gender: "male",
  homeworld: {
    name: "Tatooine",
    rotationPeriod: "23",
    terrain: "desert",
    climate: "arid",
    population: "200000",
  },
};

afterEach(cleanup);

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <CharactorDetail charactor={charactorMock} />
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("render charactor", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <CharactorDetail charactor={charactorMock} />
      </ThemeProvider>
    );
  });
  expect(
    wrapper.containsAllMatchingElements([
      <h2>Charactor - Luke Skywalker</h2>,
      <h2>Home Planet - Tatooine</h2>,
    ])
  ).toBe(true);
});
