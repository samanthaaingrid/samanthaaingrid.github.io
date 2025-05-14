
function addBreakfastFood(name, portion, fat, sugar, image) {
  const food = { name, portion, fat, sugar, image, mealType: "breakfast" };

  let meals = JSON.parse(localStorage.getItem("meals")) || [];
  meals.push(food);
  localStorage.setItem("meals", JSON.stringify(meals));


  window.location.href = "home.html";
}

<div class="food-item">
  <p>Pisang</p>
  <button onclick="addBreakfastFood('Pisang', '1 buah / ±120g', '0g', '12g', 'IMAGES/pisang.png')">Add</button>
</div>
