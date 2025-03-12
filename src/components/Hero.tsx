import { useEffect, useState } from "react";
import { FaArrowRight, FaReact, FaJava, FaGithub, FaDatabase, FaDocker, FaGit } from "react-icons/fa";
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
  SiNeo4J 
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
      {/* Floating Tech Icons */}
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
        {/* Enhanced background elements */}
        <div className="hero-bg-elements">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
          <div className="hero-shape shape-4"></div> {/* New shape for improved visual effect */}
        </div>

        {/* Updated professional tag line */}
        <div className="hero-tag professional-tag">
          <span className="hero-icon">
            <SiTensorflow className="ml-icon" />
          </span>
          <span>Machine Learning Researcher & Backend Engineer</span>
        </div>

        {/* Main title */}
        <h1 className="hero-title">
          Hi, I'm{" "}
          <span className="highlight gradient-animated">Md. Mahbub Alam</span>
        </h1>

        {/* Updated subtitle with more technical focus */}
        <p className="hero-subtitle">
          Building{" "}
          <span className="hero-emphasis">scalable systems</span>{" "}
          and <span className="hero-emphasis">intelligent solutions</span> with cutting-edge technology
        </p>

        {/* Specialized typing animation for ML/Backend */}
        <div className="typing-wrapper">
          <div className="typing-container tech-typing">
            <div className="typing-slider centered-slider">
              <div className="typing-slide">TensorFlow & PyTorch Expert</div>
              <div className="typing-slide">Microservices Architecture</div>
              <div className="typing-slide">Natural Language Processing</div>
              <div className="typing-slide">Spring Boot & Java</div>
            </div>
          </div>
        </div>

        {/* Updated call-to-action buttons */}
        <div
          className="hero-buttons"
          style={{ position: "relative", zIndex: 20 }}
        >
          <a
            href="#projects"
            onClick={(e) => scrollToSection("projects", e)}
            className="primary-button"
            style={{ position: "relative", zIndex: 20 }}
          >
            View Research<FaArrowRight className="button-icon" />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className="outline-button"
            style={{ position: "relative", zIndex: 20 }}
          >
            Contact Me
          </a>
        </div>
        
        {/* Technical badges - new element to showcase key technologies */}
        <div className="hero-tech-badges">
          <div className="tech-badge ml-badge">Machine Learning</div>
          <div className="tech-badge backend-badge">Backend Systems</div>
          <div className="tech-badge cloud-badge">Cloud Architecture</div>
          <div className="tech-badge data-badge">Data Engineering</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
