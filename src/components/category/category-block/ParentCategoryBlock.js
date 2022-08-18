import Link from 'next/link';
import Image from "../../../image";
import {DEFAULT_CATEGORY_IMG_URL} from "../../../constants/urls";

const ParentCategoryBlock = ( props ) => {

	const { category } = props;

	return (
		<div className="product w-1/2  md:w-1/3  my-3 flex justify-center text-center ">
			<Link href={`/category/${category?.slug}`}>
				<a>
					<Image
						className=" mx-3 "
						layout="fill"
						containerClassNames="h-32 w-32"
						sourceUrl={ category?.image?.sourceUrl ?? '' }
						defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
						altText={category?.image?.altText }
					/>
					<div className="product-title-container p-3">
						<h3 className="product-title text-lg font-medium  bg-gradient-to-r ">{category?.name}</h3>
					
					</div>
				</a>
			</Link>
		</div>
	);
}

export default ParentCategoryBlock;
