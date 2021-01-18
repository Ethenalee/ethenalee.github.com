import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import styles from './style';

type Props = {
  classes: Object,
  options: [],
};

const MainNavigation = ({ classes, options, intl }: Props) => (
  <ul className={classes.ul}>
    {options.map((link, i) => (
      <li className={classes.menuContainer} key={i}>
        <Link
          to={`/${intl.locale}${link.to}`}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          exact={'true'}>
          <span>
            <FormattedMessage id={link.text} />
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export default injectIntl(withStyles(styles)(MainNavigation));
