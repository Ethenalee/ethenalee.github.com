import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import Button from '@material-ui/core/Button';

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
          <Button
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              fontWeight: currentLocale === language ? 700 : 300,
              cursor: `pointer`,
              padding: '2%',
              wordBreak: 'keep-all',
            }}>
            {languageName[language]}
          </Button>
        ))
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
