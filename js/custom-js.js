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

// Lazy Load Images
// document.addEventListener("DOMContentLoaded", function () {
//   const lazyImages = document.querySelectorAll(".lazy-image");

//   if ("IntersectionObserver" in window) {
//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const img = entry.target;
//           img.src = img.dataset.src; // Load the actual image
//           img.onload = () => img.classList.add("loaded"); // Add class once loaded
//           observer.unobserve(img); // Stop observing after loading
//         }
//       });
//     });

//     lazyImages.forEach(img => {
//       observer.observe(img);
//     });
//   } else {
//     // Fallback: Load all images immediately for older browsers
//     lazyImages.forEach(img => {
//       img.src = img.dataset.src;
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const lazyDivs = document.querySelectorAll(".lazy-image");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const div = entry.target;
          const imageUrl = div.getAttribute("data-src");
          div.style.backgroundImage = `url('${imageUrl}')`; // Set background image
          div.classList.add("loaded"); // Add a loaded class
          observer.unobserve(div); // Stop observing once loaded
        }
      });
    });

    lazyDivs.forEach(div => {
      observer.observe(div);
    });
  } else {
    // Fallback: Load all images immediately
    lazyDivs.forEach(div => {
      const imageUrl = div.getAttribute("data-src");
      div.style.backgroundImage = `url('${imageUrl}')`;
      div.classList.add("loaded");
    });
  }
});
