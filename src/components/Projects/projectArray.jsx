// projectArray.js
const project = [
  {
    title: "Shopify",
    description: "An e-commerce platform that allows anyone to set up an online store and sell their products. sdakw qjw qiojwe qoijwqoijwqoie jwqoijwoijqwoi jwqoi wjqeoiw qjo wiqjowqijwqoijeowi jwqeoi jqewoij weqoiqwe joiwqe jioqw ejqwoiejwqeoijweqoi qwejoi wqjoi wqjoi wqej" ,
    program: "React, Node.js, GraphQL",
    image: "https://images.ctfassets.net/lh3zuq09vnm2/6FdHOZHJKvrlc1dAWXdqlu/2e83c3b20cb1af6f42d99b4b8439d5eb/05_Shopify.jpg"
  },
  {
    title: "Weather App",
    description: "A web application that provides weather forecasts for different locations.",
    program: "React, OpenWeather API",
    image: "https://images.ctfassets.net/lh3zuq09vnm2/6v6hASKYhu8sohkJgIUIMW/bd0f0f28e9313f8945fd50474513c08a/03_Freshbooks.jpg"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    program: "HTML, CSS, JavaScript",
    image: "https://www.wordstream.com/wp-content/uploads/2022/07/nonprofit-website-examples-iwmf.png"
  },
  {
    title: "Task Manager",
    description: "A task management app to keep track of daily tasks and to-dos.",
    program: "React, Redux, Node.js",
    image: "https://cdn.sanity.io/images/v6oximkk/production/0ea037e387443a2c4601ef99fa2882343d2cf73b-1600x900.jpg?w=1600&h=900&auto=format"
  },
  {
    title: "Blog Platform",
    description: "A blogging platform where users can write and share their thoughts.",
    program: "React, Node.js, MongoDB",
    image: "https://www.ideamotive.co/hs-fs/hubfs/10%20Irresistible%20Examples%20of%20Web%20Design%20Best%20Practices%20for%202022%20-%20Wild%20Souls.png?width=2088&name=10%20Irresistible%20Examples%20of%20Web%20Design%20Best%20Practices%20for%202022%20-%20Wild%20Souls.png"
  },
  {
    title: "Social Media App",
    description: "A social media application to connect with friends and share updates.",
    program: "React, Firebase",
    image: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c849fc6d-e62d-4ebd-9ba1-f238cebc28cb/hardboiled2.jpg"
  },
  {
    title: "E-commerce Store",
    description: "An online store for selling products with a shopping cart feature.",
    program: "React, Redux, Stripe",
    image: "https://activebusinessgrowth.ca/wp-content/uploads/website-types.png"
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking app to log workouts and monitor progress.",
    program: "React, Node.js, Express",
    image: "https://cdn.sanity.io/images/v6oximkk/production/0b7a852c2c407b5a95c887a181a0310646edeaff-1000x667.jpg?w=1000&h=667&auto=format"
  },
  {
    title: "Recipe App",
    description: "A recipe app to browse and save favorite recipes.",
    program: "React, Spoonacular API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Chat Application",
    description: "A real-time chat application to communicate with friends.",
    program: "React, Socket.io",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Expense Tracker",
    description: "An app to track personal expenses and manage budgets.",
    program: "React, Node.js",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Job Board",
    description: "A job board application where users can search and apply for jobs.",
    program: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Event Management System",
    description: "A system to manage events, registrations, and ticket sales.",
    program: "React, Express, MongoDB",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Photo Gallery",
    description: "A gallery application to view and manage photos.",
    program: "React, Cloudinary",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Travel Planner",
    description: "An app to plan and organize travel itineraries.",
    program: "React, Google Maps API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Music Player",
    description: "A music player application to play and manage audio files.",
    program: "React, Web Audio API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "To-Do List",
    description: "A simple to-do list app to track tasks and deadlines.",
    program: "React, Firebase",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Quiz App",
    description: "A quiz application to create and take quizzes.",
    program: "React, Node.js",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Movie Database",
    description: "An app to browse and search movies and TV shows.",
    program: "React, The Movie Database API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Book Finder",
    description: "An app to search for books and view details.",
    program: "React, Google Books API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Language Learning App",
    description: "An app to learn and practice new languages.",
    program: "React, Node.js",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Virtual Reality Tour",
    description: "A VR application for virtual tours and experiences.",
    program: "React, A-Frame",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Portfolio Management",
    description: "A tool to manage and track investment portfolios.",
    program: "React, Chart.js",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Restaurant Menu",
    description: "An app to display and manage restaurant menus.",
    program: "React, Firebase",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Fitness Dashboard",
    description: "A dashboard to track and visualize fitness metrics.",
    program: "React, D3.js",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Health Tracker",
    description: "An app to monitor health parameters and trends.",
    program: "React, Node.js",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Recipe Finder",
    description: "An app to find and save recipes based on ingredients.",
    program: "React, Spoonacular API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "News Aggregator",
    description: "An app that aggregates news from various sources.",
    program: "React, News API",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Online Learning Platform",
    description: "A platform to create and manage online courses.",
    program: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Expense Manager",
    description: "An app to manage and categorize personal expenses.",
    program: "React, Redux",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Personal Diary",
    description: "An app to write and manage personal diary entries.",
    program: "React, Firebase",
    image: "https://via.placeholder.com/300x200"
  }
];

export default project;
