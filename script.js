// Script.js - Data-Driven Portfolio Rendering
const BASE_URL = "https://backend-production-e830.up.railway.app/api";

async function apiRequest(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Could not fetch ${endpoint}:`, error);
    return null;
  }
}
async function loadBio() {
  const data = await apiRequest("bio");
  if (data) {
    return data.results[0];
  }
}
async function loadEducation() {
  const data = await apiRequest("education");
  if (data) return data.results;
}

async function loadSkills() {
  const data = await apiRequest("skills/grouped");
  if (data) return data;
}

async function loadProjects() {
  const data = await apiRequest("projects");
  if (data) return data.results;
}
async function loadExperience() {
  const data = await apiRequest("experience");
  if (data) {
    return data.results;
  }
}
// Render Navigation
function renderNavigation() {
  const navBrand = document.getElementById("nav-brand");
  const ul = document.getElementById("nav-menu");

  const logo = document.createElement("img");
  logo.src = portfolioData.navigation.brandLogo;
  logo.alt = "Portfolio Logo";
  logo.className = "nav-logo";

  navBrand.innerHTML = "";
  navBrand.appendChild(logo);

  portfolioData.navigation.menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

// Render Bio/Hero Section
async function renderBio() {
  //
  const bioData = await loadBio();
  const firstName = bioData.name.split(" ")[0];
  const jobTitleParts = bioData.job_title.split(" ");
  const titlePart1 = jobTitleParts[0]; // "Web"
  const titlePart2 = jobTitleParts.slice(1).join(" ");
  const heroGreeting = document.getElementById("hero-greeting");
  const heroBio = document.getElementById("hero-bio");
  const heroSocial = document.getElementById("hero-social");
  const heroImg = document.getElementById("hero-img");
  const greeting = `HEY! I'm ${firstName},<br><span style='font-size: 48px; color: #2d3748;'>${titlePart1}</span> ${titlePart2}`;
  heroGreeting.innerHTML = greeting;
  heroBio.textContent = bioData.professional_description;
  heroImg.src = bioData.profile_picture;
  heroImg.alt = bioData.name;

  // Render social links
  portfolioData.bio.socialLinks.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.url;
    a.className = "social-icon";
    a.textContent = social.icon;
    heroSocial.appendChild(a);
  });
}

// Render Education Section
async function renderEducation() {
  const eduData = await loadEducation();
  console.log("this is the edu data ", eduData);
  const specializationCards = document.getElementById("specialization-cards");
  const toolsContainer = document.querySelector(".education-tools");

  // 1. Render Floating Images
  toolsContainer.innerHTML = "";
  const myImages = [
    { src: "./canva.webp", class: "tool-canva" },
    { src: "./code.webp", class: "tool-code" },
    { src: "./text.webp", class: "tool-text" },
    { src: "./heart.webp", class: "tool-heart" },
    { src: "./ladyimage.webp", class: "tool-lady" },
  ];

  myImages.forEach((imgData) => {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.className = `tool-icon ${imgData.class}`;
    toolsContainer.appendChild(img);
  });

  if (!specializationCards || !eduData) return;

  // 2. Define Gradient Pairs
  const colorPairs = [
    ["#8b3dff", "#e7dbff"], // Pattern 1: Purple
    ["#b61629", "#ffd6d8"], // Pattern 2: Red
    ["#008009", "#c3eac4"], // Pattern 3: Green
  ];

  specializationCards.innerHTML = "";

  // 3. Render Education Cards with Dynamic Backgrounds
  eduData.forEach((edu, index) => {
    const card = document.createElement("div");
    card.className = "specialization-card";

    // Pick colors based on index (cycles every 3 cards)
    const pair = colorPairs[index % colorPairs.length];
    card.style.background = `linear-gradient(180deg, ${pair[0]} 0%, ${pair[1]} 100%)`;

    const number = document.createElement("div");
    number.className = "specialization-number";
    number.textContent = (index + 1).toString().padStart(2, "0");

    const title = document.createElement("h3");
    title.textContent = `${edu.degree_name} at ${edu.institution}`;

    const description = document.createElement("p");
    description.textContent = edu.description;

    const dateSpan = document.createElement("small");
    dateSpan.style.display = "block";
    dateSpan.style.marginTop = "10px";
    dateSpan.style.opacity = "0.7";
    dateSpan.textContent = `Completed: ${new Date(edu.end_date).getFullYear()}`;

    card.appendChild(number);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dateSpan);

    specializationCards.appendChild(card);
  });
}
// Render Skills Section
async function renderSkills() {
  const skillsData = await loadSkills();
  const technicalSkills = document.getElementById("technical-skills");
  const professionalSkills = document.getElementById("professional-skills");

  technicalSkills.innerHTML = "";
  professionalSkills.innerHTML = "";

  skillsData.technical_skills.forEach((skill) => {
    const skillTag = document.createElement("div");
    skillTag.className = "technical_skills-tag";
    skillTag.textContent = skill.name;
    technicalSkills.appendChild(skillTag);
  });

  skillsData.professional_skills.forEach((skill) => {
    const skillTag = document.createElement("div");
    skillTag.className = "professional_skills-tag";
    skillTag.textContent = skill.name;
    professionalSkills.appendChild(skillTag);
  });
}

// Render Projects Section
async function renderProjects() {
  const projectsData = await loadProjects();
  const experienceData = await loadExperience();
  console.log("experienceData Data Loaded:", experienceData);

  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid || !projectsData) return;

  projectsGrid.innerHTML = "";

  projectsData.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    // --- FIXED IMAGE RENDERING ---
    const projectImageContainer = document.createElement("div");
    projectImageContainer.className = "project-image";

    // Create the image element
    const img = document.createElement("img");
    img.src = project.image; // Using the URL from your API
    img.alt = project.name;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover"; // Maintains aspect ratio

    // Optional: Keep the number overlay if your design uses it
    const numberOverlay = document.createElement("span");
    numberOverlay.className = "project-number";
    numberOverlay.textContent = (index + 1).toString().padStart(2, "0");
    numberOverlay.style.position = "absolute";

    projectImageContainer.appendChild(img);
    // projectImageContainer.appendChild(numberOverlay);
    // -----------------------------

    const projectContent = document.createElement("div");
    projectContent.className = "project-content";

    const title = document.createElement("h3");
    title.textContent = project.name; // Fixed: project instead of projectsData

    const date = document.createElement("div");
    date.className = "date";
    date.textContent = new Date(project.end_date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

    const type = document.createElement("span");
    type.className = "type";
    type.textContent = project.project_type;

    const description = document.createElement("p");
    description.textContent = project.description;

    const technologies = document.createElement("div");
    technologies.className = "project-technologies";

    // Check if skills_used exists before iterating
    if (project.skills_used) {
      project.skills_used.forEach((tech) => {
        const techTag = document.createElement("span");
        techTag.className = "tech-tag";
        techTag.textContent = tech;
        technologies.appendChild(techTag);
      });
    }

    projectContent.appendChild(title);
    projectContent.appendChild(date);
    projectContent.appendChild(type);
    projectContent.appendChild(description);
    projectContent.appendChild(technologies);

    projectCard.appendChild(projectImageContainer);
    projectCard.appendChild(projectContent);

    projectsGrid.appendChild(projectCard);
  });
}

// Render Reviews Section
let currentReviewIndex = 0;

function renderReviews() {
  const reviewsGrid = document.getElementById("reviews-grid");
  reviewsGrid.innerHTML = "";

  portfolioData.reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    reviewCard.innerHTML = `
            <img src="${review.image}" alt="${review.name}">
            <p>${review.text}</p>
            <h4>${review.name}</h4>
            <div class="role">${review.role}</div>
        `;

    reviewsGrid.appendChild(reviewCard);
  });

  updateSlider();
}

function updateSlider() {
  const reviewsGrid = document.getElementById("reviews-grid");
  const card = document.querySelector(".review-card");

  if (!card) return;

  const cardWidth = card.offsetWidth + 35; // card + gap
  reviewsGrid.style.transform = `translateX(-${currentReviewIndex * cardWidth}px)`;
}
document.getElementById("next-review").addEventListener("click", () => {
  const maxIndex = portfolioData.reviews.length - 3;

  if (currentReviewIndex < maxIndex) {
    currentReviewIndex++;
    updateSlider();
  }
});

document.getElementById("prev-review").addEventListener("click", () => {
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
    updateSlider();
  }
});

// Render Footer
function renderFooter() {
  const footerCtaTitle = document.getElementById("footer-cta-title");
  const footerButtons = document.getElementById("footer-buttons");
  const footerCardTitle = document.getElementById("footer-card-title");
  const footerCardText = document.getElementById("footer-card-text");
  const footerContactBtn = document.getElementById("footer-contact-btn");
  const footerText = document.getElementById("footer-text");

  footerCtaTitle.textContent = portfolioData.footer.ctaTitle;

  portfolioData.footer.buttons.forEach((button) => {
    const btn = document.createElement("button");
    btn.className = "footer-btn";
    btn.textContent = button.text;
    footerButtons.appendChild(btn);
  });

  footerCardTitle.textContent = portfolioData.footer.card.title;
  footerCardText.textContent = portfolioData.footer.card.text;
  footerContactBtn.textContent = portfolioData.footer.card.buttonText;
  footerText.textContent = portfolioData.footer.copyright;
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

// Function to handle Contact Form Submission
function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      alert(
        "Thank you, " +
          data.name +
          "! Your message has been sent successfully.",
      );

      this.reset();
    });
  }
}

// Review Navigation
function setupReviewNavigation() {
  const prevBtn = document.getElementById("prev-review");
  const nextBtn = document.getElementById("next-review");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      console.log("Previous review");
    });

    nextBtn.addEventListener("click", () => {
      console.log("Next review");
    });
  }
}

// Initialize All Render Functions
function init() {
  renderNavigation();
  renderBio();
  renderEducation();
  renderSkills();
  renderProjects();
  renderReviews();
  renderFooter();
  setupSmoothScroll();
  setupContactForm();
  setupReviewNavigation();
}

// Run initialization when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
