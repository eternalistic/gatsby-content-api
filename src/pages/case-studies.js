import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseStudyPreview from "../components/caseStudyPreview";

const CaseStudies = ({ data }) => {
  const caseStudies = data.allNodeCaseStudy.nodes;
  return (
    <Layout>
      <SEO title="Case Studies" />
      <h1>Case Studies</h1>
      {caseStudies.map(caseStudy => (
        <CaseStudyPreview
          key={caseStudy.id}
          title={caseStudy.title}
          path={caseStudy.path.alias}
          summary={caseStudy.body.summary ? caseStudy.body.summary : caseStudy.body.processed.substring(0, 300)}
        />
      ))}
    </Layout>
  );
};

CaseStudies.propTypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allNodeCaseStudy(
      sort: {fields: created, order: DESC}
      limit: 10
    ) {
      nodes {
        title
        id
        body {
          processed
          summary
        }
        path {
          alias
        }
      }
    }
  }
`;

export default CaseStudies;
