function toggleMenu() {
  //var burgerMenu = document.getElementById('nav-area-burger-click');
  //nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
  var navItemsArea = document.getElementById('nav-area-burger-links-area');
  if (navItemsArea.style.transform === 'translateY(0%)') {
    navItemsArea.style.transform = 'translateY(-100%)';
  } else {
    navItemsArea.style.transform = 'translateY(0%)';
  }
}

// Need to add:
// - Remove burger when displayed
// - Replace with X svg