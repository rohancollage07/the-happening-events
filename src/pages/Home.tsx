import Event from '../components/Event';
import Testimony from '../components/Testimony';
import events from '../data/Event';
import testimony from '../data/Testimony';

const Home = () => {
	return (
		<main className='bg-gray-900 text-white'>
			<section className='container mx-auto flex items-center'>
				<div className='w-1/2 ml-10 absolute z-10'>
					<h1 className='text-5xl mb-3 font-bold'>
						Transforming Dreams into Unforgettable Moments
					</h1>
					<p>
						We are a group of GenZ people who are very much creative
						and have specialization in their required fields. We
						have also conducted many events and helped people to
						make their imagination come alive
					</p>
					<a
						href='#'
						className='border-2 border-[#c69d4d] hover:bg-[#c69d4d] px-3 py-1.5 mt-5 rounded-md inline-block transition-all'>
						Contact Us
					</a>
				</div>
				<div className='w-2/3 h-[calc(100vh-3rem)] ml-auto'>
					<div className='relative h-full'>
						<img
							src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
							alt='Your Image'
							className='h-full w-full object-cover'
						/>
						<div className='absolute inset-0 bg-black opacity-50' />
					</div>
				</div>
			</section>
			<section className='container mx-auto px-10 mt-16 grid grid-cols-3 gap-8'>
				<h2 className='font-bold text-3xl text-center mb-8 col-span-3'>
					Our Past Events
				</h2>
				{events.map((item) => (
					<Event
						key={item.img_src}
						img_src={item.img_src}
						heading={item.heading}
					/>
				))}
			</section>
			<section className='container mx-auto px-10 mt-32 grid gap-y-5 place-items-center'>
				<h2 className='font-bold text-3xl text-center mb-8'>
					Some of our compliments
				</h2>
				<div className='flex gap-4'>
					{testimony.map((item) => (
						<Testimony
							key={item.img_src}
							img_src={item.img_src}
							name={item.name}
							review={item.review}
							reviewer={item.reviewer}
						/>
					))}
				</div>
			</section>
			<section className='container mx-auto px-10 mt-32 grid gap-y-5 place-items-center'>
				<ContactUs />
			</section>
		</main>
	);
};

const ContactUs = () => {
	return (
		<div className='bg-white text-black p-10 pb-9 mb-10 grid grid-cols-2 gap-5 h-96 w-2/3'>
			<form action='' id='contact-us'>
				<div className='flex flex-col'>
					<label className='text-lg' htmlFor='name'>
						Name
					</label>
					<input
						className='rounded-md border-2 px-2 py-1 border-gray-600 focus:border-black transition-all'
						type='text'
						id='name'
					/>
				</div>
				<div className='flex flex-col'>
					<label className='text-lg' htmlFor='email'>
						Email
					</label>
					<input
						className='rounded-md border-2 px-2 py-1 border-gray-600 focus:border-black transition-all'
						type='email'
						id='email'
					/>
				</div>
				<div className='flex flex-col'>
					<label className='text-lg' htmlFor='message'>
						Message
					</label>
					<textarea
						className='rounded-md border-2 px-2 py-1 border-gray-600 focus:border-black transition-all'
						id='message'
					/>
				</div>
				<button className='mt-5 border-2 border-[#c69d4d] py-1.5 px-4 rounded-md hover:bg-[#c69d4d] hover:text-white transition-all'>
					Submit
				</button>
			</form>
			<div className='h-full'>
				<img
					className='w-full h-72 object-cover'
					src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Home;
