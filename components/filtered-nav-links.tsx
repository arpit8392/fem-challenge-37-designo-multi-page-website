import RightArrow from '@/public/assets/shared/desktop/icon-right-arrow.svg'
import { projectsNavLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	current: string
}
const FilteredNavLinks = ({ current }: Props) => {
	return (
		<section className='px-6 md:px-0'>
			<ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
				{projectsNavLinks
					.filter((item) => current !== item.title.split(' ')[0])
					.map((project, index) => (
						<li
							key={index}
							className='relative cursor-pointer overflow-hidden rounded-2xl bg-black/50 py-24 text-white duration-200 hover:bg-peach/80 md:py-14 lg:py-28'>
							<Image
								src={`/assets/home/mobile/${project.image}`}
								alt=''
								fill
								className='-z-10 block object-cover object-center md:hidden'
							/>
							<Image
								src={`/assets/home/tablet/${project.image}`}
								alt=''
								fill
								className='-z-10 hidden object-cover object-center md:block lg:hidden'
							/>
							<Image
								src={`/assets/home/desktop/${project.image}`}
								alt=''
								fill
								className='-z-10 hidden object-cover object-center lg:block'
							/>
							<Link
								href={project.href}
								className='flex min-h-full flex-col items-center justify-center gap-3 text-center md:gap-6'>
								<h2 className='text-[28px]/9 font-medium uppercase tracking-[1.4px] md:text-[40px]/[48px] md:tracking-[2px]'>
									{project.title}
								</h2>
								<p className='flex items-center gap-4 text-[15px] font-medium uppercase tracking-[5px] md:gap-5'>
									View Projects{' '}
									<span>
										<Image
											src={RightArrow}
											alt=''
											className='w-auto object-contain'
										/>
									</span>
								</p>
							</Link>
						</li>
					))}
			</ul>
		</section>
	)
}
export default FilteredNavLinks
