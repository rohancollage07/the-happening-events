const Testimony = ({
	name,
	review,
	reviewer,
	img_src,
}: {
	name: string;
	review: string;
	reviewer: string;
	img_src: string;
}) => {
	return (
		<div className='flex flex-col-reverse w-1/2'>
			<div className='flex flex-col justify-center gap-6'>
				<h3 className='text-2xl font-semibold'>{name}</h3>
				<p>{review}</p>
				<p>{reviewer}</p>
			</div>
			<div className='h-96'>
				<img
					className='w-full h-full object-cover'
					src={img_src}
					alt=''
				/>
			</div>
		</div>
	);
};

export default Testimony;