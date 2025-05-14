function nudgeFriend(button) {
    if (button.classList.contains("nudged")) {
        button.classList.remove("nudged");
        button.textContent = "Nudge";
    } else {
        button.classList.add("nudged");
        button.textContent = "Nudged";
    }
}
function praiseFriend(button) {
    if (button.classList.contains("praised")) {
        button.classList.remove("praised");
        button.textContent = "Cheers!";
    } else {
        button.classList.add("praised");
        button.textContent = "Cheers!";
    }
}