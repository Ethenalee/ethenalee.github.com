import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: 'English',
  kr: '한국어',
};

const Language = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: `flex-end`,
    }}>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <a
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              fontWeight: currentLocale === language ? 700 : 300,
              cursor: `pointer`,
              padding: '2%',
              wordBreak: 'keep-all',
            }}>
            {languageName[language]}
          </a>
        ))
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
