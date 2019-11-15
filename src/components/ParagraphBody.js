import React from "react";
import { graphql } from "gatsby";

export const ParagraphBody = ({ node }) => (
  <div dangerouslySetInnerHTML={{ __html: node.text.processed }} />
);

export const fragment = graphql`
  fragment ParagraphBody on paragraph__body {
    id
    text: field_body {
      processed
      value
    }
  }
`;
