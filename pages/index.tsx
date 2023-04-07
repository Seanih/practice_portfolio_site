/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillYoutube,
} from 'react-icons/ai';
import Image from 'next/image';
import TempPic from '../public/dev-ed-wave.png';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sean Anih || My Portfolio</title>
				<meta name='description' content='This is my portfolio.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='min-h-screen bg-white text-black px-10'>
				<header>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-xl font-burtons'>FullStack Sean</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill className='cursor-pointer text-2xl' />
							</li>
							<li>
								<Link
									className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
									href={'#'}
								>
									Resume
								</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main>
					{/* Hero section */}
					<section className='text-center p-10 '>
						<h2 className='py-2 text-5xl text-teal-600 font-medium'>
							Sean Anih
						</h2>
						<h3 className='py-2 text-2xl'>Cloud & Blockchain Developer</h3>
						<p className='text-md py-5 leading-8'>
							Freelancer providing services for programming needs. Connect with
							me and let's get to work.
						</p>

						<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
							<AiFillTwitterCircle />
							<AiFillLinkedin />
							<AiFillYoutube />
						</div>
						<div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden flex flex-col justify-center'>
							<Image src={TempPic} alt='profile pic' />
						</div>
					</section>

					<section>
						<div>
							<h3 className='text-3xl py-1'>Services I offer</h3>
							<p></p>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default Home;
