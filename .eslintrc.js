module.exports = {
  extends: 'airbnb',
  globals: {
    graphql: true,
  },
  settings: {
    'import/core-modules': ['react', 'prop-types', 'config'],
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true,
    jest: true,
    serviceworker: true,
  },
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx'],
      globals: {
        mount: true,
        React: true,
        render: true,
        shallow: true,
      },
      rules: {
        quotes: 0,
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'react/destructuring-assignment': 0,
      },
    },
    {
      files: ['src/setupTests.js', 'gatsby-config.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            'devDependencies': true,
            'optionalDependencies': true,
            'peerDependencies': true,
          },
        ],
      },
    },
  ],
};
