const products = [
  { size: "180x68", bestSeller: false, imageBase: "p1" },
  { size: "201x201", bestSeller: true, imageBase: "p2" },
  { size: "204x70", bestSeller: false, imageBase: "p3" },
  { size: "208x65", bestSeller: false, imageBase: "p4" },
  { size: "216x71", bestSeller: true, imageBase: "p5" },
  { size: "236x71", bestSeller: false, imageBase: "p6" },
  { size: "240x240", bestSeller: true, imageBase: "p7" },
];

const reviews = [
  {
    name: "Arben K.",
    stars: 5,
    text: {
      mk: "Одлична комуникација и премиум квалитет. Нашата тераса сега изгледа како хотелско спа.",
      sq: "Komunikim i shkëlqyer dhe cilësi premium. Tarraca jonë tani duket si spa hoteli.",
      en: "Excellent communication and premium quality. Our terrace now feels like a boutique spa.",
    },
  },
  {
    name: "Elena M.",
    stars: 5,
    text: {
      mk: "Брза достава во Скопје, лесно поставување и неверојатен комфорт за целото семејство.",
      sq: "Dërgesë e shpejtë në Shkup, montim i lehtë dhe rehati e jashtëzakonshme për familjen.",
      en: "Fast delivery in Skopje, easy setup, and incredible comfort for the family.",
    },
  },
  {
    name: "David T.",
    stars: 5,
    text: {
      mk: "Тимот не советуваше професионално и многу брзо. Максимална доверба.",
      sq: "Ekipi na këshilloi në mënyrë profesionale dhe shumë shpejt. Besim i plotë.",
      en: "The team guided us professionally and quickly. Very trustworthy service.",
    },
  },
];

const galleryItems = [
  { type: "video", src: "images/v1.mp4", poster: "images/h2.jpg" },
  { type: "video", src: "images/v2.mp4", poster: "images/h3.jpg" },
  { type: "image", src: "images/h1.jpg" },
  { type: "image", src: "images/h2.jpg" },
  { type: "image", src: "images/h3.jpg" },
  { type: "image", src: "images/p1.jpg" },
];

const i18n = {
  mk: {
    navAbout: "За нас",
    navModels: "Модели",
    navClients: "Клиенти",
    navGallery: "Галерија",
    navContact: "Контакт",
    heroEyebrow: "Луксузен велнес во Скопје",
    heroTitle: "Трансформирајте го домот во луксузно спа искуство",
    heroSub: "Премиум надувувачки надворешни џакузи и спа за модерни домови низ Северна Македонија.",
    ctaContact: "Контактирајте не",
    ctaModels: "Види модели",
    badgeClients: "Задоволни клиенти",
    badgePremiumStrong: "Премиум",
    badgeQuality: "Квалитет",
    badgeFastStrong: "Брза",
    badgeDelivery: "Достава достапна",
    aboutEyebrow: "За Spa Macedonia",
    aboutTitle: "Каде комфорот се среќава со престижот",
    aboutP1: "Лоцирани во Скопје, им помагаме на семејства и сопственици да создадат домашен луксузен спа агол.",
    aboutP2: "Комуницираме на албански, македонски, англиски, турски и германски за целосна поддршка од избор до инсталација.",
    aboutCardTitle: "Создадено за модерен живот",
    aboutLi1: "Комфорт, велнес и длабока релаксација",
    aboutLi2: "Елегантни производи со премиум изработка",
    aboutLi3: "Сигурно водство од избор до поставување",
    modelsEyebrow: "Модели",
    modelsTitle: "Пронајдете ја идеалната димензија",
    testEyebrow: "Задоволство на клиенти",
    testTitle: "1000+ задоволни клиенти",
    galleryEyebrow: "Луксузна галерија",
    galleryTitle: "Атмосфера на релаксација",
    whyEyebrow: "Зошто ние",
    whyTitle: "Доверливо премиум искуство",
    f1t: "Премиум квалитет",
    f1d: "Издржливи материјали и висока удобност.",
    f2t: "Брза комуникација",
    f2d: "Брз одговор на секое барање.",
    f3t: "Повеќејазична поддршка",
    f3d: "Албански, македонски, англиски, турски, германски.",
    f4t: "Достава и инсталација",
    f4d: "Едноставен процес од нарачка до поставување.",
    f5t: "1000+ доверливи клиенти",
    f5d: "Докажан квалитет низ Северна Македонија.",
    f6t: "Енергетска ефикасност",
    f6d: "Создадено за практична долгорочна употреба.",
    contactEyebrow: "Контакт",
    contactTitle: "Започнете го вашето домашно спа патување",
    contactP: "Контактирајте не за препорака на најдобриот модел за вашиот простор.",
    phoneLabel: "Телефон:",
    locationLabel: "Локација:",
    locationValue: "Скопје, Северна Македонија",
    whatsappBtn: "WhatsApp Сега",
    formName: "Име и презиме",
    formPhone: "Телефон",
    formMessage: "Порака",
    formSubmit: "Испрати барање",
    footerCopy: "&copy; <span id='year'></span> Spa Macedonia. Сите права се задржани.",
    floatingCall: "Јави се",
    modalDimensionsLabel: "Димензии:",
    modalPriceLabel: "Цена:",
    modalRequestBtn: "Побарај понуда",
    requestOffer: "Побарај понуда",
    bestSeller: "Најпродаван",
    dimensions: "Димензии",
    price: "Цена",
    onRequest: "По барање",
    verifiedClient: "Потврден клиент",
  },
  sq: {
    navAbout: "Rreth nesh", navModels: "Modelet", navClients: "Klientët", navGallery: "Galeria", navContact: "Kontakt",
    heroEyebrow: "Wellness luksoz në Shkup", heroTitle: "Shndërroni shtëpinë në një përvojë luksoze spa", heroSub: "Xhakuzi dhe spa inflatable premium për shtëpi moderne në Maqedoninë e Veriut.",
    ctaContact: "Na kontaktoni", ctaModels: "Shiko modelet", badgeClients: "Klientë të kënaqur", badgePremiumStrong: "Premium", badgeQuality: "Cilësi", badgeFastStrong: "E shpejtë", badgeDelivery: "Dërgesa e disponueshme",
    aboutEyebrow: "Rreth Spa Macedonia", aboutTitle: "Aty ku komoditeti takon prestigjin", aboutP1: "Me seli në Shkup, krijojmë këndin tuaj privat të relaksit dhe luksit.", aboutP2: "Komunikojmë në shqip, maqedonisht, anglisht, turqisht dhe gjermanisht.",
    aboutCardTitle: "Projektuar për jetë moderne", aboutLi1: "Komoditet, wellness dhe relaks i thellë", aboutLi2: "Produkte elegante me përfundim premium", aboutLi3: "Udhëzim i sigurt nga zgjedhja te instalimi",
    modelsEyebrow: "Modelet", modelsTitle: "Gjeni përmasën ideale spa", testEyebrow: "Kënaqësia e klientëve", testTitle: "1000+ klientë të kënaqur",
    galleryEyebrow: "Galeri luksoze", galleryTitle: "Atmosferë relaksi", whyEyebrow: "Pse ne", whyTitle: "Përvojë premium e besueshme",
    f1t: "Cilësi premium", f1d: "Materiale të qëndrueshme dhe rehati e lartë.", f2t: "Komunikim i shpejtë", f2d: "Përgjigje e shpejtë për çdo kërkesë.", f3t: "Mbështetje shumëgjuhëshe", f3d: "Shqip, maqedonisht, anglisht, turqisht, gjermanisht.",
    f4t: "Dërgesë dhe instalim", f4d: "Proces i thjeshtë nga porosia te vendosja.", f5t: "1000+ klientë besnikë", f5d: "Reputacion i provuar në Maqedoninë e Veriut.", f6t: "Efikas në energji", f6d: "Projektuar për përdorim praktik afatgjatë.",
    contactEyebrow: "Kontakt", contactTitle: "Nisni udhëtimin tuaj spa në shtëpi", contactP: "Kontaktoni ekipin tonë për modelin ideal të hapësirës suaj.",
    phoneLabel: "Telefoni:", locationLabel: "Lokacioni:", locationValue: "Shkup, Maqedonia e Veriut", whatsappBtn: "WhatsApp Tani", formName: "Emri i plotë", formPhone: "Telefoni", formMessage: "Mesazhi", formSubmit: "Dërgo kërkesë",
    footerCopy: "&copy; <span id='year'></span> Spa Macedonia. Të gjitha të drejtat e rezervuara.", floatingCall: "Telefono", modalDimensionsLabel: "Përmasat:", modalPriceLabel: "Çmimi:", modalRequestBtn: "Kërko ofertë",
    requestOffer: "Kërko ofertë", bestSeller: "Më i shituri", dimensions: "Përmasat", price: "Çmimi", onRequest: "Sipas kërkesës", verifiedClient: "Klient i verifikuar",
  },
  en: {
    navAbout: "About", navModels: "Models", navClients: "Clients", navGallery: "Gallery", navContact: "Contact",
    heroEyebrow: "Luxury Wellness in Skopje", heroTitle: "Transform Your Home Into a Luxury Spa Experience", heroSub: "Premium inflatable outdoor jacuzzis and spas for modern homes across North Macedonia.",
    ctaContact: "Contact Us", ctaModels: "View Models", badgeClients: "Happy Clients", badgePremiumStrong: "Premium", badgeQuality: "Quality", badgeFastStrong: "Fast", badgeDelivery: "Delivery Available",
    aboutEyebrow: "About Spa Macedonia", aboutTitle: "Where Comfort Meets Prestige", aboutP1: "Based in Skopje, we help families and homeowners create a private luxury spa atmosphere.", aboutP2: "We communicate in Albanian, Macedonian, English, Turkish, and German.",
    aboutCardTitle: "Designed for Modern Living", aboutLi1: "Comfort, wellness, and deep relaxation", aboutLi2: "Elegant products with premium finishing", aboutLi3: "Trusted guidance from selection to setup",
    modelsEyebrow: "Product Models", modelsTitle: "Find Your Ideal Spa Size", testEyebrow: "Client Satisfaction", testTitle: "1000+ Satisfied Clients",
    galleryEyebrow: "Luxury Gallery", galleryTitle: "Relaxation Atmosphere", whyEyebrow: "Why Choose Us", whyTitle: "Trusted Premium Experience",
    f1t: "Premium Quality", f1d: "Durable materials and elevated comfort.", f2t: "Fast Communication", f2d: "Quick response to every inquiry.", f3t: "Multilingual Support", f3d: "Albanian, Macedonian, English, Turkish, German.",
    f4t: "Delivery & Installation", f4d: "Simple process from order to setup.", f5t: "Trusted by 1000+ Clients", f5d: "Proven quality across North Macedonia.", f6t: "Energy Efficient", f6d: "Designed for practical long-term use.",
    contactEyebrow: "Contact", contactTitle: "Start Your Home Spa Journey", contactP: "Speak with our team for the best model recommendation for your space.",
    phoneLabel: "Phone:", locationLabel: "Location:", locationValue: "Skopje, North Macedonia", whatsappBtn: "WhatsApp Now", formName: "Full Name", formPhone: "Phone", formMessage: "Message", formSubmit: "Send Request",
    footerCopy: "&copy; <span id='year'></span> Spa Macedonia. All rights reserved.", floatingCall: "Call Now", modalDimensionsLabel: "Dimensions:", modalPriceLabel: "Price:", modalRequestBtn: "Request Offer",
    requestOffer: "Request Offer", bestSeller: "Best Seller", dimensions: "Dimensions", price: "Price", onRequest: "On Request", verifiedClient: "Verified Client",
  },
};

const productGrid = document.getElementById("productGrid");
const galleryGrid = document.getElementById("galleryGrid");
const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalMainImage = document.getElementById("modalMainImage");
const modalGallery = document.getElementById("modalGallery");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalSize = document.getElementById("modalSize");
const modalPrice = document.getElementById("modalPrice");
const reviewCard = document.getElementById("reviewCard");
const prevReview = document.getElementById("prevReview");
const nextReview = document.getElementById("nextReview");
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");
const langButtons = document.querySelectorAll(".lang-btn");
let currentLang = "mk";

function createStars(count) {
  return "★".repeat(count) + "☆".repeat(5 - count);
}

function renderProducts() {
  const t = i18n[currentLang];
  productGrid.innerHTML = products
    .map(
      (p, i) => `
      <article class="product-card reveal">
        ${p.bestSeller ? `<span class="badge">${t.bestSeller}</span>` : ""}
        <img src="images/${p.imageBase}.jpg" alt="Spa model ${p.size}" loading="lazy" />
        <div class="product-info">
          <h3>Spa Model ${p.size}</h3>
          <p><strong>${t.dimensions}:</strong> ${p.size}</p>
          <p><strong>${t.price}:</strong> ${t.onRequest}</p>
          <button class="btn btn-secondary model-btn" data-index="${i}">${t.requestOffer}</button>
        </div>
      </article>`
    )
    .join("");
}

function openProductModal(product) {
  const t = i18n[currentLang];
  const images = [`images/${product.imageBase}.jpg`, `images/${product.imageBase}-2.jpg`, `images/${product.imageBase}-3.jpg`];
  modalTitle.textContent = `Spa Model ${product.size}`;
  modalDesc.textContent = t.heroSub;
  modalSize.textContent = product.size;
  modalPrice.textContent = t.onRequest;
  modalMainImage.src = images[0];
  modalGallery.innerHTML = images
    .map(
      (img) =>
        `<button type="button"><img src="${img}" alt="Spa model ${product.size}" loading="lazy" /></button>`
    )
    .join("");

  modalGallery.querySelectorAll("button").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      modalMainImage.src = images[idx];
    });
  });

  productModal.showModal();
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems
    .map((item, index) => {
      if (item.type === "video") {
        return `<article class="gallery-item gallery-video">
          <video controls muted loop playsinline preload="metadata" poster="${item.poster}">
            <source src="${item.src}" type="video/mp4" />
          </video>
        </article>`;
      }
      return `<article class="gallery-item"><img src="${item.src}" alt="Luxury spa ambiance ${index + 1}" loading="lazy" /></article>`;
    })
    .join("");
}

let reviewIndex = 0;
function renderReview(index) {
  const t = i18n[currentLang];
  const r = reviews[index];
  reviewCard.innerHTML = `
    <p>${createStars(r.stars)}</p>
    <p>"${r.text[currentLang]}"</p>
    <p><strong>${r.name}</strong> • ${t.verifiedClient}</p>
  `;
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key || !dict[key]) return;
    if (key === "footerCopy") {
      el.innerHTML = dict[key];
      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = String(new Date().getFullYear());
      return;
    }
    el.textContent = dict[key];
  });
  document.getElementById("modalDimensionsLabel").textContent = dict.modalDimensionsLabel;
  document.getElementById("modalPriceLabel").textContent = dict.modalPriceLabel;
  document.getElementById("modalRequestBtn").textContent = dict.modalRequestBtn;
  renderProducts();
  renderReview(reviewIndex);
  initReveal();
}

renderProducts();
renderGallery();
renderReview(reviewIndex);
initReveal();
applyLanguage("mk");

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target instanceof HTMLElement && target.classList.contains("model-btn")) {
    const index = Number(target.dataset.index);
    openProductModal(products[index]);
  }
});

closeModal.addEventListener("click", () => productModal.close());
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) productModal.close();
});

nextReview.addEventListener("click", () => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  renderReview(reviewIndex);
});
prevReview.addEventListener("click", () => {
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  renderReview(reviewIndex);
});

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("open");
});

siteNav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (!lang) return;
    langButtons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    applyLanguage(lang);
  });
});

document.getElementById("year").textContent = String(new Date().getFullYear());
