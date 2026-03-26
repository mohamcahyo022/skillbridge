
  // --- Navbar scroll behavior ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-white/90', 'dark:bg-brand-950/90', 'backdrop-blur-xl', 'border-b', 'border-gray-100', 'dark:border-brand-900', 'shadow-sm');
    } else {
      navbar.classList.remove('bg-white/90', 'dark:bg-brand-950/90', 'backdrop-blur-xl', 'border-b', 'border-gray-100', 'dark:border-brand-900', 'shadow-sm');
    }
  });

  // --- Dark mode toggle ---
  function syncIcons(isDark) {
    document.getElementById('sun-icon').classList.toggle('hidden', !isDark);
    document.getElementById('moon-icon').classList.toggle('hidden', isDark);
    document.getElementById('sun-icon-mob').classList.toggle('hidden', !isDark);
    document.getElementById('moon-icon-mob').classList.toggle('hidden', isDark);
  }

  function toggleDark() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    syncIcons(isDark);
  }

// Init theme
// --- Inisialisasi Tema (Light Mode Default) ---
const savedTheme = localStorage.getItem('theme');

// Jika tidak ada tema yang tersimpan, kita paksa 'light'
// Jika ada yang tersimpan (misal user pernah klik toggle), gunakan itu
const isDark = savedTheme === 'dark'; 

if (isDark) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Update icon agar sesuai
syncIcons(isDark);

  document.getElementById('theme-toggle').addEventListener('click', toggleDark);
  document.getElementById('theme-toggle-mob').addEventListener('click', toggleDark);

  // --- Mobile menu ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // --- Scroll reveal ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section-reveal').forEach(el => revealObserver.observe(el));

  // --- Smooth scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
