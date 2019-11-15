import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import { Link } from "gatsby";

export const ParagraphHero = ({ node }) => (
  <div class="hero">
    {node.relationships.image.alt}
    <Img fixed={node.relationships.image.localFile.childImageSharp.fixed} alt="Something goes here" />
    <div class="hero__body" dangerouslySetInnerHTML={{ __html: node.text.processed }} />
    <Link to={node.cta.uri} class="hero__button">{node.cta.title}</Link>
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
