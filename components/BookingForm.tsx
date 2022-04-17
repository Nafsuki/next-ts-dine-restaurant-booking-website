import React from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => console.log(data);

	return (
		<div className='z-10 flex items-center justify-center mx-6 mb-24 -mt-24'>
			<div className='h-[585px] shadow-3xl bg-white text-[#8E8E8E] w-[327px] flex flex-col justify-center items-center'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center justify-center'
				>
					<input
						type='text'
						{...(register('name'), { required: true })}
						placeholder='Name'
						className='w-full py-5 border-b'
					/>
					{errors.name?.type === 'required' && (
						<span>This field is required</span>
					)}
					<input
						type='email'
						{...(register('email'), { required: true })}
						placeholder='Email'
						className='w-full py-5 border-b'
					/>
					{errors.email?.type === 'required' && (
						<span>This field is required</span>
					)}
					<button className='my-8 text-center uppercase bg-[#111111] text-white hover:bg-white hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
						make reservation
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
