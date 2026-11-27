(function () {
  var links = window.STORE_LINKS || {};
  var toast = document.querySelector(".toast");
  var toastTimer;

  function showToast(msg) {
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; }, 2600);
  }

  document.querySelectorAll(".stores").forEach(function (list) {
    var game = links[list.dataset.game] || {};
    list.querySelectorAll(".store").forEach(function (btn) {
      var url = (game[btn.dataset.store] || "").trim();
      if (url) {
        btn.href = url;
        btn.target = "_blank";
        btn.rel = "noopener";
        btn.classList.add("is-live");
      } else {
        btn.setAttribute("aria-disabled", "true");
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          var name = btn.querySelector(".store-text").lastChild.textContent.trim();
          showToast(name + " sayfası henüz yayında değil.");
        });
      }
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
