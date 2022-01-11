// Navigation Dropdown
const navBarWrapper = document.querySelector(".navbar-wrapper");
const dropdownItems = document.querySelectorAll(".dropdown-hover");

if(window.innerWidth < 1000) {
  //  SIDE NAVBAR AT 1000px 
  const menuBtn = document.querySelector(".menu");
  const navBar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("change");

    if(!navBar.classList.contains("change")) {
      document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
        dropdown.style.left = "-20rem";
      });
    }
  })

  document.querySelectorAll(".show-dropdown").forEach((link) => {
    link.addEventListener("click", () => {
      link.nextElementSibling.style.left = "0";
    })
  })

  document.querySelectorAll(".dropdown-heading-link").forEach(headingLink => {
    headingLink.addEventListener("click", () => {
      headingLink.parentElement.parentElement.style.left = "-20rem";
    })
  })

} else {
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener("mouseover", () => {
      dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible';

      navBarWrapper.style.background = "linear-gradient(to right, #066399, #2f8fdf, #066399)";

      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)';
    });

    dropdownItem.addEventListener("mouseout", () => {
      dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden';
      navBarWrapper.style.background = "none";

      
    dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)';
    });
  });
}

// PAGES LINK
 const logos = document.querySelectorAll(".logo");
 const login = document.querySelectorAll(".login");
 const signup = document.querySelectorAll(".signup");
 const frontPage = document.querySelector(".front-page");
 const loginPage = document.querySelector(".login-page");
 const signupPage = document.querySelector(".signup-page");

 logos.forEach((logo) => {
  logo.addEventListener("click", function() {
    frontPage.style.display = "block";
    loginPage.style.display = "none";
    signupPage.style.display = "none";
  });
 });

 login.forEach((loginBtn) => {
  loginBtn.addEventListener("click", function() {
    frontPage.style.display = "none";
    loginPage.style.display = "block";
    signupPage.style.display = "none";
  });
 });

 signup.forEach((signupBtn) => {
  signupBtn.addEventListener("click", function() {
    frontPage.style.display = "none";
    loginPage.style.display = "none";
    signupPage.style.display = "flex";
  });
 });


//  WINDOW EVENT
window.addEventListener("resize", () => {
  window.location.reload();
});