import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import Coment from "../src/components/Coment";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import Login from "../src/components/login";
import SignUp from '../src/components/signup/SignUp'
import { useState } from 'react';
import { useAuth } from '../src/components/login-function/hooks';
import Head from "next/head"
import AliceCarousel from 'react-alice-carousel';
import CartItemsContainer from "../src/components/cart/cart-page/CartItemsContainer";
import profilePic from "../public/pattern_chant.jpg"
import Round from "../public/round.png"
import Kisspng from "../public/kisspng.png"
import BgfollIconFirst from "../public/block_third/istockphoto-1.png"
import BgfollIconSecond from "../public/block_third/istockphoto-2.png"
import BgfollIconThird from "../public/block_third/istockphoto-3.png"
import BgfollIconFourth from "../public/block_third/istockphoto-4.png"
import BgfollIconFifth from "../public/block_third/istockphoto-5.png"
import Girlpng from "../public/second-cos.png"
import BootCa from "../public/bootle/boot-c.png"
import BootCa1 from "../public/bootle/biotina.png"
import BootCa2 from "../public/bootle/complex-b.png"

import Bgfoll from "../public/block_third/vypadenie.jpg"
import Bgfoll2 from "../public/block_third/feeling.jpg"

import raundetSecond from "../public/block_second/raundet_foto.jpg"
import Andrea from "../public/block_second/Andrea.jpg"
import Cristina from "../public/block_second/Cristina.jpg"

import Adina from "../public/block_second/Adina.jpg"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';
import BgfollIcon1 from "../public/block_third/icons8.png"
import BgfollIcon2 from "../public/block_third/iconsst.png"
import BgfollIcon3 from "../public/block_third/icons82.png"
import BgfollIcon4 from "../public/block_third/icons89.png"
import BgfollIcon5 from "../public/block_third/icons90.png"
import BgfollIcon6 from "../public/block_third/icons91.png"

export default function Home (props) {
	
	const { isLoggedIn } = useAuth();


const News = [
	{
	content: " Datorita Vitaminei C, pe care o consum regulat de cateva luni, am reuit sa transform parul tern , fara luciu, intr-unul stralucitor si sanatos. Am mai observat ca nu se mai deterioreaza atat de usor de  la soare, apa sarata sau aer uscat.",
	featuredImage: {node: 
		{sourceUrl: Andrea.src}
		},
	id: "cG9zdDo5NjIw",
	src: "https://www.instagram.com/andreeacristinari/?hl=en",
	title: "Andreea Cristinari"},
	{
		content: "Sunt tare multumita de rezultate dupa ce am luat Biotina. Parul arata acum mult mai bine, a devenit mai puternic si mai gros. Scopul principal, cand am inceput cura cu biotina , a fost cresterea in lungime. Acum visul meu a devenit realitate.E pura magie. Mi-am sfatuit prietenele sa foloseasca si ele. Multumesc!!",
		featuredImage: {node: 
		{sourceUrl: Adina.src}
		},
		id: "cG9zdDo5NjIw",
		src: "https://www.instagram.com/adinamititelu.wella/?hl=en",
		title: "Adina Mititelu"},
		{
			content: "Pana acum, am suferit literalmente ca trebuia sa imi spal parul aproape in fiecare zi.Paul devenea imediat gras la radacini. Am folosit numeroase sampoane si masti, insa doar Zincul a ajutat. Acum scalpul s-a calmat, nu mai secreta atat de mult sebum. Acum imi spal parul la 3-4 zile . Am observat, de asemenea, ca a inceput sa creasca si mai repede. Nici macar nu am sperat la un efect atat de bun!",
			
			featuredImage: {node: 
				{sourceUrl: Cristina.src}
				},
			id: "cG9zdDo5NjIw",
			src: "https://www.instagram.com/cristinacioanca/?hl=en",
			title: "Cristina Cioanca"},
		
]
	  
	
	
	const { products,  heroCarousel,featuredproducts,news } = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	News.map(( post,index )=>items.push(<Coment key={ post.id } index={index} post={ post } />) );

	
	


	return (
	
		
			<Layout>
				<Head>
      
	  <title>Vitamina pentru par - O formula eficienta pentru recuperare in 2022</title>
	  <meta name="description" content="C.O.S. Laboratories oferă un complex de vitamine pentru păr la un preț avantajos 15%  ✅ reducere pentru comenzile peste 2 transport gratuit!"/>
	  <meta name="google-site-verification" content="5sT3_P7tKTbA9RuTPkiQlpDpXBK84GG89RcmtVHR-Dw" />
	  <meta name="robots" content="index,follow" />
	</Head>
				<Script strategy="lazyOnload">
        {`
            window.replainSettings = { id: '57c23d8c-ad58-4f57-b0bc-d65f546cf0d4' };
            (function(u){var s=document.createElement('script');s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
        `}
      </Script>
				{/*Hero 1*/}
	<div  className="main  ">
	<div className="w-full bottom-first relative flex items-center justify-center ">
		<div className="absolute top-5 left-5 z-10 w-24">
			<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center  "><Image
		
		src={Kisspng}
		alt=""
		width={40}
        height={40}
	  /></div>
	  <div >
		<Image
		className="App-logo"
		src={Round}
		alt=""
		width={100}
		height={100}
	  /></div>	
		</div>
		
		<Image
		className="object-cover"
		src={profilePic}
		alt="complex de vitamine pentru par de la C.O.S. Laboratories"
		layout="fill"
	  />
	  <div className="px-6 relative w-full text-left translate-y-60 md:text-center md:translate-y-52 transform-gpu">
		<h1 className="text-4xl  font-semibold ">Vitamine pentru par complex de recuperare </h1>
		<h3 className="mt-3  text-2xl">Vitamine naturale de la producător</h3>
		
		{ products.length ? (
							products.map( product => <Link key="product?.slug" href={ `/product/${ product?.slug }`} ><button  className="anakausug rounded-full mt-10 px-20 py-3 bg-red-400 text-xl text-white md:px-20 md:py-2">CUMPĂRĂ</button></Link> )
						) : '' }
						
	
	  </div>
						 
			</div>	
			
	{/*Hero 2*/}
		<div id="pasul-one"  className="flex items-center justify-center pt-60 pb-60 flex-col md:flex-row overflow-hidden">
		<h2 className="text-2xl text-center mb-20  font-semibold block md:hidden">Restabileste sănătatea și frumusețea părului tau</h2>
			<div>
			    <div className="relative">
			      	<Image
					className="rounded-full"
					src={raundetSecond}
					alt="Picture of the author"
					width={300}
			        height={300}
				  	/>
				<div className="absolute top-0 w-52 position-bootle-ca">
							<Image
							
							src={BootCa}
							alt="Picture of the author"
							
				  			/>
				  		</div>
				  		<div className="absolute top-0 w-52 position-bootle-za">
							<Image
							src={BootCa1}
							alt="Picture of the author"
							
				  			/>
				  		</div>
						  <div className="absolute top-0 w-52 position-bootle-la">
							<Image
							
							src={BootCa2}
							alt="Picture of the author"
							
				  			/>
	</div>
					
				</div>
				
			</div>
			<div className="text-center mt-20 px-6 md:w-2/6 md:ml-20  md:mt-0 md:text-left">
					<h2 className="text-2xl  font-semibold hidden md:block">Restabileste sănătatea și frumusețea părului tau</h2>
					<p className="mt-2">Te deranjeaza aspectul parului si sanatatea scalpului ? Coafura nu arata atat de spectaculos pe cat ti-ai dori?</p>
					<p className=" mt-4 text-justify text-gray-500 md:text-left">Un numar foarte mare de femei se confrunta cu aceasta situatie. Cu toate acestea, doar acele femei carora le pasa de aspectul si sanatatea lor decid sa nu accepe, ci sa inceapa sa rezolve acesta problema.</p>
					<p className="  text-justify text-gray-500 md:text-left">Din fericire, exista o intreaga gama de vitamine si minerale care ajuta la refacerea sanatatii parului.</p>
				</div>
		</div>

{/*Hero 3*/}
<div id="pasul-two" className="w-full relative pt-20 pb-10"> 
<Image
		className="object-cover"
		src={Bgfoll}
		alt="Picture of the author"
		layout="fill"
	  />
	  <div className=" absolute top-0 bottom-0 left-0 right-0 ownbg"></div>
	<div className="relative pb-10 text-center text-white">
	<h2 className=" text-2xl  font-semibold ">AI OBSERVAT URMATOARELE ASPECTE</h2>
	</div>
	<div className=" relative flex justify-around flex-wrap text-white">
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIconFirst}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
		   <p className="mt-3 mx-3">Parul cade in cantitate foarte mare</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIconSecond }
		alt="Picture of the author"
		width={80}
        height={80}
	  />
		   <p className="mt-3 mx-3">Doar cativa centimetri cresc la un an dupa ce a fost tuns</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIconThird}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
		   <p className="mt-3 mx-3">Nici macar produsele cosmetice profesionale nu ajuta</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIconFourth}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
		   <p className="mt-3 mx-3">Parul este casant si fara stralucire</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIconFifth}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
		   <p className="mt-3 mx-3">Parul incarunteste mult prea devreme</p>
		</div>
	</div>
</div>
      
   
	
   

{/*Hero 4*/}


<div id="pasul-three" className=" flex items-center justify-center pt-20 pb-20 flex-col md:flex-row bg-grey_cos ">
		
			<div className="">
			    <div className="rounded-full shadow-cos relative w-80 h-80">
			      	<Image
					className="rounded-full"
					src={Girlpng}
					alt="Picture of the author"
					
					layout="fill"
				  	/>
				 
				</div>
				
			</div>
			<div className="mt-20 px-6 md:w-2/6 md:ml-20  md:mt-0 mb-10">
					<h2 className="text-2xl  font-semibold  block">TI-AI DORI SA SE SCHIMBE ACESTE SITUATII SI:</h2>
					<div className="mt-4 flex  w-full">
					<span className="dot-cos-item-green bg-green_cos rounded-full "></span>
					<p className=" ml-6 w-3/4"> In timpul pieptanarii, pe perie sa ramana maxim 10 fire de par pe zi</p>
					</div>
					
					<div className="mt-2 flex">
					<span className="dot-cos-item-green bg-green_cos rounded-full "></span>
					<p className="ml-6 w-3/4"> Parul creste foarte rapid, astfel incat poti experimenta diverse tunsori</p>
					</div>
					<div className="mt-2 flex">
					<span className="dot-cos-item-green bg-green_cos rounded-full "></span>
					<p className="ml-6 w-3/4"> Incetezi sa cheltuiesti bani pe mijloace externe ineficiente si sa te concentrezi pe starea interna de sanatate</p>
					</div>
					<div className="mt-2 flex">
					<span className="dot-cos-item-green bg-green_cos rounded-full "></span>
					<p className="ml-6 w-3/4"> Parul este des, puternic si stralucitor , asa incat primesti mereu priviri admirative</p>
					</div>
					<div className="mt-2 flex">
					<span className="dot-cos-item-green bg-green_cos rounded-full "></span>
					<p className="ml-6 w-3/4"> Momentul incaruntirii este mult intarziat</p>
					</div>
				</div>
				
		</div>

		
<div className=" flex justify-center pb-20 pt-10 md:pt-40 bg-grey_cos">
<div className="md:w-3/6 ">

			<Accordion/>
			</div>
			</div>
			

		





{/*Hero 3*/}
<div id="pasul-four" className="w-full relative pt-20 pb-10"> 
<Image
		className="object-cover"
		src={Bgfoll2}
		alt="Picture of the author"
		layout="fill"
	  />
	  <div className=" absolute top-0 bottom-0 left-0 right-0 ownbg"></div>
	  <div className="flex justify-center mx-4">
	<div className="relative pb-10 text-center text-white md:w-3/6">
	<h2 className=" text-2xl  font-semibold ">AVANTAJELE FOLOSIRII PRODUSELOR C.O.S. LABORATORIES</h2>
	<p className="mt-3 md:mx-3">Compania noastra ofera femeilor moderne suplimente alimentare foarte eficiente, inca din anul 2019. Produsele noastre merita atentia dumneavoastra din mai multe motive</p>
	</div>
	</div>
	<div className=" relative flex justify-around flex-wrap text-white mx-4">
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIcon6}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
	  <h3 className="text-xl font-semibold">MATERII PRIME</h3>
		   <p className="mt-2 md:mx-3">Sunt obtinute din materii prime de cea mai inalta calitate, alese cu grija de la furnizori de top din Europa</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIcon3}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
	  <h3 className="text-xl font-semibold">SPECIALISTI</h3>
		   <p className="mt-2 md:mx-3">Retetele noastre sunt elaborate de specialisti cu experienta in domeniul cercetarii;</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIcon2}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
	  <h3 className="text-xl font-semibold">ECHIPAMENTE</h3>
		   <p className="mt-2 md:mx-3">Linia noastra de productie indeplineste exigentele industriei farmaceutice, avand utilaje de ultima generatie</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIcon1}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
	  <h3 className="text-xl font-semibold">AMBALAJ</h3>
		   <p className="mt-2 md:mx-3">Ambalajele noastre sunt sigure pentru mediu, nu contin plastic si in acelasi timp pastreaza proprietatile produselor timp indelungat.</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIcon5}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
	  <h3 className="text-xl font-semibold">LIVRARE</h3>
		   <p className="mt-2 md:mx-3">Livrarea este gratuita pentru comenzi de peste 150 RON.</p>
		</div>
		<div className="text-center md:w-2/6 py-10">
		<Image
		
		src={BgfollIcon4}
		alt="Picture of the author"
		width={80}
        height={80}
	  />
	  <h3 className="text-xl font-semibold">RĂSPUNS RAPID AL CONSULTANTULUI</h3>
		   <p className="mt-2 md:mx-3">We take care about our clients time. Just call us — and we will help you with all the questions.</p>
		</div>
	</div>
</div>
      



	
		
			{/*<a href="myfile.pdf"  download>Download</a>*/}
			{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="mai-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
</div>*/ }{/*<div>	<Login/></div>*/}
	
	<div id="pasul-five" className="pt-10 pb-10 text-center bg-grey_cos">
	{ products.length ? (
							products.map( product => <Link key="product?.slug" href={ `/product/${ product?.slug }`} ><button  className="anakausug rounded-full mt-10 px-20 py-3 bg-red-400 text-xl text-white md:px-20 md:py-2">CUMPĂRĂ</button></Link> )
						) : '' }
						
						
  {/*Products*/ }
	{/*		<div className="products container mx-auto my-10  ">
				
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>*/ }
    </div>		
	
	{/*Hero 5*/}		
			<div className="px-4 bg-grey_cos">
				<div className="products container mx-auto pt-20 pb-20 ">
<AliceCarousel
        autoPlay={true}
        items={items}
        responsive={responsive}
		disableDotsControls={false}
		disableButtonsControls={true}
		autoPlayInterval={3000}
		infinite={true}
    />
							</div>
					
			
							
					
				
			

			
				</div>
				</div>
			
		
				
			</Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			news: data?.news?.posts?.nodes ? data.news.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};

