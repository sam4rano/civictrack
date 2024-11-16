import Image from "next/image"



const Herosection = () => {
  return (
	<div className="relative font-kanit">
		<div className="flex justify-center w-full items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60 ">

		<Image src={'/bg_image.png'} width={500} height={400} alt="herosection image" priority  className="w-[100vw] h-[400px] object-cover "/>
		</div>
		<div className="absolute inset-0 flex justify-center align-middle items-center flex-col gap-4">
			<h1 className="text-2xl font-bold text-white sm:text-center sm:text-xl">Accountability is the essence of democracy</h1>
			<h2 className="text-6xl font-bold text-rose-600 sm:text-center sm:text-2xl">following our leaders at <span className="text-blue-500 ">CivicTrack</span></h2>
		</div>
	</div>
  )
}

export default Herosection