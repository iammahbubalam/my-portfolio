import { motion } from 'framer-motion';
import HeroScene from '../components/3d/HeroScene';
import ParticleBackground from '../components/particles/ParticleBackground';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-light">
                Mahbubul Alam
              </h1>
              <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl text-primary dark:text-primary-light">
                Backend Engineer & AI/ML Researcher
              </h2>
              <p className="mt-6 text-lg text-dark-lighter dark:text-light-darker max-w-lg">
                Crafting robust backend solutions with Spring Boot and exploring 
                cutting-edge AI/ML technologies to solve complex problems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white rounded-md transition-colors duration-300"
                >
                  View Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border border-primary hover:bg-primary/10 dark:border-primary-light dark:hover:bg-primary-light/10 text-primary dark:text-primary-light rounded-md transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <HeroScene />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About me section */}
      <section className="py-16 bg-light-dark/30 dark:bg-dark-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark dark:text-light mb-12">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light dark:bg-dark p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/20 dark:bg-primary-dark/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">Backend Engineering</h3>
                <p className="text-dark-lighter dark:text-light-darker">
                  Expertise in building robust, scalable backend systems using Spring Boot, Java, 
                  and related technologies. Focused on microservices architecture and RESTful APIs.
                </p>
              </div>
              
              <div className="bg-light dark:bg-dark p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 dark:bg-secondary-dark/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-secondary dark:text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">AI/ML Research</h3>
                <p className="text-dark-lighter dark:text-light-darker">
                  Conducting research in machine learning algorithms and artificial intelligence 
                  applications, with focus on NLP and computer vision.
                </p>
              </div>
              
              <div className="bg-light dark:bg-dark p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/20 dark:bg-primary-dark/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">System Architecture</h3>
                <p className="text-dark-lighter dark:text-light-darker">
                  Designing and implementing complex system architectures, focusing on scalability, 
                  security, and performance for enterprise applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured projects section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light">
                Featured Projects
              </h2>
              <Link 
                to="/projects" 
                className="text-primary dark:text-primary-light hover:underline flex items-center"
              >
                View all
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <motion.div 
                className="bg-light dark:bg-dark rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-primary/60 to-secondary/60"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">Microservice Architecture</h3>
                  <p className="text-dark-lighter dark:text-light-darker mb-4">
                    A scalable microservice architecture implemented with Spring Boot, Docker, and Kubernetes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light">Spring Boot</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light">Kubernetes</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light">Docker</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Project Card 2 */}
              <motion.div 
                className="bg-light dark:bg-dark rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-secondary/60 to-primary/60"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">NLP Research System</h3>
                  <p className="text-dark-lighter dark:text-light-darker mb-4">
                    A natural language processing research platform with machine learning models for text analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary dark:bg-secondary-dark/20 dark:text-secondary-light">Python</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary dark:bg-secondary-dark/20 dark:text-secondary-light">TensorFlow</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary dark:bg-secondary-dark/20 dark:text-secondary-light">NLP</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Project Card 3 */}
              <motion.div 
                className="bg-light dark:bg-dark rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-primary/60 to-secondary/60"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">Cloud Database Solution</h3>
                  <p className="text-dark-lighter dark:text-light-darker mb-4">
                    Highly available database system with automatic scaling and failover capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light">AWS</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light">PostgreSQL</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light">Terraform</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 border border-primary hover:bg-primary/10 dark:border-primary-light dark:hover:bg-primary-light/10 text-primary dark:text-primary-light rounded-md transition-colors duration-300"
              >
                Explore All Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary-dark/20 dark:to-secondary-dark/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-6">
              Interested in working together?
            </h2>
            <p className="text-dark-lighter dark:text-light-darker mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white rounded-md transition-colors duration-300 text-lg"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
