import { useEffect, useState } from "react";
import { FaArrowRight, FaCode, FaReact, FaJava, FaGithub, FaDatabase, FaDocker, FaGit } from "react-icons/fa";
import { 
  SiJavascript, 
  SiSpringboot,
  SiMongodb,
  SiPostgresql, 
  SiRedis,
  SiMicrosoftazure,
  SiApachekafka, 
  SiRabbitmq,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiFirebase,
  SiVercel,
  SiKubernetes,
  SiOpencv,
  SiGraphql,
  SiNeo4J // Using Neo4j as an alternative vector/graph database
} from "react-icons/si";
import { TbBrandMeta } from "react-icons/tb";
import "../styles/floating-icons.css";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add fade-in animation when component mounts
    setIsLoaded(true);
  }, []);

  // Add stopPropagation to prevent clicks from reaching particles background
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event bubbling to particles layer

    const section = document.getElementById(sectionId);
    if (section) {
      // Ensure proper scrolling with offset for navbar
      const navbarHeight = 60; // Reduced from 80px to 60px
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Floating Tech Icons - updated with requested technologies */}
      <div className="floating-icons">
        <div className="floating-icon icon1"><FaJava /></div>
        <div className="floating-icon icon2"><SiSpringboot /></div>
        <div className="floating-icon icon3"><FaDatabase /></div>
        <div className="floating-icon icon4"><SiMicrosoftazure /></div> {/* Represents system design/microservices */}
        <div className="floating-icon icon5"><SiPostgresql /></div>
        <div className="floating-icon icon6"><SiNeo4J /></div> {/* Replaced SiPinecone with SiNeo4J */}
        <div className="floating-icon icon7"><SiTensorflow /></div> {/* Machine learning */}
        <div className="floating-icon icon8"><SiPytorch /></div> {/* Deep learning */}
        <div className="floating-icon icon9"><TbBrandMeta /></div> {/* Transformer architecture */}
        <div className="floating-icon icon10"><SiOpencv /></div> {/* Image processing */}
        <div className="floating-icon icon11"><SiOpenai /></div> {/* GPT */}
        <div className="floating-icon icon12"><FaGit /></div>
        <div className="floating-icon icon13"><FaGithub /></div>
        <div className="floating-icon icon14"><SiKubernetes /></div>
        <div className="floating-icon icon15"><SiRabbitmq /></div>
        <div className="floating-icon icon16"><SiApachekafka /></div>
        <div className="floating-icon icon17"><SiRedis /></div>
        <div className="floating-icon icon18"><FaDocker /></div>
        <div className="floating-icon icon19"><SiFirebase /></div>
        <div className="floating-icon icon20"><SiJavascript /></div>
        <div className="floating-icon icon21"><FaReact /></div>
        <div className="floating-icon icon22"><SiMongodb /></div>
        <div className="floating-icon icon23"><SiVercel /></div>
        <div className="floating-icon icon24"><SiGraphql /></div>
      </div>
      
      <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
        {/* Decorative background elements */}
        <div className="hero-bg-elements">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>

        {/* Tag line */}
        <div className="hero-tag">
          <span className="hero-icon">
            <FaCode />
          </span>
          <span>Backend Engineere and Machine Learning Researcher</span>
        </div>

        {/* Main title */}
        <h1 className="hero-title">
          Hi, I'm{" "}
          <span className="highlight gradient-animated">Likhon Sarker</span>
        </h1>

        {/* Subtitle with typing effect */}
        <p className="hero-subtitle">
          I build{" "}
          <span className="hero-emphasis">exceptional digital experiences</span>{" "}
          with modern web technologies
        </p>

        {/* Centered typing animation container without static text */}
        <div className="typing-wrapper">
          <div className="typing-container">
            <div className="typing-slider centered-slider">
              <div className="typing-slide">Javascript & TypeScript Expert</div>
              <div className="typing-slide">React & Next.js Developer</div>
              <div className="typing-slide">MongoDB & PostgreSQL</div>
              <div className="typing-slide">Node.js & Express.js</div>
            </div>
          </div>
        </div>

        {/* Call to action buttons with improved click handling */}
        <div
          className="hero-buttons"
          style={{ position: "relative", zIndex: 20 }}
        >
          <a
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className="primary-button"
            style={{ position: "relative", zIndex: 20 }}
          >
            Contact Me <FaArrowRight className="button-icon" />
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection("projects", e)}
            className="outline-button"
            style={{ position: "relative", zIndex: 20 }}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
