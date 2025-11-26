"use client";
import React, { useState } from "react";
import { 
  Building2, 
  Code, 
  Users, 
  Clock, 
  Star, 
  Target, 
  CheckCircle,
  ArrowRight,
  Briefcase,
  Globe,
  Award,
  TrendingUp,
  Play,
  ExternalLink,
  GitBranch,
  Database,
  Zap
} from "lucide-react";

const RealCompanyProjects = () => {
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [enrolledProjects, setEnrolledProjects] = useState(new Set());

  const companies = {
    google: { 
      name: "Google", 
      logo: "🔍", 
      color: "blue",
      description: "Search, Cloud & AI Technologies"
    },
    meta: { 
      name: "Meta", 
      logo: "👥", 
      color: "purple",
      description: "Social Media & VR/AR Platforms"
    },
    microsoft: { 
      name: "Microsoft", 
      logo: "🪟", 
      color: "green",
      description: "Cloud Computing & Enterprise Software"
    },
    amazon: { 
      name: "Amazon", 
      logo: "📦", 
      color: "orange",
      description: "E-commerce & AWS Cloud Services"
    },
    netflix: { 
      name: "Netflix", 
      logo: "🎬", 
      color: "red",
      description: "Streaming & Content Delivery"
    },
    uber: { 
      name: "Uber", 
      logo: "🚗", 
      color: "gray",
      description: "Ride-sharing & Logistics"
    }
  };

  const realProjects = [
    {
      id: "google-search-engine",
      company: "google",
      title: "Build a Distributed Search Engine",
      difficulty: "Advanced",
      duration: "8-10 weeks",
      team: "3-4 members",
      technologies: ["Go", "Kubernetes", "Elasticsearch", "Redis", "gRPC"],
      description: "Design and implement a scalable search engine capable of indexing and searching billions of web pages, similar to Google's core search infrastructure.",
      realWorldContext: "This project mirrors Google's actual search engine architecture and the challenges they face in providing fast, relevant search results.",
      learningObjectives: [
        "Distributed systems design",
        "Search algorithms (PageRank, TF-IDF)",
        "Microservices architecture",
        "Load balancing and caching"
      ],
      deliverables: [
        "Web crawler system",
        "Indexing service",
        "Query processing engine",
        "Ranking algorithm implementation",
        "User interface for search"
      ],
      industryRelevance: "Search technology is fundamental to information retrieval in countless applications",
      skillsGained: ["System Design", "Algorithm Optimization", "Distributed Computing"],
      rating: 4.9,
      participants: 2847,
      mentorSupport: true,
      difficulty_level: 8
    },
    {
      id: "meta-social-feed",
      company: "meta",
      title: "Real-time Social Media Feed System",
      difficulty: "Intermediate",
      duration: "6-8 weeks", 
      team: "2-3 members",
      technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "WebSockets"],
      description: "Create a scalable social media platform with real-time updates, content recommendation engine, and user interaction features.",
      realWorldContext: "Based on Facebook's news feed algorithm and real-time notification system used by billions of users daily.",
      learningObjectives: [
        "Real-time data synchronization",
        "Content recommendation algorithms",
        "Social graph modeling",
        "Performance optimization"
      ],
      deliverables: [
        "User authentication system",
        "Real-time posting and commenting",
        "News feed algorithm",
        "Notification service",
        "Mobile-responsive interface"
      ],
      industryRelevance: "Social platforms power modern digital communication and marketing",
      skillsGained: ["Full-Stack Development", "Real-time Systems", "Algorithm Design"],
      rating: 4.7,
      participants: 3421,
      mentorSupport: true,
      difficulty_level: 6
    },
    {
      id: "microsoft-office-suite",
      company: "microsoft", 
      title: "Collaborative Office Suite Platform",
      difficulty: "Advanced",
      duration: "10-12 weeks",
      team: "4-5 members",
      technologies: [".NET Core", "Azure", "SignalR", "React", "SQL Server"],
      description: "Build a cloud-based office suite with real-time collaboration features, document version control, and cross-platform compatibility.",
      realWorldContext: "Recreate the collaborative editing experience of Microsoft 365 with real-time synchronization across multiple users.",
      learningObjectives: [
        "Real-time collaborative editing",
        "Conflict resolution algorithms",
        "Cloud architecture design",
        "Cross-platform development"
      ],
      deliverables: [
        "Document editor with real-time sync",
        "Version control system", 
        "User permission management",
        "File sharing and comments",
        "Mobile and web applications"
      ],
      industryRelevance: "Collaborative software is essential for remote work and team productivity",
      skillsGained: ["Cloud Development", "Real-time Collaboration", "Enterprise Architecture"],
      rating: 4.8,
      participants: 1956,
      mentorSupport: true,
      difficulty_level: 9
    },
    {
      id: "amazon-ecommerce",
      company: "amazon",
      title: "Scalable E-commerce Marketplace",
      difficulty: "Advanced",
      duration: "8-10 weeks",
      team: "3-4 members", 
      technologies: ["AWS", "Python", "Django", "Redis", "Docker", "Kubernetes"],
      description: "Develop a complete e-commerce platform with inventory management, payment processing, recommendation engine, and order fulfillment system.",
      realWorldContext: "Model after Amazon's marketplace architecture handling millions of products and transactions daily.",
      learningObjectives: [
        "Microservices architecture",
        "Payment gateway integration",
        "Inventory management systems",
        "Recommendation algorithms"
      ],
      deliverables: [
        "Product catalog system",
        "Shopping cart and checkout",
        "Payment processing integration",
        "Order tracking system",
        "Seller dashboard and analytics"
      ],
      industryRelevance: "E-commerce platforms drive global digital economy worth trillions of dollars",
      skillsGained: ["E-commerce Architecture", "Payment Systems", "Cloud Infrastructure"],
      rating: 4.6,
      participants: 2234,
      mentorSupport: true,
      difficulty_level: 8
    },
    {
      id: "netflix-streaming",
      company: "netflix",
      title: "Video Streaming & Content Delivery Platform",
      difficulty: "Expert",
      duration: "12-14 weeks",
      team: "4-6 members",
      technologies: ["Java", "Spring", "Kafka", "Cassandra", "CDN", "ML/AI"],
      description: "Create a global video streaming service with adaptive bitrate streaming, content recommendation engine, and analytics dashboard.",
      realWorldContext: "Implement Netflix's content delivery network and recommendation system serving 200+ million subscribers worldwide.",
      learningObjectives: [
        "Content delivery networks",
        "Adaptive streaming protocols", 
        "Machine learning recommendations",
        "Global infrastructure scaling"
      ],
      deliverables: [
        "Video encoding and streaming service",
        "CDN implementation",
        "ML-based recommendation engine",
        "User analytics dashboard",
        "Mobile and smart TV apps"
      ],
      industryRelevance: "Streaming technology revolutionizes entertainment and media consumption globally",
      skillsGained: ["Media Streaming", "CDN Architecture", "ML Recommendations"],
      rating: 4.9,
      participants: 1432,
      mentorSupport: true,
      difficulty_level: 10
    },
    {
      id: "uber-ride-matching",
      company: "uber",
      title: "Real-time Ride Matching System", 
      difficulty: "Intermediate",
      duration: "6-8 weeks",
      team: "3-4 members",
      technologies: ["Python", "Redis", "PostgreSQL", "React Native", "GCP"],
      description: "Build a ride-sharing platform with real-time location tracking, dynamic pricing, and efficient driver-rider matching algorithms.",
      realWorldContext: "Solve the same geospatial and matching challenges that Uber faces in coordinating millions of rides daily.",
      learningObjectives: [
        "Geospatial algorithms",
        "Real-time location tracking",
        "Dynamic pricing models",
        "Mobile app development"
      ],
      deliverables: [
        "Driver and rider mobile apps",
        "Real-time matching algorithm",
        "GPS tracking system",
        "Payment and rating system",
        "Admin dashboard for operations"
      ],
      industryRelevance: "Ride-sharing technology transforms urban transportation and logistics",
      skillsGained: ["Geospatial Computing", "Mobile Development", "Real-time Systems"],
      rating: 4.5,
      participants: 2876,
      mentorSupport: true,
      difficulty_level: 7
    }
  ];

  const filteredProjects = realProjects.filter(project => {
    const companyMatch = selectedCompany === "all" || project.company === selectedCompany;
    const difficultyMatch = selectedDifficulty === "all" || project.difficulty === selectedDifficulty;
    return companyMatch && difficultyMatch;
  });

  const handleEnrollProject = (projectId) => {
    setEnrolledProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCompanyColor = (company) => {
    return companies[company]?.color || "gray";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Company{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work on actual problem statements from leading tech companies. Build real-world solutions 
            used by millions of people and gain hands-on experience with industry-level challenges.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Company Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCompany("all")}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCompany === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
              }`}
            >
              All Companies
            </button>
            {Object.entries(companies).map(([key, company]) => (
              <button
                key={key}
                onClick={() => setSelectedCompany(key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCompany === key
                    ? `bg-${company.color}-500 text-white`
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                <span>{company.logo}</span>
                <span>{company.name}</span>
              </button>
            ))}
          </div>

          {/* Difficulty Filter */}
          <div className="flex gap-2">
            {["all", "Intermediate", "Advanced", "Expert"].map(difficulty => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedDifficulty === difficulty
                    ? "bg-purple-500 text-white"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                {difficulty === "all" ? "All Levels" : difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-${getCompanyColor(project.company)}-100`}>
                    {companies[project.company].logo}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">{companies[project.company].name}</div>
                    <div className="text-xs text-gray-500">{companies[project.company].description}</div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              {/* Real-world Context */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">Real-World Context</span>
                </div>
                <p className="text-sm text-blue-700">{project.realWorldContext}</p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Clock className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="text-center">
                  <Users className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{project.team}</div>
                  <div className="text-xs text-gray-500">Team Size</div>
                </div>
                <div className="text-center">
                  <Star className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{project.rating}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center">
                  <Target className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{project.participants}</div>
                  <div className="text-xs text-gray-500">Participants</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-${getCompanyColor(project.company)}-100 text-${getCompanyColor(project.company)}-700 rounded-lg text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills You'll Gain:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skillsGained.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  {project.mentorSupport && (
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-green-500" />
                      <span>Mentor Support</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <GitBranch className="w-4 h-4 text-blue-500" />
                    <span>GitHub Repository</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Database className="w-4 h-4 text-purple-500" />
                    <span>Real Data Sets</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleEnrollProject(project.id)}
                  className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    enrolledProjects.has(project.id)
                      ? "bg-green-500 text-white"
                      : `bg-gradient-to-r from-${getCompanyColor(project.company)}-600 to-${getCompanyColor(project.company)}-700 text-white hover:from-${getCompanyColor(project.company)}-700 hover:to-${getCompanyColor(project.company)}-800`
                  }`}
                >
                  {enrolledProjects.has(project.id) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Enrolled</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Start Project</span>
                    </>
                  )}
                </button>
                <button className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats & CTA */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Thousands Building Real Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            These projects are based on actual challenges faced by top tech companies. 
            Gain experience that directly translates to job readiness and interview success.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Real Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">15,000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">85%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center justify-center space-x-2">
              <span>Schedule Mentorship</span>
              <Briefcase className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompanyProjects;