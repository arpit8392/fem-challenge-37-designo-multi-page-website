'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import ErrorIcon from '@/public/assets/contact/desktop/icon-error.svg'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

const schema = yup
	.object({
		name: yup.string().required("Can't be empty"),
		email: yup
			.string()
			.email('Please provide a valid email')
			.required("Can't be empty"),
		phone: yup.string().required("Can't be empty"),
		message: yup.string().required("Can't be empty"),
	})
	.required()

type FormData = yup.InferType<typeof schema>

const ContactUsForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: FormData) => {
		if (isSubmitSuccessful) {
			console.log('Form submitted with data: ', data)
			toast.success('Form submitted successfully!')
			reset()
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className='flex flex-col gap-3'>
			<div className='flex flex-row items-center justify-between'>
				<input
					type='text'
					id='name'
					autoComplete='off'
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('name')}
					className='flex-1 border border-l-0 border-r-0 border-t-0 border-b-white bg-inherit text-[15px] font-medium text-white  placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-0'
					placeholder='Name'
				/>
				<label htmlFor='name' className='sr-only'>
					Name
				</label>
				{errors.name?.message && (
					<div className='flex items-center gap-2 border-b border-white py-[6px]'>
						<span role='alert' className='text-xs/7 italic '>
							{errors.name?.message}
						</span>
						<Image
							src={ErrorIcon}
							alt='Error Icon'
							className='w-auto object-contain'
						/>
					</div>
				)}
			</div>

			<div className='flex flex-row items-center justify-between'>
				<input
					type='email'
					id='email'
					autoComplete='off'
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('email')}
					className='flex-1 border border-l-0 border-r-0 border-t-0 border-b-white bg-inherit text-[15px] font-medium text-white  placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-0'
					placeholder='Email Address'
				/>
				<label htmlFor='Email Address' className='sr-only'>
					Name
				</label>
				{errors.email?.message && (
					<div className='flex items-center gap-2 border-b border-white py-[6px]'>
						<span role='alert' className='text-xs/7 italic'>
							{errors.email?.message}
						</span>
						<Image
							src={ErrorIcon}
							alt='Error Icon'
							className='w-auto object-contain'
						/>
					</div>
				)}
			</div>
			<div className='flex flex-row items-center justify-between'>
				<input
					type='tel'
					id='phone'
					autoComplete='off'
					aria-invalid={errors.phone ? 'true' : 'false'}
					{...register('phone')}
					className='flex-1 border border-l-0 border-r-0 border-t-0 border-b-white bg-inherit text-[15px] font-medium text-white  placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-0'
					placeholder='Phone'
				/>
				<label htmlFor='phone' className='sr-only'>
					Phone
				</label>
				{errors.phone?.message && (
					<div className='flex items-center gap-2 border-b border-white py-[6px]'>
						<span role='alert' className='text-xs/7 italic'>
							{errors.phone?.message}
						</span>
						<Image
							src={ErrorIcon}
							alt='Error Icon'
							className='w-auto object-contain'
						/>
					</div>
				)}
			</div>
			<div className='flex flex-row items-center justify-between'>
				<textarea
					id='message'
					autoComplete='off'
					rows={4}
					aria-invalid={errors.message ? 'true' : 'false'}
					{...register('message')}
					className='flex-1 resize-none border border-l-0 border-r-0 border-t-0 border-b-white bg-inherit text-[15px] font-medium text-white  placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-0'
					placeholder='Your Message'
				/>
				<label htmlFor='message' className='sr-only'>
					Your Message
				</label>
				{errors.message?.message && (
					<div className='flex items-center gap-2 self-end border-b border-white py-[6px]'>
						<span role='alert' className='text-xs/7 italic'>
							{errors.message?.message}
						</span>
						<Image
							src={ErrorIcon}
							alt='Error Icon'
							className='w-auto object-contain'
						/>
					</div>
				)}
			</div>
			<button
				type='submit'
				className='mt-7 self-center rounded-lg bg-white px-12 py-4 text-[15px] font-medium uppercase tracking-[1px] text-darkGrey hover:bg-lightPeach hover:text-white lg:self-end'>
				Submit
			</button>
		</form>
	)
}
export default ContactUsForm
