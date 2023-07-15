import CTAButton from './cta-button'

const CTA = () => {
	return (
		<section className='px-6 md:px-10 lg:px-40'>
			<div className='flex flex-col items-center gap-8 rounded-2xl bg-peach bg-three-circles bg-center bg-no-repeat px-6 py-16 text-center text-white md:p-14 lg:flex-row lg:justify-between lg:px-24 lg:py-20'>
				<div className='flex flex-col items-center gap-3 md:gap-4 lg:items-start lg:text-left'>
					<h4 className='max-w-xs text-[32px]/9 font-medium md:text-[40px]/10'>
						Let’s talk about your project
					</h4>
					<p className='max-w-xs text-[15px]/[25px] md:max-w-lg md:text-base/7'>
						Ready to take it to the next level? Contact us today and find out
						how our expertise can help your business grow.
					</p>
				</div>
				<CTAButton href='#' label='Get in Touch' />
			</div>
		</section>
	)
}
export default CTA
