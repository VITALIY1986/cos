import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import { useAuth } from '../../src/components/login-function/hooks';
export default function Product(props) {
	const { product } = props;
    const { isLoggedIn } = useAuth();
  const red =  isLoggedIn ? true : false;


// If the page is not yet generated, this will be displayed  price(format: RAW)   regularPrice(format: RAW)  salePrice(format: RAW)
      
    const  procent =  (product?.regularPrice - product?.price) /  product?.regularPrice * 100;
 
  const regular = product?.regularPrice;
 
  const re = product?.regularPrice ;
  const regula = +re + +regular;
  const login = Number(product?.regularPrice);
  const paste = Number(login/2);
  const rar = isLoggedIn ? login :  regula  ;  
const par = Number(rar);

const price = login+paste ;

const amount = par - product?.price;
const interest = par/100;
const result = amount/interest;
 // initially until getStaticProps() finishes running

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }
console.log(product.shortDescription);
	return (
		<Layout>
			{ product ? (
				<div className="single-product  mx-auto pt-32 pb-96 xl:px-0 bg-grey_cos">
					<div className="grid md:grid-cols-2 gap-4">
						<div className="product-images relative h-cart">
                        { product.featured  ? <div className="bg-red-400 rounded-full absolute right-2 top-2 z-10 text-white p-2">NEW</div>: ''}
{ product?.salePrice  ? <div className=" bg-red-400 rounded-full absolute left-2 top-2 z-10 text-white p-6 w-20 h-20 flex justify-center items-center">-{ procent.toFixed(0)}%</div> : ''}
							{ !isEmpty( product?.galleryImages?.nodes ) ? (
                                <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
							) : !isEmpty( product.image ) ? (
                                <img
                                    src={ product?.image?.sourceUrl }
                                    alt="Product Image"
                                    width="100%"
                                    height="auto"
                                    srcSet={ product?.image?.srcSet }
                                />
							) : null }
						</div>
						<div className="product-info px-4 mt-10 lg:mt-0">
							<h4 className="products-main-title text-2xl uppercase font-semibold">{ product.name }</h4>
							
                   
                            <div className='mt-10'>
                            <span className=' text-very_peri'>{product.sku}</span>
                              {product?.salePrice   ?  <div className='block mt-4'>  <strike className=" text-red-200 text-2xl ">{product?.regularPrice}<span ></span></strike><span className='ml-3 text-2xl bg-white rounded-full px-6 py-1 text-gray-500'>{product?.price}  lei</span></div> :   <div className="mt-4 text-2xl">{product?.price }<span className='ml-2'>lei</span></div>}
				
                    </div>
                           {/* <Price salesPrice={product?.price } regularPrice={product?.regularPrice}/>*/}
                           <div className="mt-3">
							<AddToCartButton className="mt-3"    product={ product }/>
                            </div>
                            <div
className="singl_product_description mb-5 mt-10 "
								dangerouslySetInnerHTML={ {
									__html: product.description,
								} }
							
							/>
						</div>
                       
						
					</div>

				</div>
			) : (
				''
			) }
		</Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}