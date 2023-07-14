'use client'

import { navLinks } from '@/data'
import Logo from '@/public/assets/shared/desktop/logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import OpenIcon from '@/public/assets/shared/mobile/icon-hamburger.svg'
import CloseIcon from '@/public/assets/shared/mobile/icon-close.svg'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

// TODO: On Mobile Navigation, Header is also getting overlayed but shouldn't be as per the design

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='px-6 py-9 md:px-10 md:py-16 lg:px-40'>
			<nav className='flex items-center justify-between'>
				<Link href={'/'}>
					<Image src={Logo} alt='Designo' className='w-auto object-contain' />
				</Link>
				<ul className='hidden items-center gap-10 md:flex'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								href={link.href}
								className='text-sm uppercase tracking-[2px] text-darkGrey hover:underline hover:underline-offset-2'>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				<button
					onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
					className='block md:hidden'>
					<Image
						src={isOpen ? CloseIcon : OpenIcon}
						alt={isOpen ? 'Close Icon' : 'Open Icon'}
						className='w-auto object-contain'
					/>
				</button>
			</nav>
			<Dialog
				as='div'
				className=' md:hidden'
				open={isOpen}
				onClose={() => setIsOpen(false)}>
				<div className='fixed inset-0 bg-black/50' aria-hidden='true' />
				<Dialog.Panel className='fixed top-24 z-50 w-full overflow-hidden bg-offBlack px-6 py-12 text-white'>
					<ul className='flex flex-col gap-8'>
						{navLinks.map((item, index) => (
							<li key={index}>
								<Link
									className='text-2xl uppercase tracking-[2px]'
									href={item.href}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
export default Header
