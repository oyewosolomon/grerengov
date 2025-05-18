import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input'; 
import { Textarea } from './ui/textarea'; 
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card'; 
import Header from './Header'; 
import Footer from './Footer'; 

const ContactPage: React.FC = () => {
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
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Assuming a Header component exists and is used here or in App.tsx */}
      <Header />

      <main className="flex-1 ">
        {/* Image Section at the top with centered heading */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Added relative positioning to contain the absolute heading
          className="relative w-full h-100 md:h-100 overflow-hidden flex items-center justify-center" // Added flex centering for fallback/simplicity
        >
          {/* Background Image */}
          <img
            src="/assets/contact-bg.jpg" // Using the image path provided in the user's code
            alt="Green technology and government collaboration" // Descriptive alt text
            className="absolute inset-0 w-full h-full object-cover z-0" // Absolute positioning to cover the section
          />

          {/* Centered Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative text-4xl md:text-6xl font-bold text-white z-10 text-center" // Relative z-index to be above image, centered text
          >
            Contact Us
          </motion.h1>
        </motion.section>


        <div className="container mx-auto py-12 px-4 md:px-6"> {/* Added padding to the container */}
          {/* Page Title and Description (kept separate as it's part of the main content) */}
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in Touch with GreenGov
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Please fill out the form below or reach out through our contact details.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your inquiry" required />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={6} required />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white rounded-full py-3 text-lg">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <Card className="p-6 rounded-lg shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
                  <ul className="space-y-4 text-gray-700">
                    <motion.li variants={itemVariants} className="flex items-start gap-3">
                      {/* Phone Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      <div>
                        <span className="font-semibold">Phone:</span> +1 (555) 987-6543
                      </div>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start gap-3">
                      {/* Email Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <div>
                        <span className="font-semibold">Email:</span> info@greengov.com
                      </div>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start gap-3">
                      {/* Address Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <div>
                        <span className="font-semibold">Address:</span> 456 Sustainability Ave, Suite 200, Capital City, State 67890
                      </div>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>

              {/* Optional: Map Embedding */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 md:h-80 w-full">
           
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYOUR_LOCATION_NAME!5e0!3m2!1sen!2sus!4vYOUR_TIMESTAMP"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GreenGov Location Map"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
