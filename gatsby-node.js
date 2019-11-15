/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tpl = path.resolve(`src/templates/paragraph.js`);

    //   Adjust these field names as needed
  const result = await graphql(`
    {
      paragraphPages: allNodeLanding {
        edges {
          node {
            fields {
              slug
            }
            drupal_internal__nid
          }
        }
      }
    }
  `);
  result.data.paragraphPages.edges.forEach(({ node }) => {
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
  // Use the type of your own paragraph page
  if (node.internal.type === `node__landing`) {
    const slug = `/pages/${node.drupal_internal__nid}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
