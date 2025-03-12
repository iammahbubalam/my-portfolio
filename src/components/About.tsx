import { useEffect, useState } from "react";
import {
  FaBrain,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaNetworkWired,
} from "react-icons/fa";

import me from "../assets/me.jpeg";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* Left side - Image, highlights and research focus */}
          <div className="about-image-wrapper">
            <img src={me} alt="Md. Mahbub Alam" className="about-image" />

            {/* Balanced highlights box for both ML Research and Backend Engineering */}
            <div className="highlights-box">
              <h3>Dual Expertise</h3>

              <div className="highlight-items">
                {/* ML Research Section */}
                <div className="highlight-item">
                  <div className="highlight-icon ml-icon">
                    <FaBrain />
                  </div>
                  <div>
                    <h4>Advanced AI Research</h4>
                    <p>NLP, LLMs & Image Generation</p>
                  </div>
                </div>

                {/* Backend Engineering Section */}
                <div className="highlight-item">
                  <div className="highlight-icon backend-icon">
                    <FaLayerGroup />
                  </div>
                  <div>
                    <h4>Robust Backend Systems</h4>
                    <p>Scalable distributed architecture</p>
                  </div>
                </div>

                {/* Integration of Both */}
                <div className="highlight-item">
                  <div className="highlight-icon integration-icon">
                    <FaNetworkWired />
                  </div>
                  <div>
                    <h4>AI-Powered Systems</h4>
                    <p>Bridging research and production</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Moved Research & Development Focus to left column */}
            <div className="research-interests">
              <h3>Current Research & Development Focus</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <FaBrain className="interest-icon" />
                  <h4>Multimodal LLMs</h4>
                  <p>Integrating vision and language capabilities</p>
                </div>
                <div className="interest-item">
                  <FaDatabase className="interest-icon" />
                  <h4>RAG Systems</h4>
                  <p>Efficient retrieval-augmented generation</p>
                </div>
                <div className="interest-item">
                  <FaServer className="interest-icon" />
                  <h4>Distributed System</h4>
                  <p>High Performance and Scalable Distributed System</p>
                </div>
                <div className="interest-item">
                  <FaLayerGroup className="interest-icon" />
                  <h4>High-Performance APIs</h4>
                  <p>Reactive microservices with Spring WebFlux</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About content & Core Competencies */}
          <div className="about-content">
            <h3 className="about-subtitle">
              Machine Learning Researcher & Backend Engineer
            </h3>

            <p className="about-text">
              I work at the intersection of cutting-edge ML research and
              scalable backend engineering. On the research side, I specialize
              in transformer architectures, large language models, and
              generative AI for both text and images. As a backend engineer, I
              design robust distributed systems, microservices, and data
              pipelines that can handle enterprise-scale workloads.
            </p>

            <p className="about-text">
              My dual expertise allows me to bridge the gap between theoretical
              advancements and production-ready implementations. I develop
              high-performance ML pipelines and APIs that make complex AI
              capabilities accessible through well-designed backends. This
              combination of skills enables me to build complete, end-to-end AI
              systems that are both innovative and production-ready.
            </p>

            <p className="about-text">
              I'm equally passionate about pushing boundaries in ML
              research—exploring techniques like parameter-efficient fine-tuning
              and multimodal learning—and creating elegant backend solutions
              using microservice architecture, message queues, and distributed
              computing frameworks that can reliably serve these advanced models
              at scale.
            </p>

            {/* Core Competencies stays in right column */}
            <div className="skills-overview">
              <h3>Core Competencies</h3>
              <div className="competency-bars">
                {/* ML Research Competencies */}
                <div className="competency-item">
                  <div className="competency-header">
                    <span>NLP & Large Language Models</span>
                    <span className="competency-level">Expert</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                {/* Backend Engineering Competencies */}
                <div className="competency-item">
                  <div className="competency-header">
                    <span>Backend Architecture</span>
                    <span className="competency-level">Expert</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                {/* More ML Research */}
                <div className="competency-item">
                  <div className="competency-header">
                    <span>Image Generation & Multimodal AI</span>
                    <span className="competency-level">Advanced</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                {/* More Backend */}
                <div className="competency-item">
                  <div className="competency-header">
                    <span>Distributed Systems</span>
                    <span className="competency-level">Advanced</span>
                  </div>
                  <div className="competency-bar">
                    <div
                      className="competency-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full-width Technologies & Frameworks section */}
        <div className="full-width-section">
          <div className="key-technologies">
            <h3>Technologies & Frameworks</h3>
            <div className="tech-badges">
              {/* ML Research Technologies */}
              <span className="tech-badge ml-tech">TensorFlow</span>
              <span className="tech-badge ml-tech">PyTorch</span>
              <span className="tech-badge ml-tech">Hugging Face</span>

              {/* Backend Technologies */}
              <span className="tech-badge backend-tech">Java</span>
              <span className="tech-badge backend-tech">Spring Boot</span>
              <span className="tech-badge backend-tech">Kafka</span>

              {/* ML Research Technologies */}
              <span className="tech-badge ml-tech">ONNX</span>
              <span className="tech-badge ml-tech">JAX</span>

              {/* Backend Technologies */}
              <span className="tech-badge backend-tech">PostgreSQL</span>
              <span className="tech-badge backend-tech">Redis</span>

              {/* Shared/Integration Technologies */}
              <span className="tech-badge data-tech">Docker</span>
              <span className="tech-badge cloud-tech">Kubernetes</span>
              <span className="tech-badge cloud-tech">MLflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
