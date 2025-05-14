document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fields = {
        email: {
            input: document.querySelector(".email"),
            error: document.querySelector(".email-field .error"),
            validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        },
        password: {
            input: document.querySelector(".password"),
            error: document.querySelector(".field .error.password"),
            validate: (value) => value.trim().length >= 8
        }
    };

    const togglePasswordIcon = document.getElementById("toggle-password");

    togglePasswordIcon.addEventListener("click", () => {
        const passwordField = fields.password.input;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePasswordIcon.src = "ICON/show.svg";
        } else {
            passwordField.type = "password";
            togglePasswordIcon.src = "ICON/hide.svg";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        for (const key in fields) {
            const field = fields[key];
            const value = field.input.value;
            const isFieldValid = field.validate(value);

            if (!isFieldValid) {
                field.error.style.display = "flex"; // Show error message
                isValid = false;
            } else {
                field.error.style.display = "none"; // Hide error message
            }
        }

        if (isValid) {
            window.location.href = "home.html";
        }
    });
});