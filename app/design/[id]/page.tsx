import Introduction from '@/components/intro'
import ProjectsList from '@/components/projects-list'
import { designsData } from '@/data'

type Props = {
	params: {
		id: string
	}
}

const findByID = (id: string) => {
	const data = designsData.find(
		(item) => item.name.toLowerCase() === id.toLowerCase()
	)
	return data
}

const page = ({ params: { id } }: Props) => {
	const data = findByID(id)

	return (
		<main className='flex flex-col gap-24 md:px-10 lg:px-40'>
			<Introduction heading={data?.name} description={data?.description} />
			<ProjectsList name={data?.name} projects={data?.projects} />
		</main>
	)
}
export default page

export async function generateStaticParams() {
	return designsData.map((design) => ({
		id: design.name.toLowerCase(),
	}))
}

export async function generateMetadata({ params: { id } }: Props) {
	const data = findByID(id)
	const title = `Designo Multi Page Website | ${data?.name} Design`

	return {
		title,
	}
}
