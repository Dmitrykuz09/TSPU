let offset = 0; // смещение от левого края
const slider_act = document.querySelector(".slider_line");

document.querySelector(".slider_prev").addEventListener("click", function () {
  offset = offset - 577;
  if (offset < 0) {
    offset = 577;
  }
  slider_act.style.left = -offset + "px";
});

document.querySelector(".slider_next").addEventListener("click", function () {
  offset = offset + 577;
  if (offset > 577) {
    offset = 0;
  }
  slider_act.style.left = offset + "px";
});
