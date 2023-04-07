/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';

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
						<h1 className='text-xl font-burtons'>Sean Anih</h1>
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
			</div>
		</>
	);
};

export default Home;
