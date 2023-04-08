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
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

const Home = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Sean Anih || My Portfolio</title>
				<meta name='description' content='This is my portfolio.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='min-h-screen bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
				<header>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-xl font-burtons dark:text-white'>
							FullStack Sean
						</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									className='cursor-pointer text-2xl'
									onClick={() => setDarkMode(!darkMode)}
								/>
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
						<h2 className='py-2 text-5xl text-teal-600 font-medium md:text-6xl'>
							Sean Anih
						</h2>
						<h3 className='py-2 text-2xl md:text-3xl dark:text-white'>
							Cloud & Blockchain Developer
						</h3>
						<p className='mx-auto text-md py-5 leading-8 md:text-xl max-w-[540px] dark:text-white'>
							Freelancer providing services for programming needs. Connect with
							me and let's get to work.
						</p>

						<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
							<AiFillTwitterCircle />
							<AiFillLinkedin />
							<AiFillYoutube />
						</div>
						{/* parallax images */}
						<Tilt
							className='parallax-effect-img mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden flex flex-col justify-center md:h-96 md:w-96'
							tiltMaxAngleX={40}
							tiltMaxAngleY={40}
							perspective={800}
							transitionSpeed={1500}
							scale={1.1}
							gyroscope={true}
						>
							<Image
								className='inner-element'
								src={TempPic}
								alt='profile pic'
							/>
						</Tilt>
					</section>

					<section>
						<div>
							<h3 className='text-center text-3xl py-1 dark:text-white'>
								Services I offer
							</h3>
							<p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Tempora, pariatur!{' '}
								<span className='text-teal-500'>Important words</span> lorem
								ipsum dolor sit amet consectetur adipisicing elit. Iste
								similique possimus hic eligendi iure qui.
							</p>
							<p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
								natus reiciendis dolorum deleniti possimus laudantium molestias
								fuga doloribus incidunt minima?
							</p>
						</div>
						<div className='md:flex gap-10'>
							{/* Card */}
							<div className='text-center border shadow-lg p-10 rounded-xl my-10 dark:text-white'>
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
							<div className='text-center border shadow-lg p-10 rounded-xl my-10 dark:text-white'>
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
							<div className='text-center border shadow-lg p-10 rounded-xl my-10 dark:text-white'>
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
						</div>
					</section>
					<section>
						<div className='dark:text-white'>
							<h3 className='text-center text-3xl py-1'>Portfolio</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
								a,{' '}
								<span className='text-teal-500'>
									voluptatibus nulla reprehenderit
								</span>{' '}
								aspernatur repellat iste incidunt mollitia magni ratione
								quisquam minus voluptatem amet consequatur, beatae error
								accusamus nemo assumenda.
							</p>
						</div>

						<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
							<div className='basis-1/3 flex-1'>
								<Image
									className='py-2 rounded-lg object-cover'
									src={web1}
									alt='web1'
								/>
							</div>
							<div className='basis-1/3 flex-1'>
								<Image
									className='py-2 rounded-lg object-cover'
									src={web2}
									alt='web2'
								/>
							</div>

							<div className='basis-1/3 flex-1'>
								<Image
									className='py-2 rounded-lg object-cover'
									src={web3}
									alt='web3'
								/>
							</div>
							<div className='basis-1/3 flex-1'>
								<Image
									className='py-2 rounded-lg object-cover'
									src={web4}
									alt='web4'
								/>
							</div>

							<div className='basis-1/3 flex-1'>
								<Image
									className='py-2 rounded-lg object-cover'
									src={web5}
									alt='web5'
								/>
							</div>
							<div className='basis-1/3 flex-1'>
								<Image
									className='py-2 rounded-lg object-cover'
									src={web6}
									alt='web6'
								/>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Home;
