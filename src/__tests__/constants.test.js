import kebabCase from 'lodash/kebabCase';
import * as constants from 'constants';

describe('constants', () => {
  describe('NAV_LINKS', () => {
    it('sets a `name` for each item', () => {
      constants.NAV_LINKS.forEach(item => expect(item.name).toBeDefined());
    });

    it('sets a `href` for each item', () => {
      constants.NAV_LINKS.forEach(
        item => expect(item.href).toBe(kebabCase(item.name)),
      );
    });
  });
});
