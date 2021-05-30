/*
 *
 * Home
 *
 */

import React, { FC, ReactElement, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { PAGE_TITLE_HOME, FOOTER_TEXT } from "../../utils/constants";
import { PEOPLE_QUERY } from "../../graphQL/queries";
import CharactorsPage from "../../components/charactorsPage";
import LoadingIndicator from "../../components/loadingIndicator";

const Home: FC<{}> = (): ReactElement => {
  const [selectedPage, setSelectPage] = useState(1);
  const { loading, data, error } = useQuery(PEOPLE_QUERY, {
    variables: { page: selectedPage },
  });
  const history = useHistory();

  const handleLearnMore = (name: string) => {
    history.push("/charactor/details");
  };
  const handleSelectPage = (pageNumber: number) => {
    setSelectPage(pageNumber);
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Header title={PAGE_TITLE_HOME} />
      {error && <h2> Error retrieving Charactor/s</h2>}
      {loading && <LoadingIndicator />}
      {data && (
        <CharactorsPage
          pageData={data.people}
          currentPage={selectedPage}
          onSelectPage={handleSelectPage}
          onLearnMore={handleLearnMore}
        />
      )}
      <Footer title={FOOTER_TEXT} />
    </div>
  );
};

export default Home;
