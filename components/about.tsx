'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				The love for programming started very early, from changing small visual things to <span className='font-medium'>developing</span> small applications. My journey began as a{' '}
				<span className='italic'>CNC programmer</span> developing car parts. After a while I went to college for a degree in multimedia engineering and in the last year of my degree I applied for a
				job at the company where I currently work. I started as a <span className='font-medium'>front-end developer</span> and after a while I moved up to{' '}
				<span className='font-medium'>full-stack developer</span>. I am always looking to learn new technologies. I am currently looking for a <span className='font-medium'>full-time position</span>{' '}
				as a software developer.
			</p>

			<p>
				<span className='italic'>When I'm not coding</span>, I enjoy playing video games, watching movies and practice kickboxing. I also enjoy <span className='font-medium'>learning new things</span>
				.
			</p>
		</motion.section>
	);
}
