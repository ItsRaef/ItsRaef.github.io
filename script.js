function castVote() {
    const profileRadioButtons = document.getElementsByName("profile");
    let selectedProfile = false;

    for (let i = 0; i < profileRadioButtons.length; i++) {
        if (profileRadioButtons[i].checked) {
            selectedProfile = true;
            break;
        }
    }

    if (selectedProfile) {
        // Proceed with the voting logic
        window.location.href = "login.html"; // Replace with the URL of the next page
    } else {
        alert("Please choose a profile!");
    }
}
