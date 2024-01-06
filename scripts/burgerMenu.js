function toggleMenu() {
  //var burgerMenu = document.getElementById('nav-area-burger-click');
  //nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
  var navItemsArea = document.getElementById('nav-area-burger-links-area');
  var html = document.getElementsByTagName('html');
  if (navItemsArea.style.transform === 'translateY(0%)') {
    navItemsArea.style.transform = 'translateY(-100%)';
  } else {
    navItemsArea.style.transform = 'translateY(0%)';
  }
}