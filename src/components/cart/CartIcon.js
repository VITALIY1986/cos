import { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import React from 'react';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
const CartIcon = () => {
	const { modalProps, getTriggerProps, activeModal } = useModal();	
	const [ cart ] = useContext( AppContext );
	const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
	const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

	return (
		<>
	<div>
		<div {...getTriggerProps({
			background: 'white',
		  })} className=' w-10 h-10 bg-white rounded-full futshadow' >
			
				<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto absolute p-1" fill="none" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
				
				 <span  className="flex justify-center items-center  ml-1 bg-red-400 w-5 h-5 rounded-full absolute top-0 right-0">{ productsCount }</span>
				{/*{ totalPrice ? <span>{ totalPrice }</span> : '' }*/}
			
		
		</div>
		<Modal {...modalProps} padding={false}>Hello World</Modal>
		</div>

  </>
	)
};

export default CartIcon;
