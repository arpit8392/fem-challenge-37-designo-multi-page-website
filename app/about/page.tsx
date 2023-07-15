import Image from 'next/image'

const AboutPage = () => {
	return (
		<main className='flex flex-col md:gap-32 md:px-10 lg:gap-40 lg:px-40'>
			<section>
				<figure className='flex flex-col overflow-hidden md:rounded-2xl lg:flex-row'>
					<picture className='relative h-80 lg:order-last lg:h-[480px] lg:w-2/5'>
						<Image
							src={'/assets/about/mobile/image-about-hero.jpg'}
							alt=''
							fill
							className='block md:hidden'
						/>
						<Image
							src={'/assets/about/tablet/image-about-hero.jpg'}
							alt=''
							fill
							className='hidden md:block lg:hidden'
						/>
						<Image
							src={'/assets/about/desktop/image-about-hero.jpg'}
							alt=''
							fill
							className='hidden lg:block'
						/>
					</picture>
					<figcaption className='flex flex-col items-center gap-6 bg-peach px-6 py-20 text-center text-white md:gap-8 md:p-16 lg:w-3/5 lg:items-start lg:justify-center lg:pl-24 lg:pr-20 lg:text-left'>
						<h1 className='text-[32px]/[36px] font-medium md:text-[48px]/[48px]'>
							About Us
						</h1>
						<p className='max-w-md text-[15px]/[25px] md:max-w-none md:text-base/7 lg:max-w-lg'>
							Founded in 2010, we are a creative agency that produces lasting
							results for our clients. We’ve partnered with many startups,
							corporations, and nonprofits alike to craft designs that make real
							impact. We’re always looking forward to creating brands, products,
							and digital experiences that connect with our clients’ audiences.
						</p>
					</figcaption>
				</figure>
			</section>
			<section>
				<figure className='flex flex-col overflow-hidden md:rounded-2xl lg:flex-row'>
					<picture className='relative h-80 w-full lg:h-[640px] lg:w-2/5'>
						<Image
							src={'/assets/about/mobile/image-world-class-talent.jpg'}
							alt=''
							fill
							className='block md:hidden'
						/>
						<Image
							src={'/assets/about/tablet/image-world-class-talent.jpg'}
							alt=''
							fill
							className='hidden md:block lg:hidden'
						/>
						<Image
							src={'/assets/about/desktop/image-world-class-talent.jpg'}
							alt=''
							fill
							className='hidden lg:block'
						/>
					</picture>
					<figcaption className='flex flex-col items-center gap-6 bg-[#FDF3F0] px-6 py-20 text-center text-darkGrey md:gap-8 md:p-16 lg:w-3/5 lg:items-start lg:justify-center lg:px-24 lg:text-left'>
						<h2 className='text-[32px]/[36px] font-medium text-peach md:text-[40px]/[48px]'>
							World-class talent
						</h2>
						<p className='max-w-md text-[15px]/[25px] md:max-w-none md:text-base/7 lg:max-w-lg'>
							We are a crew of strategists, problem-solvers, and technologists.
							Every design is thoughtfully crafted from concept to launch,
							ensuring success in its given market. We are constantly updating
							our skills in a myriad of platforms.
							<br />
							<br />
							Our team is multi-disciplinary and we are not merely interested in
							form — content and meaning are just as important. We give great
							importance to craftsmanship, service, and prompt delivery. Clients
							have always been impressed with our high-quality outcomes that
							encapsulates their brand’s story and mission.
						</p>
					</figcaption>
				</figure>
			</section>
			<section>
				<figure className='flex flex-col overflow-hidden md:rounded-2xl lg:flex-row'>
					<picture className='relative h-80 w-full lg:h-[640px] lg:w-2/5 lg:order-last'>
						<Image
							src={'/assets/about/mobile/image-real-deal.jpg'}
							alt=''
							fill
							className='block md:hidden'
						/>
						<Image
							src={'/assets/about/tablet/image-real-deal.jpg'}
							alt=''
							fill
							className='hidden md:block lg:hidden'
						/>
						<Image
							src={'/assets/about/desktop/image-real-deal.jpg'}
							alt=''
							fill
							className='hidden lg:block'
						/>
					</picture>
					<figcaption className='flex flex-col items-center gap-6 bg-[#FDF3F0] px-6 py-20 text-center text-darkGrey md:gap-8 md:p-16 lg:w-3/5 lg:items-start lg:justify-center lg:px-24 lg:text-left'>
						<h2 className='text-[32px]/[36px] font-medium text-peach md:text-[40px]/[48px]'>
							The real deal
						</h2>
						<p className='max-w-md text-[15px]/[25px] md:max-w-none md:text-base/7 lg:max-w-lg'>
							As strategic partners in our clients’ businesses, we are ready to
							take on any challenge as our own. Solving real problems require
							empathy and collaboration, and we strive to bring a fresh
							perspective to every opportunity. We make design and technology
							more accessible and give you tools to measure success.
							<br />
							<br />
							We are visual storytellers in appealing and captivating ways. By
							combining business and marketing strategies, we inspire audiences
							to take action and drive real results.
						</p>
					</figcaption>
				</figure>
			</section>
		</main>
	)
}
export default AboutPage
