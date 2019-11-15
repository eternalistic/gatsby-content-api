import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import SEO from "../components/SEO/seo";
import { getParagraph } from "../util/paragraphHelpers";

export const PageTemplate = ({ data }) => {
  const paragraphs = data.page.relationships.paragraphs.map(getParagraph);

  return (
    <Layout>
      <SEO title={data.page.title} />
      <h1>{data.page.title}</h1>
      {paragraphs}
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    page: nodeLanding(fields: { slug: { eq: $slug } }) {
      id
      relationships {
        paragraphs: field_components {
          type: __typename
          ...ParagraphBody
          ...ParagraphIntro
          ...ParagraphHero
        }
      }
      title
    }
  }
`;
