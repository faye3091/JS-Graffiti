// Select some elements...
let header = document.querySelector("#page-header");
header.style.textAlign = "left";
header.style.color = "purple";
let footer = document.querySelector(".footer");
footer.style.color = "red";
footer.style.borderStyle = "solid";

let dogImages = document.querySelectorAll(".dog-image");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";
  dogImages[i].style.transform = "rotate(180deg)";
}

let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i < dogNames.length; i++) {
  dogNames[i].style.textAlign = "left";
  dogNames[i].style.color = "green";
}

let dogDescrip = document.querySelectorAll(".dog-description");
for (let i = 0; i < dogDescrip.length; i++) {
  dogDescrip[i].style.textAlign = "right";
  dogDescrip[i].style.color = "blue";
}
