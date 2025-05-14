document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const fields = {
        name: {
            input: document.querySelector("#age"), // This input is for 'Name'
            validate: (value) => value.trim() !== "",
        },
        email: {
            input: document.querySelector(".email"),
            error: document.querySelector(".email-field .error.email"),
            validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        },
        password: {
            input: document.querySelector(".password"),
            error: document.querySelector(".pass-field .error.password"),
            validate: (value) => value.trim().length >= 8,
        },
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

        // Only validate email and password since they're the only ones with error UI
        ["email", "password"].forEach((key) => {
            const field = fields[key];
            const value = field.input.value;

            if (!field.validate(value)) {
                field.error.style.display = "flex";
                isValid = false;
            } else {
                field.error.style.display = "none";
            }
        });

        if (isValid) {
      
            window.location.href = "profile.html";
        }
    });
});
