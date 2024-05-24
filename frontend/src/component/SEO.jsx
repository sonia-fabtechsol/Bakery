import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({title, description, keywords, url}) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {/* <link rel="canonical" href={url} /> */}
  </Helmet>
  )
}

export default SEO