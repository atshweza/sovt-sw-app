/*
 *
 * Details
 *
 */

import React, { FC, ReactElement, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FOOTER_TEXT, PAGE_TITLE_DETAIL } from "../../utils/constants";
import { FIND_PERSON_QUERY } from "../../graphQL/queries";
import CharactorDetail from "../../components/charactorDetail";

const Details: FC<{}> = (): ReactElement => {
  const [selectedCharactor, setSelectedCharactor] = useState("Luke Skywalker");
  const { loading, data, error } = useQuery(FIND_PERSON_QUERY, {
    variables: { name: selectedCharactor },
  });
  return (
    <div>
      <Helmet>
        <title>Details</title>
        <meta name="description" content="Description of Details" />
      </Helmet>
      <Header title={PAGE_TITLE_DETAIL} />
      {error && <h2> Error retrieving Charactor Details</h2>}
      {data && <CharactorDetail charactor={data.personByName} />}
      <Footer title={FOOTER_TEXT} />
    </div>
  );
};

export default Details;
