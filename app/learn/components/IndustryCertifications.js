"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { ExternalLink } from "lucide-react";
import { 
  SiCoursera, 
  SiUdemy, 
  SiEdx, 
  SiGoogle, 
  SiAmazonaws, 
  SiMicrosoft, 
  SiIbm, 
  SiOracle, 
  SiRedhat, 
  SiMeta, 
  SiSalesforce, 
  SiCisco, 
  SiHubspot, 
  SiUnity, 
  SiLinkedin 
} from "react-icons/si";
import { Award, Cloud, Shield } from "lucide-react";

const IndustryCertifications = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const certifications = [
    { name: "Coursera", icon: SiCoursera, url: "https://www.coursera.org/", color: "#0056D3" },
    { name: "Udemy", icon: SiUdemy, url: "https://www.udemy.com/", color: "#A435F0" },
    { name: "edX", icon: SiEdx, url: "https://www.edx.org/", color: "#02262F" },
    { name: "Google Career Certificates", icon: SiGoogle, url: "https://grow.google/certificates/", color: "#4285F4" },
    { name: "AWS Certification", icon: SiAmazonaws, url: "https://aws.amazon.com/certification/", color: "#FF9900" },
    { name: "Microsoft Certifications", icon: SiMicrosoft, url: "https://learn.microsoft.com/en-us/certifications/", color: "#0078D4" },
    { name: "IBM SkillsBuild", icon: SiIbm, url: "https://skillsbuild.org/", color: "#054ADA" },
    { name: "Oracle University", icon: SiOracle, url: "https://education.oracle.com/", color: "#F80000" },
    { name: "Red Hat Certifications", icon: SiRedhat, url: "https://www.redhat.com/en/services/certification", color: "#EE0000" },
    { name: "CompTIA Certifications", icon: Shield, url: "https://www.comptia.org/certifications", color: "#C8202F" },
    { name: "Meta Learning Certifications", icon: SiMeta, url: "https://www.meta.com/learn/certifications/", color: "#0668E1" },
    { name: "Salesforce Trailhead", icon: SiSalesforce, url: "https://trailhead.salesforce.com/", color: "#00A1E0" },
    { name: "Cisco Networking Academy", icon: SiCisco, url: "https://www.netacad.com/", color: "#1BA0D7" },
    { name: "HubSpot Academy", icon: SiHubspot, url: "https://academy.hubspot.com/", color: "#FF7A59" },
    { name: "Unity Learn", icon: SiUnity, url: "https://learn.unity.com/", color: "#000000" },
    { name: "Google Cloud Certification", icon: Cloud, url: "https://cloud.google.com/certification", color: "#4285F4" },
    { name: "Azure Certification", icon: SiMicrosoft, url: "https://learn.microsoft.com/en-us/certifications/", color: "#0089D6" },
    { name: "LinkedIn Learning Certifications", icon: SiLinkedin, url: "https://www.linkedin.com/learning/", color: "#0A66C2" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'} py-10 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Industry-Based Certifications</h1>
          <p className="text-lg opacity-80">Earn recognized certifications from top tech companies worldwide</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <a
                key={index}
                href={cert.url}
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
                           style={{ color: cert.color }}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-sm">{cert.name}</h3>
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

export default IndustryCertifications;