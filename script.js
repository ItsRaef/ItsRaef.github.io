function checkProfile() {
    var profile1 = document.getElementById("profile1");
    var profile2 = document.getElementById("profile2");

    if (!profile1.checked && !profile2.checked) {
        alert("Please choose a profile!");
        return false;
    }

    return true;
}

function redirectToSignIn() {
    if (checkProfile()) {
        window.location.href = "signin.html";
    }
}
document.getElementById('facebookBtn').addEventListener('click', function() {
  openLoginPage('https://www.facebook.com/login'); // Replace with the actual Facebook login URL
});

document.getElementById('instagramBtn').addEventListener('click', function() {
  openLoginPage('https://www.instagram.com/login'); // Replace with the actual Instagram login URL
});

document.getElementById('googleBtn').addEventListener('click', function() {
  openLoginPage('https://accounts.google.com'); // Replace with the actual Google login URL
});

function openLoginPage(url) {
  window.location.href = url;
}
