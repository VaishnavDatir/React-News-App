# THE REACT NEWS

## Project Overview

**THE REACT NEWS** is a high-performance news aggregator built with
**React 19**, **TanStack Query**, and **Framer Motion**.\
The application delivers a seamless and immersive reading experience
with real-time headlines, intelligent categorization, and smooth UI
transitions.

------------------------------------------------------------------------

## Key Features

### Modern Metadata

Leverages React 19's native document metadata hoisting to generate
dynamic, SEO-friendly page titles.

### Smart Data Fetching

Powered by TanStack Query with: - Aggressive caching -
Stale-while-revalidate strategy - Zero-flicker UI transitions

### Intelligent Layout System

A structured grid system that organizes news into clean sections with
featured hero articles.

###  Adaptive Theme

Fully integrated Dark and Light modes using Tailwind CSS and React
Context.

### Fluid Navigation

-   Animated category tabs\
-   Smart-centering logic\
-   layoutId transitions powered by Framer Motion

###  Global Search

Real-time headline filtering with a reactive search interface and
dedicated result views.

------------------------------------------------------------------------

## Tech Stack

* Framework: React 19 + Vite 
* State Management: TanStack Query 
* Styling: Tailwind CSS 
* Animations: Framer Motion 
* Icons: Material UI (MUI) Icons 
* API Client: Axios 
* Routing: React Router
------------------------------------------------------------------------

## Installation & Setup

### Clone the Repository

``` bash
git clone https://github.com/VaishnavDatir/React-News-App
cd React-News-App
```

### Install Dependencies

``` bash
npm install
```

### Environment Configuration

Create a `.env` file in the root directory and add your NewsAPI
credentials:

``` env
VITE_NEWS_API_KEY=your_api_key_here
VITE_NEWS_BASE_URL=https://newsapi.org/v2
```

### Start Development Server

``` bash
npm run dev
```

------------------------------------------------------------------------

## Project Structure

    src/
    │
    ├── app/         Root App component
    ├── components/  Reusable atomic UI components (Cards, Navbar, etc.)
    ├── config/      Environment variables and global configurations
    ├── hooks/       Custom TanStack Query hooks
    ├── services/    API client definitions (Axios setup)
    ├── layouts/     MainLayout and nested route wrappers
    ├── pages/       View-level components (Home, Search, Category)
    └── types/       TypeScript interfaces and news models

------------------------------------------------------------------------

## API Architecture

The project follows a **Service--Hook Pattern** to ensure clean
separation of concerns and scalability.

### Services Layer

`newsService.ts`\
Handles: - Raw Axios requests\
- Base configuration\
- Header security

### Hooks Layer

`useNews.ts`\
Manages: - Query keys\
- Stale times\
- Caching strategy\
- UI data orchestration

------------------------------------------------------------------------

##  Author

#### **Vaishnav Datir**
