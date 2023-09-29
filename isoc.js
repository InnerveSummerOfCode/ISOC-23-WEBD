let navbarMenu = document.querySelector('.main-nav');
let dropdownIsOpen = false;

// Handle dropdown menu toggle
navbarMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown-toggler')) {
    let target = document.querySelector(`#${event.target.dataset.dropdown}`);

    if (target) {
      if (target.classList.contains('show')) {
        target.classList.remove('show');
        dropdownIsOpen = false;
      } else {
        target.classList.add('show');
        dropdownIsOpen = true;
      }
    }
  }
});

// Handle closing dropdowns if a user clicks outside
document.body.addEventListener('click', (event) => {
  if (dropdownIsOpen) {
    navbarMenu.querySelectorAll('.dropdown').forEach((dropdown) => {
      let targetIsDropdown = dropdown == event.target;
      let clickedOnDropdownToggle = event.target.classList.contains('dropdown-toggler');

      if (clickedOnDropdownToggle) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
});

// Open links in mobiles
// function handleSmallScreens() {
//   document.querySelector('.navbar-toggler').addEventListener('click', () => {
//     if (!navbarMenu.classList.contains('active')) {
//       navbarMenu.classList.add('active');
//     } else {
//       navbarMenu.classList.remove('active');
//     }
//   });
// }
// Dark Mode Toggle Function
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const textContent = document.getElementById('mode-label');

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      // Dark Mode
      body.classList.add('dark-mode');
      textContent.innerHTML = 'Dark Mode';
    } else {
      // Light Mode
      body.classList.remove('dark-mode');
      textContent.textContent = 'Light Mode';
    }
  });
}

// Initialize Dark Mode Toggle
toggleDarkMode();


// Initialize Dark Mode Toggle
toggleDarkMode();
//handleSmallScreens();

