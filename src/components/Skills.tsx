import { skills } from '../data/portfolio';
import { Skill } from '../types';

const Skills = () => {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900';
      case 'advanced':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900';
      case 'intermediate':
        return 'bg-gradient-to-r from-violet-500 to-purple-500 text-white';
      case 'beginner':
        return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white';
      default:
        return 'bg-gradient-to-r from-amber-400 to-violet-500 text-white';
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-[#1a1a1a] transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-[#d4d4d4] max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="group"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Card */}
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-[#2d2d2d] border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                {/* Category Title */}
                <h3 className="text-xl font-bold text-amber-400 mb-6 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mr-3 animate-pulse"></span>
                  {category.category}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: Skill, skillIndex: number) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-lg font-medium text-sm ${getLevelColor(
                        skill.level
                      )} hover:scale-105 transition-transform duration-200 shadow-md`}
                      style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"></span>
            <span className="text-[#d4d4d4]">Expert</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></span>
            <span className="text-[#d4d4d4]">Advanced</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></span>
            <span className="text-[#d4d4d4]">Intermediate</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-700"></span>
            <span className="text-[#d4d4d4]">Beginner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
