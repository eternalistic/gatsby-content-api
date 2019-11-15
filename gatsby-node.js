/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tpl = path.resolve(`src/templates/paragraph.js`);

  const result = await graphql(`
    {
      landingPages: allNodeLanding {
        edges {
          node {
            id
            title
            path {
              alias
            }
            fields {
              slug
            }
            drupal_internal__nid
          }
        }
      }
    }
  `);
  result.data.landingPages.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: tpl,
      context: {
        slug: node.fields.slug
      }
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // "Landing" content type.
  if (node.internal.type === `node__landing`) {
    const slug = `${node.path.alias}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
