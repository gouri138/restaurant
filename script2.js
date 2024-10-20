document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve credentials from localStorage
    const validUsername = localStorage.getItem('username');
    const validPassword = localStorage.getItem('password');

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        document.getElementById('message').innerText = 'Login Successful!';
        document.getElementById('message').style.color = 'green';
        
        // Optionally redirect or perform other actions here
         window.location.href = 'project.html';  
    } else {
        document.getElementById('message').innerText = 'Invalid Username or Password.';
        document.getElementById('message').style.color = 'red';
    }


});