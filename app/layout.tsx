import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Header from '@/components/common-header'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Designo Multi Page Website',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${jost.className} scroll-smooth bg-white antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
