const toggle = document.querySelector("button.menu-btn");
const nav = document.querySelector("nav.menu");
const body = document.body; 
toggle.addEventListener("click", () => {   
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen ? "true" : "false";
    toggle.ariaExpanded = isOpen ? "false" : "true";
    body.classList.toggle("noscroll", !isOpen);
    toggle.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
});