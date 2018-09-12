module.exports = {
  extends: 'airbnb',
  globals: {
    graphql: true,
  },
  settings: {
    'import/core-modules': ['react', 'prop-types', 'config'],
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['content', './src/content'],
          ['images', './src/images'],
          ['layouts', './src/layouts'],
          ['pages', './src/pages'],
          ['scss', './src/scss'],
        ],
        extensions: ['.js', '.jsx', '.scss', '.jpg', '.png', '.jpeg'],
      },
    },
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true,
    jest: true,
    serviceworker: true,
  },
  rules: {
    'no-constant-condition': 0,
    'react/forbid-prop-types': [1, {
      forbid: ['any', 'array'],
    }],
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
    {
      files: ['src/components/HTML.jsx'],
      rules: {
        // Ignore warnings for `dangerouslySetInnerHTML`
        'react/no-danger': 0,
      },
    }
  ],
};
