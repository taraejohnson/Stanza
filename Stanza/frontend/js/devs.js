import { clearChildren } from "./app.js";

const devsElement = function () {
  const devsElement = document.querySelector(".main-content");
  clearChildren(devsElement);

  const devsMainDiv = document.createElement("div");
  devsMainDiv.classList.add("devs-div-main");
  devsElement.appendChild(devsMainDiv);

  const devsDiv1 = document.createElement("div");
  devsDiv1.classList.add("devs-div-1");
  devsMainDiv.appendChild(devsDiv1);
  const devsImage1 = document.createElement("img");
  devsImage1.setAttribute("id", "devsImage1");
  devsImage1.src = "images/eric-profile-pic.jpg";
  devsDiv1.appendChild(devsImage1);
  const devsImageCap1 = document.createElement("figcaption");
  devsImageCap1.classList.add("devs-image-cap-1");
  devsImageCap1.innerText = "Eric Braden";
  devsDiv1.appendChild(devsImageCap1);

  const devsDiv2 = document.createElement("div");
  devsDiv2.classList.add("devs-div-2");
  devsMainDiv.appendChild(devsDiv2);
  const devsImage2 = document.createElement("img");
  devsImage2.setAttribute("id", "devsImage2");
  devsImage2.src = "images/dylon-profile-pic.jpg";
  devsDiv2.appendChild(devsImage2);
  const devsImageCap2 = document.createElement("figcaption");
  devsImageCap2.classList.add("devs-image-cap-2");
  devsImageCap2.innerText = "Dylon Colquitt";
  devsDiv2.appendChild(devsImageCap2);

  const devsDiv3 = document.createElement("div");
  devsDiv3.classList.add("devs-div-3");
  devsMainDiv.appendChild(devsDiv3);
  const devsImage3 = document.createElement("img");
  devsImage3.setAttribute("id", "devsImage3");
  devsImage3.src = "images/placeholder.jpg";
  devsDiv3.appendChild(devsImage3);
  const devsImageCap3 = document.createElement("figcaption");
  devsImageCap3.classList.add("devs-image-cap-3");
  devsImageCap3.innerText = "Tara E. Johnson";
  devsDiv3.appendChild(devsImageCap3);

  const devsDiv4 = document.createElement("div");
  devsDiv4.classList.add("devs-div-4");
  devsMainDiv.appendChild(devsDiv4);
  const devsImage4 = document.createElement("img");
  devsImage4.setAttribute("id", "devsImage4");
  devsImage4.src = "images/duane-profile-pic.jpg";
  devsDiv4.appendChild(devsImage4);
  const devsImageCap4 = document.createElement("figcaption");
  devsImageCap4.classList.add("devs-image-cap-4");
  devsImageCap4.innerText = "Duane Schrier";
  devsDiv4.appendChild(devsImageCap4);

  const devsDiv5 = document.createElement("div");
  devsDiv5.classList.add("devs-div-5");
  devsMainDiv.appendChild(devsDiv5);
  const devsImage5 = document.createElement("img");
  devsImage5.setAttribute("id", "devsImage5");
  devsImage5.src = "images/lyna-profile-pic.png";
  devsDiv5.appendChild(devsImage5);
  const devsImageCap5 = document.createElement("figcaption");
  devsImageCap5.classList.add("devs-image-cap-5");
  devsImageCap5.innerText = "Lyna Smaoun";
  devsDiv5.appendChild(devsImageCap5);

  const devsDiv6 = document.createElement("div");
  devsDiv6.classList.add("devs-div-6");
  devsMainDiv.appendChild(devsDiv6);
  const devsImage6 = document.createElement("img");
  devsImage6.setAttribute("id", "devsImage6");
  devsImage6.src = "images/steph-profile-pic.jpg";
  devsDiv6.appendChild(devsImage6);
  const devsImageCap6 = document.createElement("figcaption");
  devsImageCap6.classList.add("devs-image-cap-6");
  devsImageCap6.innerText = "Stephanie Stone";
  devsDiv6.appendChild(devsImageCap6);

  return devsElement;
};

export { devsElement };
