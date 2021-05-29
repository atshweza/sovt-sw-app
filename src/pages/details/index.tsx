/*
*
* Details
*
*/

import React, { FC, ReactElement } from "react";
import { Helmet } from 'react-helmet';
import logo from './assets/logo.svg';

const Details: FC<{}> = (): ReactElement => {
  return(
    <div>
      <Helmet>
        <title>Details</title>
        <meta name="description" content="Description of Details" />
      </Helmet>
      <h1>Details</h1>
    </div>
  );
}

export default Details;