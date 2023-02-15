              
                  // dropdown_menu 
const toggleBtn = document.querySelector(".toggle_btn"),
  toggleIcon = document.querySelector(".toggle_btn i"),
  dropDown = document.querySelector(".dropdown_menu"),

//when l click on any item in the dropdown_menu, it will be closed
  toggl = document.querySelectorAll(".toggl");
toggl.forEach((o) => {
  o.addEventListener("click", () => {
    dropDown.classList.toggle("open");
    let o = dropDown.classList.contains("open");
    toggleIcon.classList = o ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });
}),

  (toggleBtn.onclick = function () {
    dropDown.classList.toggle("open");
    let o = dropDown.classList.contains("open");
    toggleIcon.classList = o ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((o) => {
  o.addEventListener("click", () => o.parentElement.classList.toggle("active"));
});


         // change background_color Navbar when Scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    window.scrollY >= 50
      ? nav.classList.add("active_nav")
      : nav.classList.remove("active_nav");
  });
    
