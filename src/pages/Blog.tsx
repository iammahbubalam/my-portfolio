import { motion } from 'framer-motion';
import ParticleBackground from '../components/particles/ParticleBackground';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const blogCategories = [
  { id: 'all', name: 'All Posts' },
  { id: 'backend', name: 'Backend Engineering' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'architecture', name: 'System Architecture' },
];

const blogPosts = [
  {
    id: 1,
    title: 'Building Resilient Microservice Systems',
    excerpt: 'How to design and implement resilient microservices that can gracefully handle failures.',
    date: 'October 10, 2023',
    category: 'backend',
    readTime: '8 min read',
    image: 'microservices-blog.jpg',
    slug: 'building-resilient-microservices',
  },
  {
    id: 2,
    title: 'Practical Approaches to NLP in Production',
    excerpt: 'Real-world strategies for deploying and scaling natural language processing models in production environments.',
    date: 'September 25, 2023',
    category: 'ai',
    readTime: '10 min read',
    image: 'nlp-production.jpg',
    slug: 'nlp-in-production',
  },
  {
    id: 3,
    title: 'Spring Boot Performance Optimization Techniques',
    excerpt: 'Advanced techniques to optimize the performance of your Spring Boot applications.',
    date: 'September 12, 2023',
    category: 'backend',
    readTime: '12 min read',
    image: 'spring-performance.jpg',
    slug: 'spring-boot-optimization',
  },
  {
    id: 4,
    title: 'Designing Scalable Data Architectures',
    excerpt: 'Key principles and patterns for designing data architectures that can scale with your business.',
    date: 'August 28, 2023',
    category: 'architecture',
    readTime: '9 min read',
    image: 'data-architecture.jpg',
    slug: 'scalable-data-architectures',
  },
  {
    id: 5,
    title: 'Machine Learning Model Monitoring',
    excerpt: 'Best practices for monitoring machine learning models in production and detecting model drift.',
    date: 'August 15, 2023',
    category: 'ai',
    readTime: '7 min read',
    image: 'ml-monitoring.jpg',
    slug: 'ml-model-monitoring',
  },
  {
    id: 6,
    title: 'API Gateway Patterns and Implementation',
    excerpt: 'Different API gateway patterns and how to implement them effectively in your architecture.',
    date: 'August 3, 2023',
    category: 'architecture',
    readTime: '11 min read',
    image: 'api-gateway.jpg',
    slug: 'api-gateway-patterns',
  },
];

const Blog = () => {
  // We'd normally implement actual filtering logic
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="relative">
      <ParticleBackground id="blog-particles" />
      
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
              Blog & Insights
            </h1>
            <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
              Thoughts, technical guides, and insights on backend engineering, AI/ML, and system architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white dark:bg-primary-light dark:text-dark' 
                    : 'bg-light dark:bg-dark-light text-dark-lighter dark:text-light-darker hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-light/10 dark:hover:text-primary-light'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="bg-light dark:bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-primary/60 to-secondary/60 flex items-center justify-center">
                  {/* We would use actual images in production */}
                  <span className="text-4xl text-white font-bold">{post.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      post.category === 'backend' 
                        ? 'bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light' 
                        : post.category === 'ai' 
                        ? 'bg-secondary/10 text-secondary dark:bg-secondary-dark/20 dark:text-secondary-light' 
                        : 'bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light'
                    }`}>
                      {post.category === 'backend' ? 'Backend Engineering' : 
                       post.category === 'ai' ? 'AI/ML' : 'System Architecture'}
                    </span>
                    <span className="text-dark-lighter dark:text-light-darker text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">{post.title}</h3>
                  <p className="text-dark-lighter dark:text-light-darker mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-dark-lighter dark:text-light-darker">{post.date}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-light-dark/30 dark:bg-dark-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
              Subscribe to My Newsletter
            </h2>
            <p className="text-dark-lighter dark:text-light-darker mb-8 text-lg">
              Get notified when I publish new articles and research insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-md bg-light dark:bg-dark border border-light-darker dark:border-dark-lighter focus:outline-none focus:border-primary dark:focus:border-primary-light"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
