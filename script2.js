document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("sign-in-form");

    const fields = {
        uname: {
            input: document.querySelector(".uname"),
            error: document.querySelector(".uname-field .error"),
            validate: (value) => value.trim() !== "",
        },
        name: {
            input: document.querySelector(".name"),
            error: document.querySelector(".name-field .error"),
            validate: (value) => value.trim() !== "",
        },

        email: {
            input: document.querySelector(".email"),
            error: document.querySelector(".email-field .error"),
            validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), // Custom regex for email validation
        },
    
        password: {
            input: document.querySelector(".password"),
            error: document.querySelector(".field .error.password"),
            validate: (value) => value.trim() !== "" && value.trim().length >= 8,
        },
    };

    const togglePasswordIcon = document.getElementById("toggle-password");
    togglePasswordIcon.addEventListener("click", () => {
        const passwordField = fields.password.input;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePasswordIcon.src = "ICON/show.svg"; // Change to the "show" icon
        } else {
            passwordField.type = "password";
            togglePasswordIcon.src = "ICON/hide.svg"; // Change back to "hide" icon
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        // Validate each field
        for (const key in fields) {
            const field = fields[key];
            const value = field.input.value;

            if (!field.validate(value)) {
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