(function () {
  var cards = document.querySelectorAll(".home-film");
  cards.forEach(function (card) {
    var toggle = card.querySelector(".home-film-size");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var wide = card.classList.toggle("is-wide");
        toggle.textContent = wide ? "Shrink" : "Enlarge";
        toggle.setAttribute("aria-pressed", wide ? "true" : "false");
      });
    }
    var video = card.querySelector("video");
    if (!video || typeof video.play !== "function") return;
    card.querySelectorAll("a.home-chapter[data-start]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var start = Number(link.getAttribute("data-start"));
        if (!isFinite(start)) return;
        event.preventDefault();
        cards.forEach(function (other) {
          var otherVideo = other.querySelector("video");
          if (otherVideo && otherVideo !== video && !otherVideo.paused) {
            otherVideo.pause();
          }
        });
        try {
          video.currentTime = start;
        } catch (err) {
          return;
        }
        var play = video.play();
        if (play && typeof play.catch === "function") {
          play.catch(function () {});
        }
      });
    });
  });
})();
