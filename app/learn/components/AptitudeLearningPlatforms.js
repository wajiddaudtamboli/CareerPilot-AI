"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { ExternalLink, Globe, Brain } from "lucide-react";

const AptitudeLearningPlatforms = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const platforms = [
    { name: "IndiaBix", icon: Brain, url: "https://www.indiabix.com/", color: "#FF6B35" },
    { name: "FreshersWorld Aptitude", icon: Globe, url: "https://www.freshersworld.com/aptitude-questions-and-answers", color: "#0066CC" },
    { name: "PrepInsta", icon: Brain, url: "https://prepinsta.com/", color: "#4CAF50" },
    { name: "Testbook", icon: Globe, url: "https://testbook.com/", color: "#6C63FF" },
    { name: "BYJU'S Exam Prep", icon: Brain, url: "https://byjusexamprep.com/", color: "#8E44AD" },
    { name: "Unacademy", icon: Globe, url: "https://unacademy.com/", color: "#08BD80" },
    { name: "CareerRide", icon: Brain, url: "https://www.careerride.com/", color: "#E74C3C" },
    { name: "Lofoya Aptitude", icon: Globe, url: "https://www.lofoya.com/", color: "#3498DB" },
    { name: "M4Maths", icon: Brain, url: "https://www.m4maths.com/", color: "#F39C12" },
    { name: "TCY Online", icon: Globe, url: "https://www.tcyonline.com/", color: "#1ABC9C" },
    { name: "Youth4Work Aptitude", icon: Brain, url: "https://www.youth4work.com/", color: "#E67E22" },
    { name: "Oliveboard", icon: Globe, url: "https://www.oliveboard.in/", color: "#9B59B6" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'} py-10 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Aptitude Learning Platforms</h1>
          <p className="text-lg opacity-80">Master logical reasoning, quantitative aptitude, and problem-solving skills</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`rounded-xl shadow-md p-4 hover:scale-[1.01] transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-900 border border-gray-800 hover:border-blue-500'
                    : 'bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                           style={{ color: platform.color }}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-sm">{platform.name}</h3>
                    </div>
                    <ExternalLink className={`w-4 h-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'} group-hover:text-blue-500`} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AptitudeLearningPlatforms;
