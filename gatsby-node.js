/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Articles.
  const articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: articleData.path.alias,
      component: path.resolve('src/templates/article.js'),
      context: {
        ArticleId: articleData.id,
      },
    })
  );

  // Work.
  const works = await graphql(`
    {
      allNodeWork {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  works.data.allNodeWork.nodes.map(workData =>
    createPage({
      path: workData.path.alias,
      component: path.resolve('src/templates/work.js'),
      context: {
        WorkId: workData.id,
      },
    })
  );
}
