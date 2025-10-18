import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Shield, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = [
  { href: "/report", text: "Report an Issue" },
  { href: "/status", text: "Check Status" },
  { href: "/blog", text: "Our Blog" },
  { href: "/help", text: "Help Center" },
  { href: "/contact-us", text: "Contact Us" },
  { href: "/about-us", text: "About Us" },
];

const socialLinks = [
  { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
  { href: "https://www.linkedin.com/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/", icon: Instagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Shield className="w-7 h-7 text-blue-500" />
              <span>SafeSpeak</span>
            </Link>
            <p className="text-sm leading-relaxed pr-4">
              A secure and transparent platform for reporting misconduct. Your voice matters, your identity is protected.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-blue-500 hover:translate-x-1 transition-all duration-300 ease-in-out"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:support@SafeSpeak.com" className="flex items-start gap-3 hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>support@SafeSpeak.com</span>
              </a>
               <a href="tel:+919500000000" className="flex items-start gap-3 hover:text-blue-500 transition-colors">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+91 95X XXX XXXX</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>KNIT, Sultanpur, Uttar Pradesh, 228118, India</span>
              </div>
            </div>
          </div>

           <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Stay Updated</h4>
            <p className="text-sm mb-3">Get updates on security and transparency news.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="w-full bg-slate-800 border border-slate-700 rounded-l-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-r-md transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SafeSpeak. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-500 hover:text-blue-500 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;