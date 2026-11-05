/* =========================================================
   The Teak — Interactions
   ========================================================= */

/* ---------- Business settings (edit these) ---------- */
const SETTINGS = {
  // WhatsApp number in international format, digits only (94 = Sri Lanka). REPLACE WITH YOUR NUMBER.
  whatsapp: "94770000000",
  currency: "Rs.",
};

const IMG = (id, w = 700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ---------- Product data (edit names, prices, photos here) ---------- */
const PRODUCTS = [
  { id: 1, name: "Teak Chesterfield Leather Sofa", cat: "living", price: 385000, old: 425000, tag: "sale", rating: 4.9,
    img: "1540574163026-643ea20ade25", wood: "Teak frame · Genuine leather", size: "3-seater · 214 × 92 × 84 cm",
    desc: "Full-grain leather that develops a rich patina over time, on a kiln-dried solid teak frame with deep, supportive cushions.",
    colors: ["#9c5a2a", "#5a3a24", "#2a221c"] },
  { id: 2, name: "Velvet Three-Seater Sofa", cat: "living", price: 245000, rating: 4.8,
    img: "1555041469-a586c61ea9bc", wood: "Teak frame · Performance velvet", size: "3-seater · 200 × 88 × 80 cm",
    desc: "A deep, cloud-soft sofa wrapped in easy-care velvet, with solid teak legs in a natural oil finish.",
    colors: ["#4f6b4a", "#3d4a5c", "#8a5a3c", "#c9b79c"] },
  { id: 3, name: "Tufted Wingback Armchair", cat: "living", price: 98500, tag: "new", rating: 4.8,
    img: "1616627547584-bf28cee262db", wood: "Mahogany frame · Linen blend", size: "76 × 80 × 98 cm",
    desc: "Button-tufted back and turned mahogany legs — a statement chair for reading corners and verandahs.",
    colors: ["#c99a3e", "#5e6b55", "#efe8dc"] },
  { id: 4, name: "Teak C-Side Table", cat: "living", price: 32500, rating: 4.7,
    img: "1611486212557-88be5ff6f941", wood: "Solid teak", size: "50 × 40 × 60 cm",
    desc: "Slides neatly over the sofa arm or bedside. Built-in shelf for books and magazines.",
    colors: ["#b07a45", "#7a4420"] },
  { id: 5, name: "Six-Seater Teak Dining Set", cat: "dining", price: 465000, tag: "bestseller", rating: 5.0,
    img: "1615066390971-03e4e1c36ddf", wood: "Solid teak table · Upholstered chairs", size: "Table 180 × 90 cm",
    desc: "A generous solid teak table with six cushioned chairs — built for family dinners and festive gatherings.",
    colors: ["#9c5a2a", "#6b4a32"] },
  { id: 6, name: "Compact Four-Seater Dining Set", cat: "dining", price: 189000, old: 215000, tag: "sale", rating: 4.8,
    img: "1577140917170-285929fb55b7", wood: "Solid teak", size: "Table 120 × 80 cm",
    desc: "Perfect for apartments: a round-edged teak table with four comfortable curved-back chairs.",
    colors: ["#b07a45", "#2a221c"] },
  { id: 7, name: "Upholstered Dining Chair", cat: "dining", price: 28500, rating: 4.7,
    img: "1598300042247-d088f8ab3a91", wood: "Teak legs · Woven fabric", size: "52 × 58 × 90 cm",
    desc: "A softly curved back and solid teak legs make long dinners more comfortable. Sold individually.",
    colors: ["#9a9690", "#c9b79c", "#3d4a5c"] },
  { id: 8, name: "Teak King Size Bed", cat: "bedroom", price: 295000, tag: "bestseller", rating: 4.9,
    img: "1631049307264-da0ec9d70304", wood: "Solid teak · Padded headboard", size: "King · 72 × 78 in",
    desc: "A sturdy solid teak bed frame with an upholstered headboard. Also available in queen and custom sizes.",
    colors: ["#5f5f62", "#c9b79c", "#9c5a2a"] },
  { id: 9, name: "Two-Door Teak Wardrobe", cat: "bedroom", price: 275000, tag: "new", rating: 4.9,
    img: "1558997519-83ea9252edf8", wood: "Solid teak", size: "120 × 60 × 200 cm",
    desc: "Hanging space, adjustable shelves and a full-width drawer, in solid teak with brass-finish handles.",
    colors: ["#b07a45", "#7a4420"] },
  { id: 10, name: "Hand-Planed Teak Stool", cat: "bedroom", price: 18500, rating: 4.8,
    img: "1503602642458-232111445657", wood: "Solid teak", size: "35 × 35 × 65 cm",
    desc: "A versatile stool with wedged joints — use it as a bedside table, plant stand or extra seat.",
    colors: ["#d9c7ab", "#8a5a3c"] },
  { id: 11, name: "Teak Console Table with Drawers", cat: "storage", price: 78000, rating: 4.7,
    img: "1530018607912-eff2daa1bac4", wood: "Solid teak", size: "140 × 40 × 78 cm",
    desc: "A slim console with three drawers — ideal for entrances, hallways or as a writing desk.",
    colors: ["#c99e6e", "#7a4420"] },
  { id: 12, name: "Floating Wall Shelving Set", cat: "storage", price: 64000, old: 72000, tag: "sale", rating: 4.6,
    img: "1594026112284-02bb6f3352fe", wood: "Teak veneer · Solid teak edges", size: "Modular · 5 pieces",
    desc: "Wall-mounted shelves and cubbies for books, art and plants. Arrange them any way you like.",
    colors: ["#c99e6e", "#efe8dc"] },
];

const HERO_SLIDES = [
  { eyebrow: "Crafted in Sri Lanka",
    title: "Solid teak, shaped for the way <em>you live</em>.",
    text: "Kiln-dried teak and mahogany, joined by hand and finished to last for generations — from a single chair to a complete home." },
  { eyebrow: "Made to Measure",
    title: "Your design, built by <em>our craftsmen</em>.",
    text: "Send us a sketch, a photo or your architect's drawing. We'll build it to your size, timber and finish." },
  { eyebrow: "Island-wide Delivery",
    title: "From our workshop to <em>your home</em>.",
    text: "Delivered and assembled anywhere in Sri Lanka — Colombo, Kandy, Galle, Jaffna and everywhere in between." },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => `${SETTINGS.currency} ${n.toLocaleString("en-US")}`;
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const waLink = (msg) => `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ---------- Persistent state ---------- */
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },
};
let cart = store.get("teak-cart", []).filter((i) => findProduct(i.id));   // [{id, qty}]
let wishlist = store.get("teak-wish", []).filter((id) => findProduct(id)); // [id]

/* ---------- WhatsApp links ---------- */
$$(".js-wa").forEach((a) => {
  a.href = waLink(a.dataset.waMsg || "Hi The Teak, I'd like to know more about your furniture.");
  a.target = "_blank";
  a.rel = "noopener";
});

/* ---------- Render products ---------- */
const productsEl = $("#products");
const heartSVG = `<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3.1 4.5 6.8 4.5c2.1 0 3.5 1.1 4.2 2.3h2c.7-1.2 2.1-2.3 4.2-2.3 3.7 0 5.9 3.7 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>`;
const tagLabel = { sale: "Sale", new: "New", bestseller: "Bestseller" };
const catLabel = { living: "Living Room", dining: "Dining Room", bedroom: "Bedroom", storage: "Storage & Study" };

function renderProducts() {
  productsEl.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product" data-cat="${p.cat}" data-id="${p.id}" style="animation-delay:${(i % 4) * 0.08}s">
      <div class="product__media">
        <img src="${IMG(p.img)}" alt="${p.name}" loading="lazy" />
        ${p.tag ? `<span class="product__tag product__tag--${p.tag}">${tagLabel[p.tag]}</span>` : ""}
        <button class="product__wish ${wishlist.includes(p.id) ? "active" : ""}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist">${heartSVG}</button>
        <div class="product__actions">
          <button class="btn-view" data-view="${p.id}">Quick View</button>
          <button class="btn-add" data-add="${p.id}">Add to Cart</button>
        </div>
      </div>
      <div class="product__body">
        <span class="product__cat">${catLabel[p.cat]}</span>
        <h3 class="product__name">${p.name}</h3>
        <div class="product__row">
          <span class="product__price">${money(p.price)}${p.old ? `<del>${money(p.old)}</del>` : ""}</span>
          <span class="product__rating"><b>★</b> ${p.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>`).join("");
}
renderProducts();

/* ---------- Filtering ---------- */
function applyFilter(filter) {
  $$(".filter").forEach((b) => b.classList.toggle("active", b.dataset.filter === filter));
  $$(".product").forEach((card) => {
    const show = filter === "all" || card.dataset.cat === filter;
    card.classList.toggle("hide", !show);
    if (show) { card.style.animation = "none"; card.offsetHeight; card.style.animation = ""; }
  });
}
$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (btn) applyFilter(btn.dataset.filter);
});
// Collection tiles, promo and footer links jump to the shop pre-filtered
$$(".category[data-filter], [data-filter-link]").forEach((link) =>
  link.addEventListener("click", () => applyFilter(link.dataset.filter || link.dataset.filterLink))
);

/* ---------- Cart ---------- */
const cartCountEl = $("#cartCount");
const wishCountEl = $("#wishCount");

function updateBadge(el, n) {
  el.textContent = n;
  el.classList.toggle("show", n > 0);
  el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
}

const cartTotal = () => cart.reduce((s, i) => s + i.qty * findProduct(i.id).price, 0);

function renderCart() {
  const itemsEl = $("#cartItems");
  updateBadge(cartCountEl, cart.reduce((s, i) => s + i.qty, 0));
  $("#cartTotal").textContent = money(cartTotal());

  if (!cart.length) {
    itemsEl.innerHTML = `<div class="drawer__empty"><span>🛋️</span>Your cart is empty.<br/>Find something you'll love.</div>`;
    return;
  }
  itemsEl.innerHTML = cart.map(({ id, qty }) => {
    const p = findProduct(id);
    return `
      <div class="cart-item">
        <img src="${IMG(p.img, 200)}" alt="${p.name}" />
        <div>
          <h4>${p.name}</h4>
          <small>${money(p.price)}</small><br/>
          <div class="cart-item__qty">
            <button data-dec="${id}" aria-label="Decrease">−</button><span>${qty}</span><button data-inc="${id}" aria-label="Increase">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-remove="${id}">Remove</button>
      </div>`;
  }).join("");
}

function addToCart(id, qty = 1) {
  const item = cart.find((i) => i.id === id);
  item ? (item.qty += qty) : cart.push({ id, qty });
  store.set("teak-cart", cart);
  renderCart();
  toast(`✓ ${findProduct(id).name} added to cart`);
}

$("#cartItems").addEventListener("click", (e) => {
  const t = e.target;
  const id = +(t.dataset.inc || t.dataset.dec || t.dataset.remove);
  if (!id) return;
  const item = cart.find((i) => i.id === id);
  if (t.dataset.inc) item.qty++;
  if (t.dataset.dec) item.qty--;
  if (t.dataset.remove || item.qty < 1) cart = cart.filter((i) => i.id !== id);
  store.set("teak-cart", cart);
  renderCart();
});

const drawer = $("#cartDrawer");
const overlay = $("#overlay");
const openCart = () => { drawer.classList.add("open"); overlay.classList.add("show"); document.body.classList.add("no-scroll"); };
const closeCart = () => { drawer.classList.remove("open"); overlay.classList.remove("show"); document.body.classList.remove("no-scroll"); };
$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// Checkout = send the order to the shop on WhatsApp
$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return toast("Your cart is empty");
  const lines = cart.map(({ id, qty }) => {
    const p = findProduct(id);
    return `• ${p.name} × ${qty} — ${money(p.price * qty)}`;
  });
  const msg = `Hi The Teak, I'd like to place an order:\n\n${lines.join("\n")}\n\nSubtotal: ${money(cartTotal())}\n\nName:\nDelivery address:`;
  window.open(waLink(msg), "_blank", "noopener");
});

/* ---------- Wishlist ---------- */
function toggleWish(id, btn) {
  wishlist = wishlist.includes(id) ? wishlist.filter((x) => x !== id) : [...wishlist, id];
  store.set("teak-wish", wishlist);
  btn.classList.toggle("active", wishlist.includes(id));
  updateBadge(wishCountEl, wishlist.length);
  toast(wishlist.includes(id) ? "♥ Saved to wishlist" : "Removed from wishlist");
}
$("#wishBtn").addEventListener("click", () => {
  if (!wishlist.length) return toast("Your wishlist is empty — tap ♥ on any piece");
  const names = wishlist.map((id) => findProduct(id).name);
  toast(`♥ ${names.length} saved: ${names.slice(0, 2).join(", ")}${names.length > 2 ? "…" : ""}`);
});

/* ---------- Quick view modal ---------- */
const modal = $("#modal");
let modalProduct = null;
let modalQty = 1;

function openModal(id) {
  const p = findProduct(id);
  modalProduct = p; modalQty = 1;
  $("#modalImg").src = IMG(p.img, 1000);
  $("#modalImg").alt = p.name;
  $("#modalCat").textContent = catLabel[p.cat];
  $("#modalTitle").textContent = p.name;
  $("#modalPrice").innerHTML = money(p.price) + (p.old ? `<del>${money(p.old)}</del>` : "");
  $("#modalDesc").textContent = p.desc;
  $("#modalMeta").innerHTML = `<strong>${p.wood}</strong><br/>${p.size}`;
  $("#modalSwatches").innerHTML = p.colors
    .map((c, i) => `<button style="background:${c}" class="${i === 0 ? "active" : ""}" aria-label="Finish option ${i + 1}"></button>`)
    .join("");
  $("#qtyVal").textContent = modalQty;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!drawer.classList.contains("open")) document.body.classList.remove("no-scroll");
}
$("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
$("#modalSwatches").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  $$("#modalSwatches button").forEach((b) => b.classList.toggle("active", b === e.target));
});
$("#qtyPlus").addEventListener("click", () => ($("#qtyVal").textContent = ++modalQty));
$("#qtyMinus").addEventListener("click", () => ($("#qtyVal").textContent = modalQty = Math.max(1, modalQty - 1)));
$("#modalAdd").addEventListener("click", () => { addToCart(modalProduct.id, modalQty); closeModal(); });
$("#modalWa").addEventListener("click", () => {
  const p = modalProduct;
  window.open(waLink(`Hi The Teak, I'm interested in the ${p.name} (${money(p.price)}). Is it available?`), "_blank", "noopener");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeCart(); closeMenu(); }
});

/* Product card buttons (event delegation) */
productsEl.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  const view = e.target.closest("[data-view]");
  const wish = e.target.closest("[data-wish]");
  if (add) addToCart(+add.dataset.add);
  if (view) openModal(+view.dataset.view);
  if (wish) toggleWish(+wish.dataset.wish, wish);
});

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- Hero slider ---------- */
(() => {
  const imgs = $$("#heroImages img");
  const dotsEl = $("#heroDots");
  const parts = { eyebrow: $("#heroEyebrow"), title: $("#heroTitle"), text: $("#heroText") };
  Object.values(parts).forEach((el) => el.classList.add("swap"));
  dotsEl.innerHTML = HERO_SLIDES.map((_, i) => `<button aria-label="Show slide ${i + 1}"></button>`).join("");
  const dots = $$("button", dotsEl);
  let idx = 0, timer;

  function show(i) {
    idx = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    imgs.forEach((img, j) => img.classList.toggle("active", j === idx));
    dots.forEach((d, j) => d.classList.toggle("active", j === idx));
    Object.values(parts).forEach((el) => el.classList.add("out"));
    setTimeout(() => {
      const s = HERO_SLIDES[idx];
      parts.eyebrow.textContent = s.eyebrow;
      parts.title.innerHTML = s.title;
      parts.text.textContent = s.text;
      Object.values(parts).forEach((el) => el.classList.remove("out"));
    }, 450);
    clearInterval(timer);
    timer = setInterval(() => show(idx + 1), 6500);
  }
  dots.forEach((d, i) => d.addEventListener("click", () => show(i)));
  dots[0].classList.add("active");
  timer = setInterval(() => show(idx + 1), 6500);
})();

/* ---------- Header, mobile menu, active link, back-to-top ---------- */
const header = $("#header");
const navMenu = $("#navMenu");
const toTop = $("#toTop");
const closeMenu = () => navMenu.classList.remove("open");

$("#navToggle").addEventListener("click", () => navMenu.classList.toggle("open"));
$$(".nav__link").forEach((l) => l.addEventListener("click", closeMenu));
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const navTargets = $$(".nav__link").map((l) => $(l.getAttribute("href"))).filter(Boolean);
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 30);
  toTop.classList.toggle("show", y > 700);

  let current = "home";
  navTargets.forEach((s) => { if (y >= s.offsetTop - 160) current = s.id; });
  $$(".nav__link").forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Scroll reveal + counters ---------- */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    $$("[data-count]", entry.target).forEach(countUp);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObs.observe(el);
});

function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1600;
  const step = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Testimonials slider ---------- */
const track = $("#sliderTrack");
const slides = $$(".testimonial", track);
const dotsEl = $("#sliderDots");
let slideIdx = 0;
let slideTimer;

dotsEl.innerHTML = slides.map((_, i) => `<button aria-label="Go to slide ${i + 1}"></button>`).join("");
const dots = $$("button", dotsEl);

function goTo(i) {
  slideIdx = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIdx * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle("active", j === slideIdx));
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goTo(slideIdx + 1), 6000);
}
dots.forEach((d, i) => d.addEventListener("click", () => goTo(i)));
$("#prevSlide").addEventListener("click", () => goTo(slideIdx - 1));
$("#nextSlide").addEventListener("click", () => goTo(slideIdx + 1));
goTo(0);

/* ---------- Sale countdown (rolling 7 days) ---------- */
const saleEnd = (() => {
  let end = store.get("teak-sale-end", 0);
  if (!end || end < Date.now()) { end = Date.now() + 7 * 864e5; store.set("teak-sale-end", end); }
  return end;
})();
const pad = (n) => String(n).padStart(2, "0");
function tick() {
  const diff = Math.max(0, saleEnd - Date.now());
  $("#cdDays").textContent = pad(Math.floor(diff / 864e5));
  $("#cdHours").textContent = pad(Math.floor((diff / 36e5) % 24));
  $("#cdMins").textContent = pad(Math.floor((diff / 6e4) % 60));
  $("#cdSecs").textContent = pad(Math.floor((diff / 1e3) % 60));
}
tick();
setInterval(tick, 1000);

/* ---------- Newsletter ---------- */
$("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#newsletterEmail");
  const msg = $("#formMsg");
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  msg.className = "form-msg " + (ok ? "ok" : "err");
  msg.textContent = ok ? "Thank you for joining The Teak family!" : "Please enter a valid email address.";
  if (ok) input.value = "";
});

/* ---------- Init ---------- */
$("#year").textContent = new Date().getFullYear();
renderCart();
updateBadge(wishCountEl, wishlist.length);
