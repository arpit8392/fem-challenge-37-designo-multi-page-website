import Image from 'next/image'
import Feature from './Feature'
import Leaf from '@/public/assets/shared/desktop/bg-pattern-leaf.svg'
import { featuresData } from '@/data'

// TODO: Workout the Leaf Layout for the background of Features Section

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
