import Link from 'next/link'

import HeroImage from '@/public/assets/home/desktop/image-hero-phone.png'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='min-h-screen md:px-10 lg:px-40'>
			{/* Hero Section */}
			<section className='relative flex flex-col items-center overflow-hidden bg-peach bg-hero-home bg-left-bottom md:bg-right-bottom bg-no-repeat px-6 pb-[450px] pt-20 text-center text-white md:rounded-2xl md:px-14 md:pt-16 lg:flex-row lg:px-24 lg:py-36 lg:text-left'>
				{/* Background Layout */}

				{/* Header */}
				<div className='flex flex-col items-center gap-6 lg:items-start lg:gap-10'>
					{/* Heading + Description */}
					<div className='flex max-w-md flex-col items-center gap-4 md:max-w-lg'>
						<h1 className='text-[32px]/[36px] font-medium md:text-[48px]/[48px]'>
							Award-winning custom designs and digital branding solutions
						</h1>
						<p className='text-[15px]/[25px] md:text-base/7'>
							With over 10 years in the industry, we are experienced in creating
							fully responsive websites, app design, and engaging brand
							experiences. Find out more about our services.
						</p>
					</div>
					{/* Learn More Link */}
					<Link
						href={'#'}
						className='z-10 rounded-lg bg-white px-6 py-4 text-[15px] font-medium uppercase tracking-[1px] text-darkGrey hover:bg-lightPeach hover:text-white'>
						Learn More
					</Link>
				</div>
				{/* Hero Image */}
				<Image
					src={HeroImage}
					alt=''
					className='absolute translate-y-1/3 md:translate-y-1/4 lg:translate-x-full lg:translate-y-24'
				/>
			</section>
		</main>
	)
}
