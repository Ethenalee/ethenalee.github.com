import React from 'react';
import { withStyles } from '@material-ui/styles';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import styles from './style';

type Props = {
  classes: Object,
  links: [],
};

const LinkList = ({ classes, links, intl }: Props) => (
  <div>
    <ul className={classes.container}>
      {links.map(({ Icon, to, newTab, text }, index) => (
        <li key={index}>
          <a
            href={to}
            target={newTab ? '_blank' : '_self'}
            rel='noreferrer'
            className={classes.link}>
            <Icon className={classes.linkIcon} />
            <span className={classes.linkText}>
              <FormattedMessage id='name' />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default injectIntl(withStyles(styles)(LinkList));
