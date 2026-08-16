/**
 * PSAK Core Interactive JavaScript
 * Navigation, mobile drawer, counter animations, modals, copy utilities, FAQs, and Mobile Pillars Slider.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.drawer-close');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // 2. Sticky Header Shadow on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // 3. Animated Numerical Metric Counters
  const counterElements = document.querySelectorAll('.metric-number[data-target]');
  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1500; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepValue = Math.max(1, Math.floor(target / totalSteps));

          const timer = setInterval(() => {
            count += stepValue;
            if (count >= target) {
              el.textContent = target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              el.textContent = count.toLocaleString() + suffix;
            }
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }

  // 4. Donation & Bank Transfer Modal
  const donateBtns = document.querySelectorAll('.open-donate-modal');
  const donateModal = document.querySelector('#donationModal');
  const modalCloseBtns = document.querySelectorAll('.close-modal');

  function openDonateModal(e) {
    if (e) e.preventDefault();
    if (donateModal) {
      donateModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllModals() {
    const activeModals = document.querySelectorAll('.modal-overlay.active, .lightbox-modal.active');
    activeModals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = '';
  }

  donateBtns.forEach(btn => btn.addEventListener('click', openDonateModal));
  modalCloseBtns.forEach(btn => btn.addEventListener('click', closeAllModals));

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  // 5. Copy Bank Account Utility
  const copyBtn = document.querySelector('.copy-account-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const accountNum = copyBtn.getAttribute('data-account') || '545-910007-72004';
      navigator.clipboard.writeText(accountNum).then(() => {
        showToast(`Account number copied: ${accountNum}`);
      }).catch(() => {
        showToast(`Account: ${accountNum}`);
      });
    });
  }

  // 6. Toast Notification Helper (No emojis)
  window.showToast = function(message) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // 7. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => {
          other.classList.remove('open');
          const ans = other.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('open');
          const ans = item.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });
    }
  });

  // 8. Contact Form
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
      }
      setTimeout(() => {
        showToast('Your message has been sent successfully to PSAK Support.');
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }, 900);
    });
  }

  // 9. Auth Tabs
  const authTabs = document.querySelectorAll('.auth-tab');
  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetForm = tab.getAttribute('data-target');
      authTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.auth-form-content').forEach(form => {
        form.style.display = form.id === targetForm ? 'block' : 'none';
      });
    });
  });

  // 10. Mobile Pillars 1-Card Carousel with Arrows & Dots
  const pillarsTrack = document.getElementById('pillarsSliderTrack');
  const pillarDotsContainer = document.getElementById('pillarDots');
  const pillarPrevBtn = document.getElementById('pillarPrevBtn');
  const pillarNextBtn = document.getElementById('pillarNextBtn');

  if (pillarsTrack && pillarDotsContainer) {
    const pillarCards = pillarsTrack.querySelectorAll('.pillar-5-card');
    const totalPillars = pillarCards.length;
    let currentPillar = 0;

    // Build Dots
    pillarDotsContainer.innerHTML = '';
    for (let i = 0; i < totalPillars; i++) {
      const dot = document.createElement('button');
      dot.className = `pillars-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to Pillar ${i + 1}`);
      dot.addEventListener('click', () => goToPillar(i));
      pillarDotsContainer.appendChild(dot);
    }

    function updatePillarView() {
      if (window.innerWidth <= 992) {
        pillarsTrack.style.transform = `translateX(-${currentPillar * 100}%)`;
      } else {
        pillarsTrack.style.transform = '';
      }
      const dots = pillarDotsContainer.querySelectorAll('.pillars-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentPillar);
      });
    }

    function goToPillar(idx) {
      if (idx < 0) currentPillar = totalPillars - 1;
      else if (idx >= totalPillars) currentPillar = 0;
      else currentPillar = idx;
      updatePillarView();
    }

    if (pillarPrevBtn) {
      pillarPrevBtn.addEventListener('click', () => goToPillar(currentPillar - 1));
    }
    if (pillarNextBtn) {
      pillarNextBtn.addEventListener('click', () => goToPillar(currentPillar + 1));
    }

    // Touch Swipe Support on Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    pillarsTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    pillarsTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        goToPillar(currentPillar + 1); // Swipe Left -> Next
      } else if (touchEndX - touchStartX > 45) {
        goToPillar(currentPillar - 1); // Swipe Right -> Prev
      }
    }, { passive: true });

    window.addEventListener('resize', () => {
      updatePillarView();
    });
  }

  // Close modals on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
});
