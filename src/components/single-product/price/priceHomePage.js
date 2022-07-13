import {isEmpty} from "lodash";

const Price = ({ regularPrice = 0, salesPrice }) => {
   
    if ( isEmpty( salesPrice ) ) {
    	return null;
    }

    /**
     * Get discount percent.
     *
     * @param {String} regularPrice
     * @param {String} salesPrice
     */
    const discountPercent = ( regularPrice, salesPrice ) => {
        if( isEmpty( regularPrice ) || isEmpty(salesPrice) ) {
            return null;
        }

        const formattedRegularPrice = parseInt( regularPrice?.substring(1) );
        const formattedSalesPrice = parseInt( salesPrice?.substring(1) );

        const discountPercent = ( ( formattedRegularPrice - formattedSalesPrice ) / formattedRegularPrice ) * 100;

        return {
            discountPercent: formattedSalesPrice !== formattedRegularPrice ? `(${discountPercent.toFixed(2)}%) OFF` : null,
            strikeThroughClass: formattedSalesPrice < formattedRegularPrice ? 'product-regular-price mr-2 line-through text-sm text-white font-normal' : 'bg-blue text-white py-1 px-2 rounded'
        }
    }

    const productMeta = discountPercent( regularPrice, salesPrice );

    return (
        <h6 className="product-price text-gray-800 font-semibold  mt-3 mb-3 text-center">
            {/* Regular price */}
            { productMeta?.discountPercent ? <span className="product-price mr-2">{salesPrice}</span> : null }

            {/* Discounted price */}
            <span className={productMeta?.strikeThroughClass }>{ regularPrice}</span>

            {/* Discount percent */}
            <span className="product-discount text-green-600 font-bold text-sm block">{productMeta?.discountPercent}</span>
        </h6>
    )
}

export default Price