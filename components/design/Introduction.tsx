type Props = {
	heading?: string
	description?: string
}

const Introduction = ({ heading, description }: Props) => {
	return (
		<section className='flex flex-col items-center gap-6 bg-peach bg-[url("/assets/web-design/desktop/bg-pattern-intro-web.svg")] bg-center bg-no-repeat px-6 py-28 text-center text-white md:rounded-2xl md:py-16 lg:bg-right'>
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
