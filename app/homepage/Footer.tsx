import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 ">
          {/* Company Values Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Values</h4>
            <ul className="space-y-2">
              <li>Integrity</li>
              <li>Collaboration</li>
              <li>Fairness</li>
              <li>Equity</li>
              <li>Digital</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Our Services</a></li>
              <li><a href="/partners" className="hover:underline">Partners</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Business Ave, Suite 456</p>
            <p className="mb-2">City, State, Zip Code</p>
            <p className="mb-2">
              Phone: 
              <a 
                href="tel:+1234567890" 
                className="hover:underline ml-1"
                title="Call us"
              >
                (123) 456-7890
              </a>
            </p>
            <p className="mb-2">
              WhatsApp: 
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline ml-1"
                title="Chat with us on WhatsApp"
              >
                (123) 456-7890
              </a>
            </p>
            <p>
              Email: 
              <a 
                href="mailto:info@company.com" 
                className="hover:underline ml-1"
                title="Send us an email"
              >
                info@civictrack.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} CivicTrack. All rights reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
