import React from 'react';
import { Button } from './ui/button'; // Assuming shadcn/ui Button component
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Header: React.FC = () => {
  return (
    // Header element with sticky positioning, background color, text color, and rounded bottom corners
    <header className="sticky top-0 z-50 w-full bg-green-800 text-white rounded-t-2xl shadow-lg">
      {/* Container for layout and centering */}
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo and Company Name - Using Link for navigation to home */}
        <Link to="/" className="flex items-center gap-2">
          {/* Placeholder Icon for GreenGov - Replace with a relevant logo/icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-white"
          >
            {/* Example SVG path - replace with your logo */}
            <path d="M14 19l-3 3-3-3"/>
            <path d="M12 15V2"/>
            <path d="M20 10c0 4.418-8 12-8 12S4 14.418 4 10a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {/* Company Name */}
          <span className="text-xl font-bold text-white">GreenGov</span>
        </Link>

        {/* Navigation Menu - Hidden on small screens, flex on medium and larger */}
        <nav className="hidden md:flex gap-6 text-sm">
          {/* Navigation Links - Using Link for internal navigation */}
          <Link to="/#about" className="text-white font-medium hover:underline">
            About Us
          </Link>
          <Link to="/#services" className="text-white font-medium hover:underline">
            Services
          </Link>
          {/* Assuming a blog or insights page/section */}
          <Link to="/#blog" className="text-white font-medium hover:underline">
            Insights
          </Link>
          {/* Link to the Contact Page */}
          <Link to="/contact" className="text-white font-medium hover:underline">
            Contact
          </Link>
        </nav>

        {/* Call to Action Button - Styled with Tailwind and rounded */}
        {/* Assuming this button might link to the contact page or a specific consultation form */}
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">Get a Consultation</Button>
      </div>
    </header>
  );
};

export default Header;
