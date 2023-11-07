import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import portfolioImg from '@/public/portfolio.png';
import vcardImg from '@/public/vcard.png';
import weatherappImg from '@/public/weatherapp.png';
import tripioImg from '@/public/tripio.png';
import riddlelockImg from '@/public/riddlelock.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'CNC Programmer',
		location: 'Tornipeças, Folgosa',
		description: 'First experience into programming developing car parts.',
		icon: React.createElement(CgWorkAlt),
		date: '2016 - 2019',
	},
	{
		title: 'Bsc Multimedia Engineering',
		location: 'ISTEC, Porto',
		description: 'Learned the foundations and best practices in the areas of design and programming using tools such as Photoshop and Illustrator and programming languages such as C#.',
		icon: React.createElement(LuGraduationCap),
		date: '2017 - 2020',
	},
	{
		title: 'Full-Stack Developer',
		location: 'RedeInnov, Porto',
		description: 'Started as a front-end developer designing and developing websites and then upskilled to full-stack.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - Present',
	},
	{
		title: 'IBM SkillsUP',
		location: 'Remote',
		description: '10 weeks of training in IBM SkillsUP front-end programme.',
		icon: React.createElement(LuGraduationCap),
		date: '2023',
	},
	{
		title: 'Flag - Front-End Specialization',
		location: 'Remote',
		description: "I'm now mastering Front-End development focusing React framework.",
		icon: React.createElement(FaReact),
		date: '2023 - present',
	},
] as const;

export const projectsData = [
	{
		title: 'Portfolio',
		description: "It's about time to showcase my projects.",
		tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
		imageUrl: portfolioImg,
		projectLink: '#',
	},
	{
		title: 'vCard',
		description: 'Minimalist portfolio site built to showcase projects using the mobile first approach.',
		tags: ['Html', 'Css', 'Javascript'],
		imageUrl: vcardImg,
		projectLink: 'https://ruifgcosta.github.io/vCard_minimal-portfolio/',
	},
	{
		title: 'Weather App',
		description: 'Real-time global weather updates through openweathermap API. Try to search for your city.',
		tags: ['Html', 'Css', 'Javascript', 'API'],
		imageUrl: weatherappImg,
		projectLink: 'https://ruifgcosta.github.io/weather-app/',
	},
	{
		title: 'Trip.io',
		description: 'Responsive landing page for a travel agency with dark/light theme switching.',
		tags: ['Html', 'Css', 'Javascript'],
		imageUrl: tripioImg,
		projectLink: 'https://ruifgcosta.github.io/travel-agency/',
	},
	{
		title: 'Riddle',
		description: "Time to test yourself, can you guess the code? Why don't you try to open the lock?",
		tags: ['Html', 'Css', 'Javascript'],
		imageUrl: riddlelockImg,
		projectLink: 'https://ruifgcosta.github.io/riddle-game/',
	},
] as const;

export const skillsData = ['HTML', 'CSS', 'SASS', 'JavaScript', 'Framer Motion', 'Tailwind', 'SQL', 'Next.js', 'GitHub', 'React', 'TypeScript'] as const;
