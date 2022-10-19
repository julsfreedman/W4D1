// Menu data structure

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
const mainEl = document.querySelector("main");
mainEl.style.background = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");
const topMenuEl = document.querySelector("#top-menu");
document.querySelector("#top-menu").style.height = "100%";
topMenuEl.style.background = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
const menuP = [];
for (i = 0; i < menuLinks.length; i++) {
  menuP[i] = document.createElement("a");
  menuP[i].setAttribute("href", menuLinks[i].href);
  menuP[i].textContent = menuLinks[i].text;
  topMenuEl.append(menuP[i]);
}
