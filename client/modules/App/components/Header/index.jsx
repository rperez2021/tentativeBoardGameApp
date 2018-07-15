import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import SearchForm from '../SearchForm';
import SignInScreen from '../../../Auth/components/SignInScreen/SignInScreen';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>);

  return (
    <div className={styles.header}>
      
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes}
        </ul>
      </div>
      <SignInScreen />
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><FormattedMessage id="siteTitle" /></Link>


        </h1>
        {
          context.router.isActive('/', true)
            ?
            <div>
            <a className={styles['add-post-button']} href="#" onClick={props.toggleAddEvent}><FormattedMessage id="addEvent" /></a>
              <Link to="/games/" className={styles['add-post-button']}>Go To Your Events</Link>
            </div>
            : null
        }
        {
          context.router.isActive('/games', true)
            ?
            <a className={styles['add-post-button']} href="#" onClick={props.toggleAddEvent}><FormattedMessage id="addEvent" /></a>
            : null
        }
      </div>
      <SearchForm />
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  toggleAddEvent: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
