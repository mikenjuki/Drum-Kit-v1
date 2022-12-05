// Selecting all drum elements
let btn = document.querySelectorAll(".drum");

// //looping over buttons and playing the sounds
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    console.log(btn);
    let buttonText = btn[i].innerHTML;
    playSound(buttonText);
    // buttonAnimation(buttonText);
  });
}

// listening to corresponding keyboard keys
document.addEventListener("keydown", (event) => {
  playSound(event.key);
//   buttonAnimation(event.key);
  console.log(event);
});

const playSound = (key) => {
  if (key === "w") {
    const tomOne = new Audio("./sounds/crash.mp3");
    tomOne.play();
  } else if (key === "a") {
    const tomOne = new Audio("./sounds/kick-bass.mp3");
    tomOne.play();
  } else if (key === "s") {
    const tomOne = new Audio("./sounds/snare.mp3");
    tomOne.play();
  } else if (key === "d") {
    const tomOne = new Audio("./sounds/tom-1.mp3");
    tomOne.play();
  } else if (key === "j") {
    const tomOne = new Audio("./sounds/tom-2.mp3");
    tomOne.play();
  } else if (key === "k") {
    const tomOne = new Audio("./sounds/tom-3.mp3");
    tomOne.play();
  } else if (key === "l") {
    const tomOne = new Audio("./sounds/tom-4.mp3");
    tomOne.play();
  } else {
    alert("Key doesn't have sound!");
  }
};

// Button animation on keydown
// const buttonAnimation = (pressedKey) => {
//   let currentBtn = document.querySelector("." + pressedKey);

//   currentBtn.classList.add("pressed");

//   setTimeout(function () {
//     currentBtn.classList.remove("pressed");
//   }, 99);
// };

// Another way to loop over the buttons

// Looping over each button adding listener
// btn.forEach((button) => {
//   button.addEventListener("click", drumFunc);
// });

// console.log(btn[i].innerHTML);
