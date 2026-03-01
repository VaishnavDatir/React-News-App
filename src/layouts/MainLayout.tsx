import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* 1. Fixed/Sticky Header Area */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* 2. Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Using a container for the Outlet helps if you want to 
           animate page transitions later with Framer Motion 
        */}
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      {/* 3. Footer (Optional but recommended) */}
      <Footer />
    </div>
  );
}
