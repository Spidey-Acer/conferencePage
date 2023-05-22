const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");

function showMobileMenu() {
  mobileMenu.style.display = "flex";
}

function hideMobileMenu() {
  mobileMenu.style.display = "none";
}

function toggleMobileMenu() {
  if (mobileMenu.style.display === "none") {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
}

function handleMobileMenuItemClick(event) {
  const { target } = event;
  const sectionId = target.getAttribute("href").substring(1);

  hideMobileMenu();

  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Hide the mobile menu by default
hideMobileMenu();

menuButton.addEventListener("click", toggleMobileMenu);
closeButton.addEventListener("click", hideMobileMenu);

mobileMenuItem.forEach((item) => {
  item.addEventListener("click", handleMobileMenuItemClick);
});
