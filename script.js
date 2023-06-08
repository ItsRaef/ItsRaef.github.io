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
var facebookBtn = document.getElementById('facebookBtn');
var instagramBtn = document.getElementById('instagramBtn');
var googleBtn = document.getElementById('googleBtn');

// Add click event listeners to the buttons
facebookBtn.addEventListener('click', function() {
  window.location.href = 'facebook.html';
});

instagramBtn.addEventListener('click', function() {
  window.location.href = 'instagram.html';
});

googleBtn.addEventListener('click', function() {
  window.location.href = 'google.html';
});

