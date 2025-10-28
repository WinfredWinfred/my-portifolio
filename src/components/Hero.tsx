import { Github, Linkedin, Download, ArrowDown, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolio';

const Hero = () => {
  const socialIcons = [
    { icon: <Github className="w-7 h-7" />, href: 'https://github.com/WinfredWinfred', label: 'GitHub' },
    { icon: <Linkedin className="w-7 h-7" />, href: 'https://www.linkedin.com/in/nsooli-winfred-980572208/', label: 'LinkedIn' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] pt-20"
    >
      {/* Dot Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-size opacity-10"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-amber-400 to-violet-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Image Icon */}
          <div className="relative group animate-scale-in">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 animate-glow transition duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full opacity-75 animate-spin" style={{ animationDuration: '8s' }}></div>
            <img
              src="/IMGP9895~3.jpg"
              alt="Profile"
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[#1a1a1a] object-cover shadow-2xl shadow-amber-400/30 ring-2 ring-amber-400/50"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tight">
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] animate-shimmer">
                {personalInfo.name}
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <p className="text-xl sm:text-2xl md:text-3xl text-amber-400 border-2 border-amber-400/30 rounded-full px-6 py-2 backdrop-blur-sm bg-amber-400/5">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed font-light tracking-wide mt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {personalInfo.bio}
          </p>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 p-4 bg-[#3a3a3a] backdrop-blur-xl rounded-xl border border-amber-400/20 hover:border-amber-400/50 hover:bg-[#2d2d2d] hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300 group"
            >
              <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400 transition-colors">
                <Mail className="w-5 h-5 text-amber-400 group-hover:text-slate-900" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-white font-medium truncate">{contactInfo.email}</p>
              </div>
            </a>

            {/* Phone */}
            {contactInfo.phone && (
              <a
                href="tel:+256752674690"
                className="flex items-center gap-3 p-4 bg-[#3a3a3a] backdrop-blur-xl rounded-xl border border-violet-400/20 hover:border-violet-400/50 hover:bg-[#2d2d2d] hover:shadow-xl hover:shadow-violet-400/20 transition-all duration-300 group"
              >
                <div className="p-2 bg-violet-400/10 rounded-lg group-hover:bg-violet-400 transition-colors">
                  <Phone className="w-5 h-5 text-violet-400 group-hover:text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#a3a3a3]">Phone</p>
                  <p className="text-sm text-[#fafafa] font-medium">{contactInfo.phone}</p>
                </div>
              </a>
            )}

            {/* Location */}
            {contactInfo.location && (
              <a
                href="https://www.google.com/maps/place/Kampala,+Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[#3a3a3a] backdrop-blur-xl rounded-xl border border-amber-400/20 hover:border-amber-400/50 hover:bg-[#2d2d2d] hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300 group"
              >
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-400 group-hover:text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#a3a3a3]">Location</p>
                  <p className="text-sm text-[#fafafa] font-medium">{contactInfo.location}</p>
                </div>
              </a>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative">{social.icon}</div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300 overflow-hidden flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">View My Work</span>
              <ChevronRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </button>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="group px-8 py-3 border-2 border-amber-400 text-amber-400 bg-transparent font-semibold text-lg rounded-full hover:bg-amber-400/10 hover:shadow-lg hover:shadow-amber-400/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            )}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#skills')}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[#3a3a3a] backdrop-blur-xl border border-amber-400/30 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-400/30 animate-bounce hover:animate-none transition-all duration-300 group"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
