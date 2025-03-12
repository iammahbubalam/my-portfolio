import { useEffect, useState, useRef, useMemo } from "react";
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
  FaRobot,
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
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Skills data - Machine Learning / Deep Learning focused
  const mlDlSkills = useMemo(() => [
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
  ], []);

  // Backend Development Skills
  const backendSkills = useMemo(() => [
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
  ], []);

  // Infrastructure & DevOps Skills
  const infrastructureSkills = useMemo(() => [
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
  ], []);

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

  // Enhanced 3D tilt effect with smoother transitions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // More subtle rotation for professional look
      const rotateX = (centerY - y) / 30;
      const rotateY = (x - centerX) / 30;
      
      // Add more sophisticated transform with subtle elevation
      card.style.transform = `translateY(-5px) translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      // Add highlight effect on hover
      const iconElement = card.querySelector('.skill-icon') as HTMLElement;
      if (iconElement) {
        iconElement.style.transform = 'translateZ(40px) scale(1.1)';
        iconElement.style.filter = 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))';
      }
      
      const nameElement = card.querySelector('.skill-name') as HTMLElement;
      if (nameElement) {
        nameElement.style.transform = 'translateZ(30px)';
        nameElement.style.textShadow = '0 5px 10px rgba(0, 0, 0, 0.3)';
      }
    };

    const handleMouseLeave = (card: HTMLDivElement) => {
      // Smooth transition back with subtle animation
      card.style.transform = `translateY(0) translateZ(0) rotateX(0) rotateY(0)`;
      
      const iconElement = card.querySelector('.skill-icon') as HTMLElement;
      if (iconElement) {
        iconElement.style.transform = 'translateZ(0) scale(1)';
        iconElement.style.filter = 'none';
      }
      
      const nameElement = card.querySelector('.skill-name') as HTMLElement;
      if (nameElement) {
        nameElement.style.transform = 'translateZ(0)';
        nameElement.style.textShadow = 'none';
      }
    };

    cardsRef.current.forEach((card) => {
      if (card) {
        // Add professional styling to each card
        card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        card.style.border = '1px solid rgba(255, 255, 255, 0.05)';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.style.transform = 'translateZ(0)';
        
        // Add event listeners
        card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
        card.addEventListener("mouseleave", () => handleMouseLeave(card));
        
        // Add professional hover effect
        card.addEventListener("mouseenter", () => {
          card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
          card.style.borderColor = 'rgba(41, 134, 204, 0.3)';
          
          // Add subtle background animation
          const before = document.createElement('div');
          before.style.position = 'absolute';
          before.style.top = '0';
          before.style.left = '0';
          before.style.width = '100%';
          before.style.height = '100%';
          before.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)';
          before.style.opacity = '0';
          before.style.transition = 'opacity 0.5s ease';
          before.style.zIndex = '0';
          before.style.pointerEvents = 'none';
          before.classList.add('card-highlight');
          
          if (!card.querySelector('.card-highlight')) {
            card.appendChild(before);
          }
          
          setTimeout(() => {
            before.style.opacity = '1';
          }, 10);
        });
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", (e) =>
            handleMouseMove(e as MouseEvent, card)
          );
          card.removeEventListener("mouseleave", () => handleMouseLeave(card));
        }
      });
    };
  }, [isVisible]);

  // Reset refs array when skills data changes
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(
      0,
      mlDlSkills.length + backendSkills.length + infrastructureSkills.length
    );
  }, [mlDlSkills, backendSkills, infrastructureSkills]);

  return (
    <section
      id="skills"
      className={`skills-section ${isVisible ? "visible" : ""}`}
      style={{
        padding: '8rem 0', // Increased padding for better spacing
        position: 'relative',
      }}
    >
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        {/* Machine Learning & Deep Learning Section */}
        <div className="skill-category" style={{ marginBottom: '5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            position: 'relative'
          }}>
            <div style={{
              width: '6px',
              height: '30px',
              backgroundColor: '#FF6F00', // ML color
              borderRadius: '3px',
              marginRight: '15px'
            }}></div>
            <h3 className="category-title" style={{ 
              fontSize: '1.8rem',
              margin: 0,
              padding: 0,
              border: 'none',
              color: '#fff',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}>Machine Learning & Deep Learning</h3>
          </div>
          
          <div className="skill-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', /* Changed from 280px to 220px */
            gap: '1.5rem' /* Reduced from 2rem to 1.5rem */
          }}>
            {mlDlSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                ref={(el) => { cardsRef.current[index] = el; }}
                style={{
                  backgroundColor: 'rgba(15, 48, 73, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px', /* Reduced from 12px */
                  padding: '1.6rem 1.2rem', /* Reduced from 2rem */
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div className="skill-icon" style={{
                  fontSize: '2.8rem', /* Reduced from 3.2rem */
                  marginBottom: '1.2rem', /* Reduced from 1.6rem */
                  color: '#FF6F00', // Machine Learning color
                  transition: 'all 0.5s ease'
                }}>
                  <skill.icon />
                </div>
                <h4 className="skill-name" style={{
                  fontSize: '1.2rem', /* Reduced from 1.3rem */
                  fontWeight: '600',
                  marginBottom: '0.8rem', /* Reduced from 1rem */
                  textAlign: 'center',
                  transition: 'all 0.5s ease'
                }}>{skill.name}</h4>
                <p className="skill-description" style={{
                  fontSize: '0.9rem', /* Reduced from 0.95rem */
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  lineHeight: '1.5', /* Reduced from 1.6 */
                  margin: 0
                }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Development Section */}
        <div className="skill-category" style={{ marginBottom: '5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            position: 'relative'
          }}>
            <div style={{
              width: '6px',
              height: '30px',
              backgroundColor: '#0077B6', // Backend color
              borderRadius: '3px',
              marginRight: '15px'
            }}></div>
            <h3 className="category-title" style={{ 
              fontSize: '1.8rem',
              margin: 0,
              padding: 0,
              border: 'none',
              color: '#fff',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}>Backend Development</h3>
          </div>
          
          <div className="skill-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', /* Changed from 280px to 220px */
            gap: '1.5rem' /* Reduced from 2rem to 1.5rem */
          }}>
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                ref={(el) => { cardsRef.current[mlDlSkills.length + index] = el; }}
                style={{
                  backgroundColor: 'rgba(15, 48, 73, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px', /* Reduced from 12px */
                  padding: '1.6rem 1.2rem', /* Reduced from 2rem */
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div className="skill-icon" style={{
                  fontSize: '2.8rem', /* Reduced from 3.2rem */
                  marginBottom: '1.2rem', /* Reduced from 1.6rem */
                  color: '#0077B6', // Backend color
                  transition: 'all 0.5s ease'
                }}>
                  <skill.icon />
                </div>
                <h4 className="skill-name" style={{
                  fontSize: '1.2rem', /* Reduced from 1.3rem */
                  fontWeight: '600',
                  marginBottom: '0.8rem', /* Reduced from 1rem */
                  textAlign: 'center',
                  transition: 'all 0.5s ease'
                }}>{skill.name}</h4>
                <p className="skill-description" style={{
                  fontSize: '0.9rem', /* Reduced from 0.95rem */
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  lineHeight: '1.5', /* Reduced from 1.6 */
                  margin: 0
                }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure & DevOps Section */}
        <div className="skill-category" style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            position: 'relative'
          }}>
            <div style={{
              width: '6px',
              height: '30px',
              backgroundColor: '#8344AD', // DevOps color
              borderRadius: '3px',
              marginRight: '15px'
            }}></div>
            <h3 className="category-title" style={{ 
              fontSize: '1.8rem',
              margin: 0,
              padding: 0,
              border: 'none',
              color: '#fff',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}>Infrastructure & DevOps</h3>
          </div>
          
          <div className="skill-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', /* Changed from 280px to 220px */
            gap: '1.5rem' /* Reduced from 2rem to 1.5rem */
          }}>
            {infrastructureSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                ref={(el) => {
                  cardsRef.current[mlDlSkills.length + backendSkills.length + index] = el;
                }}
                style={{
                  backgroundColor: 'rgba(15, 48, 73, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px', /* Reduced from 12px */
                  padding: '1.6rem 1.2rem', /* Reduced from 2rem */
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div className="skill-icon" style={{
                  fontSize: '2.8rem', /* Reduced from 3.2rem */
                  marginBottom: '1.2rem', /* Reduced from 1.6rem */
                  color: '#8344AD', // DevOps color
                  transition: 'all 0.5s ease'
                }}>
                  <skill.icon />
                </div>
                <h4 className="skill-name" style={{
                  fontSize: '1.2rem', /* Reduced from 1.3rem */
                  fontWeight: '600',
                  marginBottom: '0.8rem', /* Reduced from 1rem */
                  textAlign: 'center',
                  transition: 'all 0.5s ease'
                }}>{skill.name}</h4>
                <p className="skill-description" style={{
                  fontSize: '0.9rem', /* Reduced from 0.95rem */
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  lineHeight: '1.5', /* Reduced from 1.6 */
                  margin: 0
                }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
