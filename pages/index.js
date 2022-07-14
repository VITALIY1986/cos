import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import Post from "../src/components/Post";
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
import Navigation from "../src/components/navigation-chantarelle";
import profilePic from "../public/pattern_chant.jpg"
import Round from "../public/round.png"
import Kisspng from "../public/kisspng.png"
import raundetSecond from "../public/block_second/raundet_foto.jpg"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'


export default function Home (props) {

	const { isLoggedIn } = useAuth();
const News = [
	{
	content: "\n<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule din mucoasa nazala. </p>\n\n\n\n<p>Zinc, 25 mg de la Cos Laboratories, inhiba dezvoltarea si stopeaza reproducerea microbilor. La nici 24 de ore de la debutul racelii, zincul trebuie administrat pentru eficienta in doze mari. Zincul astfel administrat are succes in prevenirea si tratarea racelilor. </p>\n\n\n\n<p>Comanda ZINC 25 mg de la COS Laboratories! </p>\n\n\n\n<p></p>\n",
	date: "2021-03-26T07:33:17",
	excerpt: "<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule&#8230;</p>\n",
	featuredImage: {node: 
		{sourceUrl: profilePic.src}
		},
	id: "cG9zdDo5NjIw",
	slug: "zinc-formula-cos-laboratories",
	title: "Zinc: Formula Cos Laboratories"},
	{
		content: "\n<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule din mucoasa nazala. </p>\n\n\n\n<p>Zinc, 25 mg de la Cos Laboratories, inhiba dezvoltarea si stopeaza reproducerea microbilor. La nici 24 de ore de la debutul racelii, zincul trebuie administrat pentru eficienta in doze mari. Zincul astfel administrat are succes in prevenirea si tratarea racelilor. </p>\n\n\n\n<p>Comanda ZINC 25 mg de la COS Laboratories! </p>\n\n\n\n<p></p>\n",
		date: "2021-03-26T07:33:17",
		excerpt: "<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule&#8230;</p>\n",
		featuredImage: {node: 
		{sourceUrl: profilePic.src}
		},
		id: "cG9zdDo5NjIw",
		slug: "zinc-formula-cos-laboratories",
		title: "Zinc: Formula Cos Laboratories"},
		{
			content: "\n<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule din mucoasa nazala. </p>\n\n\n\n<p>Zinc, 25 mg de la Cos Laboratories, inhiba dezvoltarea si stopeaza reproducerea microbilor. La nici 24 de ore de la debutul racelii, zincul trebuie administrat pentru eficienta in doze mari. Zincul astfel administrat are succes in prevenirea si tratarea racelilor. </p>\n\n\n\n<p>Comanda ZINC 25 mg de la COS Laboratories! </p>\n\n\n\n<p></p>\n",
			date: "2021-03-26T07:33:17",
			excerpt: "<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule&#8230;</p>\n",
			featuredImage: {node: 
				{sourceUrl: profilePic.src}
				},
			id: "cG9zdDo5NjIw",
			slug: "zinc-formula-cos-laboratories",
			title: "Zinc: Formula Cos Laboratories"},
			{
				content: "\n<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule din mucoasa nazala. </p>\n\n\n\n<p>Zinc, 25 mg de la Cos Laboratories, inhiba dezvoltarea si stopeaza reproducerea microbilor. La nici 24 de ore de la debutul racelii, zincul trebuie administrat pentru eficienta in doze mari. Zincul astfel administrat are succes in prevenirea si tratarea racelilor. </p>\n\n\n\n<p>Comanda ZINC 25 mg de la COS Laboratories! </p>\n\n\n\n<p></p>\n",
				date: "2021-03-26T07:33:17",
				excerpt: "<p>Zincul este unul din produsele Cos Laboratories a carui formula previne fixarea virusilor in celule&#8230;</p>\n",
				featuredImage: {node: 
				{sourceUrl: profilePic.src}
				},
				id: "cG9zdDo5NjIw",
				slug: "zinc-formula-cos-laboratories",
				title: "Zinc: Formula Cos Laboratories"},
]
	  
	
	
	const { products,  heroCarousel,featuredproducts,news } = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	News.map(( post,index )=>items.push(<Post key={ post.id } index={index} post={ post } />) );

	
	console.log(news.map(post =>post))


	return (
	

			<Layout>
				{/*Hero 1*/}
	<div className="main  ">
	<div className="w-full h-screen relative flex items-center justify-center ">
		<div className="absolute top-10 left-10 z-10 w-24">
			<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center  "><Image
		
		src={Kisspng}
		alt="Picture of the author"
		width={40}
        height={40}
	  /></div>
	  <div >
		<Image
		className="App-logo"
		src={Round}
		alt="Picture of the author"
		width={100}
		height={100}
	  /></div>	
		</div>
		
		<Image
		className="object-cover"
		src={profilePic}
		alt="Picture of the author"
		layout="fill"
	  />
	  <div className="px-6  relative w-full text-left translate-y-60 md:text-center md:translate-y-52 transform-gpu">
		<h1 className="text-4xl  font-semibold ">Adevărate vitamine pentru păr</h1>
		<h3 className="mt-3  text-2xl">Reface-ți rapid părul</h3>
		<button className="rounded-full mt-10 px-20 py-3 bg-red-400 text-xl text-white md:px-20 md:py-2">book</button>
	  </div>
						 
			</div>	

	{/*Hero 2*/}
		<div className="flex items-center justify-center mt-20 mb-20 flex-col md:flex-row">
			<div>
			    <div className="relative">
			      	<Image
					className="rounded-full"
					src={raundetSecond}
					alt="Picture of the author"
					width={300}
			        height={300}
				  	/>
				  {/*		<div className="absolute top-0">
							<Image
							src={raundetSecond}
							alt="Picture of the author"
							width={300}
			        		height={300}
				  			/>
				  		</div>
				  		<div className="absolute top-0">
							<Image
							src={raundetSecond}
							alt="Picture of the author"
							width={300}
			        		height={300}
				  			/>
				  		</div>
				  		<div className="absolute top-0">
							<Image
							src={raundetSecond}
							alt="Picture of the author"
							width={300}
			        		height={300}
				  			/>
				  		</div>*/}
				</div>
				
			</div>
			<div className="text-center mt-20 px-6 md:w-2/6 md:ml-20  md:mt-0 md:text-left">
					<h2 className="text-2xl  font-semibold">Restabiliți sănătatea și frumusețea părului tau</h2>
					<p className="mt-2">Te deranjeaza aspectul parului si sanatatea scalpului ? Coafura nu arata atat de spectaculos pe cat ti-ai dori?</p>
					<p className=" mt-4 text-justify text-gray-500 md:text-left">Un numar foarte mare de femei se confrunta cu aceasta situatie. Cu toate acestea, doar acele femei carora le pasa de aspectul si sanatatea lor decid sa nu accepe, ci sa inceapa sa rezolve acesta problema.</p>
					<p className="  text-justify text-gray-500 md:text-left">Din fericire, exista o intreaga gama de vitamine si minerale care ajuta la refacerea sanatatii parului.</p>
				</div>
		</div>




{/*Hero 3*/}
			<Accordion/>
			
			{/*Hero Carousel*/}
			<HeroCarousel heroCarousel={heroCarousel}/>
			{/*<a href="myfile.pdf"  download>Download</a>*/}
			{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="mai-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
</div>*/ }{/*<div>	<Login/></div>*/}
			
			<div className="px-4">
				<div className="products container mx-auto mt-32  ">
				<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">НОВИНИ</span></h2>
				
				
			
			
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
					{/*Post
					<div className="products container mx-auto my-32 px-4 ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>*/ }
					{/*Star*/ }
			
				
					
				{/*Products*/ }
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Новинки</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>
				{/*Prodduts*/ }
		{		<div className={`${ products.length === 0 ? 'hidden' : 'block products container mx-auto my-10  '}`}>
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Акції</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
						{ products.length ? (
							products.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>}
			
				</div>
				</div>
				<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Наші Марки</span></h2>
		
				
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

