"use client";

import { Brain, Lightbulb, Play, ShieldCheck, Users, ExternalLink, Globe } from "lucide-react";
import {
  SiLinkedin,
  SiCoursera,
  SiUdemy,
  SiSkillshare,
  SiEdx,
} from "react-icons/si";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { AiSoftSkillQuestion } from '../../../config/AiModels';

const softSkillsPlatforms = [
  { name: "LinkedIn Learning", icon: SiLinkedin, url: "https://www.linkedin.com/learning/", color: "#0A66C2" },
  { name: "Coursera", icon: SiCoursera, url: "https://www.coursera.org/", color: "#0056D3" },
  { name: "Udemy", icon: SiUdemy, url: "https://www.udemy.com/", color: "#A435F0" },
  { name: "Skillshare", icon: SiSkillshare, url: "https://www.skillshare.com/", color: "#00FF88" },
  { name: "edX", icon: SiEdx, url: "https://www.edx.org/", color: "#02262F" },
  { name: "Toastmasters", icon: Globe, url: "https://www.toastmasters.org/", color: "#004165" },
  { name: "MindTools", icon: Globe, url: "https://www.mindtools.com/", color: "#FF6B35" },
  { name: "Alison", icon: Globe, url: "https://alison.com/", color: "#00A651" },
  { name: "FutureLearn", icon: Globe, url: "https://www.futurelearn.com/", color: "#DE3A80" },
  { name: "Communication Coach AI", icon: Globe, url: "https://www.yoodli.ai/", color: "#6366F1" }
];

const SoftSkillFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg mb-3">
    <Icon className="h-8 w-8 text-blue-600" />
    <div>
      <h3 className="font-semibold text-blue-900">{title}</h3>
      <p className="text-sm text-blue-700">{description}</p>
    </div>
  </div>
);

const SoftSkillAssessmentPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const startAssessment = async () => {
    setLoading(true);
    setError(null);
    const prompt = `generate a list of open-ended questions that will assess the student's soft skills through the response given. Use scenarios or examples relevant to the following branch: Computer Science. It could target each soft skill such as communication, teamwork, problem-solving, adaptability, leadership, or conflict resolution. Ensure that questions are designed to elicit detailed reflection from the student and can be used in professional or an academic environment. Provide 1-2 questions per skill and label which soft skill each question addresses.in json formate.`;

    try {
      const results = await AiSoftSkillQuestion.sendMessage(prompt);
      const responseText = await results.response.text();
      const parsedQuestions = JSON.parse(responseText);
      localStorage.setItem(
        "softSkillQuestions",
        JSON.stringify(parsedQuestions)
      );
      router.push("/preparation/softskill/assessment");
    } catch (error) {
      console.error("Error generating questions:", error);
      setError("Failed to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const softSkillFeatures = [
    {
      icon: Lightbulb,
      title: "Personalized Insights",
      description: "Tailored assessment to reveal your unique strengths",
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Evaluation",
      description: "Deep dive into critical professional skills",
    },
    {
      icon: Brain,
      title: "Skill Development",
      description: "Identify areas for personal and professional growth",
    },
    {
      icon: Users,
      title: "Workplace Readiness",
      description: "Prepare for success in collaborative environments",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Soft Skills Assessment</h1>
          <p className="text-xl text-gray-600">Unlock Your Professional Potential</p>
        </div>

        {/* Assessment Card */}
        <Card className="border-2 border-blue-100 shadow-2xl rounded-2xl overflow-hidden mb-8">
          <div className="bg-blue-600 text-white p-8 text-center">
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Professional Skills Evaluation</h2>
            <p className="text-blue-100">Comprehensive assessment of your workplace readiness</p>
          </div>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {softSkillFeatures.map((feature, index) => (
                <SoftSkillFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="text-center">
              <Button
                onClick={startAssessment}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 px-12 py-4 text-lg"
              >
                <Play className="h-6 w-6" />
                <span>
                  {loading ? "Generating Assessment..." : "Begin Assessment"}
                </span>
              </Button>
              <p className="text-center text-sm text-gray-600 mt-4">
                Estimated Time: 10-15 minutes • AI-Generated Questions
              </p>
            </div>
          </CardContent>
        </Card>

        {/* A-to-Z Soft Skills Learning Platforms */}
        <Card className="border-2 border-blue-100 shadow-2xl rounded-2xl overflow-hidden mt-8">
          <div className="bg-blue-600 text-white p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Soft Skills Learning Platforms</h2>
            <p className="text-blue-100">Enhance your professional skills with these platforms</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkillsPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-gray-200 hover:border-blue-400">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 rounded-lg bg-gray-100" style={{ color: platform.color }}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">{platform.name}</h3>
                        <p className="text-xs text-gray-600 truncate">{platform.url}</p>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SoftSkillAssessmentPage;
