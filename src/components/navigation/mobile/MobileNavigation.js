import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
import { FaBars } from 'react-icons/fa';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import styles from './style';

type Props = {
  classes: Object,
  options: [],
  open: Boolean,
  onClick: () => void,
};

const MobileNavigation = ({ classes, options, onClick, open, intl }: Props) => (
  <>
    <FaBars className={classes.menuIcon} onClick={onClick} />
    {open && (
      <div className={classes.menuContainer}>
        {options.map((link, i) => (
          <div key={i}>
            <Link
              to={`${intl.local}${link.to}`}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact={'true'}>
              <span>
                <FormattedMessage id={link.text} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    )}
  </>
);

export default injectIntl(withStyles(styles)(MobileNavigation));
