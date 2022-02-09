// --- Sidebar Open/Close ---
let sidebar = document.querySelector(".sidebar"),
    closeBtn = document.querySelector(".menu-toggle"),
    searchBtn = document.querySelector(".bx-search");
    icon = document.querySelectorAll(".icon");

// Opens sidebar when sidebar icon is clicked
closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
});
// Opens sidebar when search icon is clicked
searchBtn.addEventListener("click", ()=> {
    if (sidebar.classList.contains("open") == false) {
        sidebar.classList.toggle("open");
    } else {
        // This is where search functionality would be coded
        console.log("search");
    }
});
// Code to animate icons when the mouse hovers over them
for (let node of icon) {
    node.addEventListener("mouseover", ()=> {
        node.classList.toggle("bx-tada");
    });
    node.addEventListener("mouseout", ()=> {
        node.classList.toggle("bx-tada");
    });
};
closeBtn.addEventListener("mouseover", ()=> {
    closeBtn.classList.toggle("burst");
});
closeBtn.addEventListener("mouseout", ()=> {
    closeBtn.classList.toggle("burst");
});
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
// --- Sub Menus ---
let arrow = document.querySelectorAll(".arrow");

for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

