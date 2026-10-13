(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.checked = localStorage.getItem('theme') === 'dark';

  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  });
})();
