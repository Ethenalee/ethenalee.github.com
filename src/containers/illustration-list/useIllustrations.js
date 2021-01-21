import { useStaticQuery, graphql } from 'gatsby';

const useIllustrations = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulIllustration(sort: { order: DESC, fields: publishDate }) {
          edges {
            node {
              image {
                fixed(width: 960, height: 1200) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
              title
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
