import Head from "next/head";

export default function Metatags() {
  const title = `Hugo Lacerda's Portfolio`;
  const description = `I'm a web developer based in São Paulo, Brazil, and here you can find some of my recent projects.`;
  const image = `https://www.hugolacerda.dev/images/og-image.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hugolacerdar" />
      <meta name="twitter:title" content={`${title} | READNEXT`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={`${title} | READNEXT`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
