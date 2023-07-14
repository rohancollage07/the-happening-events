const Event = ({ img_src, heading }: { img_src: string; heading: string }) => {
	return (
		<div>
			<img
				className='w-full aspect-square object-cover'
				src={img_src}
				alt=''
			/>
			<h2 className='text-center text-3xl font-bold uppercase mt-3'>{heading}</h2>
		</div>
	);
};

export default Event;