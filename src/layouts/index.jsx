import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import App from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import 'scss/custom-bootstrap.scss';
import 'scss/fonts.scss';
import 'scss/global-styles.scss';
import 'scss/icons.scss';

const Layout = ({ children, data }) => (
  <ErrorBoundary>
    <App render={state => (
      <React.Fragment>
        <Helmet
          title={get(data, 'site.siteMetadata.title')}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
        </Helmet>
        <Navbar solid={state.scrollTop > 0} />
        <div>
          {children()}
        </div>
        <Footer />
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
        title
      }
    }
  }
`;
