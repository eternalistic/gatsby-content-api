import React from "react";
import { graphql } from "gatsby";
import introStyles from "./intro.module.css"

console.log(introStyles)

export const ParagraphIntro = ({ node }) => (
  <div className={introStyles.wrapper} dangerouslySetInnerHTML={{ __html: node.text.processed }} />
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
