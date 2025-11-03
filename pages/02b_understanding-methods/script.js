import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

const animation = gsap.to(".box", {
  opacity: 1,
  scale: 1.25,
  borderRadius: "50%",
  duration: 2,
  rotation: 360,
});

play.addEventListener("click", () => {
  animation.play();
});

pause.addEventListener("click", () => {
  animation.pause();
});

resume.addEventListener("click", () => {
  animation.resume();
});

restart.addEventListener("click", () => {
  animation.restart();
});

reverse.addEventListener("click", () => {
  animation.reverse();
});

repeat.addEventListener("click", () => {
  animation.repeat(3);
}); //1.5 AC cycles ifykyk // 1 + 3 });

kill.addEventListener("click", () => {
  animation.kill();
});

yoyo.addEventListener("click", () => {
  animation.yoyo(true);
});
