import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
