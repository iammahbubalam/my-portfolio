/**
 * Application configuration settings
 */
const config = {
  // JWT settings
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secure-jwt-secret',
    expiresIn: process.env.JWT_EXPIRE || '30d',
    cookieExpire: parseInt(process.env.JWT_COOKIE_EXPIRE, 10) || 30
  },
  
  // Upload limits
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    allowedDocumentTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  },

  // Email settings
  email: {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    from: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
    contactFormRecipient: process.env.CONTACT_EMAIL || process.env.ADMIN_EMAIL
  },

  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later'
  },

  // GitHub API
  github: {
    token: process.env.GITHUB_TOKEN,
    username: process.env.GITHUB_USERNAME || 'iammahbubalam'
  }
};

module.exports = config;
