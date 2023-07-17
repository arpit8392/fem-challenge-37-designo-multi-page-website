import ContactUsForm from '@/components/contact-us-form'
import LocationsList from '@/components/locations-list'

const ContactPage = () => {
	return (
		<main className='flex flex-col gap-32 md:px-10 lg:gap-40 lg:px-40'>
			<section className='flex flex-col gap-12 bg-peach bg-contact-mobile px-6 py-20 text-white md:gap-10 md:rounded-2xl md:bg-contact-desktop md:bg-left-top md:bg-no-repeat md:px-14 md:py-20 lg:flex-row lg:px-24 lg:py-14'>
				<div className='flex flex-col items-center gap-6 text-center md:items-start md:gap-8 md:text-left lg:w-1/2 lg:justify-center '>
					<h1 className='text-[32px]/[36px] font-medium md:text-[48px]/[48px]'>
						Contact Us
					</h1>
					<p className='text-[15px]/[25px] md:text-base/7 lg:max-w-sm'>
						Ready to take it to the next level? Let’s talk about your project or
						idea and find out how we can help your business grow. If you are
						looking for unique digital experiences that’s relatable to your
						users, drop us a line.
					</p>
				</div>
				<div className='lg:flex-1'>
					<ContactUsForm />
				</div>
			</section>
			<section>
				<LocationsList />
			</section>
		</main>
	)
}
export default ContactPage
