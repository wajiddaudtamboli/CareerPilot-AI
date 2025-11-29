"use client";
import React, { useState } from "react";
import { 
  Trophy, 
  Calendar, 
  Users, 
  Clock, 
  Star, 
  Target, 
  Gift,
  Zap,
  Code,
  Globe,
  Medal,
  Flame,
  Play,
  ExternalLink
} from "lucide-react";

const CompetitionsHackathons = () => {
  const [activeTab, setActiveTab] = useState("live");
  const [registeredEvents, setRegisteredEvents] = useState(new Set());

  const competitions = {
    live: [
      {
        id: "hackathon-2025",
        title: "Global AI Hackathon 2025",
        type: "Hackathon",
        organizer: "TechGlobal",
        startDate: "2025-01-15",
        endDate: "2025-01-17",
        duration: "48 hours",
        participants: 15847,
        prizePool: "$100,000",
        difficulty: "Advanced",
        technologies: ["AI/ML", "Python", "TensorFlow", "React"],
        description: "Build innovative AI solutions to solve real-world problems",
        status: "Registration Open",
        daysLeft: 20,
        featured: true
      },
      {
        id: "code-sprint-weekly",
        title: "CodeSprint Weekly Challenge",
        type: "Coding Contest",
        organizer: "CodeChef",
        startDate: "2025-01-08",
        endDate: "2025-01-08",
        duration: "3 hours",
        participants: 8934,
        prizePool: "$5,000",
        difficulty: "Intermediate",
        technologies: ["Algorithms", "Data Structures", "C++", "Java"],
        description: "Weekly competitive programming challenge",
        status: "Live Now",
        daysLeft: 1
      },
      {
        id: "fintech-challenge",
        title: "FinTech Innovation Challenge",
        type: "Business Challenge",
        organizer: "JPMorgan Chase",
        startDate: "2025-02-01",
        endDate: "2025-02-28",
        duration: "4 weeks",
        participants: 2156,
        prizePool: "$75,000",
        difficulty: "Advanced",
        technologies: ["Blockchain", "React", "Node.js", "Docker"],
        description: "Revolutionize financial services with technology",
        status: "Registration Open",
        daysLeft: 35
      }
    ],
    upcoming: [
      {
        id: "google-code-jam",
        title: "Google Code Jam 2025",
        type: "Coding Contest",
        organizer: "Google",
        startDate: "2025-03-15",
        endDate: "2025-03-15",
        duration: "2.5 hours",
        participants: 0,
        prizePool: "$15,000",
        difficulty: "Expert",
        technologies: ["Algorithms", "Mathematics", "Any Language"],
        description: "Google's premier competitive programming contest",
        status: "Coming Soon",
        daysLeft: 80
      },
      {
        id: "nasa-space-apps",
        title: "NASA Space Apps Challenge",
        type: "Hackathon",
        organizer: "NASA",
        startDate: "2025-04-05",
        endDate: "2025-04-07",
        duration: "48 hours",
        participants: 0,
        prizePool: "$50,000",
        difficulty: "Intermediate",
        technologies: ["Space Tech", "Data Science", "Web Dev"],
        description: "Solve challenges using NASA's open data",
        status: "Coming Soon",
        daysLeft: 101
      }
    ],
    completed: [
      {
        id: "meta-hackathon",
        title: "Meta AR/VR Hackathon",
        type: "Hackathon",
        organizer: "Meta",
        startDate: "2024-11-15",
        endDate: "2024-11-17",
        duration: "48 hours",
        participants: 12000,
        prizePool: "$80,000",
        difficulty: "Advanced",
        technologies: ["AR/VR", "Unity", "C#", "JavaScript"],
        description: "Build immersive AR/VR experiences",
        status: "Completed",
        winner: "Team VisionaryVR"
      },
      {
        id: "advent-of-code",
        title: "Advent of Code 2024",
        type: "Coding Contest",
        organizer: "Advent of Code",
        startDate: "2024-12-01",
        endDate: "2024-12-25",
        duration: "25 days",
        participants: 250000,
        prizePool: "Glory",
        difficulty: "All Levels",
        technologies: ["Any Language", "Problem Solving"],
        description: "Daily programming challenges throughout December",
        status: "Completed"
      }
    ]
  };

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2847, avatar: "AC", country: "🇺🇸" },
    { rank: 2, name: "Maria Rodriguez", points: 2756, avatar: "MR", country: "🇪🇸" },
    { rank: 3, name: "Raj Patel", points: 2634, avatar: "RP", country: "🇮🇳" },
    { rank: 4, name: "Sarah Kim", points: 2521, avatar: "SK", country: "🇰🇷" },
    { rank: 5, name: "David Wilson", points: 2445, avatar: "DW", country: "🇬🇧" }
  ];

  const handleRegister = (eventId) => {
    setRegisteredEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Live Now": return "bg-red-500 text-white animate-pulse";
      case "Registration Open": return "bg-green-500 text-white";
      case "Coming Soon": return "bg-blue-500 text-white";
      case "Completed": return "bg-gray-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Competitions &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hackathons
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compete with developers worldwide, showcase your skills, and win amazing prizes 
            in programming contests and innovation challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
              {[
                { id: "live", label: "Live & Upcoming", icon: Flame },
                { id: "upcoming", label: "Coming Soon", icon: Calendar },
                { id: "completed", label: "Completed", icon: Trophy }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-purple-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="space-y-6">
              {competitions[activeTab].map((event) => (
                <div
                  key={event.id}
                  className={`bg-white rounded-2xl shadow-xl border-2 p-8 hover:shadow-2xl transition-all duration-300 ${
                    event.featured ? "border-purple-300 ring-2 ring-purple-100" : "border-gray-200"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                          {event.status}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(event.difficulty)}`}>
                          {event.difficulty}
                        </div>
                        {event.featured && (
                          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 flex items-center space-x-1">
                            <Star className="w-3 h-3" />
                            <span>Featured</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Globe className="w-4 h-4" />
                          <span>{event.organizer}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{event.participants.toLocaleString()}</span>
                        </div>
                        {event.daysLeft && (
                          <div className="flex items-center space-x-1 text-orange-600">
                            <Calendar className="w-4 h-4" />
                            <span>{event.daysLeft} days left</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-8 text-right">
                      <div className="flex items-center justify-end space-x-2 mb-2">
                        <Gift className="w-5 h-5 text-green-500" />
                        <span className="text-2xl font-bold text-green-600">{event.prizePool}</span>
                      </div>
                      <div className="text-sm text-gray-500">Prize Pool</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {activeTab === "completed" ? (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Trophy className="w-4 h-4" />
                        <span>Winner: {event.winner || "Results Announced"}</span>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => handleRegister(event.id)}
                          className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                            registeredEvents.has(event.id)
                              ? "bg-green-500 text-white"
                              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                          }`}
                        >
                          {registeredEvents.has(event.id) ? (
                            <>
                              <Target className="w-4 h-4" />
                              <span>Registered</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              <span>Register Now</span>
                            </>
                          )}
                        </button>
                        <button className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all flex items-center justify-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Learn More</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Leaderboard */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-900">Global Leaderboard</h3>
              </div>
              
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={user.rank} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? "bg-yellow-500 text-white" :
                      index === 1 ? "bg-gray-400 text-white" :
                      index === 2 ? "bg-orange-600 text-white" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{user.name}</span>
                        <span>{user.country}</span>
                      </div>
                      <div className="text-sm text-gray-500">{user.points} points</div>
                    </div>
                    {index < 3 && <Medal className="w-5 h-5 text-yellow-500" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Competitions Joined</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Top 10 Finishes</span>
                  <span className="font-bold text-gray-900">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Points</span>
                  <span className="font-bold text-purple-600">1,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Global Rank</span>
                  <span className="font-bold text-orange-600">#156</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4" />
                  <span>Next competition starts in 2 days</span>
                </div>
              </div>
            </div>

            {/* Practice Zone */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Practice Zone</h3>
              <p className="text-purple-100 mb-6 text-sm">
                Sharpen your skills with daily challenges and mock contests.
              </p>
              <button className="w-full bg-white text-purple-600 px-4 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all flex items-center justify-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Start Practice</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsHackathons;