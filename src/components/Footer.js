import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-futer text-white px-6">
		<div className="flex justify-center">
		
			
				   
				     <ul className="social-links flex  mt-5 ">
				        <li className="w-6 h-6 m-3 p-6 rounded-full  bg-futer futshadow flex items-center justify-center"><a href="https://www.facebook.com/4ProfUkraine" className="" target="_blank"><Facebook/></a></li>
				        <li className="w-6 h-6 m-3 p-6 rounded-full  bg-futer futshadow flex items-center justify-center"><a href="#" target="_blank"><Twitter/></a></li>
				        <li className="w-6 h-6 m-3 p-6 rounded-full  bg-futer futshadow flex items-center justify-center"><a href="https://www.youtube.com/channel/UC3BBKd1UUUtXMjY4uL_NZ4g" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				        <li className="w-6 h-6 m-3 p-6 rounded-full  bg-futer futshadow flex items-center justify-center"><a href="https://www.instagram.com/4profukraine/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
			        </ul>
		
			</div>
			
		</div>

);

export default Footer;
