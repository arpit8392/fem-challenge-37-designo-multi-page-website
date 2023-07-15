import { locationsData } from '@/data'
import LocationItem from './locations-item'

const LocationsList = () => {
	return (
		<ul className='grid grid-cols-1 justify-items-center gap-12 md:gap-20 lg:grid-cols-3 lg:gap-8'>
			{locationsData.map((location, index) => (
				<li key={index}>
					<LocationItem {...location} />
				</li>
			))}
		</ul>
	)
}
export default LocationsList
