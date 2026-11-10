(function () {
  var video = document.getElementById("interview-video");
  if (!video || typeof video.play !== "function") return;

  var links = document.querySelectorAll("a.chapter-time[data-start]");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var start = Number(link.getAttribute("data-start"));
      if (!isFinite(start)) return;
      event.preventDefault();
      try {
        video.currentTime = start;
      } catch (err) {
        return;
      }
      var play = video.play();
      if (play && typeof play.catch === "function") {
        play.catch(function () {});
      }
      if (typeof video.scrollIntoView === "function") {
        video.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
})();
