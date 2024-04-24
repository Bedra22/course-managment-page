let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

// @ts-ignore
menu.onclick = () => {
  // @ts-ignore
  menu.classList.toggle('fa-times');
  // @ts-ignore
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  // @ts-ignore
  menu.classList.remove('fa-times');
  // @ts-ignore
  navbar.classList.remove('active');
}

// Function to create navigation links
function createNavLinks() {
  // Get the navbar element
  var navbar = document.getElementById("navbar");

  // Array of link texts and their corresponding href attributes
  var links = [
    { text: "home", href: "home.html" },
    { text: "course", href: "course.html" },
    { text: "teacher", href: "teacher.html" },
    { text: "price", href: "price.html" },
    { text: "review", href: "review.html" },
    { text: "contact", href: "contact.html" }
  ];

  // Loop through the links array and create <a> elements
  links.forEach(function (link) {
    var a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    // Set onclick event handler to alert the href attribute
    a.onclick = function () {
      // @ts-ignore
      alert("Navigating to " + this.href);
    };
    // @ts-ignore
    navbar.appendChild(a);
  });
}



// Call the function to create navigation links when the page loads
window.onload = createNavLinks;