import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { contactInfo, socialLinks } from '../data/portfolio';

const Contact = () => {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      github: <Github className="w-5 h-5" />,
      linkedin: <Linkedin className="w-5 h-5" />,
      mail: <Mail className="w-5 h-5" />
    };
    return icons[iconName] || null;
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-4 p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 group"
                >
                  <div className="p-3 bg-amber-400/10 rounded-lg group-hover:bg-amber-400 transition-colors">
                    <Mail className="w-6 h-6 text-amber-400 group-hover:text-slate-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">{contactInfo.email}</p>
                  </div>
                </a>

                {/* Phone */}
                {contactInfo.phone && (
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-4 p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/20 group"
                  >
                    <div className="p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400 transition-colors">
                      <Phone className="w-6 h-6 text-purple-400 group-hover:text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-medium">{contactInfo.phone}</p>
                    </div>
                  </a>
                )}

                {/* Location */}
                {contactInfo.location && (
                  <div className="flex items-center space-x-4 p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-amber-400/20">
                    <div className="p-3 bg-amber-400/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">{contactInfo.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-amber-400/20 hover:border-amber-400/50 hover:bg-amber-400/10 hover:scale-110 transition-all duration-300 text-amber-400"
                    aria-label={link.name}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            {contactInfo.availability && (
              <div className="p-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl text-slate-900 text-center">
                <h3 className="text-xl font-bold mb-2">Availability</h3>
                <p className="text-slate-900/90 font-medium">{contactInfo.availability}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
