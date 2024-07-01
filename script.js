// Add this in a file named script.js and link it in the HTML head
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
  