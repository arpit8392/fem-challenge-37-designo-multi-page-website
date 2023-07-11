import HomeHero from '@/components/HomeHero'
import HomeProjects from '@/components/HomeProjects'

export default function Home() {
	return (
		<main className='flex flex-col gap-32 md:px-10 lg:px-40'>
			<HomeHero />
			<HomeProjects />
		</main>
	)
}
