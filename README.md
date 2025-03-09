# MD Mahbub Alam - Portfolio Backend

A robust backend API for my portfolio website to showcase my skills, projects, research, professional experience, and blog content.

## Tech Stack

- **MongoDB**: NoSQL database for storing portfolio data
- **Express.js**: Web application framework for building the API
- **Node.js**: JavaScript runtime environment
- **JWT**: Authentication mechanism
- **Mongoose**: MongoDB object modeling tool

## Project Setup Guide

### Step 1: Initialize Project
```bash
mkdir portfolio-backend
cd portfolio-backend
npm init -y
```

### Step 2: Install Dependencies
```bash
npm install express mongoose dotenv cors helmet morgan jsonwebtoken bcryptjs validator multer slugify marked compression rate-limiter-flexible
npm install --save-dev nodemon jest supertest
```

### Step 3: Create Enhanced Project Structure
```
portfolio-backend/
├── config/
│   ├── db.js
│   └── config.js
├── controllers/
│   ├── authController.js
│   ├── profileController.js
│   ├── projectController.js
│   ├── skillController.js
│   ├── experienceController.js
│   ├── educationController.js
│   ├── researchController.js
│   ├── blogController.js
│   └── contactController.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   ├── upload.js
│   ├── rateLimiter.js
│   ├── validate.js
│   └── cache.js
├── models/
│   ├── User.js
│   ├── Profile.js
│   ├── Project.js
│   ├── Skill.js
│   ├── Experience.js
│   ├── Education.js
│   ├── Research.js
│   ├── Blog.js
│   ├── Comment.js
│   └── Contact.js
├── routes/
│   ├── authRoutes.js
│   ├── profileRoutes.js
│   ├── projectRoutes.js
│   ├── skillRoutes.js
│   ├── experienceRoutes.js
│   ├── educationRoutes.js
│   ├── researchRoutes.js
│   ├── blogRoutes.js
│   └── contactRoutes.js
├── services/
│   ├── emailService.js
│   ├── cacheService.js
│   └── storageService.js
├── utils/
│   ├── helpers.js
│   ├── validators.js
│   └── logger.js
├── uploads/
│   ├── images/
│   ├── documents/
│   └── thumbs/
├── tests/
│   ├── unit/
│   └── integration/
├── .env
├── .gitignore
├── .eslintrc.js
├── jest.config.js
├── app.js
├── server.js
└── package.json
```

### Step 4: Set Up Express Server

Create `server.js` as your entry point:

```javascript
const app = require('./app');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
```

Create `app.js` for Express configuration:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const educationRoutes = require('./routes/educationRoutes');
const researchRoutes = require('./routes/researchRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/contact', contactRoutes);

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Error handler
app.use(errorHandler);

module.exports = app;
```

### Step 5: Database Connection

Create `config/db.js`:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## Single-User Authentication System

Since this is a personal portfolio where only I need access to the admin dashboard:

### Admin User Setup
```javascript
// In a separate setup script or as part of initial database seeding
const createAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (adminExists) {
      return console.log('Admin user already exists');
    }
    
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    
    const admin = await User.create({
      name: 'MD Mahbub Alam',
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: 'admin',
      active: true
    });
    
    await Profile.create({
      user: admin._id,
      bio: 'ML Researcher and Backend Engineer',
      title: 'Computer Science Graduate',
      // Other default profile values
    });
    
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};
```

### Environment Variables for Admin
```
# Admin credentials
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-secure-password
```

### Security Considerations for Single-User System
- Use a very strong password
- Implement IP whitelisting for admin routes
- Use shorter JWT expiry times with auto-refresh
- Implement automatic logout on inactivity
- Store login session information

## Enhanced Database Schema Design

### User Schema (Modified for Single-User System)
```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [12, 'Password must be at least 12 characters long'], // Stronger for single admin
    select: false 
  },
  role: {
    type: String,
    default: 'admin',
    immutable: true // Cannot be changed once set
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  lockUntil: {
    type: Date
  }
}, { 
  timestamps: true 
});

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12); // Higher rounds for single-user system
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Additional methods remain the same
```

### Profile Schema
```javascript
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    trim: true,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  avatar: {
    type: String,
    default: 'default-avatar.jpg'
  },
  coverImage: {
    type: String,
    default: 'default-cover.jpg'
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  location: {
    city: String,
    country: String,
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere'
    }
  },
  about: {
    type: String,
    trim: true
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    facebook: String,
    instagram: String,
    youtube: String,
    website: String,
    medium: String,
    stackoverflow: String
  },
  resume: {
    type: String
  },
  portfolioTheme: {
    type: String,
    default: 'light'
  },
  featuredProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  languages: [{
    name: String,
    proficiency: {
      type: String,
      enum: ['Basic', 'Intermediate', 'Fluent', 'Native']
    }
  }],
  interests: [String],
  certifications: [{
    name: String,
    issuer: String,
    date: Date,
    link: String
  }],
  metrics: {
    profileViews: {
      type: Number,
      default: 0
    },
    downloadsResume: {
      type: Number,
      default: 0
    }
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual fields to get related data
profileSchema.virtual('experienceCount', {
  ref: 'Experience',
  localField: 'user',
  foreignField: 'user',
  count: true
});

profileSchema.virtual('projectCount', {
  ref: 'Project',
  localField: 'user',
  foreignField: 'user',
  count: true
});

profileSchema.virtual('blogCount', {
  ref: 'Blog',
  localField: 'user',
  foreignField: 'author',
  count: true
});
```

### Project Schema
```javascript
const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    short: {
      type: String,
      required: [true, 'Short description is required'],
      maxlength: [200, 'Short description cannot exceed 200 characters']
    },
    detailed: {
      type: String,
      required: [true, 'Detailed description is required']
    }
  },
  images: [{
    url: String,
    caption: String,
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  links: {
    github: String,
    live: String,
    demo: String,
    documentation: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['Web Development', 'Machine Learning', 'Data Science', 'Mobile App', 'Research', 'Game Development', 'Other'],
    required: true
  },
  duration: {
    startDate: Date,
    endDate: Date,
    ongoing: {
      type: Boolean,
      default: false
    }
  },
  team: [{
    name: String,
    role: String,
    link: String
  }],
  achievements: [{
    type: String
  }],
  metrics: {
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  videos: [{
    platform: {
      type: String,
      enum: ['YouTube', 'Vimeo', 'Other']
    },
    url: String,
    title: String
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Generate slug before saving
projectSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true }) + '-' + shortid.generate();
  }
  next();
});
```

### Skill Schema
```javascript
const skillSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true
  },
  level: {
    type: Number,
    min: [1, 'Level must be at least 1'],
    max: [10, 'Level cannot be more than 10'],
    required: true
  },
  category: {
    type: String,
    enum: [
      'Programming Languages', 
      'Frontend Technologies', 
      'Backend Technologies',
      'Databases', 
      'DevOps', 
      'Mobile Development',
      'Machine Learning', 
      'Data Science',
      'Cloud Services', 
      'Tools', 
      'Soft Skills', 
      'Other'
    ],
    required: true
  },
  yearsExperience: {
    type: Number,
    min: 0
  },
  description: String,
  icon: String,
  featured: {
    type: Boolean,
    default: false
  },
  relatedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, { timestamps: true });

// Compound index to ensure user cannot have duplicate skills
skillSchema.index({ user: 1, name: 1 }, { unique: true });
```

### Experience Schema
```javascript
const experienceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true
  },
  logo: String,
  location: {
    city: String,
    country: String,
    remote: {
      type: Boolean,
      default: false
    }
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship', 'Volunteer'],
    default: 'Full-time'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  responsibilities: [{
    type: String,
    trim: true
  }],
  achievements: [{
    type: String,
    trim: true
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  url: String,
  hideFromProfile: {
    type: Boolean,
    default: false
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Custom method to calculate duration
experienceSchema.methods.getDuration = function() {
  const end = this.current ? new Date() : this.endDate;
  if (!end) return null;
  
  const start = this.startDate;
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 end.getMonth() - start.getMonth();
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  return { years, months: remainingMonths, totalMonths: months };
};
```

### Education Schema
```javascript
const educationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  institution: {
    type: String,
    required: [true, 'Institution name is required'],
    trim: true
  },
  logo: String,
  degree: {
    type: String,
    required: [true, 'Degree is required'],
    trim: true
  },
  field: {
    type: String,
    required: [true, 'Field of study is required'],
    trim: true
  },
  location: {
    city: String,
    country: String
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  achievements: [{
    type: String,
    trim: true
  }],
  activities: [{
    type: String,
    trim: true
  }],
  courses: [{
    name: String,
    grade: String
  }],
  thesis: {
    title: String,
    description: String,
    supervisors: [String],
    url: String
  },
  gpa: {
    score: Number,
    scale: {
      type: Number,
      default: 4.0
    }
  },
  url: String
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});
```

### Research Schema
```javascript
const researchSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Research title is required'],
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  authors: [{
    name: {
      type: String,
      required: true
    },
    affiliation: String,
    isMainAuthor: {
      type: Boolean,
      default: false
    },
    orcid: String
  }],
  publishedIn: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Journal', 'Conference', 'Workshop', 'Book', 'Preprint', 'Other']
    },
    publisher: String,
    url: String
  },
  publishDate: {
    type: Date
  },
  abstract: {
    type: String,
    required: [true, 'Abstract is required']
  },
  keywords: [{
    type: String,
    trim: true
  }],
  doi: {
    type: String,
    trim: true
  },
  links: {
    paper: String,
    code: String,
    dataset: String,
    slides: String,
    video: String,
    poster: String
  },
  category: {
    type: String,
    required: true
  },
  pdf: {
    type: String
  },
  citations: {
    count: {
      type: Number,
      default: 0
    },
    lastUpdated: Date
  },
  impactFactor: Number,
  metrics: {
    views: {
      type: Number,
      default: 0
    },
    downloads: {
      type: Number,
      default: 0
    }
  },
  relatedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Generate slug before saving
researchSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true }) + '-' + shortid.generate();
  }
  next();
});
```

### Blog Schema
```javascript
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be longer than 200 characters']
  },
  slug: {
    type: String,
    unique: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  contentHTML: {
    type: String
  },
  excerpt: {
    type: String,
    maxlength: [500, 'Excerpt cannot be longer than 500 characters']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  featuredImage: {
    type: String
  },
  images: [{
    url: String,
    alt: String,
    caption: String
  }],
  categories: [{
    type: String,
    trim: true
  }],
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date
  },
  featured: {
    type: Boolean,
    default: false
  },
  metaData: {
    description: {
      type: String,
      maxlength: [160, 'Meta description cannot be longer than 160 characters']
    },
    keywords: [String],
    ogImage: String
  },
  readingTime: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  views: {
    type: Number,
    default: 0
  },
  relatedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  relatedResearch: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Research'
  }],
  relatedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Generate slug before saving
blogSchema.pre('save', function(next) {
  // Generate slug from title
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true }) + '-' + shortid.generate();
  }
  
  // Generate HTML from markdown content
  if (this.isModified('content')) {
    this.contentHTML = marked(this.content);
    
    // Calculate reading time
    const words = this.content.split(/\s+/).length;
    this.readingTime = Math.ceil(words / 200); // Assuming 200 words per minute
    
    // Generate excerpt if not provided
    if (!this.excerpt) {
      this.excerpt = this.content
        .replace(/[#*_~`]/g, '') // Remove markdown symbols
        .substring(0, 160)
        .trim() + '...';
    }
  }
  
  // Set published date when status changes to published
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = Date.now();
  }
  
  next();
});

// Virtual to get comments
blogSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'blog'
});
```

### Comment Schema
```javascript
const commentSchema = new mongoose.Schema({
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: function() {
      return !this.user;
    },
    trim: true
  },
  email: {
    type: String,
    required: function() {
      return !this.user;
    },
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  content: {
    type: String,
    required: [true, 'Comment text is required'],
    trim: true
  },
  parentComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  approved: {
    type: Boolean,
    default: function() {
      return !!this.user; // Auto-approve comments from registered users
    }
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  ipAddress: String,
  userAgent: String
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true } 
});

// Virtual to get replies
commentSchema.virtual('replies', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'parentComment'
});
```

### Contact Schema
```javascript
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email`
    }
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  read: {
    type: Boolean,
    default: false
  },
  replied: {
    type: Boolean,
    default: false
  },
  repliedAt: Date,
  replyMessage: String,
  category: {
    type: String,
    enum: ['Project Inquiry', 'Job Opportunity', 'Research Collaboration', 'Speaking Engagement', 'General', 'Other'],
    default: 'General'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  ipAddress: String,
  userAgent: String,
  tag: [String]
}, { timestamps: true });
```

## Additional Features

### Site Configuration Schema
```javascript
const siteConfigSchema = new mongoose.Schema({
  siteTitle: {
    type: String,
    required: true,
    default: 'MD Mahbub Alam - Portfolio'
  },
  tagline: String,
  metaDescription: {
    type: String,
    maxlength: 160
  },
  keywords: [String],
  favicon: String,
  logoLight: String,
  logoDark: String,
  primaryColor: {
    type: String,
    default: '#3498db'
  },
  secondaryColor: {
    type: String,
    default: '#2c3e50'
  },
  showResearchSection: {
    type: Boolean,
    default: true
  },
  showBlogSection: {
    type: Boolean,
    default: true
  },
  showProjectsSection: {
    type: Boolean,
    default: true
  },
  featuredSections: [{
    name: String,
    enabled: Boolean,
    order: Number
  }],
  socialShareEnabled: {
    type: Boolean,
    default: true
  },
  googleAnalyticsId: String,
  disqusShortname: String,
  contactFormEmail: String,
  maintenanceMode: {
    type: Boolean,
    default: false
  },
  maintenanceMessage: String
}, {
  timestamps: true
});
```

### Github Repository Integration
```javascript
const githubRepoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  description: String,
  url: {
    type: String,
    required: true
  },
  homepage: String,
  language: String,
  stargazersCount: {
    type: Number,
    default: 0
  },
  forksCount: {
    type: Number,
    default: 0
  },
  watchersCount: {
    type: Number,
    default: 0
  },
  openIssuesCount: {
    type: Number,
    default: 0
  },
  topics: [String],
  featured: {
    type: Boolean,
    default: false
  },
  showOnPortfolio: {
    type: Boolean,
    default: true
  },
  linkedProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  lastSyncedAt: {
    type: Date,
    default: Date.now
  },
  customDescription: String,
  customImageUrl: String
}, {
  timestamps: true
});
```

### Newsletter Subscription Schema
```javascript
const newsletterSubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  name: {
    type: String,
    trim: true
  },
  subscriptionDate: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  },
  unsubscribeToken: {
    type: String,
    required: true
  },
  source: {
    type: String,
    enum: ['blog', 'portfolio', 'contact_form', 'manual', 'other'],
    default: 'portfolio'
  },
  interests: [String],
  lastEmailSent: Date
}, {
  timestamps: true
});
```

## API Endpoints

### Authentication (Updated for Single-User System)
- `POST /api/auth/login` - Login as admin
- `POST /api/auth/logout` - Logout admin session
- `GET /api/auth/me` - Get admin profile
- `PUT /api/auth/password` - Update admin password

### Profile
- `GET /api/profile` - Get profile
- `PUT /api/profile` - Update profile
- `POST /api/profile/upload-avatar` - Upload profile picture
- `POST /api/profile/upload-resume` - Upload resume

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/projects/:id/upload-image` - Upload project image

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experience` - Get all experiences
- `POST /api/experience` - Add new experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Education
- `GET /api/education` - Get all education
- `POST /api/education` - Add new education
- `PUT /api/education/:id` - Update education
- `DELETE /api/education/:id` - Delete education

### Research
- `GET /api/research` - Get all research papers
- `POST /api/research` - Add new research
- `PUT /api/research/:id` - Update research
- `DELETE /api/research/:id` - Delete research
- `POST /api/research/:id/upload-pdf` - Upload research PDF

### Contact
- `POST /api/contact` - Submit contact message
- `GET /api/contact` - Get all contact messages (admin only)
- `GET /api/contact/:id` - Get contact message by ID
- `PUT /api/contact/:id` - Mark message as read/replied

### Blogs
- `GET /api/blogs` - Get all published blogs with pagination
- `GET /api/blogs/featured` - Get featured blogs
- `GET /api/blogs/categories` - Get blog categories
- `GET /api/blogs/tags` - Get blog tags
- `GET /api/blogs/search` - Search blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/blogs/author/:userId` - Get blogs by author
- `GET /api/blogs/tag/:tag` - Get blogs by tag
- `GET /api/blogs/category/:category` - Get blogs by category
- `GET /api/blogs/related/:blogId` - Get related blogs
- `POST /api/blogs` - Create new blog (admin only)
- `PUT /api/blogs/:id` - Update blog (admin only)
- `DELETE /api/blogs/:id` - Delete blog (admin only)
- `POST /api/blogs/:id/upload-image` - Upload blog image (admin only)
- `PUT /api/blogs/:id/publish` - Publish blog (admin only)
- `PUT /api/blogs/:id/unpublish` - Unpublish blog (admin only)
- `POST /api/blogs/:id/like` - Like a blog
- `DELETE /api/blogs/:id/like` - Unlike a blog
- `GET /api/blogs/:id/likes` - Get users who liked a blog

### Comments
- `GET /api/blogs/:blogId/comments` - Get comments for a blog
- `POST /api/blogs/:blogId/comments` - Add comment to blog
- `PUT /api/comments/:id` - Update comment (owner or admin only)
- `DELETE /api/comments/:id` - Delete comment (owner or admin only)
- `PUT /api/comments/:id/approve` - Approve comment (admin only)
- `POST /api/comments/:id/reply` - Reply to a comment
- `POST /api/comments/:id/like` - Like a comment
- `DELETE /api/comments/:id/like` - Unlike a comment

### Site Configuration
- `GET /api/config` - Get public site configuration
- `GET /api/config/all` - Get all site configuration (admin only)
- `PUT /api/config` - Update site configuration (admin only)
- `POST /api/config/logo` - Upload site logo (admin only)
- `POST /api/config/favicon` - Upload site favicon (admin only)

### GitHub Repositories
- `GET /api/github` - Get featured GitHub repositories
- `GET /api/github/all` - Get all GitHub repositories (admin only)
- `POST /api/github/sync` - Sync repositories from GitHub (admin only)
- `PUT /api/github/:id` - Update repository details (admin only)
- `PUT /api/github/:id/feature` - Toggle featured status (admin only)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers (admin only)
- `DELETE /api/newsletter/:id` - Delete subscriber (admin only)
- `POST /api/newsletter/send` - Send newsletter to subscribers (admin only)
- `GET /api/newsletter/unsubscribe/:token` - Unsubscribe using token

## Next Steps

1. Implement the controllers and routes for each endpoint
2. Set up the single-user authentication system with secure login
3. Create a dashboard initialization script to create the admin user on first run
4. Create file upload functionality for images and documents
5. Implement GitHub API integration for automatic repository syncing
6. Set up newsletter sending functionality with templates
7. Create a site configuration management system
8. Implement error handling and data validation
9. Write tests for your API endpoints
10. Deploy to a hosting service (Heroku, DigitalOcean, etc.)
11. Document your API for future frontend integration

## Future Plans for Frontend

For the frontend, consider:
- React.js with TypeScript
- Redux for state management
- Styled-components or Tailwind CSS for styling
- Responsive design for all devices
- Animation libraries for interactive elements
- SEO optimization

## Deployment

To deploy your backend:
1. Set up environment variables on the hosting platform
2. Configure MongoDB Atlas for cloud database hosting
3. Set up CI/CD pipeline for automatic deployments
4. Configure proper CORS to allow only your frontend domain
5. Implement rate limiting and security best practices

## Analytics and Metrics

To track engagement and performance of your portfolio:

1. Implement analytics tracking for:
   - Page visits
   - Blog post engagement
   - Project interactions
   - Document downloads
   - Contact form submissions
   
2. Create an admin dashboard to visualize:
   - Visitor demographics
   - Popular content
   - Traffic sources
   - Engagement metrics
   - Conversion rates

3. Set up email notifications for:
   - New contact form submissions
   - Comment moderation alerts
   - Important engagement milestones

## Security Best Practices

1. Implement robust authentication with JWT
2. Set up rate limiting for all API endpoints
3. Use CORS restrictions for production
4. Sanitize all user inputs
5. Implement proper error handling that doesn't expose sensitive information
6. Set secure HTTP headers with Helmet
7. Encrypt sensitive data
8. Use environment variables for all secrets
9. Implement request validation for all endpoints
10. Set up logging for security events

## DevOps and CI/CD

1. Set up GitHub Actions workflow for:
   - Running tests
   - Linting code
   - Building production assets
   - Deploying to staging/production

2. Implement Docker containerization:
   - Create optimized Docker images
   - Set up docker-compose for local development
   - Configure production-ready container orchestration

3. Configure monitoring and alerting:
   - Set up application performance monitoring
   - Configure health check endpoints
   - Implement error tracking and reporting
   - Set up notification systems for critical issues
