const Footer = () => {
	return (
		<div className='grid grid-cols-4 px-10 py-5'>
			<div className='col-span-2'>
				<h3 className='text-xl'>Contact</h3>
				<p className='w-2/3'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati, dolor.
				</p>
				<p>9999999999</p>
			</div>
			<div className='col-span-1'>
				<h3 className='text-xl'>Useful Links</h3>
				<ul>
					<li>site map</li>
					<li>site map</li>
					<li>site map</li>
					<li>site map</li>
				</ul>
			</div>
			<div className='col-span-1'>
				<h3 className='text-xl'>Social links</h3>
				<ul>
					<li>instagram</li>
					<li>instagram</li>
					<li>instagram</li>
					<li>instagram</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
