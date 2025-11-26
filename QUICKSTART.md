# Quick Start Guide - CareerPilot-AI

## 🚀 Get Running in 5 Minutes

### Prerequisites
- Node.js 22.x or higher ([Download](https://nodejs.org/))
- npm or yarn package manager
- Git ([Download](https://git-scm.com/))
- Google Gemini API key (optional for basic testing)

---

## Step 1: Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/wajiddaudtamboli/CareerPilot-AI.git
cd CareerPilot-AI

# Install dependencies
npm install
```

---

## Step 2: Environment Setup (1 minute)

Create a `.env.local` file in the root directory:

```bash
# Copy example environment file
cp .env.example .env.local
```

**Minimal Configuration (App will work without these):**
```env
# Optional: For full AI features
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

**Note**: The app has comprehensive fallback systems and will work even without API keys! You'll get simulated AI responses for testing.

---

## Step 3: Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

🎉 **You're running!**

---

## Quick Feature Tour

### 🏠 Homepage
- Visit `http://localhost:3000`
- Modern hero section with call-to-action
- Four assessment modules displayed

### 🎯 Career Planning
- Navigate to **Career Planning** > **Check My Career**
- Department-based job role recommendations
- AI-powered career roadmaps (works with/without API key)

### 📚 Learn Section
Five comprehensive platform directories:
1. **Courses** - Free learning resources
2. **Industry Certifications** - 18 certification platforms
3. **Projects** - 16 project idea sources
4. **Competitions** - 13 hackathon platforms
5. **Aptitude** - 12 aptitude learning sites

### 📝 Assessment Modules
Four interactive assessments (40 questions total):
1. **Aptitude Module** - Math, logic, patterns
2. **General Life Understanding** - Soft skills, decision making
3. **Work Style Profiler** - Team dynamics, work preferences
4. **Tech Interest Explorer** - Technology career interests

### 💼 Preparation
- **Coding Round** - Multi-language code practice
- **Mock Interview** - AI-powered interview simulation
- **Soft Skills** - Behavioral interview prep

### 🏢 Company Section
- Company profiles
- MNC careers
- Hiring platforms
- Talent search

---

## Development Commands

```bash
# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clear build cache
rm -rf .next
```

---

## Common Issues & Solutions

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clear everything and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Errors
The project has `strict: false` in tsconfig. Some type warnings are expected and won't block builds.

### Missing API Key Warnings
These are normal! The app has fallback systems. To use real AI:
1. Get key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Add to `.env.local`
3. Restart dev server

---

## Project Structure

```
CareerPilot-AI/
├── app/                      # Next.js 14 app directory
│   ├── page.js              # Homepage
│   ├── careerplanning/      # Career guidance
│   ├── learn/               # Learning platforms
│   ├── preparation/         # Interview prep
│   ├── company/             # Company info
│   ├── assessment/          # Assessment modules
│   ├── api/                 # API routes (14 routes)
│   └── components/          # Shared components
├── components/              # UI components (shadcn)
├── lib/                     # Utilities and services
│   ├── aiService.js        # Centralized AI service
│   └── dbService.js        # Database operations
├── config/                  # Configuration files
├── public/                  # Static assets
└── scripts/                 # Build scripts

```

---

## Feature Flags (Environment Variables)

```env
# Required for full functionality
GOOGLE_GEMINI_API_KEY=xxx                    # AI features
NEXT_PUBLIC_GEMINI_API_KEY=xxx               # Client-side AI

# Optional enhancements
NEXT_PUBLIC_YOUTUBE_API_KEY=xxx              # Video content
CLERK_SECRET_KEY=xxx                         # Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxx        # Auth UI
DATABASE_URL=xxx                             # Data persistence
```

---

## API Routes Overview

The app has 14 API routes all with error handling:

### Core AI
- `/api/gemini` - Main AI endpoint (TypeScript)
- `/api/gemini/courses` - Course recommendations
- `/api/gemini/roadmaps` - Career roadmaps

### Features
- `/api/execute-code` - Code execution sandbox
- `/api/jobs` - Job listings (mock + real)
- `/api/assessment/questions` - Assessment data
- `/api/chat` - Chat history
- `/api/users` - User management
- `/api/pdf` - PDF processing
- `/api/scrape` - Web scraping
- `/api/database` - DB operations
- `/api/youtube/oembed` - Video metadata

---

## Theme System

The app supports dark/light mode:

```javascript
// Automatic based on system preference
// OR manually toggled via UI

// Theme persists in localStorage
// Smooth transitions configured
```

---

## Testing the Build

```bash
# Test production build locally
npm run build
npm start

# Visit http://localhost:3000
# Test all major routes:
# - Homepage
# - Career Planning
# - Learn (all 5 sections)
# - Preparation
# - Company
# - Assessment
```

---

## Next Steps

1. **Explore Features**: Click through all sections
2. **Test AI**: Try career roadmap generator
3. **Take Assessment**: Complete one of the 4 modules
4. **Check Code Editor**: Test the online IDE
5. **Read Docs**: Check deployment guides when ready

---

## Getting Help

- **Documentation**: See `README.md` for comprehensive info
- **Deployment**: Check `DEPLOYMENT_GUIDE_HOSTINGER.md` or `VERCEL_DEPLOYMENT.md`
- **Production**: Read `PRODUCTION_READY.md` for deployment readiness
- **Issues**: Create an issue on GitHub

---

## Pro Tips

1. **Fallback Mode**: App works without API keys using mock data
2. **Hot Reload**: Changes auto-refresh in dev mode
3. **Dark Mode**: Toggle in UI or auto-detect system preference
4. **Mobile Responsive**: Test on different screen sizes
5. **Fast Refresh**: Component changes reflect instantly

---

🎓 **Built by students, for students**

Focus on learning and exploring the codebase. The app is designed to be beginner-friendly with comprehensive comments and clear structure.

---

**Last Updated**: 2024
**Version**: 1.0.0
**License**: MIT (check LICENSE file)
