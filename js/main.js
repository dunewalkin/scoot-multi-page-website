const navToggle = document.querySelector(".mobile-nav-toggle");
const headerNav = document.querySelector(".header-nav");
const headerWrapper = document.querySelector(".header-wrapper");
const overlay = document.querySelector('.overlay');
const getScootinBtns = document.querySelectorAll('.get-scootin-btn');

navToggle.addEventListener('click', () => {
    toggleVisibility(headerNav);
    toggleVisibility(headerWrapper);
    toggleVisibility(overlay);
    toggleAriaExpanded(navToggle);
});

overlay.addEventListener('click', () => {
    closeMenu();
});

function toggleVisibility(element) {
    const visibility = element.getAttribute("data-visible") === "false" ? "true" : "false";
    element.setAttribute("data-visible", visibility);
}

function toggleAriaExpanded(element) {
    const expanded = element.getAttribute("aria-expanded") === "false" ? "true" : "false";
    element.setAttribute("aria-expanded", expanded);
}

function closeMenu() {
    headerNav.setAttribute("data-visible", "false");
    headerWrapper.setAttribute("data-visible", "false");
    overlay.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
}



document.addEventListener('DOMContentLoaded', () => {
   const downloadAppSection = document.getElementById('download-app');
   const getScootinBtns = document.querySelectorAll('.get-scootin-btn');

   // Custom smooth scroll function
   function smoothScroll(target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of scroll
      let startTime = null;

      function animation(currentTime) {
         if (startTime === null) startTime = currentTime;
         const timeElapsed = currentTime - startTime;
         const run = ease(timeElapsed, startPosition, distance, duration);
         window.scrollTo(0, run);
         if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
         t /= d / 2;
         if (t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
   }

   getScootinBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
         e.preventDefault();

         // Calculate the offset to center the section
         const sectionRect = downloadAppSection.getBoundingClientRect();
         const offset = sectionRect.top + window.scrollY - (window.innerHeight / 2) + (sectionRect.height / 2);
         
         smoothScroll(downloadAppSection); // Call the smoothScroll function

         if (window.innerWidth <= 600) {
            closeMenu();
         }

         btn.blur();
      });
   });
});

 


const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
   button.addEventListener("click", function() {
      const panel = this.querySelector('.description');
      const chevron = this.querySelector('.chevron');
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      
      // Toggle the aria-expanded attribute
      this.setAttribute("aria-expanded", !isExpanded);
      
      // Toggle the panel visibility
      if (isExpanded) {
         panel.classList.remove("show");
         this.classList.remove("accordion-active");
         chevron.classList.remove('chevron-active');
      } else {
         panel.classList.add("show");
         this.classList.add("accordion-active");
         chevron.classList.add('chevron-active');
      }
   });
});

 

