// lib/projects.ts

// The structure for a single feature within a project
export type ProjectFeature = {
  title: string;
  description: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string; // The short description for the card
  image: string; // The main thumbnail image
  tags: string[];
  features: ProjectFeature[]; // New 'features' array
  liveUrl?: string;
  demoPassword?: string;
  sourceUrl?: string;
};

export const projectsData: Project[] = [
  {
    slug: "business-website",
    title: "Nexora Business Website",
    description:
      "A modern business website with eCommerce capabilities. Built with Next.js, Sanity, and Stripe for fast, secure, and scalable solutions. Includes user authentication, dynamic content, and seamless payments.",
    image: "/images/img1.png",
    tags: ["Next.js", "Stripe", "Sanity", "Tailwind CSS", "TypeScript"],
    features: [
      {
        title: "Hero Section",
        description:
          "Products are managed through a headless CMS (Sanity) and served statically by Next.js for incredible performance. Each page is rich with details, images, and pricing information.",
        image: "/images/business/1.png",
      },
      {
        title: "Mission and Vision",
        description:
          "Integrated Stripe Checkout for a secure, seamless, and globally-accepted payment process. The system handles payment intents, webhooks for order confirmation, and user receipts.",
        image: "/images/business/2.png",
      },
      {
        title: "About Us",
        description:
          "Users can create accounts, view their order history, and manage their profiles. This feature is built with NextAuth.js, providing a robust and secure authentication system.",
        image: "/images/business/3.png",
      },
      {
        title: "Our Services",
        description:
          "From dynamic content management to secure payment integration and user account systems, Nexora offers end-to-end solutions for modern eCommerce.",
        image: "/images/business/4.png",
      },
      {
        title: "Contact Us",
        description:
          "Let us talk about your project. Reach out to our team anytime — we are here to help bring your eCommerce ideas to life.",
        image: "/images/business/5.png",
      },
      {
        title: "Why Choose Nexora",
        description:
          "We combine the power of modern tech stacks like Next.js, Sanity, and Stripe to deliver fast, scalable, and secure eCommerce experiences.",
        image: "/images/business/6.png",
      },
      {
        title: "Contact Us - Business",
        description:
          "Get in touch with us to learn how Nexora can transform your business. Whether you need a full-stack solution or specific features, we are here to help.",
        image: "/images/business/7.png",
      },
    ],
    liveUrl: "https://nexora-zeta-tan.vercel.app/", // This one has no password, so the button will show
  },
  {
    slug: "abaya-website",
    title: "Abaya Website",
    description:
      "A responsive eCommerce website for Abaya products. Features real-time updates with Firebase and a modern UI. Showcases collections, product details, and seamless shopping experience.",
    image: "/images/img2.png",
    tags: ["React", "Chart.js", "Firebase", "Material-UI"],
    features: [
      {
        title: "Home Page",
        description:
          "A visually appealing home page that showcases the latest Abaya collections. The design is responsive, ensuring a seamless experience across devices.",
        image: "/images/abaya/1.png",
      },
      {
        title: "Latest Collections",
        description:
          "Leveraging Firebase Firestore for a real-time, NoSQL database. Any changes in the backend are instantly reflected on the dashboard without needing a page refresh, providing a live look at the data.",
        image: "/images/abaya/2.png",
      },
      {
        title: "Product Details",
        description:
          "Each product detail page is designed to provide a comprehensive view of the Abaya, including high-quality images, descriptions, and pricing information.",
        image: "/images/abaya/5.png",
      },
      {
        title: "Contact Us",
        description:
          "Get in touch with us to learn how Nexora can transform your business. Whether you need a full-stack solution or specific features, we are here to help.",
        image: "/images/abaya/6.png",
      },
      {
        title: "About Us",
        description:
          "Learn more about Nexora and our mission to empower businesses with cutting-edge eCommerce solutions.",
        image: "/images/abaya/7.png",
      },
      {
        title: "Mission and Vision",
        description:
          "Our mission is to provide a platform that not only showcases Abaya products but also enhances the shopping experience with modern web technologies.",
        image: "/images/abaya/8.png",
      },
    ],
    liveUrl: "https://www.sulfeenaabaya.in/",
  },
  {
    slug: "online-stationery-store",
    title: "Online Stationery Store",
    description:
      "A web app for managing stationery inventory, billing, and users. Includes advanced reporting, real-time dashboards, and multi-role user management. Built with React, Firebase, and Material-UI.",
    image: "/images/stationery/1.png",
    tags: ["React", "Chart.js", "Firebase", "Material-UI"],
    features: [
      {
        title: "Dashboard Overview",
        description:
          "A centralized dashboard with real-time statistics, recent activities, and quick access to essential modules like sales, purchases, and inventory.",
        image: "/images/stationery/1.png",
      },
      {
        title: "Student Management",
        description:
          "Manage student profiles, linked invoices, and balances. Useful for school-based stationery billing.",
        image: "/images/stationery/2.png",
      },
      {
        title: "Teacher Management",
        description:
          "Maintain records for teachers, including personal info, assigned classrooms, and purchases if applicable.",
        image: "/images/stationery/3.png",
      },
      {
        title: "Product Management",
        description:
          "Add, edit, and categorize stationery products with inventory tracking and availability status.",
        image: "/images/stationery/4.png",
      },
      {
        title: "Purchase Records",
        description:
          "Track incoming stock from suppliers with quantity, cost, and supplier details to maintain inventory accuracy.",
        image: "/images/stationery/5.png",
      },
      {
        title: "User Management",
        description:
          "Create and manage different user roles such as admins, staff, and shopkeepers with specific permissions.",
        image: "/images/stationery/6.png",
      },
      {
        title: "Class Management",
        description:
          "Organize students and teachers by class sections for simplified group-wise stationery allocation and billing.",
        image: "/images/stationery/7.png",
      },
      {
        title: "Shop Management",
        description:
          "Handle multiple branches or shops, view shop-wise reports, and switch between stores if applicable.",
        image: "/images/stationery/8.png",
      },
      {
        title: "Invoice Management",
        description:
          "Generate invoices for students, teachers, or general customers with automatic calculations and tax support.",
        image: "/images/stationery/9.png",
      },
      {
        title: "Billing Section",
        description:
          "Streamlined billing interface for fast sales, barcode scanning, and on-the-fly product additions.",
        image: "/images/stationery/10.png",
      },
      {
        title: "Invoice Reports",
        description:
          "Downloadable invoice reports with filters like date, class, user type, paid or due status.",
        image: "/images/stationery/11.png",
      },
      {
        title: "Paid Invoices",
        description:
          "Track all fully settled invoices and generate receipts or confirmation reports.",
        image: "/images/stationery/12.png",
      },
      {
        title: "Due Invoices",
        description:
          "Monitor unpaid or partially paid invoices and send reminders or generate follow-up bills.",
        image: "/images/stationery/13.png",
      },
      {
        title: "User Balances",
        description:
          "View balance summaries for each student or teacher, with quick access to payment history and due amount.",
        image: "/images/stationery/14.png",
      },
      {
        title: "User Invoice Tracker",
        description:
          "Track invoice history per user with filters and downloadable records, aiding transparency and trust.",
        image: "/images/stationery/15.png",
      },
    ],
    demoPassword: "de",
    liveUrl: "https://www.sulfeenaabaya.in/",
  },
  {
    slug: "attendance-management-system",
    title: "Attendance Management System",
    description:
      "A modern web application to manage, track, and report attendance across classes and subjects with advanced analytics and administrative control.",
    image: "/images/attendance/1.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      {
        title: "Dashboard",
        description:
          "A centralized control panel showing daily attendance summary, quick stats, and recent activity for both teachers and admins.",
        image: "/images/attendance/1.png",
      },
      {
        title: "Subject Management",
        description:
          "Add and manage academic subjects, assign them to specific classes, and associate them with designated teachers.",
        image: "/images/attendance/2.png",
      },
      {
        title: "Class Management",
        description:
          "Organize and manage class groups, student lists, and their assigned subjects for streamlined attendance tracking.",
        image: "/images/attendance/3.png",
      },
      {
        title: "Downloads",
        description:
          "Export attendance reports, summaries, and statistics in PDF or Excel formats for official use.",
        image: "/images/attendance/4.png",
      },
      {
        title: "Attendance Management",
        description:
          "Mark, edit, and view attendance for each class and subject. Easily handle full-day or period-wise attendance.",
        image: "/images/attendance/5.png",
      },
      {
        title: "Attendance Statistics",
        description:
          "Visual insights into student attendance trends, including present/absent rates and overall performance graphs.",
        image: "/images/attendance/6.png",
      },
      {
        title: "Absent Days Listing",
        description:
          "Track all student absences with reasons, dates, and class periods to help with follow-ups and parental notifications.",
        image: "/images/attendance/7.png",
      },
      {
        title: "Class-wise Reports",
        description:
          "Generate detailed attendance reports for specific classes, showing daily and monthly breakdowns.",
        image: "/images/attendance/8.png",
      },
      {
        title: "Subject-wise Reports",
        description:
          "Analyze attendance records per subject to identify problem areas or low-attendance patterns.",
        image: "/images/attendance/9.png",
      },
      {
        title: "Attendance Clearance",
        description:
          "Allows administrators to review and officially clear attendance records for exams or audits.",
        image: "/images/attendance/10.png",
      },
      {
        title: "Teacher Dashboard",
        description:
          "A personalized dashboard for teachers to view assigned classes, take attendance, and track student participation.",
        image: "/images/attendance/11.png",
      },
    ],
    liveUrl: "",
    demoPassword: "de",
  },
  {
    slug: "library-website",
    title: "Library Management System",
    description:
      "A responsive and user-friendly library platform for readers, librarians, and administrators to manage books, users, circulation, and more.",
    image: "/images/library/1.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      {
        title: "Book Slider",
        description:
          "An interactive homepage book slider to highlight featured books, staff picks, and bestsellers in an engaging visual format.",
        image: "/images/library/1.png",
      },
      {
        title: "New Arrivals",
        description:
          "Showcase the latest books added to the catalog with filters by genre, author, or publication date.",
        image: "/images/library/2.png",
      },
      {
        title: "Category Filter",
        description:
          "Users can filter books by categories like Fiction, Science, History, and more for easy discovery.",
        image: "/images/library/3.png",
      },
      {
        title: "Mission and Vision",
        description:
          "Communicates the purpose, goals, and future direction of the library to users and stakeholders.",
        image: "/images/library/4.png",
      },
      {
        title: "Catalog Search",
        description:
          "Powerful and fast book search system allowing users to search by title, author, ISBN, or keywords.",
        image: "/images/library/5.png",
      },
      {
        title: "Explore Categories",
        description:
          "A visual section to explore library categories with images and descriptions for better engagement.",
        image: "/images/library/6.png",
      },
      {
        title: "Library Announcements",
        description:
          "Post and display important announcements such as holidays, events, or new policy updates.",
        image: "/images/library/7.png",
      },
      {
        title: "Contact Us",
        description:
          "Easy-to-use contact section with address, phone, email, and a location map for library visitors.",
        image: "/images/library/8.png",
      },
      {
        title: "Admin Dashboard",
        description:
          "A secure admin panel to manage books, users, transactions, and settings with analytical insights.",
        image: "/images/library/9.png",
      },
      {
        title: "Circulation",
        description:
          "Manage book lending and returns with fine tracking, due dates, and circulation logs.",
        image: "/images/library/10.png",
      },
      {
        title: "Patron Management",
        description:
          "Register and manage patrons (students, teachers, public members), their borrowing history, and profiles.",
        image: "/images/library/11.png",
      },
      {
        title: "Book Catalog Management",
        description:
          "Admins can add, update, and categorize books with details like ISBN, call number, and availability.",
        image: "/images/library/12.png",
      },
      {
        title: "Access Control Management",
        description:
          "Role-based access system to control which users (admin/staff) can manage specific features or data.",
        image: "/images/library/13.png",
      },
      {
        title: "Author Management",
        description:
          "Create and manage author profiles and associate them with published works in the catalog.",
        image: "/images/library/14.png",
      },
      {
        title: "Category Management",
        description:
          "Add and manage book categories for better organization and easier browsing for users.",
        image: "/images/library/15.png",
      },
    ],
    liveUrl: "https://dbl-client.vercel.app/", // This one has no password, so the button will show
  },
  {
    slug: "college-portal",
    title: "College Admin & Management Portal",
    description:
      "A complete administrative solution for educational institutions to manage students, study centers, faculty, exams, and results with efficiency and precision.",
    image: "/images/college/1.png",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      {
        title: "Centralized Admin Dashboard",
        description:
          "A command center for administrators, offering a high-level overview and quick, icon-based navigation to all key management modules.",
        image: "/images/college/1.png",
      },
      {
        title: "Study Center Management",
        description:
          "Efficiently manage all affiliated study centers. View, add, or update center details including contact information, location, and affiliation status.",
        image: "/images/college/2.png",
      },
      {
        title: "Comprehensive Student Management",
        description:
          "Oversee the entire student database with powerful filtering options by study center and class, and view detailed academic and personal records.",
        image: "/images/college/3.png",
      },
      {
        title: "Subject & Curriculum Management",
        description:
          "Define the academic curriculum by adding and managing subjects. Assign unique codes, link them to specific classes, and set total marks for evaluation.",
        image: "/images/college/4.png",
      },
      {
        title: "Teacher & Staff Management",
        description:
          "Maintain a complete directory of all teachers and staff members. Admins can filter the list by study center and export the data for reporting.",
        image: "/images/college/5.png",
      },
      {
        title: "Class & Course Management",
        description:
          "Organize the academic structure by easily creating, editing, and managing all classes and courses offered within the institution.",
        image: "/images/college/6.png",
      },
      {
        title: "Dynamic Exam Management",
        description:
          "Create and configure examinations for different academic years. Set exam names, define maximum marks, and toggle exam activation status.",
        image: "/images/college/7.png",
      },
      {
        title: "Result Publication & Analysis",
        description:
          "Streamline the process of publishing exam results. Admins can filter results by exam and college and export the entire dataset to Excel for analysis.",
        image: "/images/college/8.png",
      },
      {
        title: "Centralized Download Center",
        description:
          "A dedicated portal for uploading and distributing important documents like application forms, syllabi, and official circulars.",
        image: "/images/college/9.png",
      },
      {
        title: "Instant Notification System",
        description:
          "Keep students and staff informed by creating and broadcasting real-time notifications and announcements directly through the admin panel.",
        image: "/images/college/10.png",
      },
      {
        title: "Summative Assessment Management",
        description:
          "Manage Formative/Summative Assessment (FA/SA) marks for students, crucial for continuous evaluation and final grade calculations.",
        image: "/images/college/11.png",
      },
    ],
    liveUrl: "",
  },
];
