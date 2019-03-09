import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
const env = process.env.NODE_ENV || 'development';

const { metaData } = config[env];

const MetaData = props => (
  <Helmet>
    <title>{`${props.title || metaData.title} | ${metaData.siteName}`}</title>
    <meta
      name="description"
      content={props.description || metaData.description}
    />
    <meta name="keywords" content={props.keywords || metaData.keywords} />
    <link rel="canonical" href={props.pageUrl || metaData.siteUrl} />
  </Helmet>
);

export default MetaData;
