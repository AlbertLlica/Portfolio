"use client"

import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiFastapi, SiFlutter} from "react-icons/si"

// about data
const about = {
  "title": "About Me",
  "description": "I am a passionate software developer with a strong background in web development. I have experience working with various programming languages and frameworks, and I am always eager to learn new technologies. I enjoy creating elegant and efficient solutions to complex problems, and I am committed to delivering high-quality work.",
  info: [
    { fieldName: "Name", 
      fieldValue: "Albert Llica" 
    },
    { fieldName: "Phone", 
      fieldValue: "(+51) 971461734" 
    },
    { fieldName: "Experience", 
      fieldValue: "2 years" 
    },
    { fieldName: "Email", 
      fieldValue: "albertllica@gmail.com" 
    },
    { fieldName: "Nationality", 
      fieldValue: "Peruvian" 
    },
    { fieldName: "Freelance", 
      fieldValue: "Available" 
    },
    { fieldName: "Languages", 
      fieldValue: "Spanish, English" 
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  tittle: 'Experience',
  description: 'I have worked on various projects, both independently and as part of a team. I have experience in front-end development, back-end development, and full-stack development. I have also worked on projects involving database management, API development, and cloud computing.',
  items: [
    {
      title: 'Software Developer',
      company: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      title: 'Software Developer',
      company: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      title: 'Software Developer',
      company: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      title: 'Software Developer',
      company: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      title: 'Software Developer',
      company: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
  ]
};

// education data
const education = {
  icon: '/assets/resume/badge.svg',
  tittle: 'Education',
  description: 'I have worked on various projects, both independently and as part of a team. I have experience in front-end development, back-end development, and full-stack development. I have also worked on projects involving database management, API development, and cloud computing.',
  items: [
    {
      institution: 'Software Developer',
      degree: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      institution: 'Software Developer',
      degree: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      institution: 'Software Developer',
      degree: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      institution: 'Software Developer',
      degree: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
    {
      institution: 'Software Developer',
      degree: 'Tech Company',
      duration: 'Jan 2022 - Present',
    },
  ]
};

// skills data
const skills = {
  icon: '/assets/resume/badge.svg',
  tittle: 'Skills',
  description: 'I have worked on various projects, both independently and as part of a team. I have experience in front-end development, back-end development, and full-stack development. I have also worked on projects involving database management, API development, and cloud computing.',
  skilllist: [
    {
      Icon: <FaHtml5/>,
      name: 'HTML5',
    },
    {
      Icon: <FaCss3/>,
      name: 'CSS3',
    },
    {
      Icon: <FaJs/>,
      name: 'JavaScript',
    },
    {
      Icon: <FaReact/>,
      name: 'React',
    },
    {
      Icon: <SiTailwindcss/>,
      name: 'Tailwind CSS',
    },
    {
      Icon: <SiNextdotjs/>,
      name: 'Next.js',
    },
    {
      Icon: <FaNodeJs/>,
      name: 'Node.js',
    },
    {
      Icon: <FaFigma/>,
      name: 'Figma',
    },
    {
      Icon: <FaPython/>,
      name: 'Python',
    },
    {
      Icon: <SiFastapi/>,
      name: 'FastAPI',
    },
    {
      Icon: <SiFlutter/>,
      name: 'Flutter',
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import {motion} from "framer-motion"

const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About Me</TabsTrigger>
          </TabsList>

          {/*content */}
          <div>content</div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume