import Registration from "./Registration";
import gsap from 'gsap';
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Hero = () => {

	
	const ref = useRef();

	const handleonload = () => {
		const mainContentHeight = (document.querySelector('.main-container')! as HTMLElement).offsetHeight;
		const imageHolderHeight = window.innerHeight;
		const additionalScrollHeight = window.innerHeight;

		const totalBodyHeight = imageHolderHeight + mainContentHeight + additionalScrollHeight;

		document.body.style.height = `${ totalBodyHeight }px`;

	}

	
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.create({
			trigger: '.main-container',
			start: "top top",
			end: "bottom bottom",
			onEnter: () => {
				gsap.set(".main-container", { 
					position: 'absolute',
					top: '95%',
				});
			},
			onLeaveBack: () => {
				gsap.set(".main-container", {
					position: 'fixed',
					top: '0%',
				});
			}
		});
	})

	useGSAP(() => {
		gsap.to(".header .letters:first-child", {
			x: () => -innerWidth*3,
			scale: 10,
			ease: 'power2.inOut',
			scrollTrigger: {
				start: "top top",
				end: "+=200%",
				scrub: 1,
			}
		});
	})

	useGSAP(() => {
		gsap.to(".header .letters:last-child", {
			x: () => innerWidth*3,
			scale: 10,
			ease: 'power2.inOut',
			scrollTrigger: {
				start: "top top",
				end: "+=200%",
				scrub: 1,
			}
		});
	})

	useGSAP(() => {
		gsap.to(".main-container",
		{
			rotation: 0,
			clipPath: 'polygon(-25% -25%, 125% -25%, 125% 125%, -25% 125%)',
			ease: 'power2.inOut',
			scrollTrigger: {
				start: "top top",
				end: "+=200%",
				scrub: 1,
			}
		})
	})

	useGSAP(() => {
		gsap.to(".img-holder img", {
			top: '0%',
			scale: 1,
			ease: 'power2.inOut',
			scrollTrigger: {
				start: "top top",
				end: "+=200%",
				scrub: 1,
			}
		})
	})

	return (
		<div className="main bg-background" onLoad={handleonload}>
			<div className='header'>
				<div className="letters">
					<div>C</div>
					<div>O</div>
					<div>M</div>
					<div>I</div>
					<div>N</div>
					<div>G</div>
				</div>
				<div className="letters">
					<div>S</div>
					<div>O</div>
					<div>O</div>
					<div>N</div>
				</div>
			</div>
			<div className="main-container">
				<div className="img-holder">
					<img src="./herobg.png" alt="" />
				</div>
				<div className="content-holder z-10">
					<Registration isMenuOpen={false}/>
				</div>
			</div>

		</div>
	);
};

export default Hero;
