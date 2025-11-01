"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ChatBot from "../components/ChatBot";

const componentMap = {
  Projects: dynamic(() => import("./components/Projects")),
  ToolsCompanyUse: dynamic(() =>
    import("./components/ToolsCompanyUse")
  ),
  DayRemains: dynamic(() => import("./components/Days30Preparation")),
  ResumeExtractor: dynamic(() =>
    import("./components/ResumeExtractor")
  ),
  CreatedCourses: dynamic(() => import("./components/CreateCourse")),
  Courses: dynamic(() => import("./components/CreateCourse")), // Add proper mapping for Courses
  SoftSkill: dynamic(() => import("./components/SoftSkill")),
  Roadmaps: dynamic(() => import("./components/Roadmaps")), // AI-powered career roadmaps
  TestAbility: dynamic(() => import("./components/TestAbility")), // Test knowledge component
  Recall: dynamic(() => import("./recall/components/Form")), // Recall learning component
};

const LearnContent = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("../components/Instruction"));
  return (
    <>
      <Component />
      <ChatBot />
    </>
  );
};

const ParamsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LearnContent />
    </Suspense>
  );
};

export default ParamsPage;
