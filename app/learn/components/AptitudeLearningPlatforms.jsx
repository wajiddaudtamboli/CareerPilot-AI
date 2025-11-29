"use client";
import React from "react";
import { Brain, ArrowRight } from "lucide-react";

const platforms = [
  { name: "HackerRank", url: "https://www.hackerrank.com/domains/algorithms", desc: "Practice algorithms and data structures with timed challenges." },
  { name: "Codeforces", url: "https://codeforces.com/", desc: "Competitive programming rounds to improve problem-solving speed." },
  { name: "LeetCode", url: "https://leetcode.com/", desc: "Interview-focused problems with detailed discussions and solutions." },
  { name: "GeeksforGeeks Aptitude", url: "https://www.geeksforgeeks.org/quantitative-aptitude/", desc: "Quantitative aptitude topics with explanations and quizzes." },
  { name: "TalentSprint Aptitude", url: "https://talentsprint.com/aptitude", desc: "Practice aptitude tests with topic-wise assessments." },
  { name: "Edabit", url: "https://edabit.com/challenges", desc: "Beginner-friendly coding puzzles to build fundamentals." },
];

export default function AptitudeLearningPlatforms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Aptitude & Problem-Solving Platforms</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Boost your aptitude and problem-solving skills with curated platforms. Start with beginner-friendly sites and progress to competitive programming rounds.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900 hover:border-blue-600 transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h2>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
