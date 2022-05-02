import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
	name: String;
	email: String;
}

const onSubmit: SubmitHandler<IFormInputs> = (data: any) => console.log(data);

const BookingForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		// watch,
	} = useForm<IFormInputs>();

	return (
		<div className='z-10 flex items-center justify-center mb-24 -mt-24'>
			<div className='shadow-3xl bg-white text-[#8E8E8E] md:w-[540px] flex flex-col justify-center items-center'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col my-5 space-y-5'
				>
					<input
						type='text'
						{...register('name', { required: true })}
						placeholder='Name'
						className='py-3 border-b caret-[#9E7F66] mx-6'
					/>
					<span className='text-xs text-[#B54949]'>
						{errors.name && 'This field is required'}
					</span>
					<input
						type='email'
						{...register('email', { required: true })}
						placeholder='Email'
						className='py-3 mx-6 border-b'
					/>
					<span className='text-xs text-[#B54949]'>
						{errors.name && 'This field is required'}
					</span>

					<div className='flex flex-col justify-center items-start w-[327px] px-6'>
						<span className='h-[45px] leading-[45px]'>Pick a date</span>
						<div className='flex justify-between w-full'>
							<input
								type='text'
								placeholder='MM'
								className='w-[73px] h-[45px] border-b text-center'
							/>
							<input
								type='text'
								placeholder='DD'
								className='w-[73px] h-[45px] border-b text-center'
							/>
							<input
								type='text'
								placeholder='YYYY'
								className='w-[73px] h-[45px] border-b text-center'
							/>
						</div>
					</div>
					<button className='my-8 text-center uppercase bg-[#111111] text-white hover:bg-white hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
						make reservation
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
