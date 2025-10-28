import { Calendar, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#1a1a1a] transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full shadow-lg shadow-amber-400/50"></div>
          <p className="mt-4 text-lg text-[#d4d4d4] max-w-2xl mx-auto">
            My professional journey and the roles I've held
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-violet-500 shadow-lg shadow-amber-400/30"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 border-4 border-[#1a1a1a] shadow-lg shadow-amber-400/50 animate-pulse"></div>
                </div>

                {/* Experience Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-[#2d2d2d] rounded-2xl p-6 border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20">
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="inline-block mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 text-xs font-bold rounded-full shadow-lg shadow-amber-400/50">
                          Current Position
                        </span>
                      </div>
                    )}

                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#fafafa] mb-2 flex items-center gap-2 md:justify-start">
                        <Briefcase className="w-5 h-5 text-amber-400" />
                        {exp.role}
                      </h3>
                      <p className="text-lg text-amber-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[#d4d4d4] md:justify-start">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#d4d4d4] mb-4 md:text-left">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4 text-sm text-[#d4d4d4] md:text-left">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">▸</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 md:justify-start">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-amber-400/10 text-amber-400 rounded-lg text-xs font-medium border border-amber-400/30 hover:bg-amber-400/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
