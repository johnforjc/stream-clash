const burgerBtn = document.querySelector(".burgerBtn");
const navbar = document.querySelector(".navbar");
const navListItem = document.querySelectorAll("header .navbar ul li");
const footerListItems = document.querySelectorAll("footer li");
const logoItems = document.querySelectorAll(".logo");

const toggleActiveClass = () => {
  burgerBtn.classList.toggle("active");
  navbar.classList.toggle("active");
};

// burger button event handler
burgerBtn.addEventListener("click", () => {
  toggleActiveClass();
});

// event listener setiap navlist
[...navListItem].map((listItem) =>
  listItem.addEventListener("click", (e) => {
    // menahan tindakan default dari elemen a
    e.preventDefault();

    // mengecek apakah user mengeklik pada saat menggunakan burger btn
    if (burgerBtn.classList.contains("active")) {
      toggleActiveClass();
    }

    // animasi scrolling
    document.querySelector(e.target.getAttribute("data-link")).scrollIntoView({
      behavior: "smooth",
    });
  })
);

[...footerListItems].map((listItem) =>
  listItem.addEventListener("click", (e) => {
    e.preventDefault();

    // animasi scrolling
    document.querySelector(e.target.getAttribute("data-link")).scrollIntoView({
      behavior: "smooth",
    });
  })
);

[...logoItems].map((item) =>
  item.addEventListener("click", (e) => {
    // animasi scrolling
    document.querySelector("#jumbotron").scrollIntoView({
      behavior: "smooth",
    });
  })
);
