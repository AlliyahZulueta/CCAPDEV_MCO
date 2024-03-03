let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.querySelector('input[placeholder="Username"]');
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const togglePassword = document.getElementById('togglePassword');

    loginBtn.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
        } else {
            const isLoggedIn = true;

            if (isLoggedIn) {
                console.log("Username: ", username);
                console.log("Password: ", password);

                alert("Login successful!");

                // Redirect to the homepage
                setTimeout(function () {
                    window.location.href = 'homepage.html';
                }, 1000);
            } else {
                alert("Invalid username or password. Please try again.");
            }
        }
    });

    // Toggle password visibility when the image is clicked
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
    });
});
