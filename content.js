window.addEventListener('load', () => {
  console.log('Running...');
  const selectors = [
    // study tab
    'li.relative:nth-child(1)',
    // discuss tab
    'li.relative:nth-child(4)',
    // job tab
    'li.relative:nth-child(5)',
    // whole discuss page
    '.css-xljsgz-Wrapper',
    // recommendation in main page
    'section.mr-0',
    // recommendation in problemset page
    '.-mr-2',
    // study plan in problemset page
    'div.mt-8:nth-child(2)',
    // company problemset
    '.company-container',
    // topic and company page
    '#lc-content',
    // leetbook
    '.css-1t4w191-WapperContainer'
  ];
  const elements = document.querySelectorAll(selectors.join(', '));
  elements.forEach(element => {
    element.style.display = 'none';
  });
});