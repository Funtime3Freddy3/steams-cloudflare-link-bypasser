function updateLinks() {
  const links = document.querySelectorAll("a[href*='community.fastly.steamstatic.com']");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if(href && href.includes("community.fastly.steamstatic.com")) {
      const updatedHref = href.replace("community.fastly.steamstatic.com", "steamcommunity.com");
      link.setAttribute("href", updatedHref);
    }
  });
}
updateLinks();
const observer = new MutationObserver(() => {
  updateLinks();
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
