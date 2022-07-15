import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import ProductHome from "../src/components/ProductHomePage";
import { useAuth } from '../src/components/login-function/hooks';

import Image from 'next/image'
export default function Home (props) {
  const { isLoggedIn } = useAuth();
  const { featuredproducts } = props || {};
 
	

     
	return (
<>
			<Layout>
                {/*Products*/ }
			<div className="products container mx-auto my-10  ">
				
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        { featuredproducts.length ? (
            featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
          ) : '' }
        </div>
      </div>
  	
              
             
	        </Layout>
		</>
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

