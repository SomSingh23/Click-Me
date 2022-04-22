// let y = document.createElement("li");
// y.textContent = "i am a new element";
// let adding = document.querySelector(".list");
// let f1el = adding.children[0];
// adding.insertBefore(y, f1el);
// const som = document.createElement("h1");
// let h2tag = document.querySelector("h2");
// som.textContent = "bhagg madhar chod";
// adding.append(som);
// y.style.color = "white";
let ctr = 0;
let y = document.querySelector("button");
y.addEventListener("click", function () {
  ctr++;
  //   if (ctr == 1) {
  //     y.style.position = "absolute";
  //     y.style.top = "-30";
  //     y.style.left = "50";
  //   }
  //   y.style.border = "2px solid rgb(255, 0, 247)";
  y.style.border = "2px solid rgb(0, 255, 242)";
  y.textContent = `you clicked me ${ctr} times 😎`;
  let su = document.querySelector(".madh");
  let new_element = document.createElement("h4");
  new_element.textContent = ` count: ${ctr}`;
  su.appendChild(new_element);
  let me_j = document.querySelector("body");
  if (ctr == 100) {
    alert("Bass Kar Bhai 🤣😂");
  }
  me_j.style.background = "black";
  me_j.style.color = "white";
});

y.addEventListener("mouseover", function () {
  console.log("mouse over me");
});
