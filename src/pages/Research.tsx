import { motion } from 'framer-motion';
import ParticleBackground from '../components/particles/ParticleBackground';

const researchPapers = [
  {
    id: 1,
    title: 'Optimizing Microservice Communication Patterns',
    abstract: 'An exploration of different communication patterns in microservice architectures and their performance implications.',
    publication: 'IEEE Software Engineering Conference',
    year: '2023',
    link: '#',
  },
  {
    id: 2,
    title: 'Natural Language Understanding in Multilingual Environments',
    abstract: 'Research on improving machine understanding of natural language across multiple languages using transformer models.',
    publication: 'ACM Conference on Machine Learning',
    year: '2022',
    link: '#',
  },
  {
    id: 3,
    title: 'Scalable Database Solutions for High-Traffic Applications',
    abstract: 'An analysis of database scaling strategies for applications with unpredictable traffic patterns.',
    publication: 'Journal of Database Management',
    year: '2022',
    link: '#',
  },
  {
    id: 4,
    title: 'Efficient Neural Networks for Edge Computing',
    abstract: 'Techniques for optimizing neural network performance on resource-constrained edge devices.',
    publication: 'Edge Computing Symposium',
    year: '2021',
    link: '#',
  },
];

const Research = () => {
  return (
    <div className="relative">
      <ParticleBackground id="research-particles" />
      
      {/* Page Header */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-6">
              Research & Publications
            </h1>
            <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
              My academic research and industry publications in software engineering, AI/ML, and related fields.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 bg-light-dark/30 dark:bg-dark-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-dark dark:text-light mb-8 text-center">
              Research Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light dark:bg-dark p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-light">
                  Distributed Systems & Backend Architecture
                </h3>
                <ul className="space-y-3 text-dark-lighter dark:text-light-darker">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Microservice Architecture Patterns
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Distributed Data Management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    API Design and Optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary dark:text-primary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    High-Performance Backend Systems
                  </li>
                </ul>
              </div>
              
              <div className="bg-light dark:bg-dark p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary dark:text-secondary-light">
                  Artificial Intelligence & Machine Learning
                </h3>
                <ul className="space-y-3 text-dark-lighter dark:text-light-darker">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary dark:text-secondary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Natural Language Processing
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary dark:text-secondary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Computer Vision Algorithms
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary dark:text-secondary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Deep Learning for Enterprise Applications
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary dark:text-secondary-light mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Edge AI Optimization
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-dark dark:text-light mb-8 text-center">
              Recent Publications
            </h2>
            
            <div className="space-y-8">
              {researchPapers.map((paper) => (
                <motion.div 
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: paper.id * 0.1 }}
                  className="bg-light dark:bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-dark dark:text-light">{paper.title}</h3>
                      <p className="text-primary dark:text-primary-light text-sm">{paper.publication} • {paper.year}</p>
                    </div>
                    <a 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary-light/10 dark:text-primary-light dark:hover:bg-primary-light/20 transition-colors"
                    >
                      View Publication
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-4 text-dark-lighter dark:text-light-darker">
                    {paper.abstract}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-primary hover:bg-primary/10 dark:border-primary-light dark:hover:bg-primary-light/10 text-primary dark:text-primary-light rounded-md transition-colors duration-300"
              >
                View All Publications
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Collaborations */}
      <section className="py-16 bg-light-dark/30 dark:bg-dark-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-dark dark:text-light mb-6">
              Research Collaborations
            </h2>
            <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto mb-12">
              I collaborate with leading research institutions and industry partners to advance technology and solve complex problems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center h-24 bg-light dark:bg-dark rounded-lg">
                <span className="text-dark-lighter dark:text-light-darker text-xl font-bold">University Tech</span>
              </div>
              <div className="flex items-center justify-center h-24 bg-light dark:bg-dark rounded-lg">
                <span className="text-dark-lighter dark:text-light-darker text-xl font-bold">Research Lab</span>
              </div>
              <div className="flex items-center justify-center h-24 bg-light dark:bg-dark rounded-lg">
                <span className="text-dark-lighter dark:text-light-darker text-xl font-bold">AI Institute</span>
              </div>
              <div className="flex items-center justify-center h-24 bg-light dark:bg-dark rounded-lg">
                <span className="text-dark-lighter dark:text-light-darker text-xl font-bold">Tech Corp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;
