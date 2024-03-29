import Head from 'next/head'

const Meta = ({
  title,
  description,
  label1 = 'Developer',
  label2 = 'Photographer',
  data1 = 'Cyclist',
  data2 = 'Hackclubber',
}: {
  title: string
  description: string
  label1?: string
  label2?: string
  data1?: string
  data2?: string
}): JSX.Element => (
  <Head>
    <title>{title}</title>

    {/* General */}
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content={`Matt, Gleich, photography, coding, cycling, hampshire, golang, github`}
    />
    <meta name="author" content="Matt Gleich" />
    <meta charSet="utf-8" />

    {/* Icons */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="icon" href="/favicon.ico" />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:type" content="www" />
    <meta property="og:description" content={description} />
    <meta
      property="og:locale"
      content="enl
    US"
    />
    <meta property="og:image" content="/open-graph-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:site_name" content="Matt Gleich" />

    {/* Twitter */}
    <meta property="twitter:creator" content="@matt_gleich" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content="/open-graph-image.png" />
    <meta property="twitter:url" content="https://mattglei.ch" />
    <meta property="twitter:label1" content={label1} />
    <meta property="twitter:label2" content={label2} />
    <meta property="twitter:data1" content={data1} />
    <meta property="twitter:data2" content={data2} />
  </Head>
)

export default Meta
