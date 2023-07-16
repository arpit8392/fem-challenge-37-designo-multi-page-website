import { locationsData } from '@/data'
import Image from 'next/image'

const LocationsPage = () => {
	return (
		<main className='md:px-10 lg:px-40'>
			<ul className='grid grid-cols-1 gap-10 '>
				{locationsData.map((item) => (
					<li key={item.location}>
						<figure className='grid md:gap-8'>
							<picture>
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
									className='hidden w-auto overflow-hidden object-contain md:rounded-2xl lg:block '
								/>
							</picture>
							<figcaption className='flex flex-col items-center gap-6 bg-[#FDF3F0] px-6 py-20 text-center text-darkGrey md:rounded-2xl md:items-start md:text-left md:p-20'>
								<h1 className='text-[32px]/9 font-medium text-peach'>
									{item.location}
								</h1>
								<div className='flex flex-col gap-6 items-center md:flex-row'>
									<p className='text-[15px]/[25px]'>
										<span className='block font-bold'>{item.office.name}</span>
										<span className='block'>{item.office.street}</span>
										<span className='block'>{item.office.city}</span>
									</p>
									<p className='text-[15px]/[25px]'>
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
