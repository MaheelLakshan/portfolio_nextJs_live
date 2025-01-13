export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: '12+ projects independently for clients from around the world.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 ',
    imgClassName: '',
    titleClassName: 'justify-start text-xl',
    img: '',
    spareImg: '',
  },
  // {
  //   id: 2,
  //   title: 'I have successfully developed and completed over 12 + projects independently.',
  //   description: '',
  //   className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
  //   imgClassName: 'w-full h-full',
  //   titleClassName: 'justify-end',
  //   img: '/b1.svg',
  //   spareImg: '',
  // },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a GPS locations based Project',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];

export const testimonials = [
  {
    quote: "Collaborating with Maheel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout his internship. Maheel's enthusiasm for every facet of development truly stands out. I highly recommend him for any software engineering endeavors.",
    name: 'Mr. Uvindu',
    title: 'Intern Supervisor at JWARE Automation Pvt Ltd',
  },
  {
    quote: "Maheel's ability to tackle challenging tasks and deliver efficient solutions was truly impressive. He consistently demonstrated attention to detail and unwavering commitment to excellence during his internship. I am confident he will excel in any future role.",
    name: 'Mr. Sanath',
    title: 'Intern Supervisor at ALDTAN Pvt Ltd',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Front End Developer Intern',
    desc: 'Designed and developed responsive web interfaces using React.js, Next.js, and Laravel. Utilized modern libraries and tools such as TailwindCSS for styling, Redux for state management, and Zod and Joi for form validation. Ensured cross-browser compatibility and optimized performance for a seamless user experience.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Back End Developer',
    desc: 'Developed and implemented both microservice and monolithic architectures to enhance system scalability and performance. Utilized Docker for containerization of microservices, ensuring efficient deployment and scalability. Built and tested APIs using Postman, ensuring robust and reliable backend functionality.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 3,
    title: 'Mobile App Indie Develover',
    desc: 'Designed and developed mobile apps for both iOS & Android platforms using React Native.As part of my final year project, I integrated live streaming of CCTV footage and implemented an abnormal event detection system powered by a machine learning model.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 4,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a web applications for clients, from initial concept to deployment on app stores.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];
