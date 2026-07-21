// Falls back to text initials if the crest image fails to load
function handleCrestError(img) {
  img.style.display = 'none';
  img.nextElementSibling.style.display = 'flex';
}

// Login form handler
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // TODO: connect to your authentication endpoint
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log('Sign in attempt:', { username, password });
    });
  }

  const createAccountBtn = document.getElementById('createAccountBtn');
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', function () {
      alert('Redirect to Register page');
    });
  }
// Falls back to text initials if the crest image fails to load
function handleCrestError(img) {
  img.style.display = 'none';
  img.nextElementSibling.style.display = 'flex';
}


  // Register form handler
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

      // TODO: connect to your registration endpoint
      const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        address: document.getElementById('address').value,
        password: password
      };
      console.log('Registration attempt:', formData);
    });
  }
 
    // Redirect to Registration Page
    document.getElementById("createAccountBtn").addEventListener("click", function () {
        window.location.href = "regis.html";
    });

    // Logo fallback
    function handleCrestError(img) {
        img.style.display = "none";
        const fallback = img.nextElementSibling;
        if (fallback) {
            fallback.style.display = "flex";
            fallback.style.alignItems = "center";
            fallback.style.justifyContent = "center";
        }
    }

    // Login Demo
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Please enter your username and password.");
            return;
        }

        alert("Login Successful!");
        // Example:
        // window.location.href = "dashboard.html";
    });


});