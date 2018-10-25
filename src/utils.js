/* This can only be run in `componentDidMount`.
   See: https://www.gatsbyjs.org/docs/debugging-html-builds/ */
export const addQuotesToHtml = (html) => {
  const parser = new DOMParser(html);
  const document = parser.parseFromString(html, 'text/html');

  const firstElement = document.body.childNodes[0];
  firstElement.innerHTML = `“${firstElement.innerHTML}`;

  const lastElementIndex = document.body.childNodes.length - 1;
  const lastElement = document.body.childNodes[lastElementIndex];
  lastElement.innerHTML = `${lastElement.innerHTML}”`;

  return document.body.innerHTML;
};
