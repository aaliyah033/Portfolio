import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  emoji?: string;
  codeUrl?: string;
  demoUrl?: string;
};

type Experience = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  displayName = 'Aaliyah Ally';

  githubUrl = 'https://github.com/aaliyah033';
  linkedinUrl = 'https://www.linkedin.com/in/aaliyah-ally/';
  email = 'aaliyahali0727@gmail.com';

  phone = '+1 (416) 725-0531';
  location = 'Ontario, Canada';

  heroTitle = 'Full Stack Developer';
  heroDesc =
    'Computer Programming & Analysis student with strong full-stack foundations, building responsive web applications and APIs. Passionate about clean UI, reliable backend systems, and continuous learning in team environments.';

  socials = [
    { icon: 'fa-brands fa-github', url: this.githubUrl, label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', url: this.linkedinUrl, label: 'LinkedIn' },
    { icon: 'fa-regular fa-envelope', url: `mailto:${this.email}`, label: 'Email' },
  ];

  tech = [
    { title: 'Languages', items: ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL'] },
    { title: 'Frontend', items: ['Angular', 'HTML', 'CSS', 'Bootstrap', 'Responsive UI', 'Accessibility'] },
    { title: 'Backend', items: ['Node.js', 'Express', '.NET / ASP.NET', 'REST APIs', 'Auth', 'Swagger'] },
    { title: 'Tools / Cloud', items: ['Azure', 'Git / GitHub', 'Linux (Fedora)', 'Virtualization', 'MySQL', 'SQL Server', 'MongoDB'] },
  ];

  whoIAm = [
    `I’m a Computer Programming & Analysis student who enjoys building full-stack web applications and learning new technologies through real projects.`,
    `I like creating clean, responsive interfaces and connecting them to reliable backend services and databases.`,
    `I’m dependable, organized, and always willing to learn, and I enjoy collaborating with others to solve problems and improve my skills.`,
  ];

  whatIDo = [
    {
      title: 'Frontend Development',
      desc: 'Designing and building responsive, wireframe-accurate user interfaces using Angular, TypeScript, and modern CSS for both desktop and mobile layouts.',
    },
    {
      title: 'Backend Development',
      desc: 'Developing RESTful APIs and server-side logic using Node.js, Express, and ASP.NET, with secure authentication and database integration.',
    },
    {
      title: 'Databases & Cloud',
      desc: 'Working with SQL and NoSQL databases and deploying applications using cloud services like Microsoft Azure to support scalable applications.',
    },
    {
      title: 'Team Collaboration',
      desc: 'Using Git and GitHub for version control, collaborating in team projects, and following organized workflows to deliver features efficiently.',
    },
  ];

  highlights = [
    {
      icon: 'fa-solid fa-code',
      title: 'Strong Coding Practices',
      desc: 'Writing organized and maintainable code while following best practices learned in coursework and projects.',
    },
    {
      icon: 'fa-solid fa-palette',
      title: 'Responsive UI',
      desc: 'Designing interfaces that work smoothly across desktop and mobile devices using modern CSS.',
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Reliable Applications',
      desc: 'Building features that are tested and stable, focusing on smooth user experience.',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Team-Oriented',
      desc: 'Collaborating in group projects using GitHub, clear communication, and shared responsibilities.',
    },
  ];

  workExperience: Experience[] = [
    {
      title: 'Travel Consultant (Freelance)',
      company: 'Self-Employed',
      date: '2023 – Present',
      bullets: [
        'Planned and coordinated client travel bookings and itineraries, ensuring accuracy across confirmations and schedules.',
        'Provided professional customer support via phone and email, responding to inquiries and change requests efficiently.',
        'Managed multiple client requests simultaneously while maintaining strong attention to detail and service quality.',
        'Maintained organized booking records and followed privacy best practices when handling personal information.',
      ],
    },
    {
      title: 'Application Consultant (Freelance)',
      company: 'Self-Employed',
      date: '2025 – Present',
      bullets: [
        'Assisted clients with application setup, troubleshooting, and feature guidance to improve overall user experience.',
        'Explained technical steps in clear, non-technical language to ensure users could follow instructions easily.',
        'Communicated user issues and feedback to technical teams to support faster problem resolution.',
        'Documented support cases and maintained detailed records while ensuring data confidentiality.',
      ],
    },
  ];

  coursesCol1 = [
    'Systems Analysis & Project Management',
    'Linux System Administration',
    'Networking Essentials',
    'Cloud Computing Services (Azure)',
    'The Mainframe Environment',
    'Math for the Computer Industry',
  ];

  coursesCol2 = [
    'Web Frameworks & APIs',
    'JavaScript Frameworks',
    'Client-Side JavaScript',
    'Interface Design Using CSS',
    'Web Programming Using PHP',
    'Server-Side Scripting (ASP.NET)',
    'Relational Databases',
    'Advanced Databases',
  ];

  coursesCol3 = [
  'Object-Oriented Programming (Java)',
  'Advanced Object-Oriented Programming (Java)',
  'Document Automation (Python)',
  'Application Security (Java)',
  'Game Simulation (Unity)',
  'Mobile Development (Swift)',
  'Internet of Things (Arduino)',
];

projects: Project[] = [
  {
    title: 'Nexyus — Event Organizing Web App (Capstone)',
    desc: 'Team-based Angular web application for event discovery and ticketing. Built responsive UI pages from wireframes, created reusable components, and prepared frontend for API integration using GitHub collaboration.',
    tags: ['Angular', 'TypeScript', 'Bootstrap', 'Team Project', 'UI/UX'],
    codeUrl: 'https://github.com/aaliyah033/Nexyus',
    image: '',
    demoUrl: 'https://github.com/aaliyah033/Nexyus',
  },
  {
    title: 'AutoSpareParts Inventory Management API',
    desc: 'RESTful API for managing auto spare parts inventory with full CRUD operations, authentication, reporting, and email alerts. Designed for small business inventory tracking and dashboard integration.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'PDFKit', 'XLSX'],
    image: '/projects/AtoSpare.png',
    codeUrl: 'https://github.com/aaliyah033/COMP3033/tree/main/Assignment02/autospareparts',
    demoUrl: 'https://autospareparts.onrender.com',
  },
  {
    title: 'ToDoList — Task Management Web App',
    desc: 'ASP.NET MVC web application allowing users to create, update, and track tasks with SQL database integration and Azure deployment.',
    tags: ['C#', 'ASP.NET MVC', 'SQL', 'Azure'],
    emoji: '✅',
    codeUrl: 'https://github.com/aaliyah033/COMP2084',
    demoUrl: 'https://github.com/your-username/todolist',
  },
  {
    title: 'MyTravel — Travel Tracking Application',
    desc: 'Full CRUD travel planner allowing users to manage trips, ratings, and notes with Google authentication and PDF export features.',
    tags: ['Node.js', 'MongoDB', 'Passport.js', 'PDFKit', 'Full CRUD'],
    image: '/projects/Mytravel.png',
    codeUrl: 'https://github.com/aaliyah033/COMP2068JSFrameworks/tree/main/ASSIGNMENT02',
    demoUrl: 'https://mytravel-vo2n.onrender.com',
  },
  {
    title: 'City & Country Information Tool',
    desc: 'Client-side JavaScript app using external APIs to display time zone, weather, and exchange rates with JSON data handling.',
    tags: ['JavaScript', 'APIs', 'JSON', 'Frontend'],
    image: '/projects/CityCountrApi.png',
    codeUrl: 'https://github.com/aaliyah033/COMP1073/tree/main/Assignmnet3',
    demoUrl: 'https://countryinfoapi.onrender.com',
  },
  {
    title: 'The Good Bunch — Flower Store Website',
    desc: 'Responsive e-commerce style website showcasing flowers with interactive UI and GitHub-based team collaboration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/projects/GoodBunch.png',
    codeUrl: '',
    demoUrl: 'https://thegoodbunch.onrender.com',
  },
  {
    title: 'Telecomm — Retro Product Micro-Site',
    desc: 'Micro-site focused on rotary dial telephones featuring engaging layouts and interactive content with responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    image: '/projects/Tellecom.png',
    codeUrl: 'https://github.com/aaliyah033/COMP1002-Final-Project/tree/main',
    demoUrl: 'https://telecomm.onrender.com',
  },
  {
    title: 'Smoothie Machine Interactive Website',
    desc: 'Interactive web app allowing users to build smoothies by selecting ingredients using dynamic JavaScript logic.',
    tags: ['JavaScript', 'DOM', 'User Interaction'],
    image: '/projects/Thesmoothie.png',
    codeUrl: 'https://github.com/aaliyah033/COMP1073/tree/main',
    demoUrl: 'https://the-smoothie-machine0504.onrender.com',
  },
  {
    title: 'Guest Quest — Console Game',
    desc: 'C# number guessing game with attempt limits, randomization, and user feedback logic.',
    tags: ['C#', 'Console App', 'Game Logic'],
    emoji: '🎮',
  },
  {
    title: 'Python Word Automation Tool',
    desc: 'Python program that collects assignment data and automatically generates Word documents with validation and timing features.',
    tags: ['Python', 'Automation', 'pyinputplus'],
    emoji: '🤖',
  },
];

whyChoose = [
  'Strong full-stack foundation across frontend, backend, databases, and cloud fundamentals.',
  'Consistently reliable with strong time management and attention to detail.',
  'Comfortable communicating with both technical teams and end users.',
  'Experienced in building real applications using Angular, Node.js, ASP.NET, and REST APIs.',
  'Team-focused developer familiar with GitHub collaboration and agile-style group projects.',
];

  get year(): number {
    return new Date().getFullYear();
  }

  safeTel(phone: string) {
    return phone.replace(/[^0-9+]/g, '');
  }

  // --- Tech dropdown state ---
  openTechIndex: number | null = null;

  toggleTech(i: number) {
  this.openTechIndex = this.openTechIndex === i ? null : i;
  }
  isTechOpen(i: number) {
  return this.openTechIndex === i;
  }
}