import {Facebook, Instagram, Twitter, Youtube} from "./icons";
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../../public/logo.png'
const Footer = () => (
	<div className="footer bg-futer text-white px-6">
		<div className="flex justify-between">
		<Link href="/">
						<Image  src={profilePic} className="w-10" />
					</Link>
			<div className="my-6 text-center"><p>https://www.cos-laboratories.com/</p></div>
				  
			<Facebook/>
			</div>
			
		</div>

);

export default Footer;
