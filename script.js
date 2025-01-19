// JavaScript functionality for the portfolio

// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector('.nav');
    menu.style.right = menu.style.right === "0px" ? "-100%" : "0px";
  }
  
  // "Hire Me" button alert
  function hireMe() {
    alert("Thank you for considering me! Please contact me via email at kamalaselvi497@gmail.com to discuss further details.");
  }
  
  // Page views functionality
  let pageViews = localStorage.getItem('pageViews') || 0;
  pageViews++;
  localStorage.setItem('pageViews', pageViews);
  
  // Display page views on the review page
  const pageViewsElement = document.getElementById('pageViews');
  if (pageViewsElement) {
    pageViewsElement.textContent = `This page has been viewed ${pageViews} times.`;
  }
  
  // Handle review form submission
  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission from reloading the page
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const rating = document.getElementById('rating').value;
      const review = document.getElementById('review').value;
  
      // Simple alert to confirm submission
      alert(`Thank you, ${name}, for your feedback! Your review has been submitted successfully.`);
  
      // Optionally, clear the form after submission
      reviewForm.reset();
    });
  }
  