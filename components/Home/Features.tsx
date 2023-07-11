import Image from 'next/image'
import Feature from './Feature'
import Leaf from '@/public/assets/shared/desktop/bg-pattern-leaf.svg'

// TODO: Workout the Leaf Layout for the background of Features Section

const featuresData: Feature[] = [
	{
		id: 1,
		title: 'Passionate',
		description:
			'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
		icon: 'illustration-passionate.svg',
	},
	{
		id: 2,
		title: 'Resourceful',
		description:
			'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
		icon: 'illustration-resourceful.svg',
	},
	{
		id: 3,
		title: 'Friendly',
		description:
			'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
		icon: 'illustration-friendly.svg',
	},
]

const Features = () => {
	return (
		<section className='relative'>
			{/* <Image src={Leaf} alt='' className='absolute -z-50 hidden lg:block right-0 top-1/2' /> */}
			<ul className='grid grid-cols-1 gap-20 px-6 md:gap-8 md:px-0 lg:grid-cols-3'>
				{featuresData.map((feature) => (
					<li key={feature.id}>
						<Feature {...feature} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Features
