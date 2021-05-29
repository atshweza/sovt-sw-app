/*
*
* Home
*
*/

import React, { FC, ReactElement } from "react";
import { Helmet } from 'react-helmet';
import SimpleCard from '../../components/exampleCard';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {PAGE_TITLE_HOME,FOOTER_TEXT  } from "../../utils/constants";

const Home: FC<{}> = (): ReactElement => {
  return(
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Header title={"Star Wars Charactors"}/>
      <SimpleCard></SimpleCard>
      <Footer title={FOOTER_TEXT}/>
    </div>
  );
}

export default Home;