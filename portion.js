document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.food-card');

  cards.forEach(card => {
    const portionControl = card.querySelector('.portion-control');

    card.addEventListener('click', function () {
      const isActive = card.classList.contains('active');

      if (isActive) {
        card.classList.remove('active');
        if (portionControl) portionControl.style.display = 'none';
      } else {
        card.classList.add('active');
        if (portionControl) portionControl.style.display = 'flex';
      }
    });

    // Prevent card selection when info button is clicked
    const infoBtn = card.querySelector('.info-btn');
    if (infoBtn) {
      infoBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent card click
        // Define a unique URL based on the card's data or id
        const foodName = card.getAttribute('data-food-name'); // You can set unique food names or ids in data attributes
        const infoPageUrl = `${foodName}-info.html`; // Generate the URL dynamically

        // Redirect to the specific page for that food item
        window.location.href = infoPageUrl; // Replace with the dynamic URL
      });
    }
  });
});
