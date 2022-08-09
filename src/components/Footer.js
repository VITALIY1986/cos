import {Facebook, Instagram, Twitter, Youtube} from "./icons";
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../../public/logo.png'
const Footer = () => (
	<div className="footer bg-grey_cos text-futer px-6 py-6">
		<div className="flex justify-between ">
		
			
		<Link href="/">
						<Image  src={profilePic}  height={10} width={70}/>
					</Link>  
		
			
			<div className="flex">
			<div className="bg-grey_cos p-3 rounded-full mx-1 shadow-xl"><Facebook/></div><div className="bg-bg-grey_cos  p-3 rounded-full mx-1 shadow-xl"><Instagram/></div>
			</div>
			</div>
			<div className="mt-3 text-center"><p>© 2019-2020 C.O.S. Laboratories / Toate drepturile rezervate. </p></div>
		</div>

);

export default Footer;
