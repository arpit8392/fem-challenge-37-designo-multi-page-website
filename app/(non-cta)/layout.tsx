import CTAWithFooter from '@/components/cta-footer-original'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<CTAWithFooter />
		</>
	)
}
