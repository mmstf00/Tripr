# Tripr

A mobile-first travel planning application built with React, TypeScript, and Capacitor. Tripr helps users discover, plan, and organize their travel experiences through an intuitive swipe-based interface.

## Features

- **Swipe-based Destination Discovery**: Explore travel destinations with an interactive card-based interface
- **Destination Browsing**: Browse and filter travel destinations
- **Travel Planning**: Organize and save your travel plans
- **Mobile Support**: Native iOS and Android support via Capacitor
- **Responsive Design**: Tailored experience for mobile and desktop devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS

## Tech Stack

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

## Project Structure

```
├── src/
│   ├── pages/              # Route pages (Landing, Swipe, Results, etc.)
│   ├── components/         # Reusable React components
│   │   ├── ui/            # Radix UI component library
│   │   ├── NavLink.tsx
│   │   └── SwipeCard.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── data/              # Static data (destinations, etc.)
│   ├── assets/            # Images and other assets
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
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

### Development

Start the development server:

```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:8080`

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

Build and deploy for Android:

```bash
npx cap add android
npx cap build android
# or open in Android Studio
npx cap open android
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
- **Port**: Development server runs on port 8080
- **Host**: Development server listens on `::`

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
