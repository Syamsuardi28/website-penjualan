// ========================================
// TECHSTORE - MAIN JAVASCRIPT
// ========================================

// ===== DATA PRODUK =====
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "smartphone",
    price: 19999000,
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
    rating: 4.9,
    description:
      "Smartphone flagship dengan chip A17 Pro dan kamera 48MP yang luar biasa. Layar Super Retina XDR 6.7 inch.",
    stock: 15,
    isNew: true,
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    category: "laptop",
    price: 24999000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    rating: 4.8,
    description:
      "Laptop profesional dengan chip M3 yang powerful. RAM 16GB, SSD 512GB, layar Retina 14 inch.",
    stock: 10,
    isNew: true,
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphone",
    price: 17999000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    rating: 4.7,
    description:
      "Smartphone Android premium dengan S Pen dan kamera 200MP. Layar Dynamic AMOLED 6.8 inch.",
    stock: 20,
    isNew: true,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    category: "audio",
    price: 5499000,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    rating: 4.9,
    description:
      "Headphone premium dengan noise cancellation terbaik di kelasnya. Battery life hingga 30 jam.",
    stock: 30,
    isNew: false,
  },
  {
    id: 5,
    name: "Dell XPS 13",
    category: "laptop",
    price: 18999000,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    rating: 4.6,
    description:
      "Laptop ultrabook dengan layar InfinityEdge 13.4 inch. Intel Core i7 Gen 13, RAM 16GB.",
    stock: 12,
    isNew: false,
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    category: "wearable",
    price: 6999000,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    rating: 4.8,
    description:
      "Smartwatch dengan sensor kesehatan lengkap dan always-on Retina display. GPS + Cellular.",
    stock: 25,
    isNew: true,
  },
  {
    id: 7,
    name: "AirPods Pro 2",
    category: "audio",
    price: 3799000,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    rating: 4.7,
    description:
      "Earbuds wireless dengan Active Noise Cancellation dan Spatial Audio. Chip H2 untuk audio premium.",
    stock: 40,
    isNew: false,
  },
  {
    id: 8,
    name: "iPad Pro M2",
    category: "smartphone",
    price: 15999000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    rating: 4.8,
    description:
      "Tablet profesional dengan chip M2 dan layar Liquid Retina XDR 12.9 inch. Support Apple Pencil.",
    stock: 18,
    isNew: false,
  },
];

// ===== CART MANAGEMENT =====
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.updateCartCount();
  }

  // Load cart dari localStorage
  loadCart() {
    const savedCart = localStorage.getItem("techstore_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }

  // Save cart ke localStorage
  saveCart() {
    localStorage.setItem("techstore_cart", JSON.stringify(this.items));
    this.updateCartCount();
  }

  // Tambah item ke cart
  addItem(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return false;

    const existingItem = this.items.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    this.saveCart();
    return true;
  }

  // Update quantity item
  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  // Hapus item dari cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveCart();
  }

  // Get total items
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Get subtotal
  getSubtotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Clear cart
  clearCart() {
    this.items = [];
    this.saveCart();
  }

  // Update cart count badge
  updateCartCount() {
    const cartCountElements = document.querySelectorAll("#cart-count");
    const totalItems = this.getTotalItems();
    cartCountElements.forEach((element) => {
      element.textContent = totalItems;
      element.style.display = totalItems > 0 ? "inline-block" : "none";
    });
  }
}

// Initialize cart
const cart = new ShoppingCart();

// ===== UTILITY FUNCTIONS =====

// Format currency ke Rupiah
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="bi bi-star-fill"></i>';
  }

  if (hasHalfStar) {
    starsHTML += '<i class="bi bi-star-half"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="bi bi-star"></i>';
  }

  return `${starsHTML} <span class="ms-1">(${rating})</span>`;
}

// Show toast notification
function showToast(message, type = "success") {
  // Create toast container if not exists
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container position-fixed top-0 end-0 p-3";
    toastContainer.style.zIndex = "9999";
    document.body.appendChild(toastContainer);
  }

  const toastHTML = `
        <div class="toast align-items-center text-white bg-${type} border-0 fade show" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    <i class="bi bi-check-circle-fill me-2"></i> ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;

  toastContainer.insertAdjacentHTML("beforeend", toastHTML);

  const toastElement = toastContainer.lastElementChild;
  setTimeout(() => {
    toastElement.remove();
  }, 3000);
}

// ===== PRODUCT DISPLAY FUNCTIONS =====

// Display products on index page
function displayProducts(productsToShow = products) {
  const productList = document.getElementById("productList");
  const noResults = document.getElementById("noResults");

  if (!productList) return;

  if (productsToShow.length === 0) {
    productList.innerHTML = "";
    noResults.classList.remove("d-none");
    return;
  }

  noResults.classList.add("d-none");

  productList.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="col-md-6 col-lg-3 mb-4 fade-in">
            <div class="card product-card shadow-sm h-100">
                <div class="product-image-container">
                    ${
                      product.isNew
                        ? '<span class="badge bg-success product-badge">Baru</span>'
                        : ""
                    }
                    <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating mb-2">
                        ${generateStarRating(product.rating)}
                    </div>
                    <p class="product-price">${formatCurrency(
                      product.price
                    )}</p>
                    <div class="mt-auto d-flex gap-2">
                        <a href="product.html?id=${
                          product.id
                        }" class="btn btn-outline-primary flex-grow-1">
                            <i class="bi bi-eye"></i> Detail
                        </a>
                        <button class="btn btn-add-cart flex-grow-1" onclick="addToCart(${
                          product.id
                        })">
                            <i class="bi bi-cart-plus"></i> Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Add to cart function
function addToCart(productId) {
  const success = cart.addItem(productId);
  if (success) {
    const product = products.find((p) => p.id === productId);
    showToast(`${product.name} ditambahkan ke keranjang!`, "success");
  }
}

// ===== SEARCH & FILTER FUNCTIONS =====

let currentProducts = [...products];

function applyFilters() {
  const searchQuery =
    document.getElementById("searchInput")?.value.toLowerCase() || "";
  const categoryFilter =
    document.getElementById("categoryFilter")?.value || "all";
  const sortFilter = document.getElementById("sortFilter")?.value || "default";

  // Filter by search
  let filtered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
  );

  // Filter by category
  if (categoryFilter !== "all") {
    filtered = filtered.filter(
      (product) => product.category === categoryFilter
    );
  }

  // Sort products
  switch (sortFilter) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filtered.sort((a, b) => b.isNew - a.isNew);
      break;
  }

  currentProducts = filtered;
  displayProducts(filtered);
}

// ===== CART PAGE FUNCTIONS =====

function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");
  const orderSummaryCard = document.getElementById("orderSummaryCard");

  if (!cartItemsContainer) return;

  if (cart.items.length === 0) {
    cartItemsContainer.innerHTML = "";
    emptyCart.classList.remove("d-none");
    if (orderSummaryCard) orderSummaryCard.style.display = "none";
    return;
  }

  emptyCart.classList.add("d-none");
  if (orderSummaryCard) orderSummaryCard.style.display = "block";

  cartItemsContainer.innerHTML = cart.items
    .map(
      (item) => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2 col-3 mb-3 mb-md-0">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="col-md-4 col-9 mb-3 mb-md-0">
                    <h5 class="mb-1">${item.name}</h5>
                    <p class="text-muted mb-0">${formatCurrency(item.price)}</p>
                </div>
                <div class="col-md-3 col-6 mb-3 mb-md-0">
                    <div class="quantity-controls d-flex align-items-center gap-2">
                        <button class="btn btn-sm" onclick="updateCartQuantity(${
                          item.id
                        }, ${item.quantity - 1})">
                            <i class="bi bi-dash"></i>
                        </button>
                        <input type="number" class="form-control form-control-sm" value="${
                          item.quantity
                        }" 
                               onchange="updateCartQuantity(${
                                 item.id
                               }, this.value)" min="1">
                        <button class="btn btn-sm" onclick="updateCartQuantity(${
                          item.id
                        }, ${item.quantity + 1})">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-2 col-4 mb-3 mb-md-0 text-end">
                    <p class="fw-bold mb-0">${formatCurrency(
                      item.price * item.quantity
                    )}</p>
                </div>
                <div class="col-md-1 col-2 text-end">
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${
                      item.id
                    })">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  updateOrderSummary();
}

function updateCartQuantity(productId, quantity) {
  quantity = parseInt(quantity);
  if (quantity < 1) return;
  cart.updateQuantity(productId, quantity);
  displayCartItems();
}

function removeFromCart(productId) {
  const product = cart.items.find((item) => item.id === productId);
  if (confirm(`Hapus ${product.name} dari keranjang?`)) {
    cart.removeItem(productId);
    displayCartItems();
    showToast("Produk dihapus dari keranjang", "info");
  }
}

function updateOrderSummary() {
  const subtotal = cart.getSubtotal();
  const shipping = subtotal > 0 ? 25000 : 0; // Ongkir flat
  const discount = subtotal > 10000000 ? 500000 : 0; // Diskon untuk pembelian > 10jt
  const total = subtotal + shipping - discount;

  // Update untuk halaman cart
  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const discountEl = document.getElementById("discount");
  const totalEl = document.getElementById("total");

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (shippingEl) shippingEl.textContent = formatCurrency(shipping);
  if (discountEl) discountEl.textContent = `- ${formatCurrency(discount)}`;
  if (totalEl) totalEl.textContent = formatCurrency(total);

  // Update untuk halaman checkout
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutShipping = document.getElementById("checkoutShipping");
  const checkoutDiscount = document.getElementById("checkoutDiscount");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (checkoutSubtotal) checkoutSubtotal.textContent = formatCurrency(subtotal);
  if (checkoutShipping) checkoutShipping.textContent = formatCurrency(shipping);
  if (checkoutDiscount)
    checkoutDiscount.textContent = `- ${formatCurrency(discount)}`;
  if (checkoutTotal) checkoutTotal.textContent = formatCurrency(total);
}

// ===== PRODUCT DETAIL PAGE =====

function displayProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const product = products.find((p) => p.id === productId);

  const productDetail = document.getElementById("productDetail");
  const productNotFound = document.getElementById("productNotFound");
  const breadcrumb = document.getElementById("breadcrumbProduct");

  if (!product) {
    if (productDetail) productDetail.style.display = "none";
    if (productNotFound) productNotFound.classList.remove("d-none");
    return;
  }

  if (breadcrumb) breadcrumb.textContent = product.name;

  if (productDetail) {
    productDetail.innerHTML = `
            <div class="col-md-6 mb-4">
                <img src="${product.image}" alt="${
      product.name
    }" class="product-detail-image">
            </div>
            <div class="col-md-6">
                <h1 class="fw-bold mb-3">${product.name}</h1>
                <div class="product-rating mb-3">
                    ${generateStarRating(product.rating)}
                </div>
                <div class="product-detail-price mb-4">${formatCurrency(
                  product.price
                )}</div>
                
                <div class="mb-4">
                    <span class="badge bg-primary me-2">${product.category.toUpperCase()}</span>
                    ${
                      product.isNew
                        ? '<span class="badge bg-success">BARU</span>'
                        : ""
                    }
                </div>

                <div class="mb-4">
                    <h5 class="fw-bold mb-3">Deskripsi Produk</h5>
                    <p class="text-muted">${product.description}</p>
                </div>

                <div class="mb-4">
                    <h5 class="fw-bold mb-2">Ketersediaan</h5>
                    <p class="text-${
                      product.stock > 10 ? "success" : "warning"
                    }">
                        <i class="bi bi-box-seam me-2"></i>${
                          product.stock
                        } unit tersedia
                    </p>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-warning btn-lg" onclick="addToCart(${
                      product.id
                    })">
                        <i class="bi bi-cart-plus me-2"></i> Tambah ke Keranjang
                    </button>
                    <a href="cart.html" class="btn btn-outline-primary btn-lg">
                        <i class="bi bi-cart3 me-2"></i> Lihat Keranjang
                    </a>
                </div>
            </div>
        `;
  }

  // Display related products
  displayRelatedProducts(product.category, product.id);
}

function displayRelatedProducts(category, excludeId) {
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== excludeId)
    .slice(0, 4);

  const container = document.getElementById("relatedProducts");
  if (!container) return;

  container.innerHTML = relatedProducts
    .map(
      (product) => `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card product-card shadow-sm h-100">
                <div class="product-image-container">
                    <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }">
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="product-title">${product.name}</h6>
                    <p class="product-price mb-2">${formatCurrency(
                      product.price
                    )}</p>
                    <a href="product.html?id=${
                      product.id
                    }" class="btn btn-sm btn-primary mt-auto">
                        Lihat Detail
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// ===== CHECKOUT PAGE =====

function displayCheckoutItems() {
  const checkoutItems = document.getElementById("checkoutItems");
  if (!checkoutItems) return;

  if (cart.items.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  checkoutItems.innerHTML = cart.items
    .map(
      (item) => `
        <div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" 
                     style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;" class="me-3">
                <div>
                    <h6 class="mb-0">${item.name}</h6>
                    <small class="text-muted">Qty: ${item.quantity}</small>
                </div>
            </div>
            <div class="text-end">
                <strong>${formatCurrency(item.price * item.quantity)}</strong>
            </div>
        </div>
    `
    )
    .join("");

  updateOrderSummary();
}

function handleCheckout() {
  const form = document.getElementById("checkoutForm");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    showToast("Mohon lengkapi semua data yang diperlukan", "danger");
    return;
  }

  // Get form data
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    postalCode: document.getElementById("postalCode").value,
    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')
      .value,
    notes: document.getElementById("notes").value,
    items: cart.items,
    total:
      cart.getSubtotal() + 25000 - (cart.getSubtotal() > 10000000 ? 500000 : 0),
  };

  // Simulate order processing
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  placeOrderBtn.disabled = true;
  placeOrderBtn.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2"></span> Memproses...';

  setTimeout(() => {
    // Clear cart
    cart.clearCart();

    // Show success message
    alert(
      `✅ Pesanan Berhasil Dibuat!\n\nTerima kasih ${
        formData.firstName
      }!\n\nTotal: ${formatCurrency(
        formData.total
      )}\nMetode Pembayaran: ${getPaymentMethodName(
        formData.paymentMethod
      )}\n\nKami akan mengirimkan konfirmasi ke ${formData.email}`
    );

    // Redirect to home
    window.location.href = "index.html";
  }, 1500);
}

function getPaymentMethodName(method) {
  const methods = {
    bank: "Transfer Bank",
    credit: "Kartu Kredit/Debit",
    ewallet: "E-Wallet",
    cod: "COD (Bayar di Tempat)",
  };
  return methods[method] || method;
}

// ===== PAGE INITIALIZATION =====

document.addEventListener("DOMContentLoaded", function () {
  // Initialize based on current page
  const currentPage = window.location.pathname.split("/").pop();

  // INDEX PAGE
  if (currentPage === "index.html" || currentPage === "") {
    displayProducts();

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    // Filter functionality
    const categoryFilter = document.getElementById("categoryFilter");
    if (categoryFilter) {
      categoryFilter.addEventListener("change", applyFilters);
    }

    // Sort functionality
    const sortFilter = document.getElementById("sortFilter");
    if (sortFilter) {
      sortFilter.addEventListener("change", applyFilters);
    }
  }

  // PRODUCT DETAIL PAGE
  if (currentPage === "product.html") {
    displayProductDetail();
  }

  // CART PAGE
  if (currentPage === "cart.html") {
    displayCartItems();
  }

  // CHECKOUT PAGE
  if (currentPage === "checkout.html") {
    displayCheckoutItems();

    // Form validation
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault();
      });
    }

    // Place order button
    const placeOrderBtn = document.getElementById("placeOrderBtn");
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener("click", handleCheckout);
    }
  }

  // Update cart count on all pages
  cart.updateCartCount();
});

// ===== EXPORT FUNCTIONS FOR INLINE USE =====
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
