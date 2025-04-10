document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = document.getElementById('submit-btn');
  const formMsg = document.getElementById('form-msg');

  // Show spinner and disable button
  submitBtn.innerHTML = 'Sending <span class="spinner"></span>';
  submitBtn.classList.add('disabled');

  fetch("https://formsubmit.co/zeelimpexnutbolt@gmail.com", {
    method: "POST",
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      formMsg.textContent = "Thank you for reaching out. We'll get back to you soon!";
      form.reset();
    } else {
      formMsg.textContent = "Something went wrong. Please try again.";
    }
  })
  .catch(error => {
    formMsg.textContent = "An error occurred. Please try again.";
  })
  .finally(() => {
    // Restore button
    submitBtn.innerHTML = 'Send Message';
    submitBtn.classList.remove('disabled');
  });
});
