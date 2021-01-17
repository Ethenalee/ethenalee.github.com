import { useStaticQuery, graphql } from 'gatsby';

const useIllustrations = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulIllustration(sort: { order: DESC, fields: publishDate }) {
          edges {
            node {
              image {
                fluid(maxWidth: 960) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              description
              publishDate
              node_locale
            }
          }
        }
      }
    `
  );
  return data;
};

export default useIllustrations;
