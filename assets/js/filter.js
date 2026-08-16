/**
 * PSAK Filter & Search Controller
 * Real-time filtering by category and search queries for scholarships and events.
 */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('#filterSearchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterItems.length === 0) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    filterItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category') || '';
      const itemText = item.textContent.toLowerCase();

      const matchesCategory = (activeCategory === 'all' || itemCategory.includes(activeCategory));
      const matchesSearch = (!searchQuery || itemText.includes(searchQuery));

      if (matchesCategory && matchesSearch) {
        item.style.display = '';
        item.style.opacity = '1';
      } else {
        item.style.display = 'none';
      }
    });

    // Check if no results found
    const visibleCount = Array.from(filterItems).filter(item => item.style.display !== 'none').length;
    let noResultsMsg = document.querySelector('.no-results-msg');
    if (visibleCount === 0) {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.className = 'no-results-msg';
        noResultsMsg.style.textAlign = 'center';
        noResultsMsg.style.padding = '3rem 1rem';
        noResultsMsg.style.color = 'var(--slate-500)';
        noResultsMsg.innerHTML = `<h4>No matches found</h4><p>Try refining your search terms or selecting a different category filter.</p>`;
        const container = filterItems[0].parentElement;
        if (container) container.appendChild(noResultsMsg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
});
