import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import { Education as EducationType } from '../types';

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-[#1a1a1a] transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-[#d4d4d4] max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-violet-500"></div>

            {/* Education Items */}
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-400 to-violet-500 border-4 border-gray-50 dark:border-[#1a1a1a] animate-pulse"></div>
                </div>

                {/* Education Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 border border-violet-400/20 hover:border-violet-400/50 transition-all duration-300">
                    {/* Institution & Degree */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#fafafa] mb-2 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-violet-400" />
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-violet-400 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[#d4d4d4]">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {edu.field}
                        </span>
                        <span className="text-amber-400">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#d4d4d4] mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements & Certifications:
                        </h4>
                        <ul className="space-y-2 text-sm text-[#d4d4d4]">
                          {edu.achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-violet-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default Education;
