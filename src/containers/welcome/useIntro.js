import { useStaticQuery, graphq } from 'gatsby';

const useIntro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulIntro {
          edges {
            node {
              name
              description {
                childMarkdownRemark {
                  html
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

export default useIntro;
