/**
 * External dependencies
 */
 import { useState } from 'react';
 import { decodeEntities } from '@wordpress/html-entities';
 import { stripHtml } from 'string-strip-html';
 
 /**
  * Internal dependencies
  */
 import { useLogoutMutation } from '../../mutations/use-logout-mutation';
 import { useLoginMutation } from '../../mutations/use-login-mutation';
 import { useViewerQuery } from './use-viewer-query';
 import { useAuthContext } from './auth-context';
 import { useSafeDispatch } from './use-safe-dispatch';
 
 const errorCodes = {
     invalid_username:
         'Invalid username or email address. Please check it and try again.',
     invalid_email: 'Invalid email address. Please check it and try again.',
     incorrect_password:
         'Створіть свій пароль',
     empty_username: 'Please provide your username.',
     empty_password: 'Please provide your  password.',
 };
 
 /**
  * Hook which tracks if the user is logged in.
  */
 export const useAuth = () => {
     const { isLoggedIn, setIsLoggedIn } = useAuthContext();
     const [ error, setError ] = useState( null );
     const [ status, setStatus ] = useState( 'idle' );
     const { logoutMutation } = useLogoutMutation();
     const { loginMutation } = useLoginMutation();
     const {
         data: viewer,
         refetch: refetchViewer,
         loading: loadingViewer,
     } = useViewerQuery();
 
     const onLoginSuccess = useSafeDispatch( () => {
       //* const responseData = '/categori-chantarelle-home';
	
       //* window.location.href = responseData;
         setIsLoggedIn( true );
         setStatus( 'resolved' );
     } );
 
     const onLogoutSuccess = useSafeDispatch( () => {
         setIsLoggedIn( false );
         setStatus( 'resolved' );
     } );
 
     const onError = useSafeDispatch( ( errors ) => {
         setError(
             errorCodes[ errors.message ] ||
                 `${ stripHtml( decodeEntities( "ваша реєстрація не підтверджена дипломом, будь ласка надішліть копію диплома косметолога на пошту  або звяжіться з менеджером за телефоном " ) ).result }`
         );
         setStatus( 'resolved' );
     } );
 
     const login = ( username, password ) => {
         setError( null );
         setStatus( 'resolving' );
         return loginMutation( username, password )
             .then( onLoginSuccess )
             .catch( onError );
     };
 
     const logout = () => {
         setStatus( 'resolving' );
         return logoutMutation().then( onLogoutSuccess ).catch( onError );
     };
 
     return {
         login,
         logout,
         isLoggedIn,
         refetchViewer,
         loadingViewer,
         viewer,
         error,
         status,
     };
 };