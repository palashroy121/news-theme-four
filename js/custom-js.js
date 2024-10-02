// JavaScript to reveal the sticky div on scroll
window.addEventListener('scroll', function() {
    const stickyDiv = document.getElementById('sticky-div');
    const stickyLogo = document.getElementById('sticky-logo');
    if (window.scrollY > 200) { // adjust the scroll value as needed
      stickyDiv.style.display = 'none'; // hide the div
      stickyLogo.style.height = '45px';
    } else {
      stickyDiv.style.display = 'flex'; // show the div
      stickyLogo.style.height = '64px';
    }
});