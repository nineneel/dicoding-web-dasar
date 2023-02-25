const buttonNavMenu = document.querySelector(".menu-btn");
const elementMenuList = document.querySelector(".menu-list");
const elementMenuListItem = document.querySelectorAll(".menu-list a");

// Create function click event listener
function toggleMenuBtn(element) {
    element.addEventListener("click", () => {
        elementMenuList.classList.toggle("show-menu");
    });
}

// When Button Nav Menu is click
toggleMenuBtn(buttonNavMenu);

// When Item Menu is click
elementMenuListItem.forEach((item) => {
    toggleMenuBtn(item);
});
