import { Code, Compass, Sprout } from 'lucide-react';

export const AboutSection = () => {
	return (
		<section id='about' className='py-24 px-4 relative'>
			<div className='container mx-auto max-w-5xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
					About <span className='text-primary'>Me</span>
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='space-y-6 '>
						<h3 className='text-2xl font-semibold'>Aspiring Web Developer</h3>
						<p className='text-mutet-foreground'>
							I’m a dedicated beginner in the world of frontend development,
							currently exploring React and web technologies. My journey
							involves building simple projects while mastering JavaScript and
							CSS. I’m passionate about growing my skills and creating
							functional, user-friendly designs.
						</p>
						<p className='text-mutet-foreground'>
							I’m always eager to learn more, whether it’s diving into new React
							libraries or experimenting with responsive design techniques,
							which helps me understand the importance of clean code and user
							experience.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
							<a href='#contact' className='cosmic-button'>
								Get In Touch
							</a>
							<a
								href=''
								className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
								Download CV
							</a>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-6'>
						<div className='gradient-border p-6 card-hover'>
							<div className='flex items-start gap-4'>
								<div className='p-3 rounded-full bg-primary/10'>
									<Code className='h-6 w-6 text-primary' />
								</div>
								<div className='text-left'>
									<h4 className='font-semibold text-lg'>Web Development</h4>
									<p>
										Creating responsive websites and apps using modern
										frameworks and technologies
									</p>
								</div>
							</div>
						</div>
						<div className='gradient-border p-6 card-hover'>
							<div className='flex items-start gap-4'>
								<div className='p-3 rounded-full bg-primary/10'>
									<Sprout className='h-6 w-6 text-primary' />
								</div>
								<div className='text-left'>
									<h4 className='font-semibold text-lg'>Active learner</h4>
									<p>
										Growing my frontend skills through hands-on practice and
										exploration. Hungry for further knowledge.
									</p>
								</div>
							</div>
						</div>
						<div className='gradient-border p-6 card-hover'>
							<div className='flex items-start gap-4'>
								<div className='p-3 rounded-full bg-primary/10'>
									<Compass className='h-6 w-6 text-primary' />
								</div>
								<div className='text-left'>
									<h4 className='font-semibold text-lg'>
										Creative Exploration
									</h4>
									<p>
										Discovering my unique style by experimenting with layouts,
										designs, and code in my frontend journey.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
