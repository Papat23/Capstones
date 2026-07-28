// Falls back to text initials if the crest image fails to load
function handleCrestError(img) {
  img.style.display = 'none';
  img.nextElementSibling.style.display = 'flex';
}

// Login form handler
document.addEventListener('DOMContentLoaded', function () {

  // ================= LOGIN =================
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
      }

      console.log('Sign in attempt:', { username, password });

      alert("✅ Login Successful!");

      // window.location.href = "dashboard.html";
    });
  }

  // Redirect to Register Page
  const createAccountBtn = document.getElementById('createAccountBtn');
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', function () {
      window.location.href = "regis.html";
    });
  }

  // ================= REGISTER =================
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const errorEl = document.getElementById('passwordError');

      if (password !== confirmPassword) {
        errorEl.style.display = 'block';
        return;
      }

      errorEl.style.display = 'none';

      // Registration data
      const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        address: document.getElementById('address').value,
        password: password
      };

      console.log('Registration attempt:', formData);

      // SUCCESS MESSAGE
      const goLogin = confirm(
        "✅ Account Created Successfully!\n\nClick OK to go to the Login page."
      );

      if (goLogin) {
        window.location.href = "index.html";
      }
    });
  }

});