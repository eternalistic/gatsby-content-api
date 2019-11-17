import React from "react";
import { graphql } from "gatsby";

import "./body.css"

export const ParagraphBody = ({ node }) => (
  <div className="body" dangerouslySetInnerHTML={{ __html: node.text.processed }} />
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

export default ParagraphBody
