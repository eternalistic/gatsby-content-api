import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Work = ({ data }) => {
  const post = data.nodeWork;

  return (
    <Layout>
      <h1>{ post.title }</h1>
      <div dangerouslySetInnerHTML = {{ __html: post.body.processed }}
      />
    </Layout>
  );
};

Work.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($WorkId: String!) {
    nodeWork(id: { eq: $WorkId }) {
      id
      title
      body {
        processed
      }
    }
  }
`;

export default Work;
