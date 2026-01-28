// Portfolio Data Object - All content stored here
const portfolioData = {
  // Navigation
  navigation: {
    brandLogo: "./logo.gif",
    menuItems: [
      { name: "Home", link: "#hero-section" },
      { name: "Education", link: "#education-section" },
      { name: "Skills", link: "#skills-section" },
      { name: "Projects", link: "#projects-section" },
    ],
  },

  // Bio/Hero Section
  bio: {
    socialLinks: [
      { icon: "in", url: "#" },
      { icon: "🌐", url: "#" },
      { icon: "W", url: "#" },
    ],
  },

  // Customer Reviews
  reviews: [
    {
      name: "Anna Writens",
      role: "UI Designer",
      text: "Working with her was a smooth experience. She understood the design requirements clearly and delivered a clean, modern layout that matched our brand perfectly.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "John Smith",
      role: "Frontend Developer",
      text: "Great attention to detail and solid development skills. The website was fast, responsive, and easy to maintain. Communication throughout the project was excellent.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      text: "He delivered exactly what we needed and even suggested improvements we hadn’t considered. The final result was both functional and visually appealing.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      text: "Professional, reliable, and easy to work with. The website helped us establish a strong online presence and received great feedback from our users.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Emily Carter",
      role: "Marketing Specialist",
      text: "Loved the overall design and performance of the site. Everything was optimized, responsive, and aligned well with our marketing goals.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    },
  ],

  // Footer
  footer: {
    ctaTitle: "Let's build it together.",
    buttons: [
      { text: "My LinkedIn", icon: "in" },
      { text: "Download my resume", icon: "↓" },
    ],
    card: {
      title: "Try me out, risk free!",
      text: "Let's build something great together",
      buttonText: "Contact →",
    },
    copyright:
      "© 2024 Portfolio - Web Technologies Assignment | BS Computer Science",
  },
};
