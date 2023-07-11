import CTA from '@/components/CTA'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'

export default function Home() {
	return (
		<main className='flex flex-col gap-32 md:px-10 lg:px-40'>
			<Hero />
			<Projects />
			<Features />
			<CTA />
		</main>
	)
}
