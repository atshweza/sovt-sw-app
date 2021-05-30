/*
 *
 * Home
 *
 */

import React, { FC, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useRecoilState } from "recoil";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { PAGE_TITLE_HOME, FOOTER_TEXT } from "../../utils/constants";
import { PEOPLE_QUERY } from "../../graphQL/queries";
import CharactorsPage from "../../components/charactorsPage";
import LoadingIndicator from "../../components/loadingIndicator";
import {
  searchText as searchTextAtom,
  selectedPage as selectedPageAtom,
} from "../../atoms/atoms";

const Home: FC<{}> = (): ReactElement => {
  const [userSelectedPage, setUserSelectedPage] =
    useRecoilState(selectedPageAtom);
  const [userSearchText, setUserSearchText] = useRecoilState(searchTextAtom);
  const { loading, data, error } = useQuery(PEOPLE_QUERY, {
    variables: { page: userSelectedPage },
  });
  const history = useHistory();

  const handleLearnMore = (name: string) => {
    setUserSearchText(name);
    history.push("/charactor/details");
  };
  const handleGoHome = () => {
    history.push("/");
  };
  const handleSelectPage = (pageNumber: number) => {
    setUserSelectedPage(pageNumber);
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Header title={PAGE_TITLE_HOME} onGoHome={handleGoHome} />
      {error && <h2> Error retrieving Charactor/s</h2>}
      {loading && <LoadingIndicator />}
      {data && (
        <CharactorsPage
          pageData={data.people}
          currentPage={userSelectedPage}
          onSelectPage={handleSelectPage}
          onLearnMore={handleLearnMore}
        />
      )}
      <Footer title={FOOTER_TEXT} />
    </div>
  );
};

export default Home;
