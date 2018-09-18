import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import App from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary';
import Sidebar from 'components/Sidebar';
import { PAGE_CONTENT_ID, PAGE_CONTENT_CONTAINER_ID } from 'constants';
import favicon from 'images/icon.png';
import ogImage from 'images/og:image.png';
import 'scss/custom-bootstrap.scss';
import 'scss/fonts.scss';
import 'scss/global-styles.scss';
import 'scss/icons.scss';

const Layout = ({ children, data, ...otherProps }) => (
  <ErrorBoundary>
    <App render={({ isSidebarOpen, scrollTop, toggleSidebar }) => (
      <React.Fragment>
        <Helmet
          title={get(data, 'site.siteMetadata.title')}
          meta={[
            { name: 'description', content: get(data, 'site.siteMetadata.description') },
            { name: 'pinterest', content: 'nopin' },
            { name: 'og:title', content: 'Daniel Spajic' },
            { name: 'og:description', content: get(data, 'site.siteMetadata.description') },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: get(data, 'site.siteMetadata.siteUrl') },
            { name: 'og:image', content: ogImage },
            { name: 'og:locale', content: 'en_AU' },
          ]}
        >
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
        </Helmet>
        <div id={PAGE_CONTENT_CONTAINER_ID}>
          <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
          <div id={PAGE_CONTENT_ID}>
            {children({ scrollTop, toggleSidebar, ...otherProps })}
          </div>
        </div>
      </React.Fragment>
    )}
    />
  </ErrorBoundary>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;
