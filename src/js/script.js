const toggle = document.querySelector("button.menu-btn");
const nav = document.querySelector("nav.menu");
toggle.addEventListener("click", () => {   
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen ? "true" : "false";
    toggle.ariaExpanded = isOpen ? "false" : "true";
    toggle.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
});