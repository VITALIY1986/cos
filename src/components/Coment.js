import Image from "../image";


const Post = ( props ) => {
	const { post } = props;

	return (
		
<>

					
		



                 <div class=" lg:mb-0 mb-6 p-4">
                 <div class="h-full text-center">
                 <Image
				className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 "
				width="100"
				height="100"
				loading="lazy"
				sourceUrl={post?.featuredImage?.node.sourceUrl }
			/>
                  
                   <p class="leading-relaxed mt-2" >{post.content}</p>
                   <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                   <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">	{ post.title ? post.title : '' }</h2>
                   <p class="text-red-500"><a href={post.src}>Instagram profile</a></p>
                 </div>
               </div>
               </>
			);
		};
		


export default Post;