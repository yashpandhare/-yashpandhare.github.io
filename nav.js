// Underline the menu item for the section currently on screen.
(function () {
  var links = document.querySelectorAll('.section-nav a');
  if (!('IntersectionObserver' in window) || !links.length) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('active'); });
      var link = byId[entry.target.id];
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
