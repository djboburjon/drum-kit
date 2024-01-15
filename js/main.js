document.addEventListener("keydown", (e) => {
  const key = e.key;
  if(key == "w" || key == "a" || key == "s" || key == "d" || key == "j" || key == "k" || key == "l") {
    pressed(key)
    play(key)
  }
});

const btns = document.querySelectorAll(".drum");

btns.forEach((item) => {
  item.addEventListener("click", () => {
    pressed(item.textContent);
    play(item.textContent);
  });
});

const pressed = (key) => {
  const btn = document.querySelector(`.${key}`);
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 500);
};

const play = (id) => {
  var crash
  if (id == "w") {
    crash = new Audio("../sounds/crash.mp3");
  } else if (id == "a") {
    crash = new Audio("../sounds/kick-bass.mp3");
  } else if (id == "s") {
    crash = new Audio("../sounds/snare.mp3");
  } else if (id == "d") {
    crash = new Audio("../sounds/tom-1.mp3");
  } else if (id == "j") {
    crash = new Audio("../sounds/tom-2.mp3");
  } else if (id == "k") {
    crash = new Audio("../sounds/tom-3.mp3");
  } else if (id == "l") {
    crash = new Audio("../sounds/tom-4.mp3");
  }
  crash.play()
};
