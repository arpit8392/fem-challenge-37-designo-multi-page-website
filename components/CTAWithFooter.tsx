import CTA from './CTA'
import Footer from './Footer'

const CTAWithFooter = () => {
	return (
		<section className='relative mt-64 md:mt-80 lg:mt-96'>
			<div className='absolute inset-0 -top-44 z-10 px-6 md:-top-64 md:px-10 lg:-top-56 lg:px-40'>
				<CTA />
			</div>
			<div className='h-[190px] bg-offBlack md:h-[80px]' />
			<Footer />
		</section>
	)
}
export default CTAWithFooter
