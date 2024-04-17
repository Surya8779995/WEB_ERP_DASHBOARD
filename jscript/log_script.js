function performLogin() {
    // Simulate login logic - replace with actual authentication logic
    const usernameInput = $('#username').val();
    const passwordInput = $('#password').val();

    // Hardcoded credentials for demonstration purposes
    const validUsername = 'admin';
    const validPassword = 'password';

    if (usernameInput === validUsername && passwordInput === validPassword) {
        // Successful login
        displayStatusMessage('success', 'Login successful. Redirecting...');
        setTimeout(() => {
            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        // Failed login
        displayStatusMessage('error', 'Invalid username or password. Please try again.');
    }
}

document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var icon = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        icon.className = 'fas fa-eye';
    }
});





function displayStatusMessage(type, message) {
    const statusMessageElement = $('#statusMessage');
    statusMessageElement.text(message);

    if (type === 'success') {
        statusMessageElement.removeClass('error').addClass('success');
    } else {
        statusMessageElement.removeClass('success').addClass('error');
    }

    statusMessageElement.fadeIn(300);
    setTimeout(() => {
        statusMessageElement.fadeOut(300);
    }, 3000);
}
