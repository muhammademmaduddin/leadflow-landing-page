const form = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const business = document.getElementById("business").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || business === "" || message === "") {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your lead has been submitted successfully.";
    formMessage.style.color = "green";

    form.reset();
});