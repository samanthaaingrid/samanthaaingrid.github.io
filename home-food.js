
document.addEventListener("DOMContentLoaded", function () {
  const mealContainer = document.querySelector(".meal-day");
  let meals = JSON.parse(localStorage.getItem("meals")) || [];

  meals.forEach(food => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <div class="food-img">
        <img src="${food.image}">
      </div>
      <div class="food-details">
        <div class="food-header">
          <div class="food-name">
            <p class="bodytext-b">${food.name}</p>
            <p class="subtext">${food.portion}</p>
          </div>
        </div>
        <div class="nutrition">
          <div class="nutrient">
            <div class="fat">
              <img src="ICON/Avocado.svg">
              <p class="subtext-b">${food.fat}</p>
            </div>
          </div>
          <div class="nutrient">
            <div class="sugar">
              <img src="ICON/sugar.svg">
              <p class="subtext-b">${food.sugar}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    mealContainer.appendChild(card);
  });
});
