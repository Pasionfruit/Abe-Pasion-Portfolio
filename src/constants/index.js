import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Tutor",
    icon: creator,
  },
  {
    title: "Lifeguard",
    icon: backend,
  },
  {
    title: "Technician Assistant",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tutor",
    company_name: "Mathnasium",
    icon: starbucks,
    iconBg: "#ed3d33",
    date: "September 2022 - Present",
    points: [
      "Teach concepts from all levels of mathematics, including Pre-Algebra, Geometry, and Calculus.",
      "Create personalized lesson plans that cater to individual learning styles and needs.",
      "Assisting students with homework and reviewing classroom or curricula topics and assignments.",
    ],
  },
  {
    title: "Lifeguard",
    company_name: "Sam's Surf City, Splash City Adventure, The City of Tallahassee",
    icon: tesla,
    iconBg: "#f7f7f7",
    date: "(Seasonal) May 2021 - December 2022",
    points: [
      "Surveil and enforce park rules and regulations.",
      "Communicate, assist, and resolve issues with troubled and concerned customers.",
      "Administers CPR and/or artificial respiration, if necessary",
    ],
  },
  {
    title: "Technician Assistant",
    company_name: "Escambia County School District",
    icon: shopify,
    iconBg: "#ffffff",
    date: "Aug 2020 - Jun 2021",
    points: [
      "Resolve issues regarding printers, projectors, and computers for the staff and students.",
      "Deliver essential troubleshooting services face-to-face with students and faculty regarding technical equipment.",
      "Assess systematic problems and provide recommended solutions to management.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Personal portfolio",
    description:
      "Detailed collection and easy evaluation of Abe Pasion. Highlights key components regarding experience in labor along with technical skills. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Abe-Pasion/Abe-Pasion-Github.io",
  },
  {
    name: "ChefME // no longer in inprogress",
    description:
      "Web application that enables users to search for recipes, based on certain criteria. Users can log macros, as well as, create and favorite recipes into their own book.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Ruby",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "StackUP // inprogress",
    description:
      "A comprehensive expense tracking website that allows users to visualize and categorize expenses, create goals, and display investment opportunities.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { navLinks, services, technologies, experiences, testimonials, projects };