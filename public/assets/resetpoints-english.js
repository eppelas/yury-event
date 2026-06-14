(() => {
  const base = document.createElement("base");
  base.href = "https://resetpoints.com/";
  document.head.prepend(base);

  const visibleUrl = window.location.href;
  history.replaceState(null, document.title, "/en");

  import("https://resetpoints.com/assets/index-DxR5Mqo5.js")
    .finally(() => {
      window.setTimeout(() => history.replaceState(null, document.title, visibleUrl), 100);
    });
})();
