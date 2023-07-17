import Footer from '@/components/common-footer'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<Toaster position='top-center' />
			<div className='mt-32 lg:mt-40'>
				<Footer />
			</div>
		</>
	)
}
