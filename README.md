# Tripr

A mobile-first travel planning application built with React, TypeScript, and Capacitor. Tripr helps users discover, plan, and organize their travel experiences through an intuitive swipe-based interface.

## Features

- **Swipe-based Destination Discovery**: Explore travel destinations with an interactive card-based interface
- **Destination Browsing**: Browse and filter travel destinations
- **Travel Planning**: Organize and save your travel plans
- **Google OAuth Authentication**: Secure login with Google accounts
- **Protected Routes**: Authentication-required pages for personalized experiences
- **Mobile Support**: Native iOS and Android support via Capacitor
- **Responsive Design**: Tailored experience for mobile and desktop devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS

## Tech Stack

### Frontend

- **Frontend Framework**: React 18.3 + TypeScript
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Radix UI, Lucide Icons
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **Mobile**: Capacitor 7.4 (iOS & Android)
- **Charts**: Recharts
- **Notifications**: Sonner (Toast notifications)
- **Code Quality**: ESLint with TypeScript support

### Backend

- **Server**: Express.js with TypeScript
- **Authentication**: Google OAuth with httpOnly cookies
- **Session Management**: Server-side session management
- **Database**: In-memory (can be replaced with PostgreSQL/MongoDB)

## Project Structure

```
├── src/                    # Frontend source code
│   ├── pages/              # Route pages (Landing, Login, Swipe, Results, etc.)
│   ├── components/         # Reusable React components
│   │   ├── ui/            # Radix UI component library
│   │   ├── NavLink.tsx
│   │   ├── SwipeCard.tsx
│   │   ├── ProtectedRoute.tsx  # Route protection component
│   │   └── UserMenu.tsx        # User menu with logout
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx    # Authentication context
│   ├── services/          # Service modules
│   │   ├── auth.ts           # Authentication service
│   │   └── api.ts            # API client
│   ├── types/             # TypeScript type definitions
│   │   └── auth.ts           # Authentication types
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── data/              # Static data (destinations, etc.)
│   ├── assets/            # Images and other assets
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── server/                 # Backend server
│   ├── src/
│   │   ├── routes/        # API routes
│   │   │   └── auth.ts    # Authentication routes
│   │   ├── middleware/    # Express middleware
│   │   │   └── auth.ts    # Authentication middleware
│   │   ├── services/      # Business logic
│   │   │   └── googleAuth.ts  # Google OAuth service
│   │   ├── db/            # Database layer
│   │   │   └── database.ts    # Database implementation
│   │   ├── types/         # TypeScript types
│   │   │   └── auth.ts    # Authentication types
│   │   └── index.ts       # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── ios/                    # iOS native project (Capacitor)
├── android/               # Android native project (Capacitor)
├── public/                # Static files
└── vite.config.ts         # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/bun
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tripr
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Set up Google OAuth:

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google+ API
   - Go to "Credentials" → "Create Credentials" → "OAuth client ID"
   - Choose "Web application" as the application type
   - Add authorized JavaScript origins:
     - `http://localhost:8080` (for development)
     - Your production domain (for production)
   - Add authorized redirect URIs:
     - `http://localhost:8080` (for development)
     - Your production domain (for production)
   - Copy the Client ID

4. Create a `.env` file in the root directory:

```bash
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id-here
VITE_API_URL=http://localhost:3001
```

Replace `your-google-oauth-client-id-here` with your actual Google OAuth Client ID.

5. Set up the backend server:

```bash
cd server
npm install
cp .env.example .env
```

Edit `server/.env` and add your Google Client ID:

```bash
GOOGLE_CLIENT_ID=your-google-oauth-client-id-here
FRONTEND_URL=http://localhost:8080
PORT=3001
```

### Development

1. Start the backend server (in a separate terminal):

```bash
cd server
npm run dev
```

The backend will run on `http://localhost:3001`

2. Start the frontend development server:

```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:8080`

### Docker Deployment

1. **Copy environment file:**

   ```bash
   cp docker-compose.env.example .env
   ```

2. **Edit `.env` file** and set your Google OAuth Client ID:

   ```env
   GOOGLE_CLIENT_ID=your-google-oauth-client-id-here
   ```

3. **Build and start services:**

   ```bash
   docker-compose up --build
   ```

4. **Access the application:**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3001

See `DOCKER.md` for detailed Docker documentation.

### Building

Build for production:

```bash
bun run build
# or
npm run build
```

Build for development mode:

```bash
bun run build:dev
# or
npm run build:dev
```

### Preview

Preview the production build locally:

```bash
bun run preview
# or
npm run preview
```

## Mobile Development

### iOS

Build and deploy for iOS:

```bash
npx cap add ios
npx cap build ios
# or open in Xcode
npx cap open ios
```

### Android

#### Setup Android SDK Path and Studio

Before building for Android, you must configure the Android SDK location and Android Studio path.

**1. Configure Android SDK location** - Create or update `android/local.properties` with:

```properties
sdk.dir=C:\Users\<YourUsername>\AppData\Local\Android\Sdk
```

Or set the `ANDROID_HOME` environment variable:

```bash
$env:ANDROID_HOME = "C:\Users\<YourUsername>\AppData\Local\Android\Sdk"
```

**2. Configure Android Studio path** - Set the `CAPACITOR_ANDROID_STUDIO_PATH` environment variable to point to your Android Studio installation:

```bash
$env:CAPACITOR_ANDROID_STUDIO_PATH = "C:\Program Files\Android\Android Studio"
```

Or on your system, find your Android Studio installation path and set it accordingly.

#### Build and Deploy

Build and deploy for Android (Server + Mobile App):

```bash
cd server
npm run build
npm run dev:android
```

```bash
npx cap add android
npx cap build android
# or open in Android Studio
npx cap run android
```

### Sync Native Changes

After making changes to native code or dependencies:

```bash
npx cap sync
```

## Code Quality

Lint the codebase:

```bash
bun run lint
# or
npm run lint
```

## Capacitor Configuration

Native platform settings are configured in `capacitor.config.ts`. Platform-specific configurations are in:

- iOS: `ios/App/App/capacitor.config.json`
- Android: Android native project settings

## Environment

- **Node.js Alias**: Path resolution uses `@` to reference the `src/` directory
- **Frontend Port**: Development server runs on port 8080
- **Backend Port**: Backend server runs on port 3001
- **Host**: Development server listens on `::`
- **Environment Variables**:
  - `VITE_GOOGLE_CLIENT_ID`: Your Google OAuth 2.0 Client ID (required for authentication)
  - `VITE_API_URL`: Backend API URL (defaults to `http://localhost:3001`)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS 13.0+
- Android 8.0+ (API 26+)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run lint to ensure code quality
4. Commit with clear messages
5. Submit a pull request

## License

[Add your license information here]

## Contact

For questions or support, please open an issue or contact the development team.
