const section = document.querySelector('main');
const stickyDiv = document.getElementById('sticky-div');
const stickyLogo = document.getElementById('sticky-logo');

function checkScroll() {
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < -200) {
    stickyDiv.style.display = 'none'; // hide the div
    stickyLogo.style.height = '45px';
  } else {
    stickyDiv.style.display = 'flex'; // show the div
    stickyLogo.style.height = '48px';
  }
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
  window.addEventListener('scroll', checkScroll);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu-container');
  const menuButton = document.getElementById('menu-button');
  const menuCloseButton = document.getElementById('menu-close-button');

  const searchContainer = document.getElementById('search-container');
  const searchButton = document.getElementById('search-button');
  const searchClose = document.getElementById('search-close');

  const menuToggle = () => {
    // body.classList.toggle('overflow-hidden');
    menuContainer.classList.toggle('flex');
    menuContainer.classList.toggle('hidden');
  };

  menuButton.addEventListener('click', menuToggle);
  menuContainer.children[0].addEventListener('click', menuToggle);
  menuCloseButton.addEventListener('click', menuToggle);

  const searchToggle = () => {
    searchContainer.classList.toggle('hidden');
    searchContainer.classList.toggle('flex');
  };

  searchButton.addEventListener('click', searchToggle);
  searchClose.addEventListener('click', searchToggle);

  // Tabs
  if (window.location.href == '/' || window.location.pathname.includes('index')) {
    let tabsContainer = document.querySelector("#tabs");

    let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

    tabTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {

          tabTogglers[i].parentElement.classList.remove("border-b-[3px]", "border-[#f48c06]", "dark:border-[#f3722c]", "bg-[#adb5bd]", "dark:bg-[#415a77]"); tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("border-b-[3px]", "border-[#f48c06]", "dark:border-[#f3722c]", "bg-[#adb5bd]", "dark:bg-[#415a77]");
      });
    });
  }
});


// Footer Ads
function hideFooterAd(){
  document.getElementById('footer-ad-box').style.display="none";
}