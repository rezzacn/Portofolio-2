const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
  scrollposition = this.window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add('nav-dark');
  } else if (scrollposition <= 60) {
    nav.classList.remove('nav-dark');
  }
});

// Mendapatkan elemen-elemen navbar
var navLinks = document.querySelectorAll('#nav .nav-link');

// Mendapatkan offset vertikal dari setiap section
var sectionOffsets = Array.from(document.querySelectorAll('section')).map(function (section) {
  return {
    id: section.id,
    offsetTop: section.offsetTop,
    offsetHeight: section.offsetHeight,
  };
});

// Mendeteksi perubahan saat menggulir halaman
window.addEventListener('scroll', function () {
  // Mendapatkan posisi scroll vertikal
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Mencari section yang sedang aktif
  var activeSection = sectionOffsets.find(function (section) {
    return scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight;
  });

  // Menghapus kelas "active" dari semua elemen navbar
  navLinks.forEach(function (navLink) {
    navLink.classList.remove('active');
  });

  // Menambahkan kelas "active" pada elemen navbar yang sesuai dengan section yang sedang aktif
  if (activeSection) {
    var activeNavLink = document.querySelector('#nav .nav-link[href="#' + activeSection.id + '"]');
    if (activeNavLink) {
      activeNavLink.classList.add('active');
    }
  }
});
