import clsx from 'clsx'

type Props = {
	heading?: string
	description?: string
}

const Introduction = ({ heading, description }: Props) => {
	return (
		<section
			className={clsx(
				'flex flex-col items-center gap-6 bg-peach px-6 py-28 text-center text-white md:rounded-2xl md:py-16',
				'bg-center bg-no-repeat',
				heading?.toLowerCase() === 'web' &&
					'bg-web-design-intro-desktop lg:bg-right',
				heading?.toLowerCase() === 'app' &&
					'bg-app-design-intro-desktop lg:bg-left',
				heading?.toLowerCase() === 'graphic' &&
					'bg-graphic-design-intro-desktop lg:bg-left'
			)}>
			<h1 className='text-[32px]/9 font-medium md:text-[48px]/[48px]'>
				{`${heading} Design`}
			</h1>
			<p className='max-w-sm text-[15px]/[25px] md:text-base/7'>
				{description}
			</p>
		</section>
	)
}
export default Introduction
