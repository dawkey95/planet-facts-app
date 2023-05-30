'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { BsFillCircleFill } from 'react-icons/bs';

const MyNavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const clickHandler = () => {
		setIsMenuOpen((prev) => !prev);
		console.log('button has been clicked ');
	};

	return (
		<>
			<div className='px-6 pt-4 bg-black navbar'>
				<div className='flex-1'>
					<span className='uppercase text-logo'>the planets</span>
				</div>
				<div className='flex-none'>
					<button onClick={clickHandler} className='btn btn-square btn-ghost'>
						{!isMenuOpen ? (
							<RxHamburgerMenu className='text-white' alt='menu' />
						) : (
							<RxCross1 className='text-white' alt='close' />
						)}
					</button>
				</div>
			</div>
			<div className='m-0 divider'></div>
			<div
				className={`absolute w-full ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<ul className='w-full p-4 bg-black menu text-[15px] uppercase font-spartan font-bold'>
					{/* <!-- Sidebar content here --> */}
					<li>
						<Link
							className='flex flex-row gap-4'
							onClick={clickHandler}
							href={'/mercury'}
						>
							<BsFillCircleFill className=' fill-planets-mercury' />
							Mercury
						</Link>
					</li>

					<li>
						<Link
							className='flex flex-row items-start gap-4'
							onClick={clickHandler}
							href={'/venus'}
						>
							<BsFillCircleFill className='fill-planets-venus' />
							Venus
						</Link>
					</li>

					<li>
						<Link
							onClick={clickHandler}
							className='flex flex-row items-start gap-4'
							href={'/earth'}
						>
							<BsFillCircleFill className='text-planets-earth' />
							Earth
						</Link>
					</li>

					<li>
						<Link
							onClick={clickHandler}
							className='flex flex-row items-start gap-4'
							href={'/mars'}
						>
							<BsFillCircleFill className='text-planets-mars' />
							Mars
						</Link>
					</li>

					<li>
						<Link
							onClick={clickHandler}
							className='flex flex-row items-start gap-4'
							href={'/jupiter'}
						>
							<BsFillCircleFill className='text-planets-jupiter' />
							Jupiter
						</Link>
					</li>

					<li>
						<Link
							onClick={clickHandler}
							className='flex flex-row items-start gap-4'
							href={'/saturn'}
						>
							<BsFillCircleFill className='text-planets-saturn' />
							Saturn
						</Link>
					</li>

					<li>
						<Link
							onClick={clickHandler}
							className='flex flex-row items-start gap-4'
							href={'/uranus'}
						>
							<BsFillCircleFill className='text-planets-uranus' />
							Uranus
						</Link>
					</li>

					<li>
						<Link
							onClick={clickHandler}
							className='flex flex-row items-start gap-4'
							href={'/neptune'}
						>
							<BsFillCircleFill className='text-planets-neptune' />
							Neptune
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
export default MyNavBar;
