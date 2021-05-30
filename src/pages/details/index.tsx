/*
 *
 * Details
 *
 */

import React, { FC, ReactElement, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FOOTER_TEXT, PAGE_TITLE_DETAIL } from "../../utils/constants";
import { FIND_PERSON_QUERY } from "../../graphQL/queries";
import CharactorDetail from "../../components/charactorDetail";
import LoadingIndicator from "../../components/loadingIndicator";

import { searchText as searchTextAtom } from "../../atoms/atoms";

const Details: FC<{}> = (): ReactElement => {
  const selectedCharactor = useRecoilValue(searchTextAtom);
  const history = useHistory();
  const { loading, data, error } = useQuery(FIND_PERSON_QUERY, {
    variables: { name: selectedCharactor },
  });
  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Helmet>
        <title>Details</title>
        <meta name="description" content="Description of Details" />
      </Helmet>
      <Header title={PAGE_TITLE_DETAIL} onGoHome={handleGoHome} />
      {error && <h2> Error retrieving Charactor Details</h2>}
      {loading && <LoadingIndicator />}
      {data && (
        <CharactorDetail
          charactor={data.personByName}
          onGoHome={handleGoHome}
        />
      )}
      <Footer title={FOOTER_TEXT} />
    </div>
  );
};

export default Details;
