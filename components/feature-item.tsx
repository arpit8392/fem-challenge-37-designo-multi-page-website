import Image from 'next/image'

const FeatureItem = ({ title, description, icon }: Feature) => {
	return (
		<figure className='flex flex-col items-center gap-12 md:flex-row lg:flex-col'>
			<Image
				src={`/assets/home/desktop/${icon}`}
				alt={`Illustration icon for ${title} feature`}
				height={202}
				width={202}
				className='w-auto bg-small-circle object-contain'
			/>
			<figcaption className='flex flex-col items-center gap-8 text-center text-darkGrey md:items-start md:gap-4 md:text-left lg:items-center lg:gap-8 lg:text-center'>
				<h3 className='text-xl font-medium uppercase tracking-[5px]'>
					{title}
				</h3>
				<p className='lg:max-w-sm'>{description}</p>
			</figcaption>
		</figure>
	)
}
export default FeatureItem
