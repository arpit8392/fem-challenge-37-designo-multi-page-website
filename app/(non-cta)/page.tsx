import FeaturesList from '@/components/features-list'
import Hero from '@/components/hero'
import Projects from '@/components/projects-nav-links'

export default function Home() {
	return (
		<main className='flex flex-col gap-32 md:px-10 lg:gap-40 lg:px-40'>
			<Hero />
			<Projects />
			<FeaturesList />
		</main>
	)
}
