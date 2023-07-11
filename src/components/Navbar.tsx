import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex w-full justify-between px-10'>
			<span className='uppercase'>the</span>
			<ul className='flex gap-10'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about-us'>About Us</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
