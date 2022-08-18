import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
import profilePic from '../../public/logo.png'
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";
import { AuthContextProvider } from './login-function/auth-context';
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  
  return (
 
   
   
        <div className="wrapper">
          <Head>
      
            <title>Vitamine pentru par</title>
            
          </Head>
          <Header />
        
          {props.children}
          <Footer />
        </div>
  
  );
};

export default Layout;
