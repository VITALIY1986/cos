import {Facebook, Instagram, Twitter, Youtube} from "./icons";
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../../public/logo.png'
const Footer = () => (
	<div className="footer bg-grey_cos text-futer px-6 py-6">
		<div className="flex flex-col items-center">
		
			<div className="w-24">
	
						<Image  src={profilePic}  />
						</div>
		
			
			<div className="flex mt-3">
			<div className="bg-grey_cos p-3 rounded-full mx-1 shadow-xl"><Facebook/></div><div className="bg-bg-grey_cos  p-3 rounded-full mx-1 shadow-xl"><Instagram/></div>
			</div>
			</div>
			<div className="mt-6 text-center"><p>© 2019-2022 C.O.S. Laboratories / Toate drepturile rezervate. </p></div>
		</div>

);

export default Footer;
