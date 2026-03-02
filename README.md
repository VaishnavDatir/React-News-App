# THE REACT NEWS

## PROJECT OVERVIEW
A high-performance news aggregator built with React 19, TanStack Query, and Framer Motion. THE REACT NEWS provides a seamless, immersive reading experience with real-time headlines and dynamic categorization.

## KEY FEATURES
* Modern Metadata: Leveraging React 19's native document metadata hoisting for SEO-ready page titles.
* Smart Data Fetching: Powered by TanStack Query for aggressive caching, "stale-while-revalidate" logic, and zero-flicker transitions.
* Layout: A sophisticated grid system that intelligently chunks news into sections with featured hero articles.
* Adaptive Theme: Deeply integrated Dark and Light modes using Tailwind CSS and React Context.
* Fluid Navigation: Animated category tabs with smart-centering logic and layout-id transitions via Framer Motion.
* Global Search: Real-time headline filtering with a reactive search interface and dedicated result views.

## TECH STACK
* Framework: React 19 + Vite
* State Management: TanStack Query
* Styling: Tailwind CSS
* Animations: Framer Motion
* Icons: Material UI (MUI) Icons
* API Client: Axios
* Routing: React Router

## INSTALLATION & SETUP
1. Clone the repository:
   git clone https://github.com/VaishnavDatir/React-News-App
   cd React-News-App

2. Install dependencies:
   npm install

3. Environment Configuration:
   Create a .env file in the root directory and add your NewsAPI credentials:
   VITE_NEWS_API_KEY=your_api_key_here
   VITE_NEWS_BASE_URL=https://newsapi.org/v2

4. Start Development Server:
   npm run dev

## PROJECT STRUCTURE
src/
|-- app/         # Root App component and styles
|-- components/  # Atomic UI components (Cards, Navbar, etc.)
|-- config/      # Environment & Global configurations
|-- hooks/       # Custom TanStack Query hooks
|-- services/    # API Client (Axios) definitions
|-- layouts/     # MainLayout and nested route wrappers
|-- pages/       # View-level components (Home, Search, Category)
|-- types/       # TypeScript interfaces and news models

## API ARCHITECTURE
The project follows a Service-Hook Pattern to decouple UI from network logic:
* Services: newsService.ts handles raw Axios requests and header security.
* Hooks: useNews.ts manages query keys, stale times, and caching logic.
