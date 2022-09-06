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
            <meta name="description" content="COS oferă un complex de vitamine pentru păr la un preț avantajos 15%  ✅ reducere pentru comenzile peste 2 transport gratuit!"/>
            <meta name="google-site-verification" content="5sT3_P7tKTbA9RuTPkiQlpDpXBK84GG89RcmtVHR-Dw" />
          </Head>
          <Header />
        
          {props.children}
          <Footer />
        </div>
  
  );
};

export default Layout;
