(function () {
  var video = document.getElementById("interview-video");
  if (!video || typeof video.play !== "function") return;

  function seek(start) {
    if (!isFinite(start)) return false;
    try { video.currentTime = start; } catch (err) { return false; }
    return true;
  }
  // Deep link: /interviews/alan-rector-part-N/#t=SECONDS starts the IA player at that time.
  function fromHash() {
    var m = /^#t=(\d+(?:\.\d+)?)$/.exec(window.location.hash);
    if (!m) return;
    var start = Number(m[1]);
    var go = function () { seek(start); if (typeof video.scrollIntoView === "function") video.scrollIntoView({ block: "center" }); };
    if (video.readyState >= 1) go(); else video.addEventListener("loadedmetadata", go, { once: true });
  }
  fromHash();
  window.addEventListener("hashchange", fromHash);

  var links = document.querySelectorAll("a.chapter-time[data-start]");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var start = Number(link.getAttribute("data-start"));
      if (!isFinite(start)) return;
      event.preventDefault();
      if (history.replaceState) history.replaceState(null, "", "#t=" + start);
      if (!seek(start)) return;
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
