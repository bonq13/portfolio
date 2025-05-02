import { ArrowRight, Github } from 'lucide-react';

const projects = [
	{
		id: 1,
		title: 'Landing Page',
		description:
			'This "Tropical Paradise" landing page is built with HTML, Sass, and JavaScript, utilizing BEM methodology for clean, maintainable code and ensuring responsiveness with a mobile-first approach.',
		image: '/projects/responsive_landing.png',
		githubUrl: 'https://github.com/bonq13/tropical_paradise',
	},
	{
		id: 2,
		title: 'Quizz App',
		description:
			'The Quiz App, developed with basic React and Vite, features a simple interface leveraging React components and state management for interactive question navigation.',
		image: '/projects/quizz_app.png',
		githubUrl: 'https://github.com/bonq13/quizz_app',
	},
	{
		id: 3,
		title: 'Monsters Rolodex',
		description:
			'The Monsters Rolodex, built with React, integrates an API for fetching monster images and details, with a search functionality highlighting component-based architecture.',
		image: '/projects/monsters_rolodex.png',
		githubUrl: 'https://github.com/bonq13/mosters',
	},
];

export const ProjectsSection = () => {
	return (
		<section id='projects' className='py-24 px-4 relative'>
			<div className='container mx-auto max-w-5xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
					Featured <span className='text-primary'> Projects</span>
				</h2>
				<p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
					Here are some of my recent projects that I have done as part of
					learning how to create websites and web applications
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, key) => (
						<div
							key={key}
							className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
							<div className='h-48 overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold my-2'>{project.title}</h3>
								<p className='text-muted-foreground text-sm mb-3'>
									{project.description}
								</p>
								<div className='flex justify-between items-center'>
									<div className='flex space-x-3 '>
										<a
											href={project.githubUrl}
											target='_blank'
											className='text-foreground/80 hover:text-primary transition-colors duration-300 '>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='text-center mt-12'>
					<a
						href='https://github.com/bonq13'
						target='_blank'
						className='cosmic-button w-fit flex items-center mx-auto gap-2'>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
