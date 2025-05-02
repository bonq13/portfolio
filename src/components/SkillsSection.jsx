const skills = [
	{
		name: 'HTML',
		level: 70,
		category: 'frontend',
	},
	{
		name: 'CSS',
		level: 65,
		category: 'frontend',
	},
	{
		name: 'JavaScript',
		level: 60,
		category: 'frontend',
	},
	{
		name: 'React',
		level: 45,
		category: 'frontend',
	},
	{
		name: 'Git',
		level: 45,
		category: 'tools',
	},
	{
		name: 'Responsive Design',
		level: 50,
		category: 'frontend',
	},
	{
		name: 'Debugging',
		level: 45,
		category: 'all',
	},
	{
		name: 'VS Code',
		level: 60,
		category: 'tools',
	},
	{
		name: 'Bootstrap',
		level: 30,
		category: 'frontend',
	},
	{
		name: 'Sass',
		level: 55,
		category: 'frontend',
	},
	{
		name: 'Tailwind',
		level: 30,
		category: 'frontend',
	},
];
export const SkillsSection = () => {
	return (
		<section id='skills' className='py-24 px-4 relative bg-secondary/30'>
			<div className='container ms-auto max-w-5xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
					My <span className='text-primary'>Skills</span>
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{skills.map((skill, key) => (
						<div
							key={key}
							className='bg-card p-6 rounded-lg shadow-xs card-hover'>
							<div className='text-left mb-4 '>
								<h3 className='font-semibold text-lg'>{skill.name}</h3>
							</div>
							<div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
								<div
									className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
									style={{ width: skill.level + '%' }}
								/>
							</div>
							<div className='text-right mt-1'>
								<span className='text-sm text-mutet-foreground'>
									{skill.level}%
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
