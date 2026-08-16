/**
 * PSAK Photo Gallery Lightbox
 * Allows clicking on gallery thumbnails and event popup photos to view high-res images in an interactive modal.
 */
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('#galleryLightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  window.openLightbox = function(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || '';
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    // If another modal (e.g. event details modal) is still active, keep body overflow hidden
    const otherActiveModal = document.querySelector('.modal-overlay.active, .event-detail-modal-overlay.active');
    if (!otherActiveModal) {
      document.body.style.overflow = '';
    }
  };

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-caption') || img?.getAttribute('alt') || 'PSAK Community Event';
      if (img) {
        window.openLightbox(img.src, caption);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      window.closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      window.closeLightbox();
    }
  });
});
