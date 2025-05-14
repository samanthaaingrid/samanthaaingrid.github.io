const mondayButtons = document.querySelectorAll('.monday');

mondayButtons[0].classList.add('active');

mondayButtons.forEach(button => {
  button.addEventListener('click', () => {
    mondayButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});