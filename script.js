// Smooth scroll
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact form submission
const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch('https://formspree.io/f/mdaldrbg', { // <- Replace with your Formspree URL
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if(res.ok){
      response.textContent = "✅ Message sent successfully!";
      response.style.color = "green";
      form.reset();
    } else {
      response.textContent = "❌ Oops! Something went wrong.";
      response.style.color = "red";
    }
  } catch (error){
    response.textContent = "❌ Error sending message. Check your internet or Formspree URL.";
    response.style.color = "red";
    console.error(error);
  }
});
