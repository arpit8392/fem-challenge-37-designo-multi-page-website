import Image from 'next/image'
import Link from 'next/link'

const LocationItem = ({ image, location }: LocationData) => {
	return (
		<div className='flex flex-col items-center gap-12'>
			<Image
				src={`/assets/shared/desktop/${image}`}
				alt={location}
				width={202}
				height={202}
				className='w-auto bg-small-circle object-contain'
			/>
			<div className='flex flex-col items-center gap-8'>
				<h3 className='text-xl font-medium uppercase tracking-[5px] text-darkGrey'>
					{location}
				</h3>
				<Link
					href={'/locations'}
					className='rounded-lg bg-peach px-5 py-4 text-[15px] font-medium uppercase tracking-[1px] text-white hover:bg-lightPeach'>
					See Location
				</Link>
			</div>
		</div>
	)
}
export default LocationItem
