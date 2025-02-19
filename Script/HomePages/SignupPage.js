document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;

    // Validate form
    let isValid = true;

    if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }

    if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!isValidPhone(phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }

    if (gender === '') {
        showError('gender', 'Please select a gender');
        isValid = false;
    }

    if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    if (role === '') {
        showError('role', 'Please select a role');
        isValid = false;
    }

    if (isValid) {
        // Form is valid, you can submit the data to your server here
        alert('Sign up successful!');
        console.log({
            name,
            email,
            phone,
            gender,
            password,
            role
        });
        // Reset form after successful submission
        this.reset();
        window.location.href="LoginPage.html";
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^\+?[\d\s-]{10,15}$/;
    return re.test(phone);
}