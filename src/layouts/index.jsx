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

const siteTitle = 'Daniel Spajic';
const getSiteDescription = data => get(data, 'site.siteMetadata.description');
const getSiteUrl = data => get(data, 'site.siteMetadata.siteUrl');

// Twitter requires `twitter:image` to be an absolute path. This adds one during production.
// eslint-disable-next-line arrow-body-style
const getTwitterImage = (siteUrl) => {
  return process.env.NODE_ENV === 'production' ? `${siteUrl}${ogImage}` : ogImage;
};

const Layout = ({ children, data, ...otherProps }) => (
  <ErrorBoundary>
    <App render={({ isSidebarOpen, scrollTop, toggleSidebar }) => (
      <React.Fragment>
        <Helmet
          title={get(data, 'site.siteMetadata.title')}
          meta={[
            { name: 'description', content: getSiteDescription(data) },
            { name: 'pinterest', content: 'nopin' },
            { name: 'og:title', content: siteTitle },
            { name: 'og:description', content: getSiteDescription(data) },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: getSiteUrl(data) },
            { name: 'og:image', content: ogImage },
            { name: 'og:locale', content: 'en_AU' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: siteTitle },
            { name: 'twitter:description', content: getSiteDescription(data) },
            { name: 'twitter:url', content: getSiteUrl(data) },
            { name: 'twitter:site', content: '@dspacejs' },
            { name: 'twitter:creator', content: '@dspacejs' },
            { name: 'twitter:image', content: getTwitterImage(getSiteUrl(data)) },
          ]}
        >
          <link rel="shortcut icon" type="image/png" href={favicon} />
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
