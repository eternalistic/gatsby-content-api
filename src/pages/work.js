import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkPreview from "../components/workPreview";

const Works = ({ data }) => {
  const works = data.allNodeWork.nodes;
  return (
    <Layout>
      <SEO title="Works" />
      <h1>Works</h1>
      {works.map(work => (
        <WorkPreview
          key={work.id}
          title={work.title}
          path={work.path.alias}
        />
      ))}
    </Layout>
  );
};

Works.propTypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allNodeWork(
      sort: {fields: created, order: DESC}
      limit: 10
    ) {
      nodes {
        title
        id
        body {
          processed
        }
        path {
          alias
        }
      }
    }
  }
`;

export default Works;
