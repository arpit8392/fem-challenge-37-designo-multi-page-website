import { navLinks } from '@/data'
import Logo from '@/public/assets/shared/desktop/logo-light.png'
import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

const Footer = () => {
	return (
		<footer className='flex flex-col gap-8 bg-offBlack px-6 py-16 text-white md:gap-10 md:px-10 md:py-20 lg:px-40'>
			<nav className='flex flex-col items-center gap-8 md:flex-row md:justify-between'>
				<Image src={Logo} alt='Designo' className='w-auto object-contain' />
				<hr className='h-[1px] w-full border-white/10 md:hidden' />
				<ul className='flex flex-col items-center gap-8 md:flex-row'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								className='text-sm uppercase tracking-[2px] hover:underline hover:underline-offset-2'
								href={link.href}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<hr className='hidden h-[1px] w-full border-white/10 md:block' />
			<div className='grid grid-cols-1 justify-items-center gap-10 md:grid-cols-6 md:justify-items-start'>
				<p className='text-center text-base/7 text-white/50 md:col-span-2 md:text-left'>
					<span className='block font-bold'>Designo Central Office</span>
					<span className='block'>3886 Wellington Street</span>Toronto, Ontario
					M9C 3J5
				</p>
				<p className='text-center text-base/7 text-white/50 md:col-span-3 md:text-left md:font-bold'>
					<span className='block font-bold'>Contact Us (Central Office)</span>
					<span className='block'>P : +1 253-863-8967</span>M :
					contact@designo.co
				</p>
				<div className='md:self-end md:justify-self-end'>
					<SocialLinks />
				</div>
			</div>
		</footer>
	)
}
export default Footer
