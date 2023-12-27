const button = document.getElementById('search');
const inputS = document.getElementById('searchInp');

let isExpanded = false;

button.addEventListener('click', () => {
  if (!isExpanded) {
    inputS.style.width = '200px';
    isExpanded = true;
  } else {
    inputS.style.width = '0';
    isExpanded = false;
  }
});
