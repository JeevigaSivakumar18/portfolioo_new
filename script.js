
const introTitle = document.querySelector(".intro-copy");

introTitle.addEventListener("mousemove", function (event) {
  const rect = introTitle.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  introTitle.style.transform =
    `translate(${x * 5}px, ${y * 5}px)`;
});

introTitle.addEventListener("mouseleave", function () {
  introTitle.style.transform = "translate(0, 0)";
});
