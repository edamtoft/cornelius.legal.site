(() => {
  window.onbeforeunload = () => {
    document.body.classList.add("unload");
  };
})();