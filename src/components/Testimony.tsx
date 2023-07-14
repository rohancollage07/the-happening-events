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
			<div className='flex flex-col justify-center gap-7'>
				<h3 className='text-4xl font-semibold m-4 text-center'>{name}</h3>
				<p>{review}</p>
				<p>{reviewer}</p>
			</div>
			<div className='h-96'>
				<img
					className='w-full h-full '
					src={img_src}
					alt=''
				/>
			</div>
		</div>
	);
};

export default Testimony;