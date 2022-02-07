// --- Sidebar Open/Close ---
let sidebar = document.querySelector(".sidebar"),
    closeBtn = document.querySelector(".toggle"),
    searchBtn = document.querySelector(".bx-search");
// Opens sidebar when sidebar icon is clicked
closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
});
// Opens sidebar when search icon is clicked
searchBtn.addEventListener("click", ()=>{
    if (sidebar.classList.contains("open") == false) {
        sidebar.classList.toggle("open");
        menuBtnChange();
    } else {
        // This is where search functionality would be coded
        console.log("search");
    }
});
// Code to change the button for opening/closing the sidebar
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
};
// --- Dark Mode ---
let body = document.querySelector('body'),
    darkIcon = document.querySelector('#darkIcon'),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
// Toggle switch for dark mode
modeSwitch.addEventListener("click" , () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")) {
        darkIcon.classList.replace("bx-moon", "bx-sun");
        modeText.innerText = "Light mode";
    } else {
        darkIcon.classList.replace("bx-sun", "bx-moon");
        modeText.innerText = "Dark mode";
    }
});
