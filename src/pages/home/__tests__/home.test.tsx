import React from "react";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { MockedProvider } from "@apollo/client/testing";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import wait from "waait";
import "@testing-library/jest-dom/extend-expect";

import Home from "../index";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import LoadingIndicator from "../../../components/loadingIndicator";
import { PEOPLE_QUERY } from "../../../graphQL/queries";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const charactorsMocks = [
  {
    request: {
      query: PEOPLE_QUERY,
      variables: { page: 1 },
    },
    result: {
      people: {},
    },
  },
];

afterEach(cleanup);
test("render home with loader when fetching data", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <MockedProvider addTypename={false} mocks={charactorsMocks}>
            <Home />
          </MockedProvider>
        </RecoilRoot>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  expect(
    wrapper.containsAllMatchingElements([
      <Header title="Charactors"></Header>,
      <LoadingIndicator></LoadingIndicator>,
      <Footer title="2021 May the Force be with you. by Akho Tshweza"></Footer>,
    ])
  ).toBe(true);
});

test("render home with error if data fetch fails", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <MockedProvider addTypename={false} mocks={charactorsMocks}>
            <Home />
          </MockedProvider>
        </RecoilRoot>
      </ThemeProvider>
    );
  });

  expect(
    wrapper.containsAllMatchingElements([
      <Header title="Charactors"></Header>,
      <LoadingIndicator></LoadingIndicator>,
      <Footer title="2021 May the Force be with you. by Akho Tshweza"></Footer>,
    ])
  ).toBe(true);
});
