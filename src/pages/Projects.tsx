import { motion } from 'framer-motion';
import ParticleBackground from '../components/particles/ParticleBackground';

const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'backend', name: 'Backend' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'cloud', name: 'Cloud Solutions' },
];

const projects = [
  {
    id: 1,
    title: 'Distributed Microservice Platform',
    description: 'A highly scalable microservice architecture with service discovery, API gateway, and resilience patterns.',
    category: 'backend',
    image: 'microservices.jpg',
    tags: ['Spring Boot', 'Kubernetes', 'Docker', 'Kafka'],
    link: 'https://github.com/iammahbubalam/microservice-platform',
  },
  {
    id: 2,
    title: 'NLP Research Framework',
    description: 'Research platform for natural language processing experiments with multiple language model integrations.',
    category: 'ai',
    image: 'nlp.jpg',
    tags: ['Python', 'TensorFlow', 'NLP', 'Transformers'],
    link: 'https://github.com/iammahbubalam/nlp-research',
  },
  {
    id: 3,
    title: 'Cloud Database Solution',
    description: 'Auto-scaling database cluster with high availability and disaster recovery capabilities.',
    category: 'cloud',
    image: 'database.jpg',
    tags: ['AWS', 'PostgreSQL', 'Terraform', 'Docker'],
    link: 'https://github.com/iammahbubalam/cloud-db-solution',
  },
  {
    id: 4,
    title: 'API Security Gateway',
    description: 'Secure API gateway with OAuth2, JWT validation, and rate limiting features.',
    category: 'backend',
    image: 'security.jpg',
    tags: ['Spring Security', 'OAuth2', 'JWT', 'API Gateway'],
    link: 'https://github.com/iammahbubalam/api-security',
  },
  {
    id: 5,
    title: 'Computer Vision Research',
    description: 'Research on computer vision algorithms for object detection and image classification.',
    category: 'ai',
    image: 'vision.jpg',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning'],
    link: 'https://github.com/iammahbubalam/vision-research',
  },
  {
    id: 6,
    title: 'Serverless Data Processing',
    description: 'Serverless architecture for real-time data processing and analytics.',
    category: 'cloud',
    image: 'serverless.jpg',
    tags: ['AWS Lambda', 'Kinesis', 'DynamoDB', 'Serverless'],
    link: 'https://github.com/iammahbubalam/serverless-data',
  },
];

const Projects = () => {
  // We'd normally use React state here for filtering
  // but keeping it simple for the implementation

  return (
    <div className="relative">
      <ParticleBackground id="projects-particles" />
      
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
              My Projects
            </h1>
            <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
              A collection of my technical projects, spanning backend engineering, AI/ML research, and cloud solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-full bg-light dark:bg-dark-light text-dark-lighter dark:text-light-darker hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-light/10 dark:hover:text-primary-light transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="bg-light dark:bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-primary/60 to-secondary/60 flex items-center justify-center text-4xl text-white font-bold">
                  {/* This would be an image in a real implementation */}
                  {project.title.charAt(0)}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">{project.title}</h3>
                  <p className="text-dark-lighter dark:text-light-darker mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
