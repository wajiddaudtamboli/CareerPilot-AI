"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { ExternalLink, Globe } from "lucide-react";
import { 
  SiGithub, 
  SiGoogle, 
  SiKaggle,
  SiCodeforces,
  SiIeee
} from "react-icons/si";
import { Lightbulb, Trophy, Code, Palette } from "lucide-react";

const ProjectsPlatforms = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const platforms = [
    { name: "GitHub Issues", icon: SiGithub, url: "https://github.com/issues", color: "#181717" },
    { name: "Google Summer of Code", icon: SiGoogle, url: "https://summerofcode.withgoogle.com/", color: "#4285F4" },
    { name: "Kaggle", icon: SiKaggle, url: "https://www.kaggle.com/", color: "#20BEFF" },
    { name: "DevPost Projects", icon: Code, url: "https://devpost.com/", color: "#003E54" },
    { name: "Unstop Projects", icon: Lightbulb, url: "https://unstop.com/projects", color: "#FF6B35" },
    { name: "HackerEarth Challenges", icon: Code, url: "https://www.hackerearth.com/challenges/", color: "#323754" },
    { name: "Codeforces Gym", icon: SiCodeforces, url: "https://codeforces.com/gyms", color: "#1F8ACB" },
    { name: "Dribbble (UI/UX)", icon: Palette, url: "https://dribbble.com/", color: "#EA4C89" },
    { name: "Behance (UI/UX)", icon: Palette, url: "https://www.behance.net/", color: "#1769FF" },
    { name: "Coderbyte Projects", icon: Code, url: "https://coderbyte.com/", color: "#1E3A8A" },
    { name: "IEEE Project Bank", icon: SiIeee, url: "https://ieee-dataport.org/", color: "#00629B" },
    { name: "Major League Hacking", icon: Trophy, url: "https://mlh.io/", color: "#0F2346" },
    { name: "Open Source Projects", icon: Globe, url: "https://opensource.guide/", color: "#28A745" },
    { name: "Smart India Hackathon", icon: Lightbulb, url: "https://sih.gov.in/", color: "#FF9933" },
    { name: "AAKRUTI Autodesk", icon: Code, url: "https://aakruti.autodesk.com/", color: "#0696D7" },
    { name: "NPTEL/AICTE Projects", icon: Globe, url: "https://internship.aicte-india.org/", color: "#003D82" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'} py-10 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects – Real-World Problem Statements</h1>
          <p className="text-lg opacity-80">Find REAL industry problems and build practical solutions</p>
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

export default ProjectsPlatforms;
