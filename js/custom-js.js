// JavaScript to reveal the sticky div on scroll
window.addEventListener('scroll', function() {
    const stickyDiv = document.getElementById('sticky-div');
    if (window.scrollY > 200) { // adjust the scroll value as needed
      stickyDiv.style.display = 'none'; // hide the div
    } else {
      stickyDiv.style.display = 'flex'; // show the div
    }
});