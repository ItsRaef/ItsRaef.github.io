function checkProfile() {
  var profile1 = document.getElementById("profile1");
  var profile2 = document.getElementById("profile2");

  if (!profile1.checked && !profile2.checked) {
    alert("Please choose a profile!");
    return false;
  }

  // Redirect to the sign-in page
  redirectToSignIn('signin.html');
}

// Get the button elements
var facebookBtn = document.getElementById('facebookBtn');
var instagramBtn = document.getElementById('instagramBtn');
var googleBtn = document.getElementById('googleBtn');

// Add click event listeners to the buttons
facebookBtn.onclick = function() {
  redirectToSignIn('facebook.html');
};

instagramBtn.onclick = function() {
  redirectToSignIn('instagram.html');
};

googleBtn.onclick = function() {
  redirectToSignIn('google.html');
};

// Function to redirect to the sign-in page
function redirectToSignIn(page) {
  window.location.href = page;
}
