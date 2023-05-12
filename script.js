const btnLearn = document.querySelector('.btn-container .btn:first-of-type');
const btnUpdate = document.querySelector('.btn-container .btn:last-of-type');

btnUpdate.addEventListener('click', function() {
  btnLearn.textContent = 'I am currently learning Javascript';
});