import { useEffect, useState } from "react";
import {
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaNetworkWired,
  FaRobot
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch, 
  SiKeras,
  SiScikitlearn,  
  SiOpencv,
  SiSpringboot,
  SiGo,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAmazonaws,
  SiLinux,
  SiKubernetes,
  SiJavascript,
  SiTypescript,
  SiPandas,
} from "react-icons/si";
import { TbGraph, TbApi, TbBrandOpenai } from "react-icons/tb";

const Skills = () => {
  // Animation for sections
  const [isVisible, setIsVisible] = useState(false);

  // Skills data - Machine Learning / Deep Learning focused
  const mlDlSkills = [
    {
      name: "PyTorch",
      icon: SiPytorch,
      description: "Deep learning framework for research and production",
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      description: "End-to-end machine learning platform",
    },
    {
      name: "Keras",
      icon: SiKeras,
      description: "High-level neural networks API",
    },
    {
      name: "LangChain",
      icon: FaRobot, // Replaced with appropriate icon
      description: "Building applications with LLMs through composability",
    },
    {
      name: "LangGraph",
      icon: TbGraph,
      description: "Agent workflows and reasoning frameworks",
    },
    {
      name: "NLP & LLMs",
      icon: FaBrain,
      description: "Natural language processing and large language models",
    },
    {
      name: "NumPy & Pandas",
      icon: SiPandas,
      description: "Scientific computing and data manipulation",
    },
    {
      name: "Scikit-learn",
      icon: SiScikitlearn,
      description: "Machine learning algorithms and tools",
    },
    {
      name: "OpenCV",
      icon: SiOpencv,
      description: "Computer vision and image processing",
    },
    {
      name: "Agentic AI",
      icon: TbBrandOpenai,
      description: "Building intelligent autonomous agents",
    },
    {
      name: "Python",
      icon: FaPython,
      description: "Primary language for ML research and development",
    },
  ];

  // Backend Development Skills
  const backendSkills = [
    {
      name: "Java",
      icon: FaJava,
      description: "Enterprise-grade backend applications",
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      description: "Java-based framework for microservices",
    },
    {
      name: "Go",
      icon: SiGo,
      description: "Efficient, concurrent programming language",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      description: "Versatile language for web development",
    },
    {
      name: "React",
      icon: FaReact,
      description: "Library for building user interfaces",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      description: "JavaScript runtime for server-side applications",
    },
    {
      name: "Express",
      icon: SiExpress,
      description: "Web framework for Node.js",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "NoSQL database for modern applications",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      description: "Advanced relational database system",
    },
    {
      name: "ORM",
      icon: SiPrisma,
      description: "Object-relational mapping tools",
    },
    {
      name: "RESTful API",
      icon: TbApi,
      description: "API design and implementation",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Typed superset of JavaScript",
    },
  ];

  // Infrastructure & DevOps Skills
  const infrastructureSkills = [
    {
      name: "Git",
      icon: FaGitAlt,
      description: "Version control system",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      description: "Collaboration and CI/CD platform",
    },
    {
      name: "AWS",
      icon: SiAmazonaws,
      description: "Cloud computing services",
    },
    {
      name: "Linux",
      icon: SiLinux,
      description: "Operating system for servers and development",
    },
    {
      name: "Docker",
      icon: FaDocker,
      description: "Container platform for consistent environments",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      description: "Container orchestration for scalable deployments",
    },
    {
      name: "Database Design",
      icon: FaDatabase,
      description: "Creating efficient data storage solutions",
    },
    {
      name: "Cloud Architecture",
      icon: FaNetworkWired,
      description: "Designing scalable cloud infrastructures",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skill-category">
          <h3 className="category-title">Machine Learning & Deep Learning</h3>
          <div className="skill-cards">
            {mlDlSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">Backend Development</h3>
          <div className="skill-cards">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">Infrastructure & DevOps</h3>
          <div className="skill-cards">
            {infrastructureSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
