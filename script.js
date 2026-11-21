
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const form = document.getElementById("loginForm");
const toast = document.getElementById("toast");

// Show and hide password
toggle.addEventListener("click", () => {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden ? "🙈" : "👀";
});

// Fun welcome interaction
form.addEventListener("submit", (event) => {
    event.preventDefault();

    toast.textContent = "🎉 Welcome to FunSpace! 🚀";
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
});
