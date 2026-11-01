/**
 * THE PYTHON WONDERLAND - Academic Achievement Portfolio
 * Centralized Editable Data Source
 */

const WONDERLAND_DATA = {
  // Personal Introduction Profile Data
  personalProfile: {
    label: "ADVANCED PYTHON · FALL SEMESTER 2026",
    salutation: "I AM",
    name: "P. Bhuvanehswari",
    regNo: "23MID0230",
    faculty: "Dr. Sharmila Banu K",
    course: "Advanced Python",
    description: "A semester of learning, creating and exploring Python beyond the syllabus.",
    tagline: "Learning · Creating · Exploring",
    photoUrl: "Images/bhuvana.jpeg",
    exploreCta: "Explore My Journey →"
  },

  // COLLECTION 01: THE STAR VAULT (10 Classroom Stars collected)
  starVaultInfo: {
    totalStars: 10,
    title: "10 Academic Stars of Python Excellence",
    subtitle: "A constellation of ten stars awarded by my Python faculty for conceptually sound answers during lecture sessions and execution of codes on smart board.",
    photoUrl: "Images/stars.jpg",
    reflection: "Every single star reflects a learning, problem solving,analytical reasoning, and classroom engagement across the Python coursework.",
    // 10 Golden Star Topics in exact requested order
    topics: [
      { id: 1, name: "List Functions" },
      { id: 2, name: "Multiprocessing" },
      { id: 3, name: "List Unpacking" },
      { id: 4, name: "Infinite Iterators" },
      { id: 5, name: "Terminating Iterator" },
      { id: 6, name: "Generators" },
      { id: 7, name: "Constructors" },
      { id: 8, name: "List Comprehensions" },
      { id: 9, name: "NumPy Arrays" },
      { id: 10, name: "Array Slicing" }
    ]
  },

  // COLLECTION 02: WORDS WORTH KEEPING (Faculty Remarks with Photo Proof)
  wordsWorthKeeping: [
    {
      id: 1,
      remark: "Well presented on my answer script.",
      context: "Written by faculty on examination answer script in appreciation of clear structuring, neat flowcharts, and precise code indentation.",
      examName: "Python Assessment Test",
      date: "2024",
      photoUrl: "Images/cat1.png",
      reflection: "A reminder that communication and clarity in technical presentation are just as vital as code execution."
    },
    {
      id: 2,
      remark: "Top-notch answers for 3 questions.",
      context: "Written on examination script commending comprehensive, in-depth responses with theoretical precision and code edge-case coverage.",
      examName: "Python Mid-Term Examination",
      date: "2024",
      photoUrl: "Images/cat2.png",
      reflection: "Recognized for answering three complex questions with utmost thoroughness and flawless syntax."
    }
  ],

  // COLLECTION 03: THE CREATION STUDIO (Selected Studio Exhibits)
  creationStudioHeader: {
    badge: "SELECTED CREATIONS",
    intro: "From visual interface design to applications that communicate through APIs, these are some of the creations developed during my Advanced Python journey."
  },
  creationStudio: [
    {
      id: 1,
      title: "Figma Frontend Design",
      category: "figma",
      categoryLabel: "Figma Frontend Design",
      shortDescription: "An exploration of frontend design, visual structure and user interface creation using Figma.",
      problemStatement: "Bridging the gap between raw computational logic and intuitive, user-friendly human interaction through structured wireframing and design tokens.",
      technologies: ["Figma", "UI/UX Architecture", "Wireframing", "Component Systems", "Prototyping"],
      myContribution: "Crafted interactive wireframes, unified colour schemes, responsive screen layouts, and prototype interaction states.",
      screenshots: [
        "Images/figma_1.png",
        "Images/figma_2.png"
      ],
      status: "Design System Completed"
    },
    {
      id: 2,
      title: "Travel Planner – API Communication",
      category: "api",
      categoryLabel: "API Communication Project",
      shortDescription: "I developed a Travel Planner application that communicates with my friend's project, Experience Finder, through API endpoints. This demonstrates how two independently developed applications can exchange and process data through API communication.",
      problemStatement: "Demonstrating how two independently developed applications can exchange and process live data seamlessly through HTTP API endpoints and JSON serialization.",
      relationship: {
        myProject: "Travel Planner",
        friendProject: "Experience Finder",
        connection: "API endpoint communication",
        flow: ["Travel Planner", "API Request", "Experience Finder", "API Response", "Travel Planner"]
      },
      technologies: ["Python", "Flask / FastAPI", "RESTful API Endpoints", "JSON Payloads", "HTTP Requests"],
      myContribution: "Architected the Travel Planner client/server communication logic, structured outbound API request payloads, and parsed inbound responses from Experience Finder.",
      screenshots: [
        "Images/api_1.png",
        "Images/api_2.png"
      ],
      status: "API Endpoints Connected",
      resources: [
        {
          label: "Live Demo",
          type: "Live Project",
          icon: "🌐",
          url: "https://smart-travel-planner-1-eluz.onrender.com",
          description: "Explore the live deployed Travel Planner application on Render."
        },
        {
          label: "Source Code – GitHub",
          type: "GitHub Repository",
          icon: "🐙",
          url: "https://github.com/Bhuvana019/smart-travel-planner",
          description: "Inspect the project repository, branches, commits, and API code."
        },
        {
          label: "Project PPT",
          type: "Project Presentation",
          icon: "📊",
          url: "https://docs.google.com/presentation/d/1AZ4ZQn9xqiRIl5-XQx0ZXp3Mumq9o_03/edit?usp=sharing&ouid=109549723719513722608&rtpof=true&sd=true",
          description: "Review the comprehensive academic presentation slides."
        },
        {
          label: "Project Video",
          type: "Demonstration Video",
          icon: "▶️",
          url: "https://drive.google.com/file/d/1I3CrBu3KMgy4TMX6j2AQLAJM52CKW6rD/view?usp=sharing",
          description: "Watch the video walk-through demonstrating features and live API data flow."
        },
        {
          label: "Project Audio",
          type: "Explanation Audio",
          icon: "🎧",
          url: "https://drive.google.com/file/d/1dgLE5BpTyT86HqLhqBXlptyf7YBK5gpt/view?usp=sharing",
          description: "Listen to the detailed audio explanation covering technical implementation."
        }
      ]
    }
  ],

  // COLLECTION 04: CLASSROOM DIARIES (IoT Impairment Project & Copy vs Shallow Copy Discussion)
  classroomDiaries: [
    {
      id: 1,
      entryType: "Classroom Project Idea",
      title: "IoT Based Impairment Project Idea",
      description: "An innovative project idea exploring how Internet of Things technology can be used to assist differently-abled individuals. This classroom activity helped us think about applying technology to real-world problems and creating meaningful solutions.",
      date: "2024",
      photoUrl: "Images/iot_impairment.png",
      reflectionNote: "Bridging hardware sensors with Python automation to create high-impact assistive technology."
    },
    {
      id: 2,
      entryType: "Faculty-led Group Discussion",
      title: "Understanding copy() vs Shallow Copy()",
      description: "We had an interesting classroom group discussion about the difference between copy() and shallow copy(). Our faculty explained the concepts very clearly using simple and effective examples, making it much easier to understand how Python handles object copying and references.",
      date: "2024",
      isComparisonCard: true,
      comparison: {
        leftTitle: "Assignment / Reference (=)",
        leftSubtitle: "Shared Reference (No Copy)",
        leftExplanation: "Both variable names point directly to the exact same memory address (identity). Mutating inner elements or outer elements modifies both.",
        leftCode: "b = a  # id(b) == id(a)",
        rightTitle: "Shallow Copy (copy.copy())",
        rightSubtitle: "New Outer Container Only",
        rightExplanation: "Constructs a brand-new outer container object, but inserts references into it for the inner elements found in the original.",
        rightCode: "b = a.copy()  # id(b) != id(a), but id(b[0]) == id(a[0])"
      },
      reflectionNote: "Clarified memory pointer mechanics and prevented common mutation bugs in compound objects."
    }
  ],

  // COLLECTION 05: LAB DIARIES ("Where concepts turn into practical experiments.")
  labDiaries: [
    {
      id: 1,
      badge: "Object-Oriented Programming",
      title: "Padlet Problem-Solving Challenge",
      photoUrl: "Images/Padlet.png",
      description: "Through our Padlet activity, I solved six LeetCode problems using concepts from Object-Oriented Programming. The challenge included 2 Easy, 2 Medium and 2 Hard problems, giving me an opportunity to apply theoretical concepts to practical problem-solving.",
      difficultyStats: {
        easy: 2,
        medium: 2,
        hard: 2,
        total: 6
      },
      reflectionNote: "Demonstrated encapsulation, class polymorphism, and time-complexity optimization across diverse LeetCode difficulty tiers."
    },
    {
      id: 2,
      badge: "Logistic Regression",
      title: "Loan Prediction Using Logistic Regression",
      description: "I explored a simple Machine Learning workflow using Logistic Regression on a Loan Prediction dataset. This exercise introduced me to applying a classification algorithm to a real-world prediction problem, understanding the basic ML workflow and evaluating model performance.",
      modelAccuracy: "82.7%",
      workflowSteps: [
        "Loan Prediction Dataset",
        "Data Preparation",
        "Logistic Regression",
        "Prediction",
        "Model Evaluation"
      ],
      reflectionNote: "Gained foundational intuition into binary classification, sigmoid mapping, and model validation on financial loan eligibility."
    }
  ],

  // COLLECTION 06: THE CHALLENGE ARENA (First Position Celebration & Multithreading Storyboard)
  challengeArena: [
    {
      id: 1,
      activityType: "Our First Classroom Activity",
      badgeText: "🏆 1st Position Champions",
      title: "Our First Group Quiz",
      description: "This was the first activity we participated in as a class. Everyone was still getting familiar with new faces and teammates. We joined our respective groups through a website and participated in the quiz together. Despite being a new group, we managed to secure FIRST POSITION that day!",
      date: "August 2024",
      photoUrl: "Images/class_quiz.png",
      teamInfo: "Newly Formed Classroom Team",
      outcome: "Secured First Position across all participating groups",
      highlight: true
    },
    {
      id: 2,
      activityType: "Creative Storyboard Activity",
      badgeText: "🦊 Fox & 🦉 Owl Storyboard",
      title: "Multithreading Through Storytelling",
      description: "To understand multithreading concepts, we created a storyboard using Fox and Owl characters.\nThrough this creative tale, we illustrated how concurrent threads execute without collisions.\nQueue, Lock and Release mechanisms coordinate tasks and safeguard shared resources smoothly.",
      date: "October 2024",
      photoUrl: "Images/story_board.png",
      remarksPhotoUrl: "Images/story_board_remarks.png",
      concepts: [
        { name: "Queue", desc: "Orderly task buffer preventing race collisions" },
        { name: "Lock", desc: "Acquiring exclusive resource access" },
        { name: "Release", desc: "Relinquishing lock for the waiting thread" }
      ],
      outcome: "Faculty commended the intuitive storyboard narrative and teamwork."
    }
  ],

  // COLLECTION 07: BEYOND THE SYLLABUS (Updated Exact Image Mappings)
  beyondSyllabusRoadmap: [
    {
      id: 1,
      step: "01",
      title: "Explaining Our Project – Travel Planner",
      subtitle: "3-Minute Audio Technical Pitch",
      icon: "🎧",
      photoUrl: "Images/voice.png", // Exact mapped image: voice
      url: "https://drive.google.com/file/d/1dgLE5BpTyT86HqLhqBXlptyf7YBK5gpt/view?usp=sharing",
      isAudio: true,
      description: "Explaining a project is just as important as developing it. Through this three-minute audio explanation of our Travel Planner project, I learned how to communicate a project's purpose, functionality and technical implementation in a clear and structured way."
    },
    {
      id: 2,
      step: "02",
      title: "Exploring Python Modules",
      subtitle: "Standard Library Exploration",
      icon: "🐍",
      photoUrl: "Images/module.png", // Exact mapped image: module
      description: "Ventured into Python modules beyond the syllabus including itertools, collections, threading primitives, and non-blocking asynchronous event loops to expand practical coding agility."
    },
    {
      id: 3,
      step: "03",
      title: "Exploring Character Encoding",
      subtitle: "ASCII, UTF-8 & Unicode Internals",
      icon: "🔤",
      photoUrl: "Images/encode.png", // Exact mapped image: encode
      description: "While creating the portfolio, I also explored character encoding and understood how characters are represented and interpreted by computers. This gave me an opportunity to explore an interesting technical concept beyond the regular syllabus."
    },
    {
      id: 4,
      step: "04",
      title: "Creating Beyond the Ordinary",
      subtitle: "Portfolio Creation & Frontend Design",
      icon: "✨",
      photoUrl: "Images/bhuvana.jpeg", // Mapped portfolio creation image (using bhuvana / crt)
      missingPhotoFallback: "crt",
      description: "Building this portfolio helped me combine creativity with technical learning. Instead of stopping at a basic personal portfolio, I experimented with design, frontend interactions and creative ways of presenting my academic work."
    }
  ],

  // END-OF-SEMESTER REFLECTION (Closing Handwritten Scrapbook Note)
  semesterReflection: {
    title: "A Semester Full of Learning, Discovery and Growth",
    note: "This semester has been much more than learning Python syntax and concepts. From classroom discussions and practical lab challenges to project development, Machine Learning exploration and creative activities, every experience taught us something new. We learned to think, experiment, collaborate and express our ideas. Looking back, it has been a semester full of learning, discovery and growth.",
    signature: "— Bhuvana P, The Python Wonderland"
  },

  // FINAL SECTION: BLOG – A LITTLE STORY BEHIND THE CODE
  blogArticle: {
    sectionTitle: "Blog – A Little Story Behind the Code",
    sectionSubtitle: "Turning programming concepts into stories.",
    articleTitle: "The Day Zero Stole Number One's Job",
    mediumUrl: "https://medium.com/@pbhuvana7010/the-day-zero-stole-number-ones-job-ed3b9c47a9fa?sharedUserId=pbhuvana7010",
    images: [
      "Images/blog_1.jpg",
      "Images/blog_2.jpg"
    ],
    publishedPlatform: "Published on Medium",
    description: "In this humorous and inventive storytelling piece, the fundamental programming conundrum—why array and list indexing begins at 0 instead of 1—is brought to life through witty character dialogue and personification. The article cleverly illustrates how '0' stepped forward not merely as a placeholder for 'nothing', but as the precise mathematical memory offset representing zero distance from the starting address. By anthropomorphizing numbers in a playful office-style rivalry, the story demystifies complex memory indexing, computer architecture, and pointer offsets in a lighthearted, deeply memorable narrative that makes a foundational technical concept engaging for programmers of any level."
  },

  // FINAL SECTION: FINAL LEARNING FROM CSI3007 (Milky Way Galaxy Experience)
  csi3007Galaxy: {
    sectionTitle: "FINAL LEARNING FROM CSI3007",
    // 12 Exact Learning Topics across 3 orbital rings
    topics: [
      { id: 1, name: "Lists", ring: 1, angle: 0 },
      { id: 2, name: "Multithreading", ring: 1, angle: 90 },
      { id: 3, name: "Iterators", ring: 1, angle: 180 },
      { id: 4, name: "NumPy", ring: 1, angle: 270 },
      { id: 5, name: "Machine Learning", ring: 2, angle: 30 },
      { id: 6, name: "API Calls", ring: 2, angle: 120 },
      { id: 7, name: "Threads", ring: 2, angle: 210 },
      { id: 8, name: "Pivot Table", ring: 2, angle: 300 },
      { id: 9, name: "Multi Indexing", ring: 3, angle: 45 },
      { id: 10, name: "JSON", ring: 3, angle: 135 },
      { id: 11, name: "Deployment", ring: 3, angle: 225 },
      { id: 12, name: "Git", ring: 3, angle: 315 }
    ],
    closingStatement: "12 concepts. Countless discoveries. One unforgettable learning journey.",
    courseCredit: "CSI3007 · Advanced Python · Fall Semester 2026"
  }
};

if (typeof window !== "undefined") {
  window.WONDERLAND_DATA = WONDERLAND_DATA;
}
