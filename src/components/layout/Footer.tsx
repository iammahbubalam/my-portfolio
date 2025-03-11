import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light-dark dark:bg-dark-light border-t border-light-darker dark:border-dark-lighter">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-dark-lighter dark:text-light-darker tracking-wider uppercase">
              Navigation
            </h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                Home
              </Link>
              <div className="block">
                <Link to="/projects" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  Projects
                </Link>
              </div>
              <div className="block">
                <Link to="/research" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  Research
                </Link>
              </div>
              <div className="block">
                <Link to="/blog" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  Blog
                </Link>
              </div>
              <div className="block">
                <Link to="/contact" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-dark-lighter dark:text-light-darker tracking-wider uppercase">
              Connect
            </h3>
            <div className="mt-4 space-y-4">
              <a href="https://github.com/iammahbubalam" target="_blank" rel="noopener noreferrer" 
                 className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                GitHub
              </a>
              <div className="block">
                <a href="https://linkedin.com/in/iammahbubalam" target="_blank" rel="noopener noreferrer"
                   className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  LinkedIn
                </a>
              </div>
              <div className="block">
                <a href="https://twitter.com/iammahbubalam" target="_blank" rel="noopener noreferrer"
                   className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-dark-lighter dark:text-light-darker tracking-wider uppercase">
              Legal
            </h3>
            <div className="mt-4 space-y-4">
              <a href="/privacy" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                Privacy Policy
              </a>
              <div className="block">
                <a href="/terms" className="text-base text-dark-light dark:text-light-dark hover:text-primary dark:hover:text-primary-light">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-light-darker dark:border-dark-lighter pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-dark-light dark:text-light-dark">
            &copy; {new Date().getFullYear()} Mahbubul Alam. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-sm text-dark-lighter dark:text-light-darker">
            Built with React, TypeScript, Tailwind CSS & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
