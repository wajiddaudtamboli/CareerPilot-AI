"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { ExternalLink, Globe, Trophy, Code } from "lucide-react";
import { SiKaggle, SiLeetcode, SiCodeforces } from "react-icons/si";

const CompetitionsHackathons = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const platforms = [
    { name: "Unstop", icon: Trophy, url: "https://unstop.com/", color: "#FF6B35" },
    { name: "Devpost", icon: Code, url: "https://devpost.com/", color: "#003E54" },
    { name: "HackerEarth Competitions", icon: Code, url: "https://www.hackerearth.com/challenges/", color: "#323754" },
    { name: "CodeChef Contests", icon: Code, url: "https://www.codechef.com/contests", color: "#5B4638" },
    { name: "LeetCode Weekly", icon: SiLeetcode, url: "https://leetcode.com/contest/", color: "#FFA116" },
    { name: "Codeforces Contests", icon: SiCodeforces, url: "https://codeforces.com/contests", color: "#1F8ACB" },
    { name: "Kaggle Competitions", icon: SiKaggle, url: "https://www.kaggle.com/competitions", color: "#20BEFF" },
    { name: "Smart India Hackathon", icon: Trophy, url: "https://sih.gov.in/", color: "#FF9933" },
    { name: "Aavishkar Research", icon: Globe, url: "https://avishkar.gov.in/", color: "#138808" },
    { name: "Aakriti Autodesk", icon: Code, url: "https://aakruti.autodesk.com/", color: "#0696D7" },
    { name: "Google Hash Code", icon: Globe, url: "https://codingcompetitionsongoogle.com/hashcode", color: "#4285F4" },
    { name: "ICPC", icon: Trophy, url: "https://icpc.global/", color: "#003D82" },
    { name: "HackTheBox Challenges", icon: Code, url: "https://www.hackthebox.com/", color: "#9FEF00" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'} py-10 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Competitions & Hackathons</h1>
          <p className="text-lg opacity-80">Compete globally and showcase your coding skills</p>
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

export default CompetitionsHackathons;
