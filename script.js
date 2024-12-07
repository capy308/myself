function greet() {
    alert("Welcome to my website! Explore to learn more about me.");
  }
  
  // Email validation function
  function validateEmail(event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput.value)) {
      emailError.style.display = "none";
      alert("Form submitted successfully!");
    } else {
      emailError.style.display = "block";
    }
  }
  // Initialize EmailJS
(function () {
  emailjs.init("Parijat Das"); // Replace 'your-user-id' with your EmailJS User ID
})();

function sendEmail() {
  const serviceID = "service_jgwbbas"; // Replace with your service ID
  const templateID = "template_ihrrcb9"; // Replace with your template ID

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(serviceID, templateID, params)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    });
}
