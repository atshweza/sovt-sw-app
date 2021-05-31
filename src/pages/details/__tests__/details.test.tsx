import React from "react";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { MockedProvider } from "@apollo/client/testing";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import wait from "waait";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import Details from "../index";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import LoadingIndicator from "../../../components/loadingIndicator";
import { PEOPLE_QUERY } from "../../../graphQL/queries";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const charactorMocks = [
  {
    request: {
      query: PEOPLE_QUERY,
      variables: { page: 1 },
    },
    result: {
      personByName: {},
    },
  },
];

const errorMocks = [
  {
    request: {
      query: PEOPLE_QUERY,
      variables: { page: 1 },
    },
    error: new Error("Network error"),
  },
];

afterEach(cleanup);
test("render detail with loader when fetching data", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <MockedProvider addTypename={false} mocks={charactorMocks}>
            <Details />
          </MockedProvider>
        </RecoilRoot>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  expect(
    wrapper.containsAllMatchingElements([
      <Header title="Charactor Detail"></Header>,
      <LoadingIndicator></LoadingIndicator>,
      <Footer title="2021 May the Force be with you. by Akho Tshweza"></Footer>,
    ])
  ).toBe(true);
});

test("render details with error if data fetch fails", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <MockedProvider addTypename={false} mocks={errorMocks}>
            <Details />
          </MockedProvider>
        </RecoilRoot>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  expect(
    wrapper.containsAllMatchingElements([
      <Header title="Charactor Detail"></Header>,
      <LoadingIndicator></LoadingIndicator>,
      <Footer title="2021 May the Force be with you. by Akho Tshweza"></Footer>,
    ])
  ).toBe(true);
});
