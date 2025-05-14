
    document.addEventListener("DOMContentLoaded", function () {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const foodCards = document.querySelectorAll('.food-card');

        categoryButtons.forEach(button => {
            button.addEventListener('click', function () {
             
                categoryButtons.forEach(btn => btn.classList.remove('active'));
              
                this.classList.add('active');

                const selectedCategory = this.getAttribute('data-category');

                foodCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                   
                    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                        card.style.display = 'flex'; 
                    } else {
                        card.style.display = 'none'; 
                    }
                });
            });
        });
    });

