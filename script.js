// Script.js - Data-Driven Portfolio Rendering
const BASE_URL = 'https://backend-production-e830.up.railway.app/';

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
    const data = await apiRequest('bio'); 
    if (data) {
        console.log("Bio Data Loaded:", data);
    }
}
async function loadEducation() {
    const data = await apiRequest('education');
    if (data) console.log("Education Data Loaded:", data);
}

async function loadSkills() {
    const data = await apiRequest('skills');
    if (data) console.log("Skills Data Loaded:", data);
}

async function loadProjects() {
    const data = await apiRequest('projects');
    if (data) console.log("Projects Data Loaded:", data);
}
async function loadExperience() {
    const data = await apiRequest('experience'); 
    if (data) {
        console.log("Experience Data Loaded:", data);
    }
}
// Render Navigation
function renderNavigation() {
    const navBrand = document.getElementById('nav-brand');
    const ul = document.getElementById('nav-menu');

    const logo = document.createElement("img");
logo.src = portfolioData.navigation.brandLogo;
logo.alt = "Portfolio Logo";
logo.className = "nav-logo";

navBrand.innerHTML = "";
navBrand.appendChild(logo);


    portfolioData.navigation.menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

// Render Bio/Hero Section
async function renderBio() {
    await loadBio()
    const heroGreeting = document.getElementById('hero-greeting');
    const heroBio = document.getElementById('hero-bio');
    const heroSocial = document.getElementById('hero-social');
    const heroImg = document.getElementById('hero-img');

    heroGreeting.innerHTML = portfolioData.bio.greeting;
    heroBio.textContent = portfolioData.bio.introduction;
    heroImg.src = portfolioData.bio.profileImage;
    heroImg.alt = portfolioData.bio.fullName;

    // Render social links
    portfolioData.bio.socialLinks.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.className = 'social-icon';
        a.textContent = social.icon;
        heroSocial.appendChild(a);
    });
}


// Render Education Section
async function renderEducation() {
     await loadEducation();
    const educationTools = document.getElementById('education-tools');
    const specializationCards = document.getElementById('specialization-cards');

    if (!educationTools || !specializationCards) return;

    // Clear existing content
    educationTools.innerHTML = '';
    specializationCards.innerHTML = '';

    // Render tool icons
    portfolioData.education.tools.forEach(tool => {
        const toolIcon = document.createElement('div');
        toolIcon.className = `tool-icon ${tool.name.toLowerCase().replace(/\s+/g, '-')}`;
        toolIcon.textContent = tool.icon;
        toolIcon.title = tool.name;
        educationTools.appendChild(toolIcon);
    });

    // Render specialization cards
    portfolioData.education.specializations.forEach(spec => {
        const card = document.createElement('div');
        card.className = 'specialization-card';

        const number = document.createElement('div');
        number.className = 'specialization-number';
        number.textContent = spec.number;

        const title = document.createElement('h3');
        title.textContent = spec.title;

        const description = document.createElement('p');
        description.textContent = spec.description;

        card.appendChild(number);
        card.appendChild(title);
        card.appendChild(description);

        specializationCards.appendChild(card);
    });
}

// Render Skills Section
async function renderSkills() {
     await loadSkills();
    const technicalSkills = document.getElementById('technical-skills');
    const professionalSkills = document.getElementById('professional-skills');

    technicalSkills.innerHTML = '';
    professionalSkills.innerHTML = '';

    portfolioData.skills.technical.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        technicalSkills.appendChild(skillTag);
    });

    portfolioData.skills.professional.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        professionalSkills.appendChild(skillTag);
    });
}

// Render Projects Section
async function renderProjects() {
     await loadProjects();
      await loadExperience();
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectImage = document.createElement('div');
        projectImage.className = 'project-image';
        projectImage.textContent = (index + 1).toString().padStart(2, '0');

        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const date = document.createElement('div');
        date.className = 'date';
        date.textContent = project.date;

        const type = document.createElement('span');
        type.className = 'type';
        type.textContent = project.type;

        const description = document.createElement('p');
        description.textContent = project.description;

        const technologies = document.createElement('div');
        technologies.className = 'project-technologies';

        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            technologies.appendChild(techTag);
        });

        projectContent.appendChild(title);
        projectContent.appendChild(date);
        projectContent.appendChild(type);
        projectContent.appendChild(description);
        projectContent.appendChild(technologies);

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectContent);

        projectsGrid.appendChild(projectCard);
    });
}

// Render Reviews Section
let currentReviewIndex = 0;

function renderReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    reviewsGrid.innerHTML = '';

    portfolioData.reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

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
    const reviewsGrid = document.getElementById('reviews-grid');
    const card = document.querySelector('.review-card');

    if (!card) return;

    const cardWidth = card.offsetWidth + 35; // card + gap
    reviewsGrid.style.transform = `translateX(-${currentReviewIndex * cardWidth}px)`;
}
document.getElementById('next-review').addEventListener('click', () => {
    const maxIndex = portfolioData.reviews.length - 3;

    if (currentReviewIndex < maxIndex) {
        currentReviewIndex++;
        updateSlider();
    }
});

document.getElementById('prev-review').addEventListener('click', () => {
    if (currentReviewIndex > 0) {
        currentReviewIndex--;
        updateSlider();
    }
});


// Render Footer
function renderFooter() {
    const footerCtaTitle = document.getElementById('footer-cta-title');
    const footerButtons = document.getElementById('footer-buttons');
    const footerCardTitle = document.getElementById('footer-card-title');
    const footerCardText = document.getElementById('footer-card-text');
    const footerContactBtn = document.getElementById('footer-contact-btn');
    const footerText = document.getElementById('footer-text');

    footerCtaTitle.textContent = portfolioData.footer.ctaTitle;

    portfolioData.footer.buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = 'footer-btn';
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
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to handle Contact Form Submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            console.log("Form Submitted:", data);
            alert("Thank you, " + data.name + "! Your message has been sent successfully.");
            
            this.reset();
        });
    }
}

// Review Navigation
function setupReviewNavigation() {
    const prevBtn = document.getElementById('prev-review');
    const nextBtn = document.getElementById('next-review');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            console.log('Previous review');
        });
        
        nextBtn.addEventListener('click', () => {
            console.log('Next review');
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
document.addEventListener('DOMContentLoaded', init);