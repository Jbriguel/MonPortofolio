'use strict';

// Utilitaire de bascule de classe 'active'
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

// ================================
// SIDEBAR TOGGLE (Mobile)
// ================================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// ================================
// PROJET MODAL POPUP
// ================================
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalOverlay = document.querySelector("[data-project-modal-overlay]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close]");

const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalCat = document.querySelector("[data-project-modal-cat]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalTags = document.querySelector("[data-project-modal-tags]");
const projectModalDesc = document.querySelector("[data-project-modal-desc]");
const projectModalLink = document.querySelector("[data-project-modal-link]");
const projectModalBtnText = document.querySelector("[data-project-modal-btn-text]");
const projectModalGallery = document.querySelector("[data-project-modal-gallery]");

const openProjectModal = function (projectItem) {
  if (!projectModalContainer) return;

  const title = projectItem.dataset.projectTitle || "Projet";
  const cat = projectItem.dataset.projectCategory || "Applications";
  const imgSrc = projectItem.dataset.projectImg || "";
  const gallery = projectItem.dataset.projectGallery || "";
  const desc = projectItem.dataset.projectDesc || "";
  const tags = projectItem.dataset.projectTags || "";
  const link = projectItem.dataset.projectLink || "#";
  const linkText = projectItem.dataset.projectLinkText || ((typeof currentLang !== 'undefined' && currentLang === 'fr') ? "Voir le projet" : "View project");

  if (projectModalImg) {
    projectModalImg.style.opacity = "1";
    projectModalImg.src = imgSrc;
    projectModalImg.alt = title;
  }
  if (projectModalCat) projectModalCat.textContent = cat;
  if (projectModalTitle) projectModalTitle.textContent = title;
  if (projectModalDesc) projectModalDesc.textContent = desc;

  // Render tags
  if (projectModalTags) {
    projectModalTags.innerHTML = "";
    if (tags) {
      const tagList = tags.split(",").map(t => t.trim()).filter(Boolean);
      tagList.forEach(tag => {
        const span = document.createElement("span");
        span.className = "project-tag-pill";
        span.textContent = tag;
        projectModalTags.appendChild(span);
      });
    }
  }

  // Render interactive gallery thumbnails
  if (projectModalGallery) {
    projectModalGallery.innerHTML = "";
    let galleryList = [];
    if (gallery) {
      galleryList = gallery.split(",").map(t => t.trim()).filter(Boolean);
    } else if (imgSrc) {
      galleryList = [imgSrc];
    }

    if (galleryList.length > 1) {
      projectModalGallery.style.display = "flex";
      galleryList.forEach((thumbSrc, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `project-modal-thumb ${index === 0 ? "active" : ""}`;
        btn.setAttribute("aria-label", `Afficher vue ${index + 1}`);

        const img = document.createElement("img");
        img.src = thumbSrc;
        img.alt = `${title} miniature ${index + 1}`;
        img.loading = "lazy";
        btn.appendChild(img);

        btn.addEventListener("click", () => {
          if (projectModalImg && projectModalImg.getAttribute("src") !== thumbSrc) {
            projectModalImg.style.opacity = "0.2";
            setTimeout(() => {
              projectModalImg.src = thumbSrc;
              projectModalImg.style.opacity = "1";
            }, 100);
          }
          projectModalGallery.querySelectorAll(".project-modal-thumb").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        });

        projectModalGallery.appendChild(btn);
      });
    } else {
      projectModalGallery.style.display = "none";
    }
  }

  // Link button
  if (projectModalLink) {
    projectModalLink.href = link;
    if (projectModalBtnText) projectModalBtnText.textContent = linkText;
  }

  projectModalContainer.classList.add("active");
  projectModalContainer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeProjectModal = function () {
  if (!projectModalContainer) return;
  projectModalContainer.classList.remove("active");
  projectModalContainer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

// Attachement de l'événement clic sur chaque carte projet
const projectItems = document.querySelectorAll("[data-filter-item]");
projectItems.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    openProjectModal(this);
  });
});

if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", closeProjectModal);
}
if (projectModalOverlay) {
  projectModalOverlay.addEventListener("click", closeProjectModal);
}

// Fermeture avec la touche Échap
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && projectModalContainer && projectModalContainer.classList.contains("active")) {
    closeProjectModal();
  }
});

// ================================
// FILTRAGE PORTFOLIO
// ================================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

const filterFunc = function (selectedValue) {
  const normalized = selectedValue.trim().toLowerCase();

  for (let i = 0; i < projectItems.length; i++) {
    const itemCat = (projectItems[i].dataset.category || "").toLowerCase();
    const categories = itemCat.split(",").map(c => c.trim());

    if (normalized === "all" || normalized === "tous") {
      projectItems[i].classList.add("active");
    } else if (categories.includes(normalized)) {
      projectItems[i].classList.add("active");
    } else {
      projectItems[i].classList.remove("active");
    }
  }
};

// Sélection mobile
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filtre boutons grand écran
let lastClickedBtn = filterBtns[0];

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// ================================
// VALIDATION DU FORMULAIRE CONTACT
// ================================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// ================================
// NAVIGATION ENTRE LES PAGES
// ================================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.dataset.pageLink || this.innerText.toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// ================================
// GESTION DU THÈME (Blanc Bleuté / Sombre)
// ================================
const themeToggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme") || "light";

if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  if (themeToggleBtn) themeToggleBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
} else {
  document.documentElement.removeAttribute("data-theme");
  if (themeToggleBtn) themeToggleBtn.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("portfolio-theme", "light");
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("portfolio-theme", "dark");
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
  }
}
window.toggleTheme = toggleTheme;

