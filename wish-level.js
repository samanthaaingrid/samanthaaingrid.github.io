function setActive(button) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.difficulty button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');
}
