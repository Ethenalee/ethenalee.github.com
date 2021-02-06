import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { order: DESC, fields: publishDate }) {
          edges {
            node {
              title
              publishDate
              body {
                childMarkdownRemark {
                  html
                }
              }
              heroImage {
                fixed(width: 250) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
              tags
              node_locale
            }
          }
        }
      }
    `
  );
  return data;
};

export default useBlogPosts;
