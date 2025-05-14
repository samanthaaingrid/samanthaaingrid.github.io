 function setActive(selectedButton) {
      const buttons = document.querySelectorAll('.activity-level button');
      buttons.forEach(button => button.classList.remove('active'));
      selectedButton.classList.add('active');
    }
    const buttons = document.querySelectorAll('.activity-level button');
    const resultBtn = document.getElementById('resultBtn');
    let selectedActivity = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        selectedActivity = button.textContent.trim(); // store selected if needed
        resultBtn.disabled = false; // enable the "See my result" button
      });
    });
  
    resultBtn.addEventListener('click', () => {
      if (selectedActivity) {
 
        window.location.href = "diet-info.html";
      }
    });