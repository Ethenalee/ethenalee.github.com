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
                fluid(maxWidth: 960) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
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
