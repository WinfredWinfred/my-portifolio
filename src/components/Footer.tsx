import { Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t border-amber-400/20 text-[#fafafa] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <p className="text-[#d4d4d4] text-sm text-center flex items-center space-x-2">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </p>

          {/* Made with love */}
          <p className="text-[#a3a3a3] text-xs flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-amber-400 fill-current animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors hover:scale-105"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
