/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { TypeAnimation } from 'react-type-animation';

const Home: NextPage = () => {
	return (
		<div>
			<span style={{ fontSize: '2em' }}>
				<span>My name is Sean. I develop</span>{' '}
				{/* <--- will be rendered without animation */}
				<TypeAnimation
					sequence={['blockchain based', 1500, 'cloud based', 1500]}
					repeat={Infinity}
				/>
				applications!
			</span>
		</div>
	);
};

export default Home;
