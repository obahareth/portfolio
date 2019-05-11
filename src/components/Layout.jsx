import { graphql, StaticQuery } from 'gatsby';
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

export const Layout = ({ data, render, ...otherProps }) => (
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
            { name: 'twitter:image', content: ogImage },
            {
              name: 'google-site-verification',
              content: '69KygYRb9OkC94LsdhXNdRofjRgdkF_ZfsYB-Qzp0_M',
            },
          ]}
        >
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <div id={PAGE_CONTENT_CONTAINER_ID}>
          <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
          <div id={PAGE_CONTENT_ID}>
            {render({ scrollTop, toggleSidebar, ...otherProps })}
          </div>
        </div>
      </React.Fragment>
    )}
    />
  </ErrorBoundary>
);

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  render: PropTypes.func.isRequired,
};

const LayoutContainer = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

export default LayoutContainer;
