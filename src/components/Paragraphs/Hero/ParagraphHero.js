import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import "./hero.css"

export const ParagraphHero = ({ node }) => (
  <div className="wrapper">
    {node.relationships.image.alt}
    <Img fixed={node.relationships.image.localFile.childImageSharp.fixed} alt="Something goes here" />
    <div className="content" dangerouslySetInnerHTML={{ __html: node.text.processed }} />
    <a href={node.cta.uri} className="button">{node.cta.title}</a>
  </div>
);

export const fragment = graphql`
  fragment ParagraphHero on paragraph__hero {
    id
    image: field_image {
      alt
    }
    text: field_body {
      format
      processed
      value
    }
    cta: field_cta_button {
      title
      uri
    }
    relationships {
      image: field_image {
        id
        localFile {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`;
