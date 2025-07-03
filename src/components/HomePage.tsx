import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Button } from './ui/button'; // Assuming shadcn/ui or similar Button component
import { Card, CardContent, CardFooter } from './ui/card'; // Assuming shadcn/ui or similar Card components

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  // Refs for GSAP animations or elements to target
  // useRef automatically infers the type based on the initial value (null here)
  const heroRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const commitmentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const ctaBannerRef = useRef<HTMLDivElement>(null);
  const bottomBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- GSAP Animations (Examples) ---

    // Ensure refs are not null before animating
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      );
    }

    if (logosRef.current) {
      // Logos Section Fade In with ScrollTrigger
      gsap.fromTo(logosRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 85%', // Adjust trigger point as needed
            toggleActions: 'play none none none',
          }
        }
      );
    }

    if (aboutRef.current) {
        // About Section columns slide in (example using children)
        // gsap.utils.toArray returns an array of the matched elements
        gsap.utils.toArray<HTMLElement>(aboutRef.current.querySelectorAll('.about-col')).forEach((col, index) => {
            gsap.fromTo(col,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, // Slide left for even index, right for odd
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });
    }

    if (servicesRef.current) {
        // Staggered animation for Service Cards
        gsap.utils.toArray<HTMLElement>(servicesRef.current.querySelectorAll('.service-card')).forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.4, // Stagger delay
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });
    }


    // Add more GSAP animations for other sections (commitment, testimonials, blog, banners, etc.)
    // using similar patterns with useRef and ScrollTrigger and null checks

  }, []); // Empty dependency array ensures this runs once on mount
  interface BlogPost {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    link: string; // Assuming each blog post has a link
  }

  return (
    <div className="flex flex-col min-h-screen">

    <main className="flex-1">

        {/* Hero Section - Adapted for GreenGov */}        
        <section ref={heroRef} className="relative bg-emerald-800 text-white rounded-xl ">
            <header className="sticky top-0 z-50 w-full bg-emerald-800 text-white rounded-b-2xl rounded-xl"> {/* Adjusted color and added shadow */}
            <div className="container flex items-center justify-between h-16 px-4 md:px-6">
                <a href="/" className="flex items-center gap-2">
              
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
                    <path d="M14 19l-3 3-3-3"/> {/* Example: Simple down arrow, replace with leaf/globe etc. */}
                    <path d="M12 15V2"/>
                    <path d="M20 10c0 4.418-8 12-8 12S4 14.418 4 10a8 8 0 0 1 16 0Z"/> {/* Example: Location pin, replace */}
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-xl font-bold text-white">GreenGov</span> {/* Updated Company Name */}
                </a>
                <nav className="hidden md:flex gap-6 text-sm">
                <a href="#about" className="text-white font-medium hover:underline"> {/* Updated links */}
                    About Us
                </a>
                <a href="#services" className="text-white font-medium hover:underline">
                    Services
                </a>
                <a href="#blog" className="text-white font-medium hover:underline"> {/* Assuming Blog/Insights section */}
                    Insights
                </a>
                <a href="/contact" className="text-white font-medium hover:underline"> {/* Assuming Contact section */}
                    Contact
                </a>
                </nav>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get a Consultation</Button> {/* Updated Button Text and style */}
            </div>
            </header>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-4 md:px-6 z-10 text-left">
                <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Your Trusted Partner for Home Clean Solutions
                </h1>
                <p className="text-lg text-emerald-100">
                    We take pride in our attention to detail and commitment to excellence in every cleaning service we
                    provide.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Book Now</Button>
                    <Button variant="outline" className="text-gray-800 border-white hover:bg-emerald-700">
                    Discover More
                    </Button>
                </div>
                </div>
                <div className="relative h-[300px] md:h-auto">
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Home cleaning professional"
                    className="object-cover rounded-lg w-full h-full"
                />
                </div>
            </div>
        </section>

        <section ref={servicesRef} id='services' className="abslute py-12 px-4 md:px-6 bg-white z-50">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4"> {/* Adjusted color */}
                    {/* Placeholder Icon 1 - Replace with relevant icon (e.g., handshake, shield) */}
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
                        className="h-6 w-6 text-green-700"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /> {/* Example: Shield */}
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Trust & Reliability</h3> {/* Updated text */}
                    <p className="text-gray-600">
                        Building strong partnerships with government bodies through transparent and dependable consulting services.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4"> {/* Adjusted color */}
                    {/* Placeholder Icon 2 - Replace with relevant icon (e.g., lightbulb, gear) */}
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
                        className="h-6 w-6 text-green-700"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /> {/* Example: Heart, replace */}
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Expertise & Innovation</h3> {/* Updated text */}
                    <p className="text-gray-600">
                        Leveraging deep knowledge in green technologies and innovative strategies to address complex environmental challenges.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    {/* Placeholder Icon 3 - Replace with relevant icon (e.g., chart, checkmark) */}
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
                        className="h-6 w-6 text-green-700"
                    >
                        <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M20 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                        <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M16.5 7.5a.5.5 0 0 0-1 0v.01a.5.5 0 0 0 1 0Z" />
                        <path d="M7.5 7.5a.5.5 0 0 0 1 0v-.01a.5.5 0 0 0-1 0Z" />
                        <path d="M16.5 16.5a.5.5 0 0 0-1 0v.01a.5.5 0 0 0 1 0Z" />
                        <path d="M7.5 16.5a.5.5 0 0 0 1 0v-.01a.5.5 0 0 0-1 0Z" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Measurable Impact</h3> {/* Updated text */}
                    <p className="text-gray-600">
                        Focused on delivering quantifiable environmental improvements and helping governments achieve their sustainability targets.
                    </p>
                </div>
            </div>
        </section>

        {/* About Us Section - Adapted for GreenGov */}
        <section className="py-12 px-4 md:px-6 bg-gray-50"> {/* Adjusted background */}
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] md:h-[400px]">
                    <img
                        src="https://placehold.co/500x400/14532D/ffffff?text=GreenGov+About+Us" // Placeholder image with GreenGov theme
                        alt="GreenGov Team Collaboration" // Updated alt text
                        className="w-full h-full object-cover rounded-lg shadow-lg" // Added shadow
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">About GreenGov</h2> {/* Updated Heading */}
                    <p className="text-gray-600 mb-6">
                        GreenGov was founded with the mission to accelerate the adoption of sustainable practices within government. We believe that the public sector plays a critical role in leading the transition to a greener future. Our team brings together deep expertise in environmental science, technology, and public policy to provide comprehensive consulting services.
                    </p>
                    <p className="text-gray-600 mb-6">
                        We work closely with government agencies at all levels to identify opportunities for sustainability improvements, implement innovative green technologies, and navigate the complexities of environmental regulations. Our goal is to help governments achieve their environmental objectives efficiently and effectively, creating a lasting positive impact.
                    </p>
                    <div className="flex items-center gap-3 bg-green-100 p-3 rounded-lg"> {/* Adjusted color */}
                        <div className="w-3 h-3 bg-green-700 rounded-full"></div> {/* Adjusted color */}
                        <span className="text-sm font-medium text-green-800">Collaboration. Innovation. Impact.</span> {/* Updated text */}
                    </div>
                </div>
            </div>
        </section>

        {/* Trusted By Section - Adapted for GreenGov */}
        <section className="py-8 px-4 md:px-6 bg-white"> {/* Adjusted background */}
            <div className="container">
                <h2 className="text-xl font-semibold text-center text-gray-600 mb-8">Trusted By Government Bodies</h2> {/* Updated Heading */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {/* Placeholder Logos - Replace with actual government/partner logos */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-24 h-12 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                            <img src={`https://placehold.co/100x50/E5E7EB/4B5563?text=Gov+Logo+${i}`} alt={`Government Logo ${i}`} className="w-full h-full object-contain" /> {/* Placeholder styling and alt text */}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Commitment Section (Driving Tangible Impact) - Retained structure, updated content */}
        <section ref={commitmentRef} className="py-12 px-4 md:px-6 bg-green-800 text-white"> {/* Retained color */}
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold">Driving Tangible Impact in Public Sector Sustainability</h2> {/* Updated Heading */}
                    <p className="text-green-100"> {/* Retained text color */}
                        We are committed to achieving real, measurable results in sustainability for government. Our focus is on implementing practical solutions that lead to significant reductions in environmental footprint, improved resource efficiency, and compliance with regulatory requirements.
                    </p>
                    <p className="text-green-100"> {/* Retained text color */}
                        Through rigorous analysis and innovative strategies tailored to the public sector, we ensure your sustainability investments deliver maximum positive impact for your agency and the community.
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white self-start mt-4 rounded-full">Learn About Our Impact</Button> {/* Updated Button Text and style */}
                </div>
                <div className="relative h-[300px] md:h-auto">
                    <img
                        src="https://placehold.co/400x400/064E3B/ffffff?text=Measurable+Results" // Placeholder image
                        alt="Measurable Impact" // Updated alt text
                        className="w-full h-full object-cover rounded-lg shadow-lg" // Added shadow
                    />
                </div>
            </div>
        </section>

        {/* Services Section - Adapted for GreenGov */}
        <section className="py-12 px-4 md:px-6 bg-gray-50"> {/* Retained background */}
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Comprehensive Solutions for Government</h2> {/* Updated Heading */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Sustainability Strategy Development",
                            description: "Creating tailored roadmaps for government agencies to achieve long-term environmental goals.",
                            image: "https://placehold.co/300x200/D1FAE5/065F46?text=Strategy", // Placeholder image
                        },
                        {
                            title: "Green Technology Implementation",
                            description: "Assisting in the selection and integration of efficient and sustainable technologies.",
                            image: "https://placehold.co/300x200/D1FAE5/065F46?text=Technology", // Placeholder image
                        },
                        {
                            title: "Regulatory Compliance & Reporting",
                            description: "Ensuring adherence to environmental laws and facilitating accurate reporting.",
                            image: "https://placehold.co/300x200/D1FAE5/065F46?text=Compliance", // Placeholder image
                        },
                        {
                            title: "Environmental Impact Assessment",
                            description: "Evaluating the potential environmental effects of projects and operations.",
                            image: "https://placehold.co/300x200/D1FAE5/065F46?text=Assessment", // Placeholder image
                        },
                        {
                            title: "Renewable Energy Consulting",
                            description: "Guidance on transitioning to and implementing renewable energy sources.",
                            image: "https://placehold.co/300x200/D1FAE5/065F46?text=Renewable+Energy", // Placeholder image
                        },
                        {
                            title: "Sustainable Infrastructure Planning",
                            description: "Consulting on environmentally conscious design and development of public infrastructure.",
                            image: "https://placehold.co/300x200/D1FAE5/065F46?text=Infrastructure", // Placeholder image
                        },
                    ].map((service, index) => (
                        <Card key={index} className="overflow-hidden service-card rounded-xl "> {/* Added service-card class for GSAP */}
                            <div className="relative h-48">
                                <img
                                    src={service.image} // Using specific placeholder images
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-4 text-left m-3 rounded-md bg-gray-100 cursor-pointer">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3> 
                                <p className="text-gray-600 text-md">{service.description}</p>
                                <Button variant="outline" className="text-green-800 mt-5 border-green-800 hover:bg-green-50 rounded-full">
                                    Learn More
                                </Button>
                            </CardContent>
                           
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials - Adapted for GreenGov */}
        <section ref={testimonialsRef} className="py-12 px-4 md:px-6 bg-white"> {/* Retained background */}
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hear What Our Government Partners Say</h2> {/* Updated Heading */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            quote: "GreenGov's guidance was instrumental in developing our agency's new sustainability plan. Their expertise and collaborative approach were invaluable.",
                            name: "Sarah Chen",
                            title: "Director of Environmental Programs",
                        },
                        {
                            quote: "The team at GreenGov helped us navigate complex green technology procurement processes, leading to significant energy savings.",
                            name: "David Kim",
                            title: "Procurement Manager",
                        },
                        {
                            quote: "We achieved our regulatory compliance milestones ahead of schedule thanks to GreenGov's clear strategies and dedicated support.",
                            name: "Maria Garcia",
                            title: "Sustainability Officer",
                        },
                    ].map((testimonial, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex flex-col h-full">
                                <div className="text-2xl text-green-700 mb-4">"</div> {/* Adjusted color */}
                                <p className="text-gray-600 mb-6 flex-grow italic">{testimonial.quote}</p> {/* Added italic */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                                        <img
                                            src={`https://placehold.co/40x40/E5E7EB/4B5563?text=User+${index+1}`} // Placeholder image
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{testimonial.name}</p> {/* Corrected text color */}
                                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <div className="flex gap-2">
                        {/* Placeholder for slider dots - adjust logic if implementing a real slider */}
                        <div className="w-2 h-2 rounded-full bg-green-800"></div> {/* Adjusted color */}
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </section>


        {/* Mid-Page CTA Banner - Adapted for GreenGov */}
        <section ref={ctaBannerRef} className="py-20 bg-green-800 text-white text-center"> {/* Retained color */}
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Government's Green Initiatives?</h2> {/* Updated Heading */}
                <p className="text-xl mb-10 max-w-3xl mx-auto text-green-100"> 
                    Partner with GreenGov to develop and implement effective green technology and sustainable practices tailored for the public sector.
                </p>
                {/* Framer Motion example for CTA button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-800 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                    Schedule a Consultation
                </motion.button>
            </div>
        </section>

        {/* Bottom Banner (e.g., highlighting a specific outcome or offer) - Adapted for GreenGov */}
        <section ref={bottomBannerRef} className="relative py-24 mt-10 bg-[#F3752B] text-white overflow-hidden rounded-t-2xl"> {/* Adjusted color and added rounded corner */}
            {/* Background graphic or animation */}
            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Achieve Your Environmental Goals with Expert Guidance</h2> {/* Updated Heading */}
                    <p className="text-xl md:text-2xl text-blue-100"> 
                        Seamlessly integrate sustainable solutions and meet regulatory requirements with expert guidance from GreenGov.
                    </p>
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                    {/* Framer Motion example for button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                    >
                        Learn How We Can Help
                    </motion.button>
                </div>
            </div>
        </section>
    </main>
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
    </div>
  );
};

export default HomePage;
