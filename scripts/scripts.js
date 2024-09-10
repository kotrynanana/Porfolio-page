let acc = document.getElementsByClassName("accordion");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "cV3XHy135C6HSritr",
  });
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_3k9xv78', 'template_rc49krr', this)
          .then(() => {
              console.log('SUCCESS!');
              nameInput.value = '';
              emailInput.value = '';
              messageInput.value = '';
              alert('Your message has been sent successfully');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}


window.addEventListener('scroll', function() {
  let navbar = document.getElementById('nav');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

document.getElementById('nav-works').addEventListener('click', function(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  const offset = 100; // Adjust this value as needed
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
  });
});

document.querySelector('a[href="#header"]').addEventListener('click', function(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  const offset = 100; // Adjust this value as needed
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
  });
});