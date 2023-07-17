import Footer from '@/components/common-footer'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			{children}
			<div className='mt-32 lg:mt-40'>
				<Footer />
			</div>
		</div>
	)
}
