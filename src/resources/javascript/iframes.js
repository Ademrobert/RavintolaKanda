document.addEventListener('DOMContentLoaded', () => {
  const iframes = document.querySelectorAll('iframe[data-src]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        const dataSrc = iframe.dataset.src;
        if (dataSrc) {
          iframe.src = dataSrc;
          iframe.removeAttribute('data-src');
        }
        observer.unobserve(iframe)
      }
    });
  }, {
      rootMargin: '400px',
      treshold: 0
  });

  iframes.forEach(iframe => {
    observer.observe(iframe);
  })
})
