# 🐛 Issue Tracker

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5.6.0-2D3748?style=for-the-badge&logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

**A modern, full-stack issue tracking application built with Next.js 14 and TypeScript**

[🚀 Getting Started](#-getting-started) • [📖 Documentation](#-project-structure) • [🔧 Development](#-development) • [🚢 Deployment](#-deployment)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **📝 Issue Management**: Complete CRUD operations for issues with rich markdown support
- **🔄 Status Tracking**: Three-state workflow (Open → In Progress → Closed)
- **👥 User Assignment**: Assign issues to team members with visual indicators
- **🔍 Advanced Filtering**: Filter by status, sort by multiple criteria
- **📄 Pagination**: Efficient handling of large issue datasets

### 📊 Dashboard & Analytics
- **📈 Interactive Charts**: Visual representation of issue distribution using Recharts
- **📋 Summary Cards**: Quick overview of issues by status with direct filtering links
- **🕒 Latest Issues**: Real-time display of recently created issues
- **🎨 Responsive Design**: Seamless experience across all devices

### 🔐 Authentication & Security
- **🔑 Google OAuth**: Secure authentication via NextAuth.js
- **🛡️ Protected Routes**: Middleware-based route protection for sensitive operations
- **🎭 Role-based Access**: Authentication-required actions (create, edit, delete)
- **🔒 Session Management**: JWT-based session handling

### 🎨 Modern UI/UX
- **🎨 Radix UI Themes**: Professional component library with consistent design
- **⚡ Tailwind CSS**: Utility-first styling with custom theme configuration
- **🌙 Elegant Theme**: Violet accent color with large border radius styling
- **📱 Mobile-First**: Responsive tables and navigation

---

## 🛠️ Technology Stack

### Frontend
- **⚡ Next.js 14** - App Router architecture with RSC
- **🔷 TypeScript** - Type-safe development
- **⚛️ React 18** - Latest React features with concurrent rendering
- **🎨 Radix UI** - Headless, accessible component primitives
- **🎯 Tailwind CSS** - Utility-first CSS framework

### Backend
- **🚀 Next.js API Routes** - Serverless API endpoints
- **🗃️ Prisma ORM** - Type-safe database client
- **🐬 MySQL** - Relational database with Prisma relation mode
- **🔐 NextAuth.js** - Authentication framework

### Development & Monitoring
- **📊 TanStack Query** - Server state management and caching
- **📝 React Hook Form** - Performant form handling
- **✅ Zod** - Schema validation and type inference
- **🚨 Sentry** - Error tracking and performance monitoring
- **🎭 React Hot Toast** - Notification system

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **MySQL** 8.0 or higher
- **Google Cloud Console** account (for OAuth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jnjambrin0/Issue-Tracker.git
   cd Issue-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="mysql://username:password@localhost:3306/issue_tracker"
   
   # NextAuth Configuration
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key"
   
   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Apply database migrations
   npx prisma db push
   
   # (Optional) Open Prisma Studio to view data
   npx prisma studio
   ```

5. **Google OAuth Setup**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs

6. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📖 Project Structure

```
issue-tracker/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/[...nextauth]/   # NextAuth.js authentication
│   │   ├── issues/               # Issue CRUD operations
│   │   │   ├── [id]/             # Individual issue operations
│   │   │   └── route.ts          # Issues list and creation
│   │   └── users/                # Users API
│   ├── auth/                     # Authentication configuration
│   │   ├── Provider.tsx          # SessionProvider wrapper
│   │   └── authOptions.ts        # NextAuth configuration
│   ├── components/               # Reusable UI components
│   │   ├── ErrorMessage.tsx      # Form error display
│   │   ├── IssueStatusBadge.tsx  # Status indicator badges
│   │   ├── Link.tsx              # Custom Link component
│   │   ├── Pagination.tsx        # Table pagination
│   │   ├── Skeleton.tsx          # Loading placeholders
│   │   └── Spinner.tsx           # Loading indicators
│   ├── issues/                   # Issues feature module
│   │   ├── [id]/                 # Issue detail pages
│   │   │   ├── AssigneeSelect.tsx # User assignment dropdown
│   │   │   ├── DeleteIssueButton.tsx # Delete confirmation
│   │   │   ├── EditIssueButton.tsx   # Edit navigation
│   │   │   ├── IssueDetails.tsx      # Issue display component
│   │   │   ├── edit/             # Edit issue page
│   │   │   └── page.tsx          # Issue detail page
│   │   ├── _components/          # Issue-specific components
│   │   │   ├── IssueForm.tsx     # Create/Edit form
│   │   │   └── IssueFormSkeleton.tsx # Form loading state
│   │   ├── new/                  # Create issue page
│   │   ├── IssueActions.tsx      # Filter and action bar
│   │   ├── IssueStatusFilter.tsx # Status filtering dropdown
│   │   ├── IssueTable.tsx        # Issues data table
│   │   └── page.tsx              # Issues list page
│   ├── IssueChart.tsx            # Dashboard chart component
│   ├── IssueSummary.tsx          # Dashboard summary cards
│   ├── LatestIssues.tsx          # Dashboard recent issues
│   ├── NavBar.tsx                # Navigation header
│   ├── QueryClientProvider.tsx   # React Query setup
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Dashboard page
│   ├── globals.css               # Global styles
│   ├── theme-config.css          # Radix UI theme
│   └── validationSchema.ts       # Zod schemas
├── prisma/                       # Database configuration
│   ├── migrations/               # Database migrations
│   ├── client.ts                 # Prisma client setup
│   └── schema.prisma             # Database schema
├── middleware.ts                 # Route protection middleware
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 🗄️ Database Schema

The application uses a MySQL database with the following core entities:

### Issues Table
```sql
Issue {
  id               Int      @id @default(autoincrement())
  title            String   @db.VarChar(255)
  description      String   @db.Text
  status           Status   @default(OPEN)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  assignedToUserId String?  @db.VarChar(255)
  assignedToUser   User?    @relation(fields: [assignedToUserId], references: [id])
}
```

### User Authentication (NextAuth.js)
- **User**: User profiles with Google OAuth data
- **Account**: OAuth account linking
- **Session**: User session management
- **VerificationToken**: Email verification tokens

### Status Enum
```typescript
enum Status {
  OPEN        // New issues
  IN_PROGESS  // Currently being worked on
  CLOSED      // Completed issues
}
```

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint code analysis

# Database Operations
npx prisma generate  # Generate Prisma client after schema changes
npx prisma db push   # Push schema changes to database
npx prisma migrate dev # Create and apply new migrations
npx prisma studio    # Open Prisma Studio database GUI
npx prisma db seed   # Run database seeders (if configured)
```

### Development Workflow

1. **Database Changes**
   - Modify `prisma/schema.prisma`
   - Run `npx prisma db push` for development
   - Run `npx prisma generate` to update client

2. **Adding New Features**
   - Create components in appropriate directories
   - Add API routes following REST conventions
   - Implement proper TypeScript types
   - Add Zod validation schemas

3. **Form Handling Pattern**
   ```typescript
   // Using React Hook Form + Zod
   const form = useForm<FormData>({
     resolver: zodResolver(validationSchema)
   });
   ```

4. **API Route Pattern**
   ```typescript
   // Validation and authentication
   const session = await getServerSession(authOptions);
   const validation = schema.safeParse(body);
   ```

### Code Conventions

- **TypeScript**: Strict mode enabled with path mapping (`@/*`)
- **Components**: Functional components with TypeScript interfaces
- **Styling**: Tailwind utility classes with Radix UI components
- **API**: RESTful conventions with proper HTTP status codes
- **Database**: Prisma client with relation mode for MySQL compatibility

---

## 🚢 Deployment

### Environment Variables (Production)

```env
# Database (Production MySQL instance)
DATABASE_URL="mysql://user:password@host:port/database"

# NextAuth (Production domain)
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="production-secret-key"

# Google OAuth (Production credentials)
GOOGLE_CLIENT_ID="production-google-client-id"
GOOGLE_CLIENT_SECRET="production-google-client-secret"
```

### Vercel Deployment

1. **Connect Repository**
   - Import project in Vercel dashboard
   - Connect to GitHub repository

2. **Configure Environment Variables**
   - Add all production environment variables in Vercel dashboard
   - Ensure Google OAuth redirect URI includes production domain

3. **Database Setup**
   - Use PlanetScale, Railway, or other MySQL hosting service
   - Update `DATABASE_URL` with production connection string
   - Run migrations: `npx prisma db push`

4. **Build Configuration**
   ```json
   // package.json
   {
     "scripts": {
       "build": "next build",
       "postinstall": "prisma generate"
     }
   }
   ```

### Production Considerations

- **Sentry Configuration**: Update DSN for production error tracking
- **Database**: Use connection pooling for production MySQL
- **OAuth**: Configure production redirect URIs in Google Console
- **Performance**: Enable Next.js image optimization
- **Security**: Implement rate limiting for API routes

---

## 📚 API Documentation

### Authentication Endpoints

```
GET  /api/auth/signin     # Initiate Google OAuth flow
GET  /api/auth/signout    # Sign out current user
GET  /api/auth/session    # Get current session
```

### Issues API

```
GET    /api/issues        # List all issues with filtering
POST   /api/issues        # Create new issue (auth required)
PATCH  /api/issues/:id    # Update issue (partial update)
DELETE /api/issues/:id    # Delete issue (auth required)
```

**Query Parameters:**
- `status`: Filter by issue status (`OPEN`, `IN_PROGESS`, `CLOSED`)
- `orderBy`: Sort by field (`title`, `status`, `createdAt`)
- `page`: Pagination page number

**Request/Response Examples:**

```typescript
// POST /api/issues
{
  "title": "Bug in user authentication",
  "description": "Users cannot log in with Google OAuth"
}

// Response
{
  "id": 1,
  "title": "Bug in user authentication",
  "description": "Users cannot log in with Google OAuth",
  "status": "OPEN",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z",
  "assignedToUserId": null
}
```

### Users API

```
GET /api/users            # List all users (for assignment dropdown)
```

---

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `npm install`
4. Set up environment variables
5. Run development server: `npm run dev`

### Pull Request Process

1. Ensure code follows existing patterns and conventions
2. Add TypeScript types for all new features
3. Test authentication flows if modifications affect auth
4. Update documentation for significant changes
5. Ensure build passes: `npm run build`

### Code Style Guidelines

- Use TypeScript for all new code
- Follow existing component patterns
- Implement proper error handling
- Add loading states for async operations
- Use Zod schemas for all form validation

---

## 🔍 Troubleshooting

### Common Issues

**Database Connection Errors**
```bash
# Check MySQL connection
npx prisma db pull

# Reset database
npx prisma db push --force-reset
```

**Authentication Issues**
- Verify Google OAuth credentials in `.env`
- Check redirect URI configuration in Google Console
- Ensure `NEXTAUTH_SECRET` is set and secure

**Build Failures**
```bash
# Clear Next.js cache
rm -rf .next

# Regenerate Prisma client
npx prisma generate

# Rebuild application
npm run build
```

**Type Errors**
- Run `npx prisma generate` after schema changes
- Check TypeScript version compatibility
- Ensure all imports use correct paths

---

## 📈 Performance & Monitoring

### Built-in Optimizations

- **React Query**: Intelligent caching and background updates
- **Next.js Image**: Automatic image optimization
- **Dynamic Imports**: Code splitting for heavy components (SimpleMDE)
- **Database Indexing**: Optimized queries with Prisma
- **Static Generation**: Pre-rendered pages where possible

### Monitoring with Sentry

The application includes comprehensive error tracking:
- Client-side error monitoring
- Server-side error tracking
- Performance monitoring
- Session replay (configurable)

Monitor your application at [Sentry Dashboard](https://sentry.io)

---

## 🛡️ Security Considerations

- **Authentication**: Secure JWT session management
- **Route Protection**: Middleware-based access control
- **Input Validation**: Zod schema validation on all inputs
- **SQL Injection**: Prisma ORM provides built-in protection
- **XSS Protection**: React's built-in escaping
- **CSRF**: NextAuth.js built-in CSRF protection

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🚀 Future Enhancements

- **Real-time Updates**: WebSocket integration for live issue updates
- **File Attachments**: Support for issue attachments and images
- **Advanced Permissions**: Role-based access control (Admin, Developer, Reporter)
- **Email Notifications**: Automated notifications for issue assignments
- **Advanced Filtering**: Date ranges, assignee filtering, custom fields
- **API Rate Limiting**: Protection against abuse
- **Audit Logs**: Track all changes to issues
- **Custom Status Workflows**: Configurable issue lifecycles

---

<div align="center">

**Built with ❤️ by [jnjambrin0](https://github.com/jnjambrin0)**

[⭐ Star this repo](https://github.com/jnjambrin0/Issue-Tracker) • [🐛 Report Bug](https://github.com/jnjambrin0/Issue-Tracker/issues) • [✨ Request Feature](https://github.com/jnjambrin0/Issue-Tracker/issues)

</div>