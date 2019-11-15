import React from "react";
import { graphql } from "gatsby";

export const ParagraphIntro = ({ node }) => (
  <div dangerouslySetInnerHTML={{ __html: node.text.processed }} />
);

export const fragment = graphql`
  fragment ParagraphIntro on paragraph__intro {
    id
    text: field_body {
      processed
      value
    }
  }
`;
