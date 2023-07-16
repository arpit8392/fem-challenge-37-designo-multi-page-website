import Image from 'next/image'
import Link from 'next/link'

const LocationItem = ({ illustrationImage, location }: LocationData) => {
	return (
		<figure className='flex flex-col items-center gap-12'>
			<Image
				src={`/assets/shared/desktop/${illustrationImage}`}
				alt={location}
				width={202}
				height={202}
				className='w-auto bg-small-circle object-contain'
			/>
			<figcaption className='flex flex-col items-center gap-8'>
				<h3 className='text-xl font-medium uppercase tracking-[5px] text-darkGrey'>
					{location}
				</h3>
				<Link
					href={'/locations'}
					className='rounded-lg bg-peach px-5 py-4 text-[15px] font-medium uppercase tracking-[1px] text-white hover:bg-lightPeach'>
					See Location
				</Link>
			</figcaption>
		</figure>
	)
}
export default LocationItem
