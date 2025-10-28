import { Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center flex items-center space-x-2">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </p>

          {/* Made with love */}
          <p className="text-gray-500 text-xs flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
