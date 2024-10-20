// 




// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get input values
//     const username = document.getElementById('newUsername').value;
//     const password = document.getElementById('newPassword').value;

//     // Store credentials in localStorage (for demonstration purposes)
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

//     // Display success message
//     document.getElementById('signupMessage').innerText = 'Sign Up Successful! You can now log in.';
//     document.getElementById('signupMessage').style.color = 'green';
    
//     // Optionally redirect to login page after a few seconds
//     setTimeout(() => {
//         window.location.href = 'project.html'; // Redirect to login page
//     }, 2000);
// });







let generatedOtp;

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById('newEmail').value;
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Generate a random 6-digit OTP
    generatedOtp = Math.floor(100000 + Math.random() * 900000);

    // Create mailto link to send OTP to the user's email
    const subject = encodeURIComponent("Your OTP Code");
    const body = encodeURIComponent(`Dear ${username},\n\nYour OTP code is: ${generatedOtp}\n\nPlease enter this code to verify your email address.\n\nThank you!`);
    
    // Open the user's email client with the mailto link
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Hide sign-up form and show OTP section
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('otpSection').style.display = 'block';
});

document.getElementById('verifyOtpButton').addEventListener('click', function() {
    const enteredOtp = document.getElementById('otp').value;

    // Check if the entered OTP matches the generated OTP
    if (enteredOtp == generatedOtp) {
        // Store credentials in localStorage (for demonstration purposes)
        localStorage.setItem('username', document.getElementById('newUsername').value);
        localStorage.setItem('password', document.getElementById('newPassword').value);

        // Display success message
        document.getElementById('signupMessage').innerText = 'Sign Up Successful! You can now log in.';
        document.getElementById('signupMessage').style.color = 'green';

        // Optionally redirect to login page after a few seconds
        setTimeout(() => {
            window.location.href = 'project.html'; // Redirect to login page
        }, 2000);
    } else {
        document.getElementById('signupMessage').innerText = 'Invalid OTP. Please try again.';
        document.getElementById('signupMessage').style.color = 'red';
    }
});