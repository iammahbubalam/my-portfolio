import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';

const Scene404 = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text3D 
        font="/fonts/Inter_Bold.json"
        size={5}
        height={0.5}
        position={[-6, 0, 0]}
        curveSegments={32}
      >
        404
        <meshStandardMaterial 
          color="#3182CE"
          metalness={0.3}
          roughness={0.2}
        />
      </Text3D>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
};

const NotFound = () => {
  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="h-48 md:h-64 w-full mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {/* Fallback if 3D doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl font-bold text-primary dark:text-primary-light">404</h1>
            </div>
            <Scene404 />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-dark-lighter dark:text-light-darker mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white rounded-md transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
