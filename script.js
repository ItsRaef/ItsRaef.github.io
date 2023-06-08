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
