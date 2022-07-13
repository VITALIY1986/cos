import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import PAGE_QUERY from "../src/queries/page";
import HeroCarousel from "../src/components/home/hero-carousel";
import { useAuth } from '../src/components/login-function/hooks';
import Navigation from "../src/components/navigation-chantarelle";
import profilePic from "../public/norel.jpg"
import Image from 'next/image'
export default function Home (props) {
  const { isLoggedIn } = useAuth();
    const { norel,  heroCarousel} = props || {};
	

     
	return (

			<Layout>
                <HeroCarousel heroCarousel={heroCarousel}/>
                <div className=" mx-3 md:mx-10 lg:mx-20     my-20">	
				<h1 className="products-main-title text-2xl lg:text-4xl  uppercase">{norel.title}</h1>
           
                <span className="mt-3 block lg:text-lg text-gray-500" dangerouslySetInnerHTML={ {
						   			__html: norel.content
						   } }></span>
		   
                </div>
             
	        </Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PAGE_QUERY,
	} );

	return {
		props: {
	        norel: data?.norel ? data.norel : [],
	        heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};

