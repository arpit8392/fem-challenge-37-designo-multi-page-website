import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'

export default function Home() {
	return (
		<main className='flex flex-col gap-32 md:px-10 lg:px-40'>
			<Hero />
			<Projects />
			<Features />
		</main>
	)
}
