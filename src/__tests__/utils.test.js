import { addQuotesToHtml } from 'utils';

describe('utils', () => {
  describe(`addQuotesToHtml`, () => {
    it('adds quotes to a string with a single HTML element', () => {
      const html = '<p>some text</p>';
      const expectedHtml = '<p>“some text”</p>';
      expect(addQuotesToHtml(html)).toBe(expectedHtml);
    });

    it('adds quotes to a string of many HTML elements', () => {
      const html = '<p>some text</p><p>more text</p><p>even more text</p>';
      const expectedHtml = '<p>“some text</p><p>more text</p><p>even more text”</p>';
      expect(addQuotesToHtml(html)).toBe(expectedHtml);
    });
  });
});
