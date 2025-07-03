import { Code, Palette, Music, Camera, Globe, Zap, Divide } from 'lucide-react';

export const FloatingSkills = () => {
    const skills = [
    { icon: Code, label: 'Programming', delay: '0s' },
    { icon: Palette, label: 'Design', delay: '0.5s' },
    { icon: Music, label: 'Music', delay: '1s' },
    { icon: Camera, label: 'Photography', delay: '1.5s' },
    { icon: Globe, label: 'Languages', delay: '2s' },
    { icon: Zap, label: 'Marketing', delay: '2.5s' },
  ];

  return (
    <div className='absolute pointer-events-none inset-0 overflow-hidden' style={{ zIndex: 2}}>
        {skills.map((skill, index) => {
            const Icon = skill.icon;

            return(
                <div key={skill.label} 
                className='absolute animate-float opacity-20 hover:opacity-40 transition-opacity duration-300' style={{
                    left: `${15 + (index * 15) % 70}%`,
                    top: `${20 + (index * 25) % 60}%`,
                    animationDelay: skill.delay,
                    animationDuration: `${4 + (index % 3)}s`
                }}>
                    <div className='bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-4 group hover:scale-110 transition-transform  duration-300'>
                        <Icon className='h-6 w-6 text-emerald-400 mb-2' />
                        <span className='text-xs  text-emerald-300 font-medium'>{skill.label}</span>
                    </div>
                </div>
            );
        })};
    </div>
  );
};