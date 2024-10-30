window.addEventListener('load', () => {
  console.log('Running...');
  const elements = document.querySelectorAll(
    '.css-xljsgz-Wrapper, section.mr-0, li.relative:nth-child(4) > a:nth-child(1)'
  );
  elements.forEach(element => {
    element.style.display = 'none';
  });
});