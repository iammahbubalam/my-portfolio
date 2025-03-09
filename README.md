# MD Mahbub Alam - Portfolio Backend

A robust backend API for my portfolio website to showcase my skills, projects, research, professional experience, and blog content.

## Tech Stack

- **MongoDB**: NoSQL database for storing portfolio data
- **Express.js**: Web application framework for building the API
- **Node.js**: JavaScript runtime environment
- **TypeScript**: Strongly typed programming language for enhanced development
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
# Install core dependencies
npm install express mongoose dotenv cors helmet morgan jsonwebtoken bcryptjs validator multer slugify marked compression rate-limiter-flexible

# Install TypeScript and type definitions
npm install --save-dev typescript ts-node nodemon @types/node @types/express @types/mongoose @types/cors @types/helmet @types/morgan @types/jsonwebtoken @types/bcryptjs @types/validator @types/multer jest ts-jest @types/jest supertest @types/supertest
```

### Step 3: Configure TypeScript
Create a `tsconfig.json` file in the root directory:

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "typeRoots": ["./node_modules/@types", "./src/types"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts", "dist"]
}
```

### Step 4: Create Enhanced Project Structure
```
portfolio-backend/
├── src/
│   ├── config/
│   │   ├── db.ts
│   │   └── config.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── profileController.ts
│   │   ├── projectController.ts
│   │   ├── skillController.ts
│   │   ├── experienceController.ts
│   │   ├── educationController.ts
│   │   ├── researchController.ts
│   │   ├── blogController.ts
│   │   └── contactController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── upload.ts
│   │   ├── rateLimiter.ts
│   │   ├── validate.ts
│   │   └── cache.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Profile.ts
│   │   ├── Project.ts
│   │   ├── Skill.ts
│   │   ├── Experience.ts
│   │   ├── Education.ts
│   │   ├── Research.ts
│   │   ├── Blog.ts
│   │   ├── Comment.ts
│   │   └── Contact.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── profileRoutes.ts
│   │   ├── projectRoutes.ts
│   │   ├── skillRoutes.ts
│   │   ├── experienceRoutes.ts
│   │   ├── educationRoutes.ts
│   │   ├── researchRoutes.ts
│   │   ├── blogRoutes.ts
│   │   └── contactRoutes.ts
│   ├── services/
│   │   ├── emailService.ts
│   │   ├── cacheService.ts
│   │   └── storageService.ts
│   ├── utils/
│   │   ├── helpers.ts
│   │   ├── validators.ts
│   │   └── logger.ts
│   ├── types/
│   │   ├── express.d.ts
│   │   └── custom.d.ts
│   ├── app.ts
│   └── server.ts
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
├── tsconfig.json
└── package.json
```

### Step 5: Set Up Express Server with TypeScript

Create `src/server.ts` as your entry point:

```typescript
import app from './app';
import connectDB from './config/db';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const PORT: number = parseInt(process.env.PORT || '5000', 10);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
```

Create `src/app.ts` for Express configuration:

```typescript
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import errorHandler from './middleware/errorHandler';

// Import routes
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import projectRoutes from './routes/projectRoutes';
import skillRoutes from './routes/skillRoutes';
import experienceRoutes from './routes/experienceRoutes';
import educationRoutes from './routes/educationRoutes';
import researchRoutes from './routes/researchRoutes';
import contactRoutes from './routes/contactRoutes';

const app: Application = express();

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
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Error handler
app.use(errorHandler);

export default app;
```

### Step 6: Database Connection with TypeScript

Create `src/config/db.ts`:

```typescript
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
};

export default connectDB;
```

## Single-User Authentication System

Since this is a personal portfolio where only I need access to the admin dashboard:

### Define TypeScript Interfaces

Create `src/types/custom.d.ts` for project-wide type definitions:

```typescript
// Define interfaces for request augmentation
declare namespace Express {
  export interface Request {
    user?: any;
  }
}

// Define admin user interface
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  lastLogin: Date;
  loginAttempts: number;
  lockUntil?: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Admin User Setup
```typescript
// In a separate setup script or as part of initial database seeding
import User from '../models/User';
import Profile from '../models/Profile';
import bcrypt from 'bcryptjs';

interface CreateAdminResult {
  success: boolean;
  message: string;
}

const createAdminUser = async (): Promise<CreateAdminResult> => {
  try {
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (adminExists) {
      return { success: false, message: 'Admin user already exists' };
    }
    
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || '', 10);
    
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
    
    return { success: true, message: 'Admin user created successfully' };
  } catch (error) {
    return { 
      success: false, 
      message: `Error creating admin user: ${error instanceof Error ? error.message : String(error)}` 
    };
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

## Enhanced Database Schema Design with TypeScript

### User Schema (Modified for Single-User System)
```typescript
import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  lastLogin: Date;
  loginAttempts: number;
  lockUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
  getSignedJwtToken(): string;
}

const userSchema: Schema = new Schema({
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
      validator: function(v: string): boolean {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`
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
userSchema.pre<IUserDocument>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12); // Higher rounds for single-user system
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error instanceof Error ? error : new Error('Password hashing error'));
  }
});

// Method to compare password
userSchema.methods.matchPassword = async function(enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate JWT token
userSchema.methods.getSignedJwtToken = function(): string {
  return jwt.sign(
    { id: this._id }, 
    process.env.JWT_SECRET || 'fallbacksecret', 
    { expiresIn: process.env.JWT_EXPIRE || '1h' }
  );
};

const User: Model<IUserDocument> = mongoose.model<IUserDocument>('User', userSchema);

export default User;
```

### Profile Schema
```typescript
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
  medium?: string;
  stackoverflow?: string;
}

export interface ILanguage {
  name: string;
  proficiency: 'Basic' | 'Intermediate' | 'Fluent' | 'Native';
}

export interface ICertification {
  name: string;
  issuer: string;
  date: Date;
  link?: string;
}

export interface IProfileDocument extends Document {
  user: mongoose.Types.ObjectId;
  bio: string;
  avatar: string;
  coverImage: string;
  title: string;
  location?: {
    city?: string;
    country?: string;
    coordinates?: number[];
  };
  about?: string;
  skills: mongoose.Types.ObjectId[];
  socialLinks: ISocialLinks;
  resume?: string;
  portfolioTheme: string;
  featuredProjects: mongoose.Types.ObjectId[];
  languages: ILanguage[];
  interests: string[];
  certifications: ICertification[];
  metrics: {
    profileViews: number;
    downloadsResume: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const profileSchema: Schema = new Schema({
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

const Profile: Model<IProfileDocument> = mongoose.model<IProfileDocument>('Profile', profileSchema);

export default Profile;
```

### Project Schema
```typescript
import mongoose, { Schema, Document, Model } from 'mongoose';
import slugify from 'slugify';
import shortid from 'shortid';

export interface IProjectImage {
  url: string;
  caption?: string;
  isPrimary: boolean;
}

export interface IProjectTeamMember {
  name: string;
  role?: string;
  link?: string;
}

export interface IProjectVideo {
  platform: 'YouTube' | 'Vimeo' | 'Other';
  url: string;
  title?: string;
}

export interface IProjectDocument extends Document {
  user: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  description: {
    short: string;
    detailed: string;
  };
  images: IProjectImage[];
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
    documentation?: string;
  };
  featured: boolean;
  category: 'Web Development' | 'Machine Learning' | 'Data Science' | 'Mobile App' | 'Research' | 'Game Development' | 'Other';
  duration: {
    startDate?: Date;
    endDate?: Date;
    ongoing: boolean;
  };
  team: IProjectTeamMember[];
  achievements: string[];
  metrics: {
    views: number;
    likes: number;
  };
  videos: IProjectVideo[];
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema: Schema = new Schema({
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
projectSchema.pre<IProjectDocument>('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true }) + '-' + shortid.generate();
  }
  next();
});

const Project: Model<IProjectDocument> = mongoose.model<IProjectDocument>('Project', projectSchema);

export default Project;
```

## Sample TypeScript Controller

```typescript
import { Request, Response } from 'express';
import User from '../models/User';
import { IUserDocument } from '../models/User';

// Define extended request with user property
interface AuthenticatedRequest extends Request {
  user?: IUserDocument;
}

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
      return;
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
      return;
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
      return;
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Create token
    const token = user.getSignedJwtToken();

    res.status(200).json({
      success: true,
      token
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Server error'
    });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    
    if (!userId) {
      res.status(401).json({ 
        success: false, 
        message: 'Not authorized' 
      });
      return;
    }
    
    const user = await User.findById(userId);

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Server error'
    });
  }
};
```

## Update package.json Scripts

```json
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc",
  "dev": "nodemon --exec ts-node src/server.ts",
  "test": "jest",
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix"
}
```

## Next Steps

1. Implement the controllers and routes for each endpoint using TypeScript
2. Set up the single-user authentication system with secure login
3. Create a dashboard initialization script to create the admin user on first run
4. Create file upload functionality for images and documents
5. Implement GitHub API integration for automatic repository syncing
6. Set up newsletter sending functionality with templates
7. Create a site configuration management system
8. Implement error handling and data validation using TypeScript interfaces
9. Write tests for your API endpoints using Jest and TypeScript
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
