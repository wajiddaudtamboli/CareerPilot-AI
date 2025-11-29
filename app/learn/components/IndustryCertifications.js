"use client";
import React, { useState } from "react";
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Star, 
  TrendingUp, 
  Users, 
  BookOpen,
  ExternalLink,
  Play
} from "lucide-react";

const IndustryCertifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("cloud");
  const [enrolledCerts, setEnrolledCerts] = useState(new Set());

  const certificationCategories = {
    cloud: {
      title: "Cloud Computing",
      icon: "☁️",
      color: "blue",
      certifications: [
        {
          id: "aws-saa",
          title: "AWS Solutions Architect Associate",
          provider: "Amazon Web Services",
          level: "Associate",
          duration: "3-4 months",
          rating: 4.8,
          students: 125000,
          price: "$150",
          skills: ["AWS Architecture", "EC2", "S3", "VPC", "Security"],
          description: "Design and deploy scalable, highly available systems on AWS",
          examCode: "SAA-C03",
          validity: "3 years"
        },
        {
          id: "azure-fundamentals",
          title: "Microsoft Azure Fundamentals",
          provider: "Microsoft",
          level: "Fundamental",
          duration: "1-2 months",
          rating: 4.7,
          students: 98000,
          price: "$99",
          skills: ["Azure Services", "Cloud Concepts", "Security", "Pricing"],
          description: "Understand cloud concepts and Azure services fundamentals",
          examCode: "AZ-900",
          validity: "No expiration"
        },
        {
          id: "gcp-ace",
          title: "Google Cloud Associate Engineer",
          provider: "Google Cloud",
          level: "Associate",
          duration: "2-3 months",
          rating: 4.6,
          students: 87000,
          price: "$125",
          skills: ["GCP Services", "Compute Engine", "Kubernetes", "BigQuery"],
          description: "Deploy applications and monitor operations on Google Cloud",
          examCode: "Associate Cloud Engineer",
          validity: "2 years"
        }
      ]
    },
    development: {
      title: "Software Development",
      icon: "💻",
      color: "green",
      certifications: [
        {
          id: "oracle-java",
          title: "Oracle Certified Professional Java Developer",
          provider: "Oracle",
          level: "Professional",
          duration: "4-6 months",
          rating: 4.9,
          students: 156000,
          price: "$245",
          skills: ["Java 11", "OOP", "Collections", "Concurrency", "JVM"],
          description: "Master Java programming with enterprise-level expertise",
          examCode: "1Z0-819",
          validity: "No expiration"
        },
        {
          id: "microsoft-dotnet",
          title: "Microsoft .NET Developer Certification",
          provider: "Microsoft",
          level: "Associate",
          duration: "3-4 months",
          rating: 4.7,
          students: 89000,
          price: "$165",
          skills: ["C#", ".NET Core", "ASP.NET", "Entity Framework"],
          description: "Build modern applications using .NET framework",
          examCode: "AZ-204",
          validity: "2 years"
        },
        {
          id: "python-institute",
          title: "Python Institute PCPP Certification",
          provider: "Python Institute",
          level: "Professional",
          duration: "2-3 months",
          rating: 4.5,
          students: 73000,
          price: "$195",
          skills: ["Advanced Python", "OOP", "GUI", "Network Programming"],
          description: "Advanced Python programming for professional development",
          examCode: "PCPP-32-101",
          validity: "Lifetime"
        }
      ]
    },
    data: {
      title: "Data & Analytics",
      icon: "📊",
      color: "purple",
      certifications: [
        {
          id: "aws-data-analytics",
          title: "AWS Certified Data Analytics Specialty",
          provider: "Amazon Web Services",
          level: "Specialty",
          duration: "4-5 months",
          rating: 4.8,
          students: 67000,
          price: "$300",
          skills: ["Data Lakes", "Analytics", "Machine Learning", "Visualization"],
          description: "Design and implement AWS data analytics solutions",
          examCode: "DAS-C01",
          validity: "3 years"
        },
        {
          id: "google-data-engineer",
          title: "Google Cloud Professional Data Engineer",
          provider: "Google Cloud",
          level: "Professional",
          duration: "3-4 months",
          rating: 4.7,
          students: 45000,
          price: "$200",
          skills: ["BigQuery", "Dataflow", "Pub/Sub", "ML Models"],
          description: "Design and build data processing systems on GCP",
          examCode: "Professional Data Engineer",
          validity: "2 years"
        },
        {
          id: "tableau-desktop",
          title: "Tableau Desktop Certified Associate",
          provider: "Tableau",
          level: "Associate",
          duration: "2-3 months",
          rating: 4.6,
          students: 92000,
          price: "$250",
          skills: ["Data Visualization", "Analytics", "Dashboards", "Calculations"],
          description: "Create compelling data visualizations and dashboards",
          examCode: "Desktop Certified Associate",
          validity: "2 years"
        }
      ]
    },
    security: {
      title: "Cybersecurity",
      icon: "🔒",
      color: "red",
      certifications: [
        {
          id: "cissp",
          title: "Certified Information Systems Security Professional",
          provider: "ISC2",
          level: "Expert",
          duration: "6-8 months",
          rating: 4.9,
          students: 134000,
          price: "$749",
          skills: ["Security Architecture", "Risk Management", "Cryptography"],
          description: "Industry gold standard for information security professionals",
          examCode: "CISSP",
          validity: "3 years"
        },
        {
          id: "ceh",
          title: "Certified Ethical Hacker",
          provider: "EC-Council",
          level: "Professional",
          duration: "3-4 months",
          rating: 4.7,
          students: 98000,
          price: "$1199",
          skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security"],
          description: "Learn ethical hacking techniques and security testing",
          examCode: "312-50",
          validity: "3 years"
        }
      ]
    }
  };

  const handleEnroll = (certId) => {
    setEnrolledCerts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(certId)) {
        newSet.delete(certId);
      } else {
        newSet.add(certId);
      }
      return newSet;
    });
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500 text-blue-500 border-blue-500",
      green: "bg-green-500 text-green-500 border-green-500", 
      purple: "bg-purple-500 text-purple-500 border-purple-500",
      red: "bg-red-500 text-red-500 border-red-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Industry-Leading{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn recognized certifications from top tech companies and validate your skills with 
            industry-standard credentials that employers trust worldwide.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(certificationCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === key
                  ? `bg-${category.color}-500 text-white shadow-lg`
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificationCategories[selectedCategory].certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${
                  getColorClasses(certificationCategories[selectedCategory].color).split(' ')[0]
                }`}>
                  <Award className="w-8 h-8" />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.level === "Expert" ? "bg-red-100 text-red-700" :
                  cert.level === "Professional" ? "bg-purple-100 text-purple-700" :
                  cert.level === "Associate" ? "bg-blue-100 text-blue-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  {cert.level}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.provider}</p>
              <p className="text-sm text-gray-500 mb-6">{cert.description}</p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{cert.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{cert.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{cert.duration}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills You'll Learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Exam Details */}
              <div className="border-t pt-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Exam Code:</span>
                    <div className="font-semibold text-gray-700">{cert.examCode}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Validity:</span>
                    <div className="font-semibold text-gray-700">{cert.validity}</div>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">{cert.price}</span>
                  <span className="text-gray-500 text-sm ml-1">USD</span>
                </div>
                <button
                  onClick={() => handleEnroll(cert.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 ${
                    enrolledCerts.has(cert.id)
                      ? "bg-green-500 text-white"
                      : `bg-${certificationCategories[selectedCategory].color}-500 text-white hover:bg-${certificationCategories[selectedCategory].color}-600`
                  }`}
                >
                  {enrolledCerts.has(cert.id) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Enrolled</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Enroll</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Certified?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>View All Certifications</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center justify-center space-x-2">
                <span>Schedule Consultation</span>
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCertifications;