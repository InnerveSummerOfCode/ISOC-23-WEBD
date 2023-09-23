let currentMode = 'light'; // Default to light mode

// Function to toggle between light and dark modes
document.querySelector('#mode-toggle').addEventListener('click',function toggle(){
  if (currentMode === 'light') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    currentMode = 'dark';
    document.querySelector('#mode-toggle').innerHTML = "Light-Mode";
    
} else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    currentMode = 'light';
    document.querySelector('#mode-toggle').innerHTML = "Dark-Mode";
}
});



//toggle();



let navbarMenu = document.querySelector('.navbar-menu');
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
function handleSmallScreens() {
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (!navbarMenu.classList.contains('active')) {
      navbarMenu.classList.add('active');
    } else {
      navbarMenu.classList.remove('active');
    }
  });
}

handleSmallScreens();


   








