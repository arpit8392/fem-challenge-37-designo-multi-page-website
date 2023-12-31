import ProjectItem from './project-item'

type Props = {
	name?: string
	projects?: Project[]
}

const ProjectsList = ({ name, projects }: Props) => {
	return (
		<section className='px-6 md:px-0'>
			<ul className='grid grid-cols-1 gap-10 md:gap-8 lg:grid-cols-3'>
				{projects?.map((project) => (
					<ProjectItem key={project.title} project={project} name={name} />
				))}
			</ul>
		</section>
	)
}
export default ProjectsList
