import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Work = ({ data }) => {
  const node = data.nodeWork;
  // return (<div><pre>{JSON.stringify(node, null, 2) }</pre></div>);
  // const isFeatured = node.field_featured;
  // if (isFeatured) {
  //   return 'Featured';
  // }

  return (
    <Layout>
      <h1>{ node.title }</h1>
      <div dangerouslySetInnerHTML = {{ __html: node.body.processed }}
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
      field_featured
    }
  }
`;

export default Work;
