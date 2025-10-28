import { Github, Linkedin, Twitter, Mail, Download, ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Hero = () => {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      github: <Github className="w-5 h-5" />,
      linkedin: <Linkedin className="w-5 h-5" />,
      twitter: <Twitter className="w-5 h-5" />,
      mail: <Mail className="w-5 h-5" />
    };
    return icons[iconName] || null;
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 object-cover"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
              {personalInfo.title}
            </p>
          </div>

          {/* Bio */}
          <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            )}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#skills')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-white/70" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
