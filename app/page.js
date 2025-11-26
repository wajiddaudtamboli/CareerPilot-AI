"use client";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Play,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { ThemeContext } from "./components/ThemeContext";
import { useUser } from '@clerk/nextjs';
import NewFeatureModules from './components/NewFeatureModules';

export default function JobPrepHomepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);
  const { isSignedIn } = useUser();
  const router = useRouter();

  const teamMembers = [
    {
      name: "Wajid Daud Tamboli",
      role: "Lead Developer & Founder",
      content:
        "Passionate about creating AI-powered solutions that transform career preparation and help students achieve their professional goals.",
      rating: 5,
    },
    {
      name: "Laxmi Javalkote",
      role: "Frontend Engineer",
      content:
        "Dedicated to building intuitive user experiences that make complex learning processes accessible and engaging for everyone.",
      rating: 5,
    },
    {
      name: "Shaikh Parvej",
      role: "Backend Architect",
      content:
        "Focused on developing scalable infrastructure that supports millions of learners in their journey to career success.",
      rating: 5,
    },
    {
      name: "Sakshi Madgundi",
      role: "UI/UX Design Lead",
      content:
        "Committed to crafting beautiful, user-centered designs that enhance learning outcomes and create meaningful experiences.",
      rating: 5,
    },
    {
      name: "Bagwan Zaid",
      role: "AI Research Specialist",
      content:
        "Advancing machine learning algorithms to provide personalized career guidance and intelligent skill assessment for optimal learning paths.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Industry-Based Certifications",
      description:
        "Get certified in AWS, Google Cloud, Microsoft Azure, and other industry-leading platforms",
    },
    {
      icon: Users,
      title: "Real Company Projects",
      description:
        "Work on actual problem statements from top companies like Google, Microsoft, and Meta",
    },
    {
      icon: BookOpen,
      title: "Competitions & Hackathons",
      description:
        "Participate in coding challenges, hackathons, and competitive programming events",
    },
    {
      icon: Zap,
      title: "Aptitude Learning Platforms",
      description: "Master quantitative, logical reasoning, and verbal ability with adaptive practice",
    },
    {
      icon: Brain,
      title: "AI-Powered Career Guidance",
      description:
        "Get personalized career recommendations using advanced ML algorithms and industry insights",
    },
    {
      icon: ShieldCheck,
      title: "Skill Assessment & Tracking",
      description:
        "Comprehensive skill evaluations with progress tracking and improvement roadmaps",
    },
    {
      icon: TrendingUp,
      title: "Industry Mentorship",
      description:
        "Connect with professionals from FAANG companies and leading tech organizations",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"}`}>
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`absolute inset-0 pointer-events-none ${
          isDarkMode
            ? "bg-black"
            : "bg-gradient-to-r from-blue-100/20 to-indigo-100/20"
        } animate-pulse`}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`inline-flex items-center space-x-2 ${
                isDarkMode
                  ? "bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-amber-200"
                  : "bg-blue-100/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-blue-700"
              }`}>
                <Zap className="w-4 h-4" />
                <span>AI-Powered Job Preparation</span>
              </div>

              <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                Launch Your
                <span className={`${
                  isDarkMode
                    ? "bg-gradient-to-r from-amber-400 to-amber-600"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600"
                } bg-clip-text text-transparent`}>
                  {" "}
                  Career Journey
                </span>
              </h1>

              <p className={`text-xl leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Master technical interviews, behavioral questions, and industry
                skills with our comprehensive preparation platform. Join
                thousands who've transformed their careers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => router.push('/learn?page=IndustryCertifications')}
                  className={`group ${
                  isDarkMode
                    ? "bg-gray-600 hover:bg-gray-700 text-white"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                } px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2`}>
                  <span>Start Learning Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  onClick={() => window.location.href = '/learn?page=RealCompanyProjects'}
                  className={`group ${
                  isDarkMode
                    ? "bg-gray-800/70 text-white hover:bg-gray-700/70"
                    : "bg-gray-100/80 backdrop-blur-sm text-gray-700 hover:bg-gray-200/80"
                } px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center space-x-2`}>
                  <Play className="w-5 h-5" />
                  <span>Explore Projects</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>15+</div>
                  <div className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>Departments Supported</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>200+</div>
                  <div className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>Job Roles Mapped</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>300+</div>
                  <div className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>Roadmaps Generated</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>1000+</div>
                  <div className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>Active Users</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`relative ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700"
                  : "bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-200"
                } backdrop-blur-sm rounded-3xl p-8`}>
                <div className={`absolute -top-4 -right-4 w-24 h-24 pointer-events-none ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-600/20 to-gray-700/20"
                    : "bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
                  } rounded-full opacity-20 animate-bounce`}></div>
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 pointer-events-none ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-700/20 to-gray-600/20"
                    : "bg-gradient-to-r from-indigo-400/20 to-blue-400/20"
                  } rounded-full opacity-20 animate-pulse`}></div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-white" : "text-gray-700"
                    }`}>
                      AWS Certification achieved
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-white" : "text-gray-700"
                    }`}>Company project completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-white" : "text-gray-700"
                    }`}>Hackathon competition won</span>
                  </div>

                  <div className={`${
                    isDarkMode
                      ? "bg-gray-800/70"
                      : "bg-white/80"
                    } backdrop-blur-sm rounded-xl p-4 mt-6`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}>Learning Progress</span>
                      <span className={`${
                        isDarkMode ? "text-gray-300" : "text-blue-600"
                      } font-semibold`}>89%</span>
                    </div>
                    <div className={`w-full ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-full h-3`}>
                      <div className={`${
                        isDarkMode
                          ? "bg-gradient-to-r from-amber-400 to-amber-600"
                          : "bg-gradient-to-r from-purple-400 to-pink-400"
                        } h-3 rounded-full w-[89%] animate-pulse`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section (optimized) */}
      <section className="flex justify-center">
        <Image
          src="/phases.png"
          height={800}
          width={1000}
          alt="phases"
          priority={false}
          loading="lazy"
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1000px"
          className="w-full h-auto max-w-[1000px]"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HwAFgwJ/l9tZ4QAAAABJRU5ErkJggg=="
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Complete Learning{" "}
              <span className={`bg-gradient-to-r ${
                isDarkMode
                  ? "from-gray-300 to-white"
                  : "from-blue-600 to-indigo-600"
              } bg-clip-text text-transparent`}>
                Ecosystem
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Master industry skills through certifications, real projects, competitions, and comprehensive aptitude training - everything you need for career success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group rounded-2xl p-8 border hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10"
                    : "bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-600 to-gray-700"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500"
                }`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Features Showcase */}
          <div className="space-y-20">
            {/* Feature 1: AI-Powered Interview Practice */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm ${
                  isDarkMode
                    ? "bg-gray-600/20 text-gray-300"
                    : "bg-blue-100/80 text-blue-700"
                }`}>
                  <Zap className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Industry-Leading{" "}
                  <span className={`bg-gradient-to-r ${
                    isDarkMode
                      ? "from-gray-300 to-white"
                      : "from-blue-600 to-indigo-600"
                  } bg-clip-text text-transparent`}>
                    Certifications
                  </span>
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  Earn recognized certifications from AWS, Google Cloud, Microsoft Azure, and other leading platforms. Validate your skills with industry-standard credentials that employers trust.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      AWS, Azure, GCP certified paths
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Industry-recognized credentials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      25+ certification programs
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/learn?page=IndustryCertifications')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Start Certification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <div className={`${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    : "bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200/50 shadow-2xl"
                }`}>
                  <div className={`${
                    isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                  } rounded-2xl p-8 mb-6 shadow-lg`}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AWS</span>
                      </div>
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AZ</span>
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">GCP</span>
                      </div>
                    </div>
                    <div className={`text-lg ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                      <div className="mb-4 font-bold text-xl">
                        AWS Solutions Architect
                      </div>
                      <div className={`${isDarkMode ? "text-green-300" : "text-green-600"} font-medium`}>
                        ✓ Professional Level Certification
                      </div>
                      <div className={`mt-6 ${
                        isDarkMode ? "bg-blue-500/20" : "bg-blue-100"
                      } rounded-lg p-4`}>
                        <div className={`${
                          isDarkMode ? "text-blue-300" : "text-blue-700"
                        } text-sm font-medium`}>
                          Next: Google Cloud Professional Developer
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`font-semibold ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>Certification Progress</span>
                    <span className={`text-2xl font-black ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}>3/25</span>
                  </div>
                  <div className={`w-full ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  } rounded-full h-3 mt-3`}>
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-[12%] shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Skill Assessment & Learning Paths */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative lg:order-1">
                <div className={`${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    : "bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200/50 shadow-2xl"
                }`}>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className={`${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-5 shadow-lg`}>
                      <div className={`font-bold mb-2 text-lg ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        Google Project
                      </div>
                      <div className={`w-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-3`}>
                        <div className="bg-green-500 h-3 rounded-full w-[100%] shadow-sm"></div>
                      </div>
                      <div className="text-green-500 text-sm mt-2 font-semibold">Completed</div>
                    </div>
                    <div className={`${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-5 shadow-lg`}>
                      <div className={`font-bold mb-2 text-lg ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        Meta Challenge
                      </div>
                      <div className={`w-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-3`}>
                        <div className="bg-blue-500 h-3 rounded-full w-[75%] shadow-sm"></div>
                      </div>
                      <div className="text-blue-500 text-sm mt-2 font-semibold">
                        In Progress
                      </div>
                    </div>
                    <div className={`${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-5 shadow-lg`}>
                      <div className={`font-bold mb-2 text-lg ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>Microsoft Task</div>
                      <div className={`w-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-3`}>
                        <div className="bg-yellow-500 h-3 rounded-full w-[30%] shadow-sm"></div>
                      </div>
                      <div className="text-yellow-500 text-sm mt-2 font-semibold">Started</div>
                    </div>
                    <div className={`${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-5 shadow-lg`}>
                      <div className={`font-bold mb-2 text-lg ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        Netflix System
                      </div>
                      <div className={`w-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-3`}>
                        <div className="bg-gray-400 h-3 rounded-full w-[0%] shadow-sm"></div>
                      </div>
                      <div className="text-gray-400 text-sm mt-2 font-semibold">
                        Not Started
                      </div>
                    </div>
                  </div>
                  <div className={`${
                    isDarkMode ? "bg-purple-500/20" : "bg-purple-100"
                  } rounded-xl p-6 shadow-lg`}>
                    <div className={`font-bold mb-3 text-lg ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}>
                      Next Recommended Project
                    </div>
                    <div className={`${
                      isDarkMode ? "text-purple-300" : "text-purple-700"
                    } font-medium`}>
                      Complete "Amazon E-commerce System Design" - Build scalable microservices architecture
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:order-2">
                <div className={`inline-flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-bold ${
                  isDarkMode
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-blue-600/10 text-blue-700 border border-blue-200/50"
                }`}>
                  <Target className="w-5 h-5" />
                  <span>Personalized Learning</span>
                </div>
                <h3 className={`text-4xl md:text-5xl font-black leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`} style={{ lineHeight: '1.1' }}>
                  <span className={`bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-400 to-purple-400"
                      : "from-blue-600 via-indigo-600 to-purple-600"
                  } bg-clip-text text-transparent`}>
                    Real Company
                  </span>{" "}
                  Projects
                </h3>
                <p className={`text-xl leading-relaxed font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`} style={{ lineHeight: '1.8' }}>
                  Work on actual problem statements from leading tech companies. Solve real-world challenges used by Google, Microsoft, Meta, and other top organizations for their hiring process.
                </p>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className={`text-lg font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Problems from FAANG companies
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className={`text-lg font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Industry-level complexity projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className={`text-lg font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      100+ real problem statements
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/learn?page=RealCompanyProjects')}
                  className={`group font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-3 shadow-xl ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-blue-500/25"
                    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-blue-500/25"
                } focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                aria-label="Start real company projects">
                  <span>Start Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Feature 3: Competitions & Hackathons */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm ${
                  isDarkMode
                    ? "bg-green-500/20 text-green-300"
                    : "bg-green-100/80 text-green-700"
                }`}>
                  <Users className="w-4 h-4" />
                  <span>Competitive Programming</span>
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Master{" "}
                  <span className={`bg-gradient-to-r ${
                    isDarkMode
                      ? "from-green-400 to-blue-400"
                      : "from-green-600 to-blue-600"
                  } bg-clip-text text-transparent`}>
                    Competitions
                  </span>
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  Participate in coding competitions, hackathons, and programming challenges. Compete with peers globally and showcase your skills to potential employers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Weekly coding competitions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Global hackathon participation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Industry-sponsored challenges
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/learn?page=CompetitionsHackathons')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Join Competition</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <div className={`${
                  isDarkMode
                    ? "bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    : "bg-gradient-to-br from-green-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-200/50 shadow-2xl"
                }`}>
                  <div className="space-y-4">
                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-4 shadow-lg`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🏆</span>
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}>
                          CodeChef Weekly Challenge
                        </div>
                        <div className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Algorithm & Data Structures
                        </div>
                      </div>
                      <div className="ml-auto bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                        Live
                      </div>
                    </div>
                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-4 shadow-lg`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">💻</span>
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}>Tech Hackathon 2025</div>
                        <div className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>AI & Machine Learning</div>
                      </div>
                      <div className="ml-auto bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        48hrs
                      </div>
                    </div>
                    <div className={`${
                      isDarkMode ? "bg-purple-500/20" : "bg-purple-100"
                    } rounded-xl p-4`}>
                      <div className={`font-semibold mb-1 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        Leaderboard Position
                      </div>
                      <div className={`text-sm ${
                        isDarkMode ? "text-purple-300" : "text-purple-700"
                      }`}>
                        Rank #23 out of 2,847 participants
                      </div>
                      <div className={`text-xs mt-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        850 points earned this week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Aptitude Learning Platforms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm ${
                  isDarkMode
                    ? "bg-orange-500/20 text-orange-300"
                    : "bg-orange-100/80 text-orange-700"
                }`}>
                  <Brain className="w-4 h-4" />
                  <span>Aptitude Mastery</span>
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Advanced{" "}
                  <span className={`bg-gradient-to-r ${
                    isDarkMode
                      ? "from-orange-400 to-red-400"
                      : "from-orange-600 to-red-600"
                  } bg-clip-text text-transparent`}>
                    Aptitude Training
                  </span>
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  Master quantitative aptitude, logical reasoning, and verbal ability with our adaptive learning platform. Prepare for placement tests, entrance exams, and competitive assessments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Quantitative & Logical Reasoning
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Verbal & Analytical Ability
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Adaptive difficulty algorithms
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/learn?page=AptitudeLearningPlatforms')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Start Aptitude Test</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <div className={`${
                  isDarkMode
                    ? "bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    : "bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-200/50 shadow-2xl"
                }`}>
                  <div className="space-y-4">
                    <div className={`${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-4 shadow-lg`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}>
                          Quantitative Aptitude
                        </div>
                        <div className={`text-sm ${
                          isDarkMode ? "text-orange-300" : "text-orange-600"
                        }`}>
                          Level: Advanced
                        </div>
                      </div>
                      <div className={`w-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-2 mb-2`}>
                        <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-[85%]"></div>
                      </div>
                      <div className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        850/1000 questions completed
                      </div>
                    </div>
                    
                    <div className={`${
                      isDarkMode ? "bg-black/40" : "bg-white/90 border border-gray-200"
                    } rounded-xl p-4 shadow-lg`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}>
                          Logical Reasoning
                        </div>
                        <div className={`text-sm ${
                          isDarkMode ? "text-blue-300" : "text-blue-600"
                        }`}>
                          Level: Intermediate
                        </div>
                      </div>
                      <div className={`w-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-2 mb-2`}>
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[72%]"></div>
                      </div>
                      <div className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        720/1000 questions completed
                      </div>
                    </div>

                    <div className={`${
                      isDarkMode ? "bg-green-500/20" : "bg-green-100"
                    } rounded-xl p-4`}>
                      <div className={`font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        Today's Challenge
                      </div>
                      <div className={`text-sm ${
                        isDarkMode ? "text-green-300" : "text-green-700"
                      }`}>
                        Solve 10 probability problems
                      </div>
                      <div className={`text-xs mt-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        7/10 completed • 15 min remaining
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Feature Modules Section */}
      <NewFeatureModules />

      {/* Testimonials Section */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? "bg-black/20" : "bg-gradient-to-b from-slate-50 to-blue-50"
      }`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`text-5xl md:text-6xl font-black mb-6 tracking-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`} style={{ lineHeight: '1.1' }}>
            Meet Our{" "}
            <span className={`bg-gradient-to-r ${
              isDarkMode
                ? "from-purple-400 to-pink-400"
                : "from-purple-600 via-pink-600 to-red-500"
            } bg-clip-text text-transparent`}>
              Team
            </span>
          </h2>
          <p className={`text-xl mb-20 font-medium max-w-3xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`} style={{ lineHeight: '1.7' }}>
            Meet the innovative minds behind CareerPilot AI - experienced professionals and educators dedicated to transforming career preparation through technology.
          </p>

          <div className="relative">
            <div className={`${
              isDarkMode
                ? "bg-white/10 backdrop-blur-sm border border-white/10"
                : "bg-white/95 backdrop-blur-sm border-2 border-gray-200/50 shadow-2xl shadow-blue-500/10"
            } rounded-3xl p-10 md:p-16`}>
              <div className="flex justify-center mb-8">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : "bg-gradient-to-r from-blue-500 to-purple-500"
                } text-white`}>
                  {teamMembers[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <blockquote className={`text-2xl md:text-3xl mb-10 leading-relaxed font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`} style={{ lineHeight: '1.6' }}>
                &quot;{teamMembers[currentTestimonial].content}&quot;
              </blockquote>

              <div>
                <div className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {teamMembers[currentTestimonial].name}
                </div>
                <div className={`text-lg font-medium ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}>
                  {teamMembers[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-3 mt-10">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? `w-12 ${isDarkMode ? "bg-purple-400" : "bg-purple-600"}`
                      : `w-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"} hover:${isDarkMode ? "bg-gray-500" : "bg-gray-400"}`
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
