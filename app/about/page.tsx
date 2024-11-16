import React from 'react'
import Navbar from '../utils/Navbar'
import AboutContainer from './AboutContainer'
import Values from './Values'
import Partners from './Partners'
import Footer from "../homepage/Footer";


const page = () => {
  return (
	<div>
		<Navbar />
		<AboutContainer />
		<Values />
		<Partners />
		<Footer />
	</div>
  )
}

export default page