import Image from 'next/image';
import React from 'react';



const AboutContainer = () => {
  return (
	<div className="relative overflow-hidden bg-blue-400 ">
		<div className="flex justify-center w-full items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60 scale-75 translate-x-2 skew-y-0  ">
		<Image src={'/bg_hero.png'} width={500} height={400} alt="herosection image" priority  className="w-[100vw] h-[400px] object-cover "/>
		</div>
		<div className="absolute inset-0 flex justify-center align-middle items-center flex-col sm:gap-4">
			<h1 className="text-2xl font-bold text-white">ABOUT US</h1>
			<h2 className="text-4xl font-bold text-rose-600 sm:text-center sm:text-2xl">following our leader at <span className="text-white ">Civictrack</span></h2>
		</div>
	</div>
  )
}

export default AboutContainer