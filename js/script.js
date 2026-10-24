/**
 * ============================================================================
 * SALWA NUTRISINDO - OFFICIAL JAVASCRIPT
 * Static Company Profile, Product Catalog & WhatsApp Order Integration
 * ============================================================================
 */

// ============================================================================
// DATA PRODUK
// ============================================================================
const products = [
  {
    id: "apel-250",
    name: "Cuka Apel Malang Tahestian",
    category: "apel",
    size: "250 ml",
    price: null,
    image: "./assets/products/apel-250.jpg",
    badge: "Bestseller",
    bpom: "023771000301445",
    halal: "3511005166480623",
    description: "Cuka apel murni khas Malang Tahestian yang dibuat dari buah apel Malang segar pilihan melalui proses fermentasi alami higienis. Menghadirkan aroma segar dengan cita rasa asam lembut untuk melengkapi asupan gaya hidup sehat harian Anda.",
    composition: "100% Sari Buah Apel Malang Pilihan, Air, Kultur Alami"
  },
  {
    id: "apel-500",
    name: "Cuka Apel Malang Tahestian",
    category: "apel",
    size: "500 ml",
    price: null,
    image: "./assets/products/apel-500.jpg",
    badge: "Favorit Keluarga",
    bpom: "023771000301445",
    halal: "3511005166480623",
    description: "Kemasan ekonomis 500 ml cuka apel Malang Tahestian. Pilihan hemat dan tepat untuk konsumsi rutin keluarga, pendamping salad dressing, atau racikan minuman segar setiap hari.",
    composition: "100% Sari Buah Apel Malang Pilihan, Air, Kultur Alami"
  },
  {
    id: "lemon-250",
    name: "Cuka Lemon Malang Tahestian",
    category: "lemon",
    size: "250 ml",
    price: null,
    image: "./assets/products/lemon-250.jpg",
    badge: "Populer",
    bpom: "023771000201445",
    halal: "3511005166480623",
    description: "Dihasilkan dari perasan buah lemon segar berkualitas yang difermentasi dengan cermat. Memberikan aroma sitrus yang memikat dan rasa asam segar alami untuk menyegarkan aktivitas harian.",
    composition: "100% Sari Buah Lemon Segar, Air, Kultur Fermentasi"
  },
  {
    id: "lemon-500",
    name: "Cuka Lemon Malang Tahestian",
    category: "lemon",
    size: "500 ml",
    price: null,
    image: "./assets/products/lemon-500.jpg",
    badge: null,
    bpom: "023771000201445",
    halal: "3511005166480623",
    description: "Kemasan 500 ml cuka lemon Tahestian untuk kepraktisan konsumsi jangka panjang dan kreasi minuman segar alami bagi seluruh anggota keluarga di rumah.",
    composition: "100% Sari Buah Lemon Segar, Air, Kultur Fermentasi"
  },
  {
    id: "nanas-250",
    name: "Cuka Nanas Malang Tahestian",
    category: "nanas",
    size: "250 ml",
    price: null,
    image: "./assets/products/nanas-250.jpg",
    badge: null,
    bpom: null,
    halal: "3511005166480623",
    description: "Fermentasi alami sari nanas madu matang pilihan dengan rasa manis-asam tropis yang khas dan menyegarkan. Sangat nikmat disajikan dengan air dingin atau madu.",
    composition: "100% Sari Buah Nanas Pilihan, Air, Kultur Alami"
  },
  {
    id: "nanas-500",
    name: "Cuka Nanas Malang Tahestian",
    category: "nanas",
    size: "500 ml",
    price: null,
    image: "./assets/products/nanas-500.jpg",
    badge: null,
    bpom: null,
    halal: "3511005166480623",
    description: "Ukuran 500 ml sari cuka nanas murni untuk stok kebutuhan sehat keluarga maupun kebutuhan usaha olahan makanan dan minuman bernutrisi.",
    composition: "100% Sari Buah Nanas Pilihan, Air, Kultur Alami"
  },
  {
    id: "mengkudu",
    name: "Cuka Mengkudu",
    category: "mengkudu",
    size: "500 ml",
    price: null,
    image: "./assets/products/mengkudu.jpg",
    badge: null,
    bpom: null,
    halal: "3511005166480623",
    description: "Olahan fermentasi tradisional buah mengkudu (Morinda citrifolia) terpilih yang diproses higienis dan terstandar untuk mengurangi bau menyengat tanpa mengurangi keaslian nutrisinya.",
    composition: "100% Ekstrak Fermentasi Buah Mengkudu Segar, Air"
  },
  {
    id: "wortel",
    name: "Cuka Wortel",
    category: "wortel",
    size: "500 ml",
    price: null,
    image: "./assets/products/wortel.jpg",
    badge: null,
    bpom: null,
    halal: "3511005166480623",
    description: "Inovasi fermentasi sari wortel segar pilihan bernutrisi tinggi. Menghadirkan rasa segar yang unik, kaya beta karoten dan fitonutrien alami.",
    composition: "100% Sari Fermentasi Wortel Segar, Air"
  }
];

// Official WhatsApp Number
const OFFICIAL_WA_NUMBER = "6285954312258";

// State
let currentCategory = "semua";
let currentSearch = "";
let currentSort = "default";

// ============================================================================
// WHATSAPP FUNCTIONS
// ============================================================================

/**
 * Open WhatsApp with a specific product inquiry message
 * @param {Object} product
 */
function openWhatsApp(product) {
  if (!product) return;
  const message = `Halo Salwa Nutrisindo,

Saya ingin menanyakan produk:

${product.name}
Ukuran: ${product.size}

Mohon informasi mengenai ketersediaan produk, harga terbaru, dan ongkos kirim.

Terima kasih.`;

  const url = `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/**
 * Open WhatsApp with general inquiry
 */
function openGeneralWhatsApp() {
  const message = "Halo Salwa Nutrisindo, saya ingin mendapatkan informasi mengenai produk cuka buah.";
  const url = `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ============================================================================
// PRODUCT CATALOG RENDERING
// ============================================================================

const productsGrid = document.getElementById("products-grid");

function getFilteredProducts() {
  return products.filter(product => {
    // Category match
    const matchCategory = (currentCategory === "semua" || product.category === currentCategory);
    // Search match (name, description, category, size)
    const q = currentSearch.toLowerCase().trim();
    const matchSearch = !q ||
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.size.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q);

    return matchCategory && matchSearch;
  });
}

function getSortedProducts(list) {
  const sorted = [...list];
  switch (currentSort) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "size-asc":
      return sorted.sort((a, b) => parseInt(a.size) - parseInt(b.size));
    case "size-desc":
      return sorted.sort((a, b) => parseInt(b.size) - parseInt(a.size));
    case "price-asc":
      return sorted.sort((a, b) => (a.price || 9999999) - (b.price || 9999999));
    case "price-desc":
      return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    default:
      return sorted;
  }
}

function renderProducts() {
  if (!productsGrid) return;

  const filtered = getFilteredProducts();
  const sorted = getSortedProducts(filtered);

  if (sorted.length === 0) {
    productsGrid.innerHTML = `
      <div class="catalog-empty">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p style="font-weight: 600; color: #222222; margin-bottom: 4px;">Produk tidak ditemukan</p>
        <p style="font-size: 0.85rem;">Coba cari dengan kata kunci lain atau pilih kategori Semua.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = sorted.map(product => {
    const badgeHtml = product.badge
      ? `<span class="product-badge">${product.badge}</span>`
      : "";

    const priceHtml = product.price !== null
      ? `Rp ${product.price.toLocaleString("id-ID")}`
      : "Hubungi kami untuk harga";

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          ${badgeHtml}
          <img
            src="${product.image}"
            alt="${product.name} ${product.size}"
            class="product-img"
            loading="lazy"
            decoding="async"
            onerror="this.src='./assets/hero/hero.jpg'"
          />
        </div>
        <div class="product-info">
          <div class="product-meta-row">
            <span class="product-cat">Cuka ${product.category}</span>
            <span class="product-size">${product.size}</span>
          </div>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-price">${priceHtml}</div>
          <div class="product-actions">
            <button
              type="button"
              class="btn-card-detail"
              onclick="openProductModal('${product.id}')"
              aria-label="Lihat detail ${product.name}"
            >
              Lihat Detail
            </button>
            <button
              type="button"
              class="btn-card-wa"
              onclick="handleCardWhatsApp('${product.id}')"
              aria-label="Tanya produk ${product.name} via WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.067-1.131-.072-.277-.089-.636-.207-1.096-.407-1.939-.844-3.21-2.808-3.308-2.937-.098-.13-1.026-1.365-1.026-2.603 0-1.238.647-1.849.877-2.099.23-.25.501-.312.668-.312.167 0 .334.002.48.009.155.008.363-.058.568.435.21.503.716 1.745.779 1.872.063.127.104.275.02.443-.083.167-.125.272-.25.418-.125.146-.263.327-.376.439-.125.125-.256.261-.11.512.146.251.648 1.07 1.39 1.732.954.851 1.758 1.114 2.008 1.239.25.125.397.104.544-.063.146-.167.627-.731.794-.982.167-.25.334-.209.564-.125.23.084 1.463.69 1.714.815.25.125.418.188.48.292.062.104.062.606-.082 1.011z"/></svg>
              <span>Tanya</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function handleCardWhatsApp(productId) {
  const p = products.find(item => item.id === productId);
  if (p) openWhatsApp(p);
}

// ============================================================================
// PRODUCT FILTER, SEARCH & SORT CONTROLS
// ============================================================================

// Filter Tabs
const filterTabs = document.querySelectorAll(".filter-tab");
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.dataset.category || "semua";
    renderProducts();
  });
});

// Category card buttons outside catalog
function filterByCategory(categoryName) {
  currentCategory = categoryName;
  filterTabs.forEach(tab => {
    if (tab.dataset.category === categoryName) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderProducts();

  const catalogElem = document.getElementById("produk");
  if (catalogElem) {
    catalogElem.scrollIntoView({ behavior: "smooth" });
  }
}

// Real-time Search
const searchInput = document.getElementById("product-search");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProducts();
  });
}

// Sorting Select
const sortSelect = document.getElementById("product-sort");
if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}

// ============================================================================
// PRODUCT DETAIL MODAL
// ============================================================================

const modalBackdrop = document.getElementById("product-modal");
const modalBody = document.getElementById("modal-body");
let activeModalProduct = null;

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !modalBackdrop || !modalBody) return;

  activeModalProduct = product;

  const priceText = product.price !== null
    ? `Rp ${product.price.toLocaleString("id-ID")}`
    : "Hubungi kami untuk harga";

  const bpomRow = product.bpom
    ? `<div class="modal-spec-row"><span class="modal-spec-label">Izin Edar BPOM RI</span><span class="modal-spec-val">MD ${product.bpom}</span></div>`
    : "";

  const halalRow = product.halal
    ? `<div class="modal-spec-row"><span class="modal-spec-label">Sertifikat Halal</span><span class="modal-spec-val">ID ${product.halal}</span></div>`
    : "";

  const badgeHtml = product.badge
    ? `<div class="modal-badge">${product.badge}</div>`
    : "";

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-media">
        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.src='./assets/hero/hero.jpg'"
        />
      </div>
      <div class="modal-content">
        ${badgeHtml}
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-meta-bar">
          <span>Kategori: Cuka ${product.category}</span>
          <span>·</span>
          <span>Ukuran: ${product.size}</span>
        </div>
        <p class="modal-desc">${product.description}</p>
        
        <div class="modal-specs">
          <div class="modal-spec-row">
            <span class="modal-spec-label">Komposisi</span>
            <span class="modal-spec-val">${product.composition}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-label">Volume Bersih</span>
            <span class="modal-spec-val">${product.size}</span>
          </div>
          ${bpomRow}
          ${halalRow}
        </div>

        <div class="modal-price-row">
          <span style="color: #6B7280; font-size: 0.85rem;">Estimasi Harga: </span>
          <span class="modal-price-val">${priceText}</span>
        </div>

        <button
          type="button"
          class="btn-modal-wa"
          id="btn-modal-inquiry"
          aria-label="Tanya produk ${product.name} via WhatsApp"
        >
          <svg viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.067-1.131-.072-.277-.089-.636-.207-1.096-.407-1.939-.844-3.21-2.808-3.308-2.937-.098-.13-1.026-1.365-1.026-2.603 0-1.238.647-1.849.877-2.099.23-.25.501-.312.668-.312.167 0 .334.002.48.009.155.008.363-.058.568.435.21.503.716 1.745.779 1.872.063.127.104.275.02.443-.083.167-.125.272-.25.418-.125.146-.263.327-.376.439-.125.125-.256.261-.11.512.146.251.648 1.07 1.39 1.732.954.851 1.758 1.114 2.008 1.239.25.125.397.104.544-.063.146-.167.627-.731.794-.982.167-.25.334-.209.564-.125.23.084 1.463.69 1.714.815.25.125.418.188.48.292.062.104.062.606-.082 1.011z"/></svg>
          <span>Tanya via WhatsApp</span>
        </button>
      </div>
    </div>
  `;

  // Bind modal WhatsApp inquiry button
  const modalWaBtn = document.getElementById("btn-modal-inquiry");
  if (modalWaBtn) {
    modalWaBtn.addEventListener("click", () => {
      openWhatsApp(product);
    });
  }

  modalBackdrop.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeProductModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("active");
  document.body.classList.remove("no-scroll");
  activeModalProduct = null;
}

// Close modal event listeners
const modalCloseBtn = document.getElementById("modal-close-btn");
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeProductModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeProductModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("active")) {
    closeProductModal();
  }
});

// ============================================================================
// NAVIGATION & MOBILE HAMBURGER
// ============================================================================

const siteHeader = document.querySelector(".site-header");
const hamburger = document.getElementById("hamburger-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    siteHeader?.classList.add("scrolled");
  } else {
    siteHeader?.classList.remove("scrolled");
  }
}, { passive: true });

// Mobile drawer toggle
if (hamburger && mobileDrawer) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.contains("open");
    if (isOpen) {
      mobileDrawer.classList.remove("open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    } else {
      mobileDrawer.classList.add("open");
      hamburger.classList.add("is-active");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
    }
  });
}

// Auto close mobile drawer on link click
mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (mobileDrawer && mobileDrawer.classList.contains("open")) {
      mobileDrawer.classList.remove("open");
      hamburger?.classList.remove("is-active");
      hamburger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }
  });
});

// Active Navigation State via IntersectionObserver
const observedSections = document.querySelectorAll("section[id]");
if ("IntersectionObserver" in window && observedSections.length > 0) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
        mobileNavLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -70% 0px"
  });

  observedSections.forEach(sec => navObserver.observe(sec));
}

// ============================================================================
// FAQ ACCORDION
// ============================================================================

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.closest(".faq-item");
    const isOpen = parent.classList.contains("open");

    // Close all other FAQs
    document.querySelectorAll(".faq-item").forEach(item => {
      item.classList.remove("open");
      item.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
    });

    // Toggle current
    if (!isOpen) {
      parent.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// ============================================================================
// SCROLL ANIMATION (INTERSECTION OBSERVER)
// ============================================================================

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
} else {
  // Fallback for older browsers
  revealElements.forEach(el => el.classList.add("active"));
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

// Expose functions globally for inline onclick handlers
window.openWhatsApp = openWhatsApp;
window.openGeneralWhatsApp = openGeneralWhatsApp;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.handleCardWhatsApp = handleCardWhatsApp;
window.filterByCategory = filterByCategory;
