import { locationsData } from '@/data'
import clsx from 'clsx'
import Image from 'next/image'

const LocationsPage = () => {
	return (
		<main className='md:px-10 lg:px-40'>
			<ul className='grid grid-cols-1 gap-10 '>
				{locationsData.map((item, index) => (
					<li key={index}>
						<figure className='grid md:gap-8 lg:grid-cols-3'>
							<picture
								className={clsx(
									index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'
								)}>
								<Image
									src={`/assets/locations/tablet/${item.image}`}
									alt={`Map Image of ${item.location}`}
									width={375}
									height={320}
									className='w-full overflow-hidden object-contain md:rounded-2xl lg:hidden'
								/>
								<Image
									src={`/assets/locations/desktop/${item.image}`}
									alt={`Map Image of ${item.location}`}
									width={350}
									height={326}
									className='hidden h-full w-full overflow-hidden object-contain md:rounded-2xl lg:block'
								/>
							</picture>
							<figcaption className='flex flex-col items-center gap-6 bg-cream px-6 py-20 text-center text-darkGrey md:items-start md:rounded-2xl md:px-20 md:py-24 md:text-left lg:col-span-2 lg:px-24'>
								<h1 className='text-[32px]/9 font-medium text-peach md:text-[40px]/[48px]'>
									{item.location}
								</h1>
								<div className='flex flex-col items-center gap-6 md:flex-row md:gap-36 lg:justify-between'>
									<p className='text-[15px]/[25px] md:text-base/7 '>
										<span className='block font-bold'>{item.office.name}</span>
										<span className='block'>{item.office.street}</span>
										<span className='block'>{item.office.city}</span>
									</p>
									<p className='text-[15px]/[25px] md:text-base/7'>
										<span className='block font-bold'>Contact</span>
										<span className='block'>{`P : ${item.contact.phone}`}</span>
										<span className='block'>{`M : ${item.contact.mail}`}</span>
									</p>
								</div>
							</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</main>
	)
}
export default LocationsPage
