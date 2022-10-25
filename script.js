// Menu data structure

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
const mainEl = document.querySelector("main");
mainEl.style.background = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.background = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
/*3.1 */ const menuP = [];
for (i = 0; i < menuLinks.length; i++) {
  menuP[i] = document.createElement("a");
  menuP[i].setAttribute("href", menuLinks[i].href);
  menuP[i].textContent = menuLinks[i].text;
  topMenuEl.append(menuP[i]);
}
//<a href="/about">about</a> is an example of the resulting anchor tag on the first indices
//task 4.0
const subMenuEl = document.querySelector("#sub-menu");
//task 4.1
subMenuEl.style.height = "100%";
//document.querySelector("#sub-menu").style.height = "100%"; I like mine above b/c it is DRY no need to reselect sub-menu when we just did that in 4.0
//task 4.2
subMenuEl.style.background = "var(--sub-menu-bg)";
//task 4.3
subMenuEl.classList.add("flex-around");
//task 4.4
subMenuEl.style.position = "absolute";
//task 4.5
subMenuEl.style.top = "0 px";
//task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu > a");
console.log(topMenuLinks);
let showingSubMenu = false; // let is global and hoisted

//task 5.2
topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  //console.log(evt.target.tagName);
  if (evt.target.nodeName.toUpperCase() !== "A") {
    return; // returns us out of the entire event listener.  if it's NOT an a tag, you're done for the event listener, and you move on to the next statement.  In general, return alone means get out of the function - let's the function know that it is done.
  }
  console.log(evt.target.textContent);

  //task 5.3 // evt.target at this point is the clicked <a> link in the top Menu
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  //task 5.4
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  //task 5.5
  evt.target.classList.add("active");
  //task 5.6
  let text = evt.target.textContent;
  let currentLink = {};
  for (let i = 0; i < menuLinks.length; i++) {
    console.log(menuLinks[i]);
    if (text === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty("subLinks");
      currentLink = menuLinks[i];
    }
    //console.log(showingSubMenu)
    //console.log(currentLink)
  }
  //task 5.7
  if (showingSubMenu) {
    buildSubMenu(currentLink); // passing the array for the clicked element,currentLink is an object
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  //console.log(subMenuEl)

  //task 5.8
  function buildSubMenu(currentLink) {
    subMenuEl.innerHTML = "";
    //console.log(subMenuEl);
    for (let i = 0; i < currentLink.subLinks.length; i++) {
      let subAnchorLinks = document.createElement("a");
      subAnchorLinks.setAttribute("href", currentLink.subLinks[i].href);
      subAnchorLinks.textContent = currentLink.subLinks[i].text;
      subMenuEl.append(subAnchorLinks);
    }
  }
  //task 6.0
  subMenuEl.addEventListener("click", function (subEvt) {
    subEvt.preventDefault();
    if (subEvt.target.nodeName.toUpperCase() !== "A") {
      return;
    }
    console.log(subEvt.target.textContent);

    //task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    //task 6.2
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove("active");
    }
    //task 6.3
    mainEl.innerHTML = `<h1>${subEvt.target.textContent.toUpperCase()}</h1>`;
  });
});
