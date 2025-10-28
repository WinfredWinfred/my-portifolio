import { skills } from '../data/portfolio';
import { Skill } from '../types';

const Skills = () => {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'intermediate':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'beginner':
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
      default:
        return 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white';
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                {/* Category Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3"></span>
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
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Expert</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Intermediate</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-600"></span>
            <span className="text-gray-600 dark:text-gray-400">Beginner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
