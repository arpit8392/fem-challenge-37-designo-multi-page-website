import CTA from './cta'
import Footer from './footer'

const CTAWithFooter = () => {
	return (
		<section className='relative mt-64 md:mt-80 lg:mt-96'>
			<div className='absolute inset-0 -top-44 z-10 md:-top-64 lg:-top-56'>
				<CTA />
			</div>
			<div className='h-[190px] bg-offBlack md:h-[80px]' />
			<Footer />
		</section>
	)
}
export default CTAWithFooter
