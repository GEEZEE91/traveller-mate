import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./landing.css";
import { Link } from 'react-scroll';
import Video from '../../assets/hero.mov';

const Landing = () => {
  return (
    <>
        <div className="hero w-full  relative text-white">
				<video
					autoPlay
					loop
					muted
					id="video"
					className="w-full object-cover z-[8]"
				
					<source src={Video} type="video/mp4" />
				
				<div className="overlay bg-[#00000016]"></div>
       
				 
        <h1 className="text-center1 land-header">TRAVELER MATE</h1>

        					<Link to="search" smooth={true} duration={500}>
          <div className="lowBtn">
            <Login /> <strong>- OR -</strong> <Signup />
          </div>					</Link>
		
		</div>

</video>
        </div>
     
    </>
  );
};

export default Landing;
