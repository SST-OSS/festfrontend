import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Hero = () => {
	const handleonload = () => {
		const mainContentHeight = (
			document.querySelector('.main-container')! as HTMLElement
		).offsetHeight;
		const imageHolderHeight = window.innerHeight;
		const additionalScrollHeight = window.innerHeight;

		const totalBodyHeight =
			imageHolderHeight + mainContentHeight + additionalScrollHeight;

		document.body.style.height = `${totalBodyHeight}px`;
	};

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.create({
			trigger: '.main-container',
			start: 'top top',
			end: 'bottom bottom',
			onEnter: () => {
				gsap.set('.main-container', {
					position: 'absolute',
					top: '85%',
				});
			},
			onLeaveBack: () => {
				gsap.set('.main-container', {
					position: 'fixed',
					top: '0%',
				});
			},
		});
	});

	useGSAP(() => {
		gsap.to('.header .letters:first-child', {
			x: () => -innerWidth * 3,
			scale: 10,
			opacity: 0,
			ease: 'power2.inOut',
			scrollTrigger: {
				start: 'top top',
				end: '+=100%',
				scrub: 1,
			},
		});
	});

	useGSAP(() => {
		gsap.to('.header .letters:last-child', {
			x: () => innerWidth * 3,
			scale: 10,
			opacity: 0,
			ease: 'power2.inOut',
			scrollTrigger: {
				start: 'top top',
				end: '+=100%',
				scrub: 1,
			},
		});
	});

	useGSAP(() => {
		gsap.to('.main-container', {
			rotation: 0,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'power2.inOut',
			scrollTrigger: {
				start: 'top top',
				end: '+=100%',
				scrub: 1,
			},
		});
	});

	useGSAP(() => {
		gsap.to('.img-holder img', {
			top: '0%',
			scale: 1,
			opacity: 1,
			ease: 'power2.inOut',
			scrollTrigger: {
				start: 'top top',
				end: '+=100%',
				scrub: 1,
			},
		});
	});

	return (
		<div className="main bg-background" onLoad={handleonload}>
			<div className="header xsm:gap-8 sm:gap-16  md:gap-32 justify-center z-20">
				<div className="letters xsm:gap-4 sm:gap-6  md:gap-10">
					<div>C</div>
					<div>O</div>
					<div>M</div>
					<div>I</div>
					<div>N</div>
					<div>G</div>
				</div>
				<div className="letters xsm:gap-4 sm:gap-6  md:gap-10">
					<div>S</div>
					<div>O</div>
					<div>O</div>
					<div>N</div>
				</div>
			</div>
			<div className="main-container z-10">
				<div className="img-holder xsm:w-full md:w-[80%]">
					<img src="./hero.svg" alt="hero" className="md:w-full" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
