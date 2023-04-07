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
import Design from '../public/design.png';
import Consulting from '../public/consulting.png';
import Code from '../public/code.png';

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
						<div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden flex flex-col justify-center'>
							<Image src={TempPic} alt='profile pic' />
						</div>
					</section>

					<section>
						<div>
							<h3 className='text-3xl py-1'>Services I offer</h3>
							<p className='text-md py-2 leading-8 text-gray-800'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Tempora, pariatur!{' '}
								<span className='text-teal-500'>Important words</span> lorem
								ipsum dolor sit amet consectetur adipisicing elit. Iste
								similique possimus hic eligendi iure qui.
							</p>
							<p className='text-md py-2 leading-8 text-gray-800'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
								natus reiciendis dolorum deleniti possimus laudantium molestias
								fuga doloribus incidunt minima?
							</p>
						</div>
						<>
							{/* Card */}
							<div className='text-center border shadow-lg p-10 rounded-xl my-10'>
								<Image
									className='mx-auto'
									src={Design}
									width={100}
									alt='design'
								/>
								<h3 className='text-lg font-medium pt-8 pb-2'>
									Beautiful Designs
								</h3>
								<p className='py-2'>
									Creating elegant designs suited for your design theory
								</p>
								<h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
								<p className='text-gray-800 py-1'>Photoshop</p>
								<p className='text-gray-800 py-1'>Illustrator</p>
								<p className='text-gray-800 py-1'>Figma</p>
							</div>
							{/* Card */}
							<div className='text-center border shadow-lg p-10 rounded-xl my-10'>
								<Image
									className='mx-auto'
									src={Consulting}
									width={100}
									alt='design'
								/>
								<h3 className='text-lg font-medium pt-8 pb-2'>
									Beautiful Designs
								</h3>
								<p className='py-2'>
									Creating elegant designs suited for your design theory
								</p>
								<h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
								<p className='text-gray-800 py-1'>Photoshop</p>
								<p className='text-gray-800 py-1'>Illustrator</p>
								<p className='text-gray-800 py-1'>Figma</p>
							</div>
							{/* Card */}
							<div className='text-center border shadow-lg p-10 rounded-xl my-10'>
								<Image
									className='mx-auto'
									src={Code}
									width={100}
									alt='design'
								/>
								<h3 className='text-lg font-medium pt-8 pb-2'>
									Beautiful Designs
								</h3>
								<p className='py-2'>
									Creating elegant designs suited for your design theory
								</p>
								<h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
								<p className='text-gray-800 py-1'>Photoshop</p>
								<p className='text-gray-800 py-1'>Illustrator</p>
								<p className='text-gray-800 py-1'>Figma</p>
							</div>
						</>
					</section>
					<section></section>
				</main>
			</div>
		</>
	);
};

export default Home;
