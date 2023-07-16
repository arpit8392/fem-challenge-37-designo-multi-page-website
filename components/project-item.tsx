import Image from 'next/image'

type Props = {
	project?: Project
	name?: string
}
const ProjectItem = ({ project, name }: Props) => {
	return (
		<li
			key={project?.title}
			className='group cursor-pointer overflow-hidden rounded-2xl bg-cream hover:bg-peach'>
			<figure className='flex flex-col items-center md:flex-row lg:flex-col'>
				<Image
					src={`/assets/${name?.toLowerCase()}-design/desktop/${
						project?.image
					}`}
					alt={project?.title || ''}
					height={320}
					width={327}
					className='w-full object-contain md:w-auto lg:w-full'
				/>
				<figcaption className='flex flex-col items-center gap-4 p-8 text-center md:w-1/2 lg:w-auto'>
					<h2 className='text-xl font-medium uppercase tracking-[5px] text-peach group-hover:text-white'>
						{project?.title}
					</h2>
					<p className='text-darkGrey group-hover:text-white'>
						{project?.details}
					</p>
				</figcaption>
			</figure>
		</li>
	)
}
export default ProjectItem
