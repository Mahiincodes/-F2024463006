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
            
        ]
    },

    // Bio/Hero Section
    bio: {
        fullName: "Laura Martinez",
        greeting: "HEY! I'm Laura,<br><span style='font-size: 48px; color: #2d3748;'>UI/UX</span> designer",
        introduction: "Agency-quality Webflow websites with the personal touch of a freelancer.",
        profileImage: "./Image.png",
        socialLinks: [
            { icon: "in", url: "#" },
            { icon: "🌐", url: "#" },
            { icon: "W", url: "#" }
        ]
    },

  // Education Section
education: {
    degree: "BS Computer Science",
    institution: "University of Technology",
    duration: "2020 - 2024",
    description: "Focused on web development, software engineering, and user experience design. Completed various projects involving full-stack development and UI/UX design.",
    specializations: [
        {
            number: "1",
            title: "Webflow",
            description: "I also use Client First system for class naming structure, which allows me to build any project fast and conveniently."
        },
        {
            number: "2",
            title: "FinSweet",
            description: "Yes, I absolutely love solutions provided Finsweet team, and I use them in every single project."
        },
        {
            number: "3",
            title: "Client-First",
            description: "I also use Client First system for class naming structure, which allows me to build any project fast and conveniently."
        }
    ],
    tools: [
        { name: "Webflow", icon: "W" },
        { name: "Figma", icon: "F" },
        { name: "Framer", icon: "{F" },
        { name: "Zapier", icon: "zapier" },
        { name: "Client-First", icon: "CF" }
    ]
},

    // Skills Section
    skills: {
        technical: [
            "HTML5 & CSS3",
            "JavaScript (ES6+)",
            "React.js",
            "Node.js",
            "Responsive Design",
            "Git & GitHub",
            "RESTful APIs",
            "MySQL & MongoDB",
            "Figma",
            "Adobe XD",
            "Webflow",
            "Bootstrap & Tailwind"
        ],
        professional: [
            "UI/UX Design",
            "User Research",
            "Wireframing",
            "Prototyping",
            "Problem Solving",
            "Team Collaboration",
            "Project Management",
            "Communication",
            "Time Management",
            "Critical Thinking",
            "Agile Methodology",
            "Client Relations"
        ]
    },

    // Experience/Projects Section
    projects: [
        {
            title: "E-Commerce Website Redesign",
            type: "Academic Project",
            date: "January 2024 - March 2024",
            description: "Led the redesign of an e-commerce platform focusing on improving user experience and conversion rates. Conducted user research, created wireframes and high-fidelity prototypes, and implemented the frontend using React.js.",
            technologies: ["React.js", "CSS3", "Figma", "Node.js", "MongoDB"]
        },
        {
            title: "Task Management Web Application",
            type: "Personal Project",
            date: "September 2023 - November 2023",
            description: "Developed a full-stack task management application with user authentication, real-time updates, and collaborative features. Implemented responsive design and intuitive UI for seamless user experience across devices.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Express.js", "MySQL"]
        },
        {
            title: "University Portal Mobile App Design",
            type: "Freelance Work",
            date: "May 2023 - July 2023",
            description: "Designed a comprehensive mobile application for university students to access courses, grades, schedules, and campus resources. Created user personas, conducted usability testing, and delivered complete design specifications.",
            technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"]
        },
        {
            title: "Restaurant Booking System",
            type: "Academic Project",
            date: "February 2023 - April 2023",
            description: "Built a web-based restaurant booking system with features for table reservations, menu browsing, and order management. Implemented database design, backend API, and responsive frontend interface.",
            technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML5"]
        },
        {
            title: "Portfolio Website Template",
            type: "Personal Project",
            date: "December 2022 - January 2023",
            description: "Created a modern, responsive portfolio website template for designers and developers. Features include smooth animations, dark mode toggle, and dynamic content loading using vanilla JavaScript.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
        },
        {
            title: "Weather Forecasting Application",
            type: "Academic Project",
            date: "October 2022 - November 2022",
            description: "Developed a weather forecasting web application that fetches real-time weather data from external APIs. Implemented location-based search, 7-day forecast, and interactive weather maps.",
            technologies: ["JavaScript", "APIs", "HTML5", "CSS3", "Chart.js"]
        }
    ],

    // Customer Reviews
    reviews: [
        {
            name: "Anna Writens",
            role: "Designer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            name: "John Smith",
            role: "Developer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        },
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        },{
            name: "Anna Writens",
            role: "Designer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            name: "John Smith",
            role: "Developer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        },
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        },
        {
            name: "Anna Writens",
            role: "Designer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            name: "John Smith",
            role: "Developer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        },
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        },{
            name: "Anna Writens",
            role: "Designer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            name: "John Smith",
            role: "Developer",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        },
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            text: "To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        }
    ],

    // Footer
    footer: {
        ctaTitle: "Let's build it together.",
        buttons: [
            { text: "My LinkedIn", icon: "in" },
            { text: "Download my resume", icon: "↓" }
        ],
        card: {
            title: "Try me out, risk free!",
            text: "Let's build something great together",
            buttonText: "Contact →"
        },
        copyright: "© 2024 Portfolio - Web Technologies Assignment | BS Computer Science"
    }
};