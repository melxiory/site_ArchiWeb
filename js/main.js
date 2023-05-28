document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav);

  var gallery = document.querySelectorAll('.materialboxed');
  var instances_gallery = M.Materialbox.init(gallery);
});