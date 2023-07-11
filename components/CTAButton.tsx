import Link from 'next/link'

type Props = {
	label: string
	href: string
}

const CTAButton = ({ label, href }: Props) => {
	return (
		<Link
			href={href}
			className='rounded-lg bg-white px-6 py-4 text-[15px] font-medium uppercase tracking-[1px] text-darkGrey duration-200 hover:bg-lightPeach hover:text-white'>
			{label}
		</Link>
	)
}
export default CTAButton
