import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea'; 
import { Label } from './ui/label'; 
import { Card, CardContent } from './ui/card';
import Header from './Header';

const Footer: React.FC = () => {
  // Ref for the main container for entrance animation
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between animating children
      },
    },
  };

  // Animation variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Placeholder for form submission logic
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement actual form submission logic (e.g., send data to a backend API)
    console.log('Form submitted!');
    // You would typically collect form data here and send it
  };

  return (
    <footer className="bg-gray-900 py-12 px-4 rounded-b-xl md:px-6 text-gray-300"> 
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
                <a href="/" className="flex items-center gap-2 mb-4">
                    {/* Placeholder Icon for GreenGov */}
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
                        className="h-6 w-6 text-green-500"
                    >
                        <path d="M14 19l-3 3-3-3"/>
                        <path d="M12 15V2"/>
                        <path d="M20 10c0 4.418-8 12-8 12S4 14.418 4 10a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="text-xl font-bold text-white">GreenGov</span>
                </a>
                <p className="text-gray-400 text-sm">Assisting government bodies in adopting green technologies and sustainable practices.</p> 
            </div>
            <div>
                <h3 className="font-bold mb-4 text-white">Navigation</h3> 
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#about" className="text-gray-400 hover:text-white"> 
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-gray-400 hover:text-white"> 
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#casestudies" className="text-gray-400 hover:text-white"> 
                            Case Studies
                        </a>
                    </li>
                     <li>
                        <a href="#blog" className="text-gray-400 hover:text-white"> 
                            Insights
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-400 hover:text-white"> 
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            {/* Services Links */}
            <div>
                <h3 className="font-bold mb-4 text-white">Services</h3> 
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white"> 
                            Sustainability Strategy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white"> 
                            Technology Implementation
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white"> 
                            Regulatory Compliance
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Impact Assessment
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white"> 
                            Renewable Energy
                        </a>
                    </li>
                </ul>
            </div>
           
            {/* <div>
                <h3 className="font-bold mb-4 text-white">Contact</h3> 
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                        
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
                            className="h-4 w-4 text-green-500"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="text-gray-400">+1 (555) 987-6543</span> 
                    </li>
                    <li className="flex items-center gap-2">
                      
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
                            className="h-4 w-4 text-green-500"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span className="text-gray-400">info@greengov.com</span> 
                    </li>
                    <li className="flex items-center gap-2">
                 
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
                            className="h-4 w-4 text-green-500" 
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-gray-400">456 Sustainability Ave, Suite 200, Capital City, State 67890</span> 
                    </li>
                </ul>
            </div> */}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"> 
            <p className="text-sm text-gray-500">© 2025 GreenGov. All Rights Reserved.</p> 
            <div className="flex gap-4 mt-4 md:mt-0">

                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
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
                        className="h-5 w-5"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
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
                        className="h-5 w-5"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
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
                        className="h-5 w-5"
                    >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
