/**
 * PSAK Interactive Event Details & Photo Gallery Modal
 * Enables clicking on any event card to view in-depth program info, schedule, key highlights, and related photos.
 */

const PSAK_EVENTS_DATA = {
  'cricket-league': {
    id: 'cricket-league',
    title: 'PSAK All-Korea Cricket League',
    category: 'Sports League',
    categoryClass: 'sports',
    date: 'Saturday, April 22, 2026',
    time: '08:30 AM – 06:00 PM KST',
    location: 'Ansan Wa Stadium Auxiliary Grounds, Ansan-si, Gyeonggi-do',
    attendance: '12 Regional Teams • 220+ Players & Supporters',
    organizer: 'PSAK Sports & Youth Wing & Ansan Cricket Board',
    coverImage: 'assets/images/events/event_cricket_cover.png',
    overview: 'The PSAK All-Korea Cricket League is the premier nationwide sports championship organized annually for Pakistani scholars, researchers, and community members across South Korea. Bringing together 12 regional university teams from Seoul, Incheon, Suwon, Daejeon, Daegu, Gwangju, and Busan, this flagship festival fosters sportsmanship, physical wellness, and inter-university solidarity.',
    highlights: [
      '12 university teams competing in fast-paced 8-over league and knockout rounds.',
      'Professional umpiring panel and live digitized scorecard updates throughout the day.',
      'Authentic Pakistani Chicken Biryani lunch and all-day refreshments for players and spectators.',
      'Championship Trophy, medals, Player of the Tournament awards, and cash prize pool.'
    ],
    schedule: [
      { time: '08:30 AM', title: 'Team Check-in & Jersey Distribution', desc: 'Captain registration, fixture briefings, and match kits handover.' },
      { time: '09:15 AM', title: 'Inauguration Ceremony & National Anthems', desc: 'Opening speech by PSAK Sports Wing and group photograph of all participating teams.' },
      { time: '09:45 AM', title: 'Pool Stage Matches (Simultaneous Pitches)', desc: 'Fast-paced group round-robin clashes across 3 dedicated grounds.' },
      { time: '01:30 PM', title: 'Community Biryani Lunch & Networking', desc: 'Halal lunch break and community interaction among scholars from different regions.' },
      { time: '02:30 PM', title: 'Semi-Finals & Grand Finale', desc: 'High-voltage championship match with live boundary commentary.' },
      { time: '05:15 PM', title: 'Awards Ceremony & Trophy Presentation', desc: 'Handing over the PSAK Champions Cup, runner-up shields, and individual performance awards.' }
    ],
    inclusions: [
      { label: 'Participation Fee', value: '15,000 KRW / Player (Subsidized by PSAK)' },
      { label: 'Meals Provided', value: 'Fresh Halal Chicken Biryani, Cold Drinks & Tea' },
      { label: 'Awards', value: 'Champions Trophy, Runner-up Shield, Best Batsman & Bowler' },
      { label: 'Medical Facilities', value: 'First-aid station & paramedic support on-site' }
    ],
    photos: [
      { src: 'assets/images/events/event_cricket_cover.png', caption: 'Official Cricket League Tournament Poster' },
      { src: 'assets/images/events/gallery_1.jpg', caption: 'Champions celebrating with the PSAK Tournament Trophy' },
      { src: 'assets/images/events/gallery_2.jpg', caption: 'Thrilling bowling and batting action during the finals' },
      { src: 'assets/images/events/gallery_3.jpg', caption: 'Spectators cheering from the stadium sidelines' },
      { src: 'assets/images/events/gallery_4.jpg', caption: 'Captains coin toss and match inauguration' },
      { src: 'assets/images/events/gallery_5.jpg', caption: 'Awarding Player of the Tournament & top run-scorer' },
      { src: 'assets/images/events/gallery_6.jpg', caption: 'University delegation team squad lineup' },
      { src: 'assets/images/events/gallery_7.jpg', caption: 'Post-match celebration and group photograph' }
    ]
  },

  'bbq-meetup': {
    id: 'bbq-meetup',
    title: 'Central Region Meetup & BBQ',
    category: 'Regional Meetup',
    categoryClass: 'meetup',
    date: 'Sunday, March 26, 2026',
    time: '11:30 AM – 05:00 PM KST',
    location: 'Cheongju Riverside Park & Chungbuk National University Area',
    attendance: '85+ Scholars, Researchers & Families',
    organizer: 'PSAK Central Region Chapter (Chungcheong & Daejeon)',
    coverImage: 'assets/images/events/event_bbq_cover.jpg',
    overview: 'The Central Region Meetup & BBQ is an annual spring tradition hosted by PSAK to welcome newly arrived Pakistani graduate scholars, postdocs, and their families to the Chungcheong and Daejeon research institutes. Set in a scenic outdoor park, this gathering provides a warm, supportive space to forge lasting friendships, exchange practical tips on living in Korea, and enjoy authentic freshly grilled BBQ.',
    highlights: [
      'Welcome reception and buddy introductions for newly admitted spring semester freshmen.',
      'Live charcoal BBQ feast featuring Halal chicken tikka, seekh kebabs, naan, and spiced chai.',
      'Academic mentorship circles with senior PhD scholars and postdoctoral researchers.',
      'Campus survival advice, Korean lab culture adaptation tips, and interactive team trivia.'
    ],
    schedule: [
      { time: '11:30 AM', title: 'Arrival & Welcome Reception', desc: 'Registration, greeting newcomers, and distribution of regional guide packs.' },
      { time: '12:00 PM', title: 'Ice-Breaking & Freshman Introductions', desc: 'Interactive circle connecting students across Chungbuk, Chungnam, and KAIST/UST campuses.' },
      { time: '01:00 PM', title: 'Live Charcoal BBQ Lunch Feast', desc: 'Freshly grilled Halal skewers, traditional spiced meats, salads, and drinks.' },
      { time: '03:00 PM', title: 'Academic Mentorship Breakout Circles', desc: 'Guidance on SCI journal publication, professor communication, and visa paperwork.' },
      { time: '04:15 PM', title: 'Trivia Games, Karak Chai & Group Photo', desc: 'Campus quiz with prizes, traditional tea, and commemorative group photography.' }
    ],
    inclusions: [
      { label: 'Entry / Registration', value: 'Free for PSAK Members (RSVP Required)' },
      { label: 'Food & Refreshments', value: '100% Halal Live BBQ, Naan, Desserts & Spiced Karak Chai' },
      { label: 'Venue Type', value: 'Scenic Open-Air Riverside Park with Covered Pavilions' },
      { label: 'Support Contacts', value: 'Regional Chapter Representative & Welfare Committee' }
    ],
    photos: [
      { src: 'assets/images/events/event_bbq_cover.jpg', caption: 'Central Region Spring BBQ Meetup Announcement' },
      { src: 'assets/images/events/gallery_14.jpg', caption: 'Community members enjoying live charcoal grilling by the riverside' },
      { src: 'assets/images/events/gallery_15.jpg', caption: 'Scholars and newly arrived freshmen networking over lunch' },
      { src: 'assets/images/events/gallery_16.jpg', caption: 'Interactive outdoor discussion circle on campus research life' },
      { src: 'assets/images/events/gallery_17.jpg', caption: 'Group laughter and ice-breaking team games' },
      { src: 'assets/images/events/gallery_18.jpg', caption: 'Traditional spiced chai and dessert serving session' },
      { src: 'assets/images/events/gallery_19.jpg', caption: 'Central Region scholars and organizing committee group portrait' }
    ]
  },

  'independence-day': {
    id: 'independence-day',
    title: 'Pakistan & Korea Independence Day Celebration',
    category: 'Cultural Heritage',
    categoryClass: 'cultural',
    date: 'Tuesday, August 15, 2026',
    time: '10:00 AM – 03:00 PM KST',
    location: 'Seoul Central Convention Hall / Embassy Auditorium, Seoul',
    attendance: '250+ Attendees (Diplomats, Scholars & Community Delegates)',
    organizer: 'PSAK Executive Council & Embassy of Pakistan, Seoul',
    coverImage: 'assets/images/events/event_indep_cover.jpg',
    overview: 'A grand national milestone commemorating Pakistan’s Independence Day (August 14) and the Republic of Korea’s National Liberation Day (Gwangbokjeol, August 15). This flagship bilateral cultural reception highlights historical diplomatic relations, honors Pakistani scholastic excellence in South Korea, and celebrates rich cultural heritage with music, traditional arts, and diplomatic delegates.',
    highlights: [
      'Official diplomatic participation including the Ambassador of Pakistan and Korean dignitaries.',
      'Solemn national anthems, flag hoisting, and bilateral friendship addresses.',
      'PSAK Scholastic Excellence Awards honoring outstanding PhD research papers and patents.',
      'Live traditional cultural music, poetry, and a lavish multi-course Pakistani buffet.'
    ],
    schedule: [
      { time: '10:00 AM', title: 'Guest Reception & Cultural Exhibition', desc: 'Welcome reception, registration, and showcase of Pakistani cultural artifacts and scientific posters.' },
      { time: '10:30 AM', title: 'National Anthems & Flag Ceremony', desc: 'Rendition of the National Anthems of Pakistan and the Republic of Korea.' },
      { time: '11:00 AM', title: 'Keynote Address by Ambassador & Dignitaries', desc: 'Speeches on educational cooperation, trade ties, and researcher mobility between both nations.' },
      { time: '11:45 AM', title: 'PSAK Scholastic & Leadership Awards', desc: 'Distributing certificates and trophies to scholars with top journal publications.' },
      { time: '12:30 PM', title: 'Cultural Performance & Instrumental Music', desc: 'Traditional music, national songs, and poetic recitations celebrating independence.' },
      { time: '01:15 PM', title: 'Grand Festive Buffet & Diplomatic High Tea', desc: 'Sumptuous celebratory lunch and open networking between scholars and dignitaries.' }
    ],
    inclusions: [
      { label: 'Attire', value: 'National Traditional (Shalwar Kameez) or Formal Business' },
      { label: 'Cuisine', value: 'Multi-course Festive Pakistani & Korean Buffet Reception' },
      { label: 'Recognition', value: 'Formal Certificates for Award Winners & Volunteers' },
      { label: 'Photography', value: 'Professional Event Media Coverage & Photo Booth' }
    ],
    photos: [
      { src: 'assets/images/events/event_indep_cover.jpg', caption: '77th Independence Day & Bilateral Friendship Celebration' },
      { src: 'assets/images/events/gallery_8.jpg', caption: 'Main stage setup and national flags ceremony' },
      { src: 'assets/images/events/gallery_9.jpg', caption: 'Ambassador of Pakistan addressing scholars and guests' },
      { src: 'assets/images/events/gallery_10.jpg', caption: 'Scholastic excellence award presentation ceremony' },
      { src: 'assets/images/events/gallery_11.jpg', caption: 'Pakistani cultural heritage display and national attire showcase' },
      { src: 'assets/images/events/gallery_12.jpg', caption: 'Dignitaries, executive cabinet, and attendees in the main hall' },
      { src: 'assets/images/events/gallery_13.jpg', caption: 'Grand commemorative group photograph with community delegates' }
    ]
  },

  'scholar-orientation': {
    id: 'scholar-orientation',
    title: 'All-Korea Scholar Orientation & Welcoming Seminar',
    category: 'Orientation & Mentorship',
    categoryClass: 'orientation',
    date: 'Thursday, March 23, 2026',
    time: '02:00 PM – 06:30 PM KST',
    location: 'Hybrid (Seoul National University Main Hall + Nationwide Zoom Livestream)',
    attendance: '500+ Registered Scholars across 45+ Korean Universities',
    organizer: 'PSAK Academic Affairs & Student Welfare Wing',
    coverImage: 'assets/images/events/gallery_1.jpg',
    overview: 'The All-Korea Scholar Orientation is PSAK’s premier semestral welcoming conference designed for incoming Master’s, Doctoral, and Postdoctoral researchers arriving in South Korea. Covering every dimension of student survival—from Alien Registration Cards (ARC) and Korean tax exemptions to laboratory dynamics and SCI journal writing—this seminar empowers new scholars with the knowledge and community backing needed to succeed.',
    highlights: [
      'Comprehensive masterclass on Alien Registration Card (ARC), D-2 student visas, and D-10/F-2 visas.',
      'Practical insights on Korean laboratory hierarchy, professor expectations, and work-life balance.',
      'Guidance on securing GKS, BK21 research stipends, and university conference travel grants.',
      'Introduction of PSAK Regional Chapters, 24/7 emergency welfare helpline, and peer buddy assignments.'
    ],
    schedule: [
      { time: '02:00 PM', title: 'Welcome Address & PSAK Introduction', desc: 'Welcome remarks by PSAK President and introduction of the 2026 executive council.' },
      { time: '02:30 PM', title: 'Immigration, Visa & ARC Legal Workshop', desc: 'Step-by-step HiKorea navigation, visa extensions, part-time work permissions, and D-10 transition.' },
      { time: '03:30 PM', title: 'Korean Academia & Lab Dynamics', desc: 'Senior PhD panel sharing strategies for professor communication, lab culture, and mental wellness.' },
      { time: '04:30 PM', title: 'Scholarships & SCI Research Publishing Guide', desc: 'How to structure high-impact papers, apply for international conferences, and maximize grants.' },
      { time: '05:30 PM', title: 'Regional Breakouts & University Ambassador Connect', desc: 'Connecting newcomers with regional representatives in Seoul, Suwon, Daejeon, Busan, and Daegu.' },
      { time: '06:00 PM', title: 'Live Open Q&A & Resource Handbook Distribution', desc: 'Answering audience queries and sharing digital guidebooks, slides, and emergency contacts.' }
    ],
    inclusions: [
      { label: 'Event Format', value: 'Hybrid (In-person attendance + Interactive Zoom stream)' },
      { label: 'Handbook', value: 'Free 60-page PDF Guide ("Life & Study in Korea Guidebook")' },
      { label: 'Mentorship', value: 'Direct pairing with senior university chapter mentors' },
      { label: 'Language', value: 'English & Urdu bilingual presentation slides' }
    ],
    photos: [
      { src: 'assets/images/events/gallery_1.jpg', caption: 'All-Korea Scholar Orientation Conference Welcome Banner' },
      { src: 'assets/images/events/gallery_20.jpg', caption: 'Immigration & ARC Legal Workshop presentation in Seoul' },
      { src: 'assets/images/events/gallery_21.jpg', caption: 'Panel discussion on Korean lab culture and research ethics' },
      { src: 'assets/images/events/gallery_22.jpg', caption: 'Auditorium attendees taking notes and engaging with speakers' },
      { src: 'assets/images/events/gallery_23.jpg', caption: 'Regional university ambassador breakout introductions' },
      { src: 'assets/images/events/gallery_24.jpg', caption: 'One-on-one document review and visa consultation booth' },
      { src: 'assets/images/events/gallery_25.jpg', caption: 'Group photo of newly admitted Pakistani scholars across Korea' }
    ]
  }
};

/**
 * Event Modal Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.querySelector('#eventDetailModal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.event-modal-close-btn');
  const footerCloseBtn = modalOverlay.querySelector('#eventModalCloseBtn');
  const shareBtn = modalOverlay.querySelector('#eventModalShareBtn');
  const contactBtn = modalOverlay.querySelector('#eventModalContactBtn');

  // DOM Containers inside Modal
  const modalCoverImg = modalOverlay.querySelector('#eventModalCoverImg');
  const modalCategoryBadge = modalOverlay.querySelector('#eventModalCategoryBadge');
  const modalTitle = modalOverlay.querySelector('#eventModalTitle');
  const modalDate = modalOverlay.querySelector('#eventModalDate');
  const modalLocation = modalOverlay.querySelector('#eventModalLocation');
  const modalAttendance = modalOverlay.querySelector('#eventModalAttendance');
  const modalOrganizer = modalOverlay.querySelector('#eventModalOrganizer');
  const modalOverview = modalOverlay.querySelector('#eventModalOverview');
  const modalHighlightsList = modalOverlay.querySelector('#eventModalHighlights');
  const modalScheduleList = modalOverlay.querySelector('#eventModalSchedule');
  const modalInclusionsGrid = modalOverlay.querySelector('#eventModalInclusions');
  const modalPhotosGrid = modalOverlay.querySelector('#eventModalPhotos');
  const modalPhotosCount = modalOverlay.querySelector('#eventModalPhotosCount');

  let currentEventId = null;

  function openEventModal(eventId) {
    const event = PSAK_EVENTS_DATA[eventId];
    if (!event) return;

    currentEventId = eventId;

    // 1. Populate Header & Banner
    if (modalCoverImg) {
      modalCoverImg.src = event.coverImage;
      modalCoverImg.alt = event.title;
    }
    if (modalCategoryBadge) {
      modalCategoryBadge.textContent = event.category;
    }
    if (modalTitle) {
      modalTitle.textContent = event.title;
    }
    if (modalDate) {
      modalDate.textContent = `${event.date} • ${event.time}`;
    }
    if (modalLocation) {
      modalLocation.textContent = event.location;
    }
    if (modalAttendance) {
      modalAttendance.textContent = event.attendance;
    }
    if (modalOrganizer) {
      modalOrganizer.textContent = event.organizer;
    }

    // 2. Populate Overview
    if (modalOverview) {
      modalOverview.textContent = event.overview;
    }

    // 3. Populate Key Highlights
    if (modalHighlightsList) {
      modalHighlightsList.innerHTML = '';
      event.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.className = 'event-highlight-item';
        li.innerHTML = `<span class="highlight-bullet">✓</span> <span>${highlight}</span>`;
        modalHighlightsList.appendChild(li);
      });
    }

    // 4. Populate Schedule Timeline
    if (modalScheduleList) {
      modalScheduleList.innerHTML = '';
      event.schedule.forEach(item => {
        const row = document.createElement('div');
        row.className = 'event-timeline-item';
        row.innerHTML = `
          <div class="timeline-time-badge">${item.time}</div>
          <div class="timeline-details">
            <h5 class="timeline-title">${item.title}</h5>
            <p class="timeline-desc">${item.desc}</p>
          </div>
        `;
        modalScheduleList.appendChild(row);
      });
    }

    // 5. Populate Key Info / Inclusions
    if (modalInclusionsGrid) {
      modalInclusionsGrid.innerHTML = '';
      event.inclusions.forEach(inc => {
        const card = document.createElement('div');
        card.className = 'event-inclusion-card';
        card.innerHTML = `
          <div class="inclusion-label">${inc.label}</div>
          <div class="inclusion-value">${inc.value}</div>
        `;
        modalInclusionsGrid.appendChild(card);
      });
    }

    // 6. Populate Related Photos Grid
    if (modalPhotosGrid) {
      modalPhotosGrid.innerHTML = '';
      if (modalPhotosCount) {
        modalPhotosCount.textContent = `(${event.photos.length} Photos)`;
      }

      event.photos.forEach((photo, idx) => {
        const item = document.createElement('div');
        item.className = 'event-photo-thumb';
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View photo: ${photo.caption}`);
        item.innerHTML = `
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
          <div class="photo-overlay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>Enlarge</span>
          </div>
          <div class="photo-caption-bar">${photo.caption}</div>
        `;

        // Click to enlarge in lightbox
        const triggerEnlarge = () => {
          if (typeof window.openLightbox === 'function') {
            window.openLightbox(photo.src, `${event.title} — ${photo.caption}`);
          }
        };

        item.addEventListener('click', triggerEnlarge);
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerEnlarge();
          }
        });

        modalPhotosGrid.appendChild(item);
      });
    }

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeEventModal() {
    modalOverlay.classList.remove('active');
    // Check if gallery lightbox is also open; if not, restore body scrolling
    const lightbox = document.querySelector('#galleryLightbox');
    if (!lightbox || !lightbox.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  // Bind close events
  if (closeBtn) closeBtn.addEventListener('click', closeEventModal);
  if (footerCloseBtn) footerCloseBtn.addEventListener('click', closeEventModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeEventModal();
    }
  });

  // Share Event button
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!currentEventId) return;
      const url = `${window.location.origin}${window.location.pathname}?event=${currentEventId}`;
      navigator.clipboard.writeText(url).then(() => {
        if (typeof window.showToast === 'function') {
          window.showToast('Event link copied to clipboard!');
        }
      }).catch(() => {
        if (typeof window.showToast === 'function') {
          window.showToast(`Share URL: ${url}`);
        }
      });
    });
  }

  // Contact Organizer button
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }

  // Bind click & keyboard handlers to all event cards across the page
  const bindEventCards = () => {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
      // Look for data-event-id or deduce from title/heading
      let eventId = card.getAttribute('data-event-id');
      if (!eventId) {
        const titleEl = card.querySelector('.event-title');
        const titleText = titleEl ? titleEl.textContent.trim().toLowerCase() : '';
        if (titleText.includes('cricket')) eventId = 'cricket-league';
        else if (titleText.includes('bbq') || titleText.includes('central')) eventId = 'bbq-meetup';
        else if (titleText.includes('independence')) eventId = 'independence-day';
        else if (titleText.includes('orientation') || titleText.includes('scholar')) eventId = 'scholar-orientation';
        
        if (eventId) {
          card.setAttribute('data-event-id', eventId);
        }
      }

      if (eventId) {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-haspopup', 'dialog');
        card.setAttribute('aria-label', `View details and related photos for ${PSAK_EVENTS_DATA[eventId]?.title || 'event'}`);

        // Add a visible interactive cue / indicator if not already present
        if (!card.querySelector('.event-click-hint')) {
          const hint = document.createElement('div');
          hint.className = 'event-click-hint';
          hint.innerHTML = `<span>View Details &amp; Photos</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
          const body = card.querySelector('.event-body');
          if (body) {
            body.appendChild(hint);
          }
        }

        const handleOpen = (e) => {
          // If user clicked directly on a different navigation link inside card that is not event.html
          if (e.target.tagName === 'A' && e.target.getAttribute('href') && !e.target.getAttribute('href').startsWith('#') && e.target.getAttribute('href') !== 'event.html') {
            return;
          }
          e.preventDefault();
          openEventModal(eventId);
        };

        card.addEventListener('click', handleOpen);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEventModal(eventId);
          }
        });
      }
    });
  };

  bindEventCards();

  // Check URL parameter for direct event linking (?event=cricket-league or hash)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedEvent = urlParams.get('event') || window.location.hash.replace('#', '');
  if (requestedEvent && PSAK_EVENTS_DATA[requestedEvent]) {
    setTimeout(() => {
      openEventModal(requestedEvent);
    }, 200);
  }

  // Close event modal on Escape if active and lightbox is not on top
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.querySelector('#galleryLightbox');
      if (lightbox && lightbox.classList.contains('active')) {
        // lightbox will be closed by its own handler
        return;
      }
      if (modalOverlay.classList.contains('active')) {
        closeEventModal();
      }
    }
  });

  // Expose global opener function if needed
  window.openEventDetailsModal = openEventModal;
});
